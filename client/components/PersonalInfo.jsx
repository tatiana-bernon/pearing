import React, { useState, useEffect, useContext } from 'react'

import { UserContext } from './UserContext'

import { updatePersonalInfo } from '../api'

function PersonalInfo () {
  const [user, setUser] = useContext(UserContext)
  const [email, setEmail] = useState('')
  const [info, setInfo] = useState('')
  
  const handleClick = () => {
    updatePersonalInfo(
      {
        username: user.username,
        email: email,
        info: info
      }
    )
    setUser({
      id: user.id,
      username: user.username,
      email: email,
      info: info
    })
  }

  return (
    <>
      <h2>Personal Information</h2>
      <h3>Username: {user.username}</h3>
      <h3>Email: {user.email}</h3>
      <h3>Info: {user.info}</h3>
      <hr />
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
          Edit
        </button>
      </form>
    </>
  )
}

export default PersonalInfo