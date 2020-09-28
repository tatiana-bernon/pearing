import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { UserContext } from './UserContext'

function PersonalInfo() {
  const [user] = useContext(UserContext)

  return (
    <>
      <br></br>
      <h2 className="label">Personal Information</h2>
      <br></br>
      <h3>Username: {user.username}</h3>
      <h3>Email: {user.email}</h3>
      <h3>Phone: {user.phone}</h3>
      <h3>LinkedIn: {user.linkedin}</h3>
      <h3>Discord: {user.discord}</h3>
      <h3>Info: {user.info}</h3>
      <br></br>
      <Link to='/profile/edit'>
        <button
          type="button"
          className="button is-primary"
          data-testid="submitButton">
          Edit
        </button>
      </Link>
    </>
  )
}

export default PersonalInfo
