import React, { useState, useEffect } from 'react'
import { getListItem, getUserById } from '../api'

function ListItem (props) {
  const [listItem, setListItem] = useState([])
  const [author, setAuthor] = useState('')
  // const id = Number(props.location.pathname.split('/')[2])
  const id = Number(props.match.params.id)

  useEffect(() => {
    getListItem(id)
      .then(res => {
        setListItem(res)
        return res.user_id
      })
      .then((id) => {
        return getUserById(id)
          .then(res => {
            console.log(res)
            setAuthor(res.user.username)
            return null
          })
      })
      .catch((error) => {
        console.log('error: ', error.message)
      })
  }, [])

  return (
    <>
      <h3>{listItem.title}  </h3>
      <p>{listItem.description}</p>
      <p>by {author}</p>
    </>
  )
}

export default ListItem
