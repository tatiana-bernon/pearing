import React from 'react'
import { Link } from 'react-router-dom'

import PersonalInfo from './PersonalInfo'
import PersonalListing from './PersonalListing'

function Profile () {
  return (
    <>
      <PersonalInfo />
      <hr/>
      <PersonalListing />
      <Link to='/addform'>
        <button
          type="button"
          className="button is-primary"
          data-testid="submitButton">
            Create new pearing invitation!
        </button>
      </Link>
    </>
  )
}

export default Profile
