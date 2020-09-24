import React, { useState, useEffect } from 'react'

import ListItem from './ListItem'

import { getList } from '../api'

function List () {
  const [list, setList] = useState([])

  useEffect(() => {
    getList()
    .then(res => {
      setList(res.body)
    })
  }, [])
  
  return (
    <>
      {list.map(listing => (
        <ListItem key={listing.id} />
      ))}
    </>
  )
}

export default List