import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './UserContext'
import {
  getListItem,
  getUserById,
  checkInterest,
  showInterest,
  removeInterest,
  countInterested
} from '../api'

function ListItem (props) {
  const [user] = useContext(UserContext)
  const [listItem, setListItem] = useState([])
  const [author, setAuthor] = useState('')
  const [interestButton, setInterestButton] = useState('Show Interest')
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
    checkInterest(user.id, id)
      .then(res => {
        if (res.length === 0) {
          setInterestButton('Show Interest')
        } else {
          setInterestButton('Remove Interest')
        }
        return null
      })
      .catch((error) => {
        console.log('error: ', error.message)
      })
  }, [])

  const handleClick = () => {
    const interest = {
      user_id: user.id,
      listing_id: listItem.id,
      author_id: listItem.user_id
    }

    if (interestButton === 'Show Interest' &&
      listItem.status < 2) {
      showInterest(interest)
      countInterested(listItem.id)
    } else {
      removeInterest(interest)
      countInterested(listItem.id)
    }

    interestButton === 'Show Interest' ? setInterestButton('Remove Interest') : setInterestButton('Show Interest')
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
        {interestButton}
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
