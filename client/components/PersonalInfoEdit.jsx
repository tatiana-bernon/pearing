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
      <h3>Update Information</h3>
      <form>
        <label htmlFor="email">Email: </label>
        <input
          className="input"
          name="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}>
        </input><br></br>
        <label htmlFor="phone">Phone: </label>
        <input
          className="input"
          name="phone"
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}>
        </input><br></br>
        <label htmlFor="linkedin">LinkedIn: </label>
        <input
          className="input"
          name="linkedin"
          type="text"
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}>
        </input><br></br>
        <label htmlFor="discord">Discord: </label>
        <input
          className="input"
          name="discord"
          type="text"
          value={discord}
          onChange={(e) => setDiscord(e.target.value)}>
        </input><br></br>
        <label htmlFor="info">Info: </label>
        <textarea
          className="input"
          name="info"
          type="text"
          value={info}
          onChange={(e) => setInfo(e.target.value)}>
        </textarea><br></br>
        <button
          type="button"
          className="button is-primary"
          onClick={handleClick}
          data-testid="submitButton">
          Submit
        </button>
      </form>
      <button
        type="button"
        className="button is-primary"
        onClick={handleCancel}
        data-testid="submitButton">
          Cancel
      </button>
    </>
  )
}

export default PersonalInfoEdit
