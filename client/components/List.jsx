import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import ListItem from './ListItem'

import { getList } from '../api'

function List () {
  const [list, setList] = useState([])

  useEffect(() => {
    getList()
    .then(res => {
      setList(res.list)
    })
  }, [])
  
  return (
    <>
      {list.map(listing => (
        <Link key={listing.id} to={`/listings/${listing.id}`} >
          <>
          <h3>{listing.title} - {listing.subject_id}</h3>
          </>
        </Link>
      ))}
    </>
  )
}

export default List