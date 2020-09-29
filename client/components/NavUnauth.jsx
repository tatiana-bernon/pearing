import React from 'react'
import { Link } from 'react-router-dom'

export default function NavUnauth () {
  return (
    <>
      <div>
        <div id="navbarBasicExample" className="navbar-menu is-size-3">
          <div className="navbar-end">
            <Link className="navbar-item" to="/">Home</Link>
            <Link className="navbar-item" to="/about">About</Link>
            <Link className="navbar-item" to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </>
  )
}
