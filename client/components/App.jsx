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
        <div className='container'>

          <nav className="navbar" role="navigation" aria-label="main navigation">
            <div>

              <Route path="/" component={NavAuth} />
            </div>
          </nav>

          <div>
            <Route path="/" component={NavUnauth} />
          </div>
          <div>
            <Route exact path='/' component={ Welcome } />
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
          <div className='container'>
            <Footer/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
