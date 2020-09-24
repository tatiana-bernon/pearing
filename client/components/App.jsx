import React, { useEffect, useContext } from 'react'
import { Route } from 'react-router-dom'
import { isAuthenticated } from 'authenticare/client'

import { UserContext, updateUserContext } from './UserContext'
import Nav from './Nav'
import Register from './Register'
import SignIn from './SignIn'
import Welcome from './Welcome'
// import AddEvent from './AddEvent'
// import EditEvent from './EditEvent'

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
          <Route exact path='/' component={ Welcome } />
          <Route path="/" component={Nav} />
          <Route path="/register" component={Register} />
          <Route path="/signin" component={SignIn} />
        </div>
      </div>
    </>
  )
}

export default App
