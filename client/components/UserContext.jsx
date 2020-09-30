import React, { useState, createContext } from 'react'
import { getDecodedToken, isAuthenticated } from 'authenticare/client'

export const UserContext = createContext()

export const UserProvider = ({ reducer, initialState, children }) => {
  const [user, setUser] = useState({
    id: '',
    username: '',
    email: '',
    phone: '',
    linkedin: '',
    discord: '',
    info: '',
    image: ''
  })

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  )
}
export const updateUserContext = (setUser) => {
  const { id, username, email, phone, linkedin, discord, info, image } = getDecodedToken()
  return isAuthenticated() ? setUser({ id, username, email, phone, linkedin, discord, info, image }) : null
}
