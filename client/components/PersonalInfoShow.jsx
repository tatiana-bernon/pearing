import React, { useContext } from 'react'

import { UserContext } from './UserContext'

function PersonalInfoShow () {
  const [user] = useContext(UserContext)
  return (
    <>
      <div className="container">
        <div className="columns">
          <div className="column is-one-third">
            <figure className="image is-128x128 my-6">
              <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"></img>
            </figure>
            <h2>Personal Information</h2>
            <h3>Username: {user.username}</h3>
            <h3>Email: {user.email}</h3>
            <h3>Info: {user.info}</h3>
          </div>
          <div className="column">
            <h1 className="has-text-primary is-size-1 has-text-centered mx-6 mt-1 mb-6"> Welcome to my Profile Page</h1>
          </div>
        </div>
      </div>

    </>
  )
}

export default PersonalInfoShow
