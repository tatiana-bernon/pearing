import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { UserContext } from './UserContext'

import { updatePersonalInfo } from '../api'

function PersonalInfoEdit () {
  const [user, setUser] = useContext(UserContext)
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [linkedin, setLinkedin] = useState('')
  const [discord, setDiscord] = useState('')
  const [info, setInfo] = useState('')
  const history = useHistory()

  const handleClick = () => {
    updatePersonalInfo(
      {
        username: user.username,
        email: email,
        phone: phone,
        linkedin: linkedin,
        discord: discord,
        info: info
      }
    )
    setUser({
      id: user.id,
      username: user.username,
      email: email,
      phone: phone,
      linkedin: linkedin,
      discord: discord,
      info: info
    })
    history.push('/profile')
  }

  const handleCancel = () => {
    history.push('/profile')
  }

  return (
    <>
      <div className="box">
        <div className="container mx-6">
          <div className="columns is-5-tablet is-4-desktop is-3-widescreen">
            <div className="columns has-text-centered mt-6 mp-6">
              <div className="field mt-5 mb-5">
                <br></br>
                <h3 className="has-text-primary is-size-4 has-text-weight-medium">Update Information</h3>
                <br></br>
                <form>
                  <label htmlFor="email">Email: </label>
                  <input
                    className="input"
                    placeholder="Email"
                    name="email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}>
                  </input><br></br>
                  <label htmlFor="phone">Phone: </label>
                  <input
                    className="input"
                    placeholder="Ph"
                    name="phone"
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}>
                  </input><br></br>
                  <label htmlFor="linkedin">LinkedIn: </label>
                  <input
                    className="input"
                    placeholder="URL"
                    name="linkedin"
                    type="text"
                    value={linkedin}
                    onChange={(e) => setLinkedin(e.target.value)}>
                  </input><br></br>
                  <label htmlFor="discord">Discord: </label>
                  <input
                    className="input"
                    placeholder="Username"
                    name="discord"
                    type="text"
                    value={discord}
                    onChange={(e) => setDiscord(e.target.value)}>
                  </input><br></br>
                  <label htmlFor="info">Info: </label>
                  <textarea
                    className="input"
                    placeholder="Type here"
                    name="info"
                    type="text"
                    value={info}
                    onChange={(e) => setInfo(e.target.value)}>
                  </textarea>
                </form>
                <br></br>
                <br></br>
              </div>
            </div>
          </div>
        </div>

        <div className="container has-text-centered">
          <button
            className="button is-primary is-medium"
            onClick={handleClick}
            data-testid="submitButton">
            Submit
          </button>
          <br></br>
          <br></br>
          <button
            className="button is-primary is-medium"
            onClick={handleCancel}
            data-testid="submitButton">
            Cancel
          </button>
        </div>
      </div>
    </>
  )
}

export default PersonalInfoEdit
