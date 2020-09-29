import React from 'react'
import { Link } from 'react-router-dom'
import { logOff } from 'authenticare/client'
import { IfAuthenticated } from './Authenticated'

export default function NavAuth () {
  const navLanding = null

  return (
    <>
      <div id="navbarBasicExample" className="navbar-menu is-size-3" >
        <div className="navbar-end">
          <a className="navbar-item">
            <Link to="/home">Home</Link>
          </a>
          <a className="navbar-item">
            <Link to="/about">About</Link>
          </a>
          <a className="navbar-item">
            <Link to="/contact">Contact</Link>
          </a>
          <a className="navbar-item">
            <Link to="/profile">Profile</Link>
          </a>
          <a className="navbar-item">
            <Link to="/pearings">Pearings</Link>
          </a>
        </div>
      </div >
      <IfAuthenticated>
        <div className="navbar-item">
          {navLanding}
          <div className="buttons">
            <a className="button is-primary is-light">
              <Link to="/" onClick={logOff}>
                Log out
              </Link>
            </a>
          </div>
        </div>
      </IfAuthenticated>
    </>
  )
}
