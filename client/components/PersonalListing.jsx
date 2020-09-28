import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from './UserContext'
import { Link } from 'react-router-dom'

import {
  getMyList,
  deleteListing,
  getInterestedList,
  getUserById,
  changeStatusToTwo,
  getMyPearings,
  addPear
} from '../api'

function PersonalListing () {
  const [user] = useContext(UserContext)
  const [myList, setMyList] = useState([])
  const [, setInterestedList] = useState([])
  const [interestedUsers, setInterestedUsers] = useState([])
  const [selected, setSelected] = useState(null)
  const [acceptedPears, setAcceptedPears] = useState([])

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
    // const pearId = e.target.value
    // const id = selected
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

  return (
    <>
      <h2>My Listings</h2>
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
            Add New Listing
        </button>
      </Link>
      <hr/>
      <div>
        <h2>Pear Options</h2>
        {interestedUsers.map(user => (
          <li key={user.user.id}>
            Name: {user.user.username}<br></br>
            Email: {user.user.email}<br></br>
            Info: {user.user.info}<br></br>
            <button value={user.user.id} onClick={handleAccept}>Accept</button>
          </li>
        ))}
      </div><br></br>
      <h2>Accepted Pearing</h2>
      <ul>
        {acceptedPears.map(pearing => (
          <li key={pearing.id}>
            {pearing.title}<br></br>
            {pearing.pear_id}

            {/* <button value={pearing.id} onClick={handleCompleted}>Completed</button> */}
          </li>

        ))}
      </ul>
    </>
  )
}

export default PersonalListing
