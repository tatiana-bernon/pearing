import React from 'react'
import { Link } from 'react-router-dom'

import PersonalInfo from './PersonalInfo'
import PersonalListing from './PersonalListing'

function Profile() {
  return (
    <>
      <PersonalInfo />
      <hr />
      <PersonalListing />
    </>
  )
}

export default Profile
