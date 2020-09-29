import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { UserContext } from './UserContext'

function PersonalInfo() {
  const [user] = useContext(UserContext)

  return (
    <div className="box">
      <br></br>
      <br></br>
      <h2 className="label">Personal Information</h2>
      <div className="columns is-mobile">
        <div className="column">
          <p className="is-info">Image</p>
        </div>
        <div className="column">
          <ul className="mb-6">
            <li>Username: {user.username}</li>
            <li>Email: {user.email}</li>
            <li>Phone: {user.phone}</li>
            <li>LinkedIn: {user.linkedin}</li>
            <li>Discord: {user.discord}</li>
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
            Details: {user.info}
          </p>
        </div>
      </div>
    </div>
  )
}

export default PersonalInfo
