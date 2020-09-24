import React, { useEffect, useContext } from 'react'
import { Route } from 'react-router-dom'
import { isAuthenticated } from 'authenticare/client'

import { UserContext, updateUserContext } from './UserContext'
import Nav from './Nav'
import Register from './Register'
import SignIn from './SignIn'
import LandingPage from './LandingPage'
import Subjects from './Subjects'
import Profile from './Profile'

function App () {
  const [, setUser] = useContext(UserContext)

  useEffect(() => {
    if (isAuthenticated()) {
      updateUserContext(setUser)
    }
  }, [])

  return (
    <>
      <div className="container">
        <h1 className="title">pearing</h1>
        <div className='columns'>
          <Route exact path='/' component={ LandingPage } />
          <Route path="/" component={Nav} />
          <Route path="/register" component={Register} />
          <Route path="/signin" component={SignIn} />
          <Route path="/subjects" component={Subjects} />
          <Route path="/profile" component={Profile} />
        </div>
      </div>
    </>
  )
}

export default App
