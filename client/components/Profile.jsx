import React, { useState, useContext, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import regeneratorRuntime from 'regenerator-runtime'

import { UserContext } from './UserContext'
import { updatePersonalInfo, getUserById } from '../api'

function PersonalInfo() {
  const [user] = useContext(UserContext)

  const [image, setImage] = useState('')
  const [loading, setLoading] = useState(false)

  const ref = useRef(null)

  useEffect(() => {
    if (user.id) {
      getUserById(user.id).then(res => {
        setImage(res.user.image)
        return res
      }).catch((error) => {
        console.log('error: ', error.message)
      })
    }
  }, [user])

  const onClick = () => {
    ref.current.click()
  }

  const onChange = async (event) => {
    const files = event.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'darwin')
    setLoading(true)
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/dgyp9sqsh/image/upload', { method: 'POST', body: data }
    )
    const file = await res.json()

    setImage(file.secure_url)
    setLoading(false)
    updatePersonalInfo(
      {
        username: user.username,
        image: file.secure_url
      }
    )
  }
  return (
    <>
      <h2 className="has-text-primary is-size-3 has-text-centered mx-6"> My Profile</h2>
      <div className="box mx-6 my-6 py-6 has-background-primary-light">
        <div class="container">
          <div className="columns">
            <div className="column is-one-fifth has-text-centered">
              <figure className="image">
                <img className="ImageProfile is-rounded" src={image} />
              </figure>
              <input type='file' id='file' ref={ref} style={{ display: 'none' }} onChange={e => onChange(e)} />
            </div>
            <div className="column mx-6">
              <ul className="mb-2">
                <li className="pb-5 is-size-5"><strong>Username:</strong> {user.username}</li>
                <li className="pb-5 is-size-5"><strong>Email:</strong> {user.email}</li>
                <li className="pb-5 is-size-5"><strong>Phone:</strong> {user.phone}</li>
                <li className="pb-5 is-size-5"><strong>LinkedIn</strong> {user.linkedin}</li>
                <li className="pb-5 is-size-5"><strong>Discord:</strong> {user.discord}</li>
                <li className="pb-5 is-size-5"> <strong> Details:</strong> {user.info}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="columns">
            <div className="column is-one-fifth has-text-centered">
              <hr className="ProfileSeparator" />
              <button
                onClick={onClick}
                type="button"
                className="button is-primary"
                data-testid="uploadPhoto"
              >Upload photo</button>
            </div>
            <div className="column mx-6 has-text-centered">
              <hr className="ProfileSeparator" />
              <Link to='/profile/edit'>
                <button
                  type="button"
                  className="button is-primary"
                  data-testid="submit Button">
                  Edit</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container has-text-centered pb-6 pt-4">
        <Link to='/addform'>
          <button
            type="button"
            className="button is-primary is-large"
            data-testid="submitButton">
            Create Pearing Invitation!
          </button>
        </Link>
      </div>
    </>
  )
}

export default PersonalInfo
