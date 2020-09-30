import React, { useEffect, useContext } from 'react'
import { Route } from 'react-router-dom'
import { isAuthenticated } from 'authenticare/client'

import { UserContext, updateUserContext } from './UserContext'
import NavAuth from './NavAuth'
import NavUnauth from './NavUnauth'
import Register from './Register'
import SignIn from './SignIn'
import Welcome from './Welcome'
import Pearings from './Pearings'
import Subjects from './Subjects'
import Profile from './Profile'
import PersonalInfoEdit from './PersonalInfoEdit'
import Home from './Home'
import ListItem from './ListItem'
import AddForm from './AddForm'
import Footer from './Footer'
import About from './About'
import Contact from './Contact'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

function App() {
  const [, setUser] = useContext(UserContext)

  useEffect(() => {
    if (isAuthenticated()) {
      updateUserContext(setUser)
    }
  }, [])

  return (
    <>
      <main className="MainContent">
        <div>
          <div>
            <nav className="navbar is-expanded is-primary has-text-white" role="navigation" aria-label="main navigation">
              <div className="navbar-brand ">
                <div className="navbar-item">
                  <img src="../images/pearinglogo.png" className="ImgLogo" />
                </div>
                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="mainNavbar">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </a>
              </div>
              <IfAuthenticated>
                <Route path="/" component={NavAuth} />
              </IfAuthenticated>
              <IfNotAuthenticated>
                <Route path="/" component={NavUnauth} />
              </IfNotAuthenticated>
            </nav>
          </div>
          <div className="container is-fullhd">            
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
              <Route exact path="/profile" component={Profile} />
            </div>
            <div>
              <Route path="/profile/edit" component={PersonalInfoEdit} />
            </div>
            <div>
              <Route path="/pearings" component={Pearings} />
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
            <div>
              <Route path="/contact" component={Contact} />
            </div>
          </div>
        </div>
      </main>
      <><Footer /></>
    </>
  )
}

export default App
