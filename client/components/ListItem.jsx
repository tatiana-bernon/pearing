import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from './UserContext'
import { getListItem, getUserById, showInterest } from '../api'

function ListItem (props) {
  const [user, setUser] = useContext(UserContext)
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
  }, [])

  const handleClick = () => {
    const interest = {
      user_id: user.id,
      listing_id: listItem.id,
      author_id: listItem.user_id
    }
    showInterest(interest)
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
    </>
  )
}

export default ListItem
