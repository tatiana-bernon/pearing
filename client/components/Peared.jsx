import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from './UserContext'

function Peared () {
  const [user] = useContext(UserContext)

  return (
    <>
      <h2>Accepted Pearing</h2>
    </>
  )
}

export default Peared
