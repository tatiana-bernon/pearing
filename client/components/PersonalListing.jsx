import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from './UserContext'
import { Link } from 'react-router-dom'

import { getMyList, deleteListing, getInterestedList, getUserById } from '../api'

function PersonalListing() {
  const [user] = useContext(UserContext)
  const [myList, setMyList] = useState([])
  const [showHideButton, setShowHideButton] = useState('Show')
  const [, setInterestedList] = useState([])
  const [interestedUsers, setInterestedUsers] = useState([])

  useEffect(() => {
    getMyList(user.id)
      .then(res => {
        setMyList(res)
        return null
      })
      .catch((error) => {
        console.log('error: ', error.message)
      })
  }, [])

  // const handleShowHide = () => {
  //   showHideButton === 'Show' ? setShowHideButton('Hide') : setShowHideButton('Show')
  // }
  const handleDelete = (e) => {
    const id = e.target.value
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
    const id = e.target.value
    setInterestedUsers([])
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

  return (
    <>
      <h2 className="has-text-primary is-size-2 has-text-centered mx-6 mt-1 mb-6"> My Pearing Requests</h2>
      <h2>My Listings</h2>
      <ul>
        {myList.map(listing => (
          <li key={listing.id}>
            ID: {listing.id} - {listing.title} - interested: {listing.interested}
            <button value={listing.id} onClick={handleDelete}>Delete</button>
            <button value={listing.id} onClick={handleInterested}>Show</button>
          </li>
        ))}
      </ul>
      <hr/>
      <div>
        <h2>Pear Options</h2>
        {interestedUsers.map(user => (
          <li key={user.user.id}>
            Name: {user.user.username}<br></br>
            Email: {user.user.email}<br></br>
            Info: {user.user.info}<br></br>
            <button>Accept</button>
          </li>
        ))}
      </div><br></br>

      <Link to='/addform'>
        <button
          type="button"
          className="button is-primary"
          data-testid="submitButton">
          Add New Listing
        </button>
      </Link>
    </>
  )
}

export default PersonalListing
