import React, { useContext } from 'react'

import { UserContext } from './UserContext'

function PersonalInfoShow () {
  const [user] = useContext(UserContext)
  return (
    <>
      <h2>Personal Information</h2>
      <h3>Username: {user.username}</h3>
      <h3>Email: {user.email}</h3>
      <h3>Info: {user.info}</h3>
    </>
  )
}

export default PersonalInfoShow
