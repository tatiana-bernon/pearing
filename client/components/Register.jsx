import React, { useState, useContext } from 'react'
import { register, isAuthenticated } from 'authenticare/client'

import { UserContext, updateUserContext } from './UserContext'

function Register(props) {
  const [, setUser] = useContext(UserContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const baseUrl = '/api/v1'

  const handleClick = () => {
    register(
      {
        username: username,
        password: password
      },
      { baseUrl }
    )
      .then(() => {
        if (isAuthenticated()) {
          updateUserContext(setUser)
          return props.history.push('/home')
        }
        return null
      })
      .catch((error) => {
        console.log('error: ', error.message)
      })
  }

  return (
    <div className="container has-text-centered">
      <div className="columns is-centered mt-6 mp-6">
        <div className="columns is-5-tablet is-4-desktop is-3-widescreen">
          <div className="box">
            <div className="field mt-5 mb-5">
              <h1 className="is-centered has-text-primary is-size-4 has-text-weight-medium" >Register</h1>
              <label className="label mt-5 mb-5">Username</label>
              <input
                className="input is-medium"
                type="username"
                value={username}
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}>
              </input>
              <br></br>
              <br></br>
              <label className="label">Password</label>
              <br></br>
              <input
                className="input is-medium"
                type="password"
                value={password}
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}>
              </input>
              <button
                type="button"
                className="button is-primarybutton is-primary mx-6 mt-6 mb-6 has-text-weight-medium is-centered"
                onClick={handleClick}
                data-testid="submitButton">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
