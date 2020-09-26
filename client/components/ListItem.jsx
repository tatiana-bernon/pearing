import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './UserContext'
import { getListItem, getUserById, checkInterest, showInterest } from '../api'

function ListItem (props) {
  const [user] = useContext(UserContext)
  const [listItem, setListItem] = useState([])
  const [author, setAuthor] = useState('')
  const [interest, setInterest] = useState('Show Interest')
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
            setAuthor(res.user.username)
            return null
          })
      })
      .catch((error) => {
        console.log('error: ', error.message)
      })
    checkInterest(user.id)
      // .then(res => {
      //   setAuthor(res.user.username)
      //   return null
      // })
      // .catch((error) => {
      //   console.log('error: ', error.message)
      // })
  }, [])

  const handleClick = () => {
    const interest = {
      user_id: user.id,
      listing_id: listItem.id,
      author_id: listItem.user_id
    }
    // if interest is Show Interest
    showInterest(interest)
    // else Remove Interest

    interest === 'Show Interest' ? setInterest('Remove Interest') : setInterest('Show Interest')
  }

  return (
    <>
      <div>
        <h3>{listItem.title}  </h3>
        <p>{listItem.description}</p>
        <p>by {author}</p>
      </div>
      <button
        type="button"
        className="button is-primary"
        onClick={handleClick}
        data-testid="submitButton">
        {interest}
      </button>
      <Link to='/home'>
        <button
          type="button"
          className="button is-primary"
          data-testid="submitButton">
            Back
        </button>
      </Link>
    </>
  )
}

export default ListItem
