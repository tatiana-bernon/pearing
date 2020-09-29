import React from 'react'
import { Link } from 'react-router-dom'

export default function NavUnauth() {
  return (
    <>
      <div id="mainNavbar" className="navbar-menu is-size-4">
        <div className="navbar-end">
          <Link className="navbar-item" to="/">Home</Link>
          <Link className="navbar-item" to="/about">About</Link>
          <Link className="navbar-item" to="/contact">Contact</Link>
          <div className="navbar-item">
            <div className="buttons">
              <Link to='/signin' className="button is-warning is-outlined is-medium  has-text-weight-medium is-centered" data-testid="submitButton">
                <strong>Sign In</strong>
              </Link>
              <Link to='/register' className="button  is-primary is-inverted is-outlined is-medium  has-text-weight-medium is-centered" data-testid="submitButton">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
