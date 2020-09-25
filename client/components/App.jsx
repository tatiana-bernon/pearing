import React, { useEffect, useContext } from 'react'
import { Route } from 'react-router-dom'
import { isAuthenticated } from 'authenticare/client'

import { UserContext, updateUserContext } from './UserContext'
import NavAuth from './NavAuth'
import NavUnauth from './NavUnauth'
import Register from './Register'
import SignIn from './SignIn'
import Welcome from './Welcome'
// import AddEvent from './AddEvent'
import Subjects from './Subjects'
import Profile from './Profile'
import Home from './Home'
import ListItem from './ListItem'

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
          <Route path="/" component={NavAuth} />
          <Route path="/" component={NavUnauth} />
          <Route path="/register" component={Register} />
          <Route path="/signin" component={SignIn} />
          <Route path="/subjects" component={Subjects} />
          <Route path="/profile" component={Profile} />
          <Route path="/home" component={Home} />
          <Route path="/listings/:id" component={ListItem} />
        </div>
      </div>
    </>
  )
}

export default App
