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
import AddForm from './AddForm'
import Footer from './Footer'
import About from './About'

function App () {
  const [, setUser] = useContext(UserContext)

  useEffect(() => {
    if (isAuthenticated()) {
      updateUserContext(setUser)
    }
  }, [])

  return (
    <>
      <div>
        <div>
          <div>
            <div className="navbar is-primary" role="navigation" aria-label="main navigation">
              <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
              <div className="navbar-brand navbar-end">
                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" />
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <Route path="/" component={NavAuth} />
                <Route path="/" component={NavUnauth} />
              </div>
            </div>
          </div>
          <div>
            <Route exact path='/' component={Welcome} />
          </div>
          <div>
            <Route path="/register" component={Register} />
          </div>
          <div>
            <Route path="/signin" component={SignIn} />
          </div>
          <div>
            <Route path="/subjects" component={Subjects} />
          </div>
          <div>
            <Route path="/profile" component={Profile} />
          </div>
          <div>
            <Route path="/home" component={Home} />
          </div>
          <div>
            <Route path="/listings/:id" component={ListItem} />
          </div>
          <div>
            <Route path="/addform" component={AddForm} />
          </div>
          <div>
            <Route path="/about" component={About} />
          </div>
          <div className='container'>
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
