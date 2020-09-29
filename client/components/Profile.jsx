import React, { useState, useContext, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import regeneratorRuntime from 'regenerator-runtime'

import { UserContext } from './UserContext'
import { updatePersonalInfo, getUserById } from '../api'

function PersonalInfo () {
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
      'https://api.cloudinary.com/v1_1/dgyp9sqsh/image/upload', {
        method: 'POST', body: data
      }
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
    <div className="box">
      <br></br>
      <br></br>
      <h2 className="label">Personal Information</h2>
      <div className="columns is-mobile">
        <div className="column">
          <figure className="image is-128x128">
            <img className="is-rounded" src= { image }/>
          </figure>
          <input type='file' id='file' ref={ref} style={{ display: 'none' }} onChange={e => onChange(e)} />
          <button
            onClick={onClick}
            type="button"
            className="button is-primary"
            data-testid="uploadPhoto"
          >
            Upload photo</button>

        </div>
        <div className="column">
          <ul className="mb-6">
            <li className="pb-2"><strong>Username:</strong> {user.username}</li>
            <li className="pb-2"><strong>Email:</strong>{user.email}</li>
            <li className="pb-2"><strong>Phone:</strong> {user.phone}</li>
            <li className="pb-2"><strong>LinkedIn</strong> {user.linkedin}</li>
            <li><strong>Discord:</strong> {user.discord}</li>
          </ul>
          <Link to='/profile/edit'>
            <button
              type="button"
              className="button is-primary"
              data-testid="submitButton">
              Edit</button>
          </Link>
        </div>
        <div className="column">
          <p className="is-info">
            <strong> Details:</strong> {user.info}
          </p>
        </div>
      </div>
    </div>
  )
}

export default PersonalInfo
