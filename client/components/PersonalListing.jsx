import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from './UserContext'
import { Link } from 'react-router-dom'

import { getMyList, deleteListing, getInterestedList } from '../api'

function PersonalListing () {
  const [user] = useContext(UserContext)
  const [myList, setMyList] = useState([])
  // const [showHideButton, setShowHideButton] = useState('Show')
  // const [value, setValue] = useState(null)

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
    // getInterestedList(id)
  }

  return (
    <>
      <h2>My Listings</h2>
      <ul>
        {myList.map(listing => (
          <li key={listing.id}>
            ID: {listing.id} - {listing.title} - interested: {listing.interested}
            <button value={listing.id} onClick={handleDelete}>Delete</button>
            <button value={listing.id} onClick={handleInterested}>Interests</button>
          </li>
        ))}
      </ul>
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
