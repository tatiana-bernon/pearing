import React from 'react'
import { Link } from 'react-router-dom'

export default function NavUnauth () {
  return (
    <>
      <div>
        <div id="navbarBasicExample" className="navbar-menu is-size-3">
          <div className="navbar-end">
            <a className="navbar-item">
              <Link to="/about">About</Link>
            </a>
            <a className="navbar-item">
              <Link to="/contact">Contact</Link>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
