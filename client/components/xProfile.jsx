import React from 'react'

import PersonalInfo from './PersonalInfo'
import Pearings from './Pearings'

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
        <Pearings />
      </div>
    </div>
  )
}

export default Profile
