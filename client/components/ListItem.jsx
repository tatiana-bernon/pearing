import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { getListItem } from '../api'

function ListItem (props) {
  const [listItem, setListItem] = useState([])
  const id = Number(props.location.pathname.split('/')[2])

  useEffect(() => {
    getListItem(id)
      .then(res => {
        setListItem(res.listItem)
        return null
      })
      .catch((error) => {
        console.log('error: ', error.message)
      })
  }, [])

  return (
    <>
      {listItem.map(listing => (
        <Link key={listing.id} to={`/listings/${listing.id}`} >
          <>
            <h3>{listing.title} - {listing.listing_id}</h3>
          </>
        </Link>
      ))}
    </>
  )
}

export default ListItem
