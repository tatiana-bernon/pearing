import React from 'react'

import PersonalInfo from './PersonalInfo'
import PersonalListing from './PersonalListing'

function Profile() {
  return (
    <div className='container'>
      <div className="columns">
        <div className="column is-full">
          <PersonalInfo />
        </div>
      </div>
      <hr />
      <div className="columns">
        <PersonalListing />
      </div>
    </div>
  )
}

export default Profile
