import React from 'react'
import { Link } from 'react-router-dom'
import { logOff } from 'authenticare/client'
import { IfAuthenticated } from './Authenticated'

export default function NavAuth () {
  const navLanding = null

  const handleLogOff = () => {
    logOff()
    // setUser needed
  }

  return (
    <>
      <div id="mainNavbar" className="navbar-menu is-size-4" >
        <div className="navbar-end">
          <Link className="navbar-item" to="/home">Home</Link>
          <Link className="navbar-item" to="/about">About</Link>
          <Link className="navbar-item" to="/contact">Contact</Link>
          <Link className="navbar-item" to="/profile">Profile</Link>
          <Link className="navbar-item" to="/pearings">Pearings</Link>
          <IfAuthenticated>
            <div className="navbar-item">
              {navLanding}
              <div className="buttons">
                <Link className="button is-warning is-outlined is-medium" to="/" onClick={handleLogOff}>
                  Log out
                </Link>
              </div>
            </div>
          </IfAuthenticated>
        </div>
      </div >
    </>
  )
}
