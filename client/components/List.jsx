import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { getList } from '../api'

function List () {
  const [list, setList] = useState([])

  useEffect(() => {
    getList()
      .then(res => {
        setList(res.list)
        return null
      })
      .catch((error) => {
        console.log('error: ', error.message)
      })
  }, [])

  return (
    <>
      {list.map(listing => {
        if (listing.status < 2) {
          return (
            <Link key={listing.id} to={`/listings/${listing.id}`} >
              <h3>{listing.title} - {listing.subject} - Interested: {listing.interested}</h3>
            </Link>
          )
        }
      })}

      <Link to='/addform'>
        <button
          type="button"
          className="button is-primary"
          data-testid="submitButton">
            Create Pearing Invitation!
        </button>
      </Link>
    </>
  )
}

export default List
