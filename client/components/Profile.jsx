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
      <div className="box mx-6 my-6 has-background-primary-light">
        <h2 className="has-text-primary is-size-3 has-text-centered mx-6 mt-1 mb-2"> My Profile</h2>
        <br></br>
        <br></br>
        <div className="columns is-mobile">
          <div className="column box has-text-centered mx-6 pt-6 pb-6 px-6">
            <figure className="image is-centered is-128x128 is-text-centered">
              <img className="is-rounded" src={image} />
            </figure>
            <br></br>
            <br></br>
            <input type='file' id='file' ref={ref} style={{ display: 'none' }} onChange={e => onChange(e)} />
            <button
              onClick={onClick}
              type="button"
              className="button is-primary pt-3 pt-2 "
              data-testid="uploadPhoto"
            >
            Upload photo</button>

          </div>
          <div className="column mx-6">
            <ul className="mb-6">
              <li className="pb-2"><strong>Username:</strong><br/>{user.username}</li>
              <li className="pb-2"><strong>Email:</strong><br/>{user.email}</li>
              <li className="pb-2"><strong>Phone:</strong> <br/>{user.phone}</li>
              <li className="pb-2"><strong>LinkedIn</strong> <br/>{user.linkedin}</li>
              <li className="pb-2"><strong>Discord:</strong> <br/>{user.discord}</li>
              <li className="pb-2"> <strong> Details:</strong> {user.info}</li>
            </ul>

            <div className="has-text-centered">
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
