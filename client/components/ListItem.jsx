import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './UserContext'
import {
  getListItem,
  getUserById,
  checkInterest,
  showInterest,
  removeInterest,
  countInterested,
  changeStatusToZero,
  changeStatusToOne
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

    if (Number(user.id) !== Number(listItem.user_id)) {
      interestButton === 'Show Interest' ? setInterestButton('Remove Interest') : setInterestButton('Show Interest')
      if (interestButton === 'Show Interest' &&
      listItem.status < 2) {
        showInterest(interest)
        countInterested(listItem.id)
        changeStatusToOne(listItem.id)
      } else {
        removeInterest(interest)
        countInterested(listItem.id)
        changeStatusToZero(listItem.id)
      }
    }
  }

  return (
    <>
      <div className="container py-5">
        <h1 className="has-text-centered is-size-3 has-text-primary">Kindly read the invitation below!</h1>
        <h3 className="has-text-centered is-size-4">If this is your Jam, do not forget to show interest.</h3>
      </div>

      <div className="container box">
        <div className="column container ls-4">
          <div className="is-primary is-light mb-4">
            <h3 className="mb-2 label"> Title </h3>
          </div>
          <div className="tile is-ancestor">
            <div className="tile is-vertical is-12">
              <div className="tile">
                <div className="tile is-parent is-vertical">
                  <article className="tile is-child notification has-text-primary is-primary is-light">
                    {listItem.title}
                  </article>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-5">
            <h3 className="mb-2 label"> Description </h3>
          </div>
          <div className="tile is-ancestor">
            <div className="tile is-vertical is-12">
              <div className="tile">
                <div className="tile is-parent is-vertical">
                  <article className="tile is-child notification has-text-primary is-primary is-light">
                    {listItem.description}
                  </article>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-5">
            <h3 className="mb-2 label"> Invitation created by </h3>
            <div className="tile is-ancestor">
              <div className="tile is-vertical is-12">
                <div className="tile">
                  <div className="tile is-parent is-vertical">
                    <article className="tile is-child notification has-text-primary is-primary is-light">
                      {listItem.description}
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className= "container has-text-centered">
        <button
          className="button is-medium is-primary mx-4 mt-6 mb-6 has-text-weight-medium is-centered"
          onClick={handleClick}
          data-testid="submitButton">
          {interestButton}
        </button>
        <Link to='/home'>
          <button
            className="button is-medium is-primary mx-4 mt-6 mb-6 has-text-weight-medium is-centered"
            data-testid="submitButton">
            Back
          </button>
        </Link>
      </div>
    </>
  )
}

export default ListItem
