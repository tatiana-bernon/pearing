import React, { useState, createContext } from 'react'
import { getDecodedToken, isAuthenticated } from 'authenticare/client'

export const UserContext = createContext()

export const UserProvider = ({ reducer, initialState, children }) => {
  const [user, setUser] = useState({
    id: '',
    username: '',
    email: '',
    info: ''
  })

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  )
}
export const updateUserContext = (setUser) => {
  const { id, username, email, info } = getDecodedToken()
  return isAuthenticated() ? setUser({ id, username, email, info }) : null
}
