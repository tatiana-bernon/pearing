import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { UserContext } from './UserContext'

import { updatePersonalInfo } from '../api'

function PersonalInfoEdit() {
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
      <div className="box has-text-centered mx-6 my-5">
        <div className="container mx-6">
          <div className="columns ">
            <div className="columns has-text-centered ">
              <div className="field mt-5 mb-5">
                <br></br>
                <p className="has-text-primary is-size-3 has-text-weight-medium">Update Information</p>
                <br></br>
                <form classNaem="has-text-primary mx-6">
                  <label className="email">Email: </label>
                  <input
                    className="input is-primary"
                    placeholder="Email"
                    name="email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}>
                  </input><br></br>
                  <label className="phone">Phone: </label>
                  <input
                    className="input is-primary"
                    placeholder="Ph"
                    name="phone"
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}>
                  </input><br></br>
                  <label className="linkedin">LinkedIn: </label>
                  <input
                    className="input is-primary"
                    placeholder="URL"
                    name="linkedin"
                    type="text"
                    value={linkedin}
                    onChange={(e) => setLinkedin(e.target.value)}>
                  </input><br></br>
                  <label className="discord">Discord: </label>
                  <input
                    className="input is-primary"
                    placeholder="Username"
                    name="discord"
                    type="text"
                    value={discord}
                    onChange={(e) => setDiscord(e.target.value)}>
                  </input><br></br>
                  <label className="info">Info: </label>
                  <textarea
                    className="input is-primary"
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
            <div className="column box mx-6 mt-6 pt-4is-half">
            <img className="image is-centered pt-4 pb-4" src="../images/slideshow/26.JPG" />

          </div>
          </div>
        </div>

        <div className="mx-6 mb-3 container has-text-centered">
        <div class="field is-grouped">
        <p class="control">
          <button
            className="button is-primary is-medium"
            onClick={handleClick}
            data-testid="submitButton">
            Submit</button>
        </p>
            <p class="control">
          <button
            className="button is-primary is-medium"
            onClick={handleCancel}
            data-testid="submitButton">
            Cancel</button>
        </p>
        </div>
        
      </div>
      </div>
    </>
  )
}

export default PersonalInfoEdit
