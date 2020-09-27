import React, { useState, useContext } from 'react'
import { isAuthenticated, signIn } from 'authenticare/client'

import { UserContext, updateUserContext } from './UserContext'

function SignIn(props) {
  const [, setUser] = useContext(UserContext)
  const [form, setForm] = useState({
    username: '',
    password: ''
  })
  const baseUrl = '/api/v1'
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const handleClick = () => {
    const { username, password } = form
    return signIn({ username, password }, { baseUrl })
      .then(() => {
        if (isAuthenticated()) {
          updateUserContext(setUser)
          return props.history.push('/home')
        }
        return null
      })
  }

  return (
    <div className="container has-text-centered">
      <div className="columns is-centered mt-6 mp-6">
        <div className="columns is-5-tablet is-4-desktop is-3-widescreen">
          <div className="box">
            <div className="field mt-5 mb-5">
              <label className="label mt-5 mb-5">Username</label>
              <input
                className="input is-medium"
                id="username"
                name="username"
                value={form.username}
                onChange={handleChange}
                placeholder="Username"
                type="text"
              />

              <label className="label mt-5 mb-5">Password</label>
              <input
                className="input is-medium"
                id="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
                type="password"
              />
              <br>
              </br>
              <button
                className="button is-primary mx-6 mt-6 mb-6 has-text-weight-medium is-centered"
                data-testid="submit-button"
                onClick={handleClick}
              >
                Sign in </button>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
export default SignIn
