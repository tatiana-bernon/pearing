import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from './UserContext'
import { Link } from 'react-router-dom'

import {
  getMyList,
  deleteListing,
  getInterestedList,
  getUserById,
  changeStatusToTwo,
  changeStatusToThree,
  getMyPearings,
  addPear,
  getMyCompleted,
  getMyInterests
} from '../api'

function PersonalListing () {
  const [user] = useContext(UserContext)
  const [myList, setMyList] = useState([])
  const [, setInterestedList] = useState([])
  const [interestedUsers, setInterestedUsers] = useState([])
  const [selected, setSelected] = useState(null)
  const [acceptedPears, setAcceptedPears] = useState([])
  const [completedPears, setCompletedPears] = useState([])
  const [myInterests, setMyInterests] = useState([])

  useEffect(() => {
    getMyList(user.id)
      .then(res => {
        setMyList(res)
        return null
      })
      .catch((error) => {
        console.log('error: ', error.message)
      })
    getMyPearings(user.id)
      .then(res => {
        setAcceptedPears(res)
        return null
      })
      .catch((error) => {
        console.log('error: ', error.message)
      })
    getMyCompleted(user.id)
      .then(res => {
        setCompletedPears(res)
        return null
      })
      .catch((error) => {
        console.log('error: ', error.message)
      })
    getMyInterests(user.id)
      .then(res => {
        setMyInterests(res)
        return null
      })
      .catch((error) => {
        console.log('error: ', error.message)
      })
  }, [])

  const handleDelete = (e) => {
    const id = Number(e.target.value)
    deleteListing(id)
    getMyList(user.id)
      .then(res => {
        setMyList(res)
        return null
      })
      .catch((error) => {
        console.log('error: ', error.message)
      })
  }

  const handleInterested = (e) => {
    const id = Number(e.target.value)
    setInterestedUsers([])
    setSelected(id)
    getInterestedList(id)
      .then(res => {
        setInterestedList(res)
        return res
      })
      .then((res) => {
        res.map(user => {
          return getUserById(user.user_id)
            .then(res => {
              setInterestedUsers(interestedUsers => [...interestedUsers, res])
              return null
            })
        })
        return null
      })
      .catch((error) => {
        console.log('error: ', error.message)
      })
  }

  const handleAccept = (e) => {
    const pearing = {
      pearId: e.target.value,
      id: selected
    }
    setInterestedUsers([])
    changeStatusToTwo(selected)
    addPear(pearing)
    getMyList(user.id)
      .then(res => {
        setMyList(res)
        return null
      })
      .catch((error) => {
        console.log('error: ', error.message)
      })
    getMyPearings(user.id)
      .then(res => {
        setAcceptedPears(res)
        return null
      })
      .catch((error) => {
        console.log('error: ', error.message)
      })
  }

  const handleCompleted = (e) => {
    changeStatusToThree(e.target.value)
    getMyList(user.id)
      .then(res => {
        setMyList(res)
        return null
      })
      .catch((error) => {
        console.log('error: ', error.message)
      })
    getMyPearings(user.id)
      .then(res => {
        setAcceptedPears(res)
        return null
      })
      .catch((error) => {
        console.log('error: ', error.message)
      })
    getMyCompleted(user.id)
      .then(res => {
        setCompletedPears(res)
        return null
      })
      .catch((error) => {
        console.log('error: ', error.message)
      })
  }

  return (
    <>
      <div>
        <h2 className="has-text-primary is-size-2 has-text-centered mx-6 mt-1 mb-6"> My Pearing Requests</h2>
        <ul>
          {myList.map(listing => (
            <li key={listing.id}>
            ID: {listing.id} - {listing.title} - interested: {listing.interested}
              <button value={listing.id} onClick={handleDelete}>Delete</button>
              <button value={listing.id} onClick={handleInterested}>Show</button>
            </li>
          ))}
        </ul><br></br>
        <Link to='/addform'>
          <button
            type="button"
            className="button is-primary"
            data-testid="submitButton">
          Create Pearing Invitation!
          </button>
        </Link>
        <hr/>
      </div>
      <div>
        <h2 className="has-text-primary is-size-2 has-text-centered mx-6 mt-1 mb-6"> Pearing Options</h2>
        {interestedUsers.map(user => (
          <li key={user.user.id}>
            Name: {user.user.username}<br></br>
            Email: {user.user.email}<br></br>
            Info: {user.user.info}<br></br>
            <button value={user.user.id} onClick={handleAccept}>Accept</button>
          </li>
        ))}
      </div>
      <div>
        <h2 className="has-text-primary is-size-2 has-text-centered mx-6 mt-1 mb-6">Accepted Pearings</h2>
        <ul>
          {acceptedPears.map(pearing => (
            <li key={pearing.id}>
            Title: {pearing.title}<br></br>
            Description: {pearing.description}<br></br>
            Pear: {pearing.username}<br></br>
              <button value={pearing.id} onClick={handleCompleted}>Completed</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="has-text-primary is-size-2 has-text-centered mx-6 mt-1 mb-6">Completed Pearings</h2>
        <ul>
          {completedPears.map(pearing => (
            <li key={pearing.id}>
            Title: {pearing.title}<br></br>
            Pear: {pearing.username}<br></br>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="has-text-primary is-size-2 has-text-centered mx-6 mt-1 mb-6">Waiting to be peared...</h2>
        <ul>
          {myInterests.map(pearing => (
            <li key={pearing.id}>
              {pearing.title}<br></br>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default PersonalListing
