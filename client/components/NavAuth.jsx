import React from 'react'
import { Link } from 'react-router-dom'
import { logOff } from 'authenticare/client'
import { IfAuthenticated } from './Authenticated'

export default function NavAuth(props) {
  const currentPage = props.location.pathname
  let navLanding = null

  switch (currentPage) {
    case '/home':
      navLanding = (
        <>
<<<<<<< HEAD
          <div className="navbar-menu is-size-4">
=======
          <div id="navbarBasicExample" className="navbar-menu is-size-3">
>>>>>>> f013e5eaf8ff7e16c00431bb7c410935494e0c28
            <div className="navbar-end">
              <a className="navbar-item">
                <Link to="/about">About</Link>
              </a>
              <a className="navbar-item">
                <Link to="/contact">Contact</Link>
              </a>
              <a className="navbar-item">
                <Link to="/profile">Profile</Link>
              </a>
            </div>
          </div>
        </>
      )
      break
    case '/profile':
      navLanding = (
        <>
<<<<<<< HEAD
          <div className="navbar-menu is-size-4">
=======
          <div id="navbarBasicExample " className="navbar-menu is-size-3">
>>>>>>> f013e5eaf8ff7e16c00431bb7c410935494e0c28
            <div className="navbar-end">
              <a className="navbar-item">
                <Link to="/about">About</Link>
              </a>
              <a className="navbar-item">
                <Link to="/contact">Contact</Link>
              </a>
              <a className="navbar-item">
                <Link to="/home">Home</Link>
              </a>
            </div>
          </div>
        </>
      )
      break
    case '/contact':
      navLanding = (
        <>
<<<<<<< HEAD
          <div className="navbar-menu is-size-4">
=======
          <div id="navbarBasicExample " className="navbar-menu is-size-3">
>>>>>>> f013e5eaf8ff7e16c00431bb7c410935494e0c28
            <div className="navbar-end">
              <a className="navbar-item">
                <Link to="/about">About</Link>
              </a>
              <a className="navbar-item">
                <Link to="/profile">Profile</Link>
              </a>
              <a className="navbar-item">
                <Link to="/home">Home</Link>
              </a>
            </div>
          </div>
        </>
      )
      break
    case '/about':
      navLanding = (
        <>
<<<<<<< HEAD
          <div className="navbar-menu is-size-4">
=======
          <div id="navbarBasicExample " className="navbar-menu is-size-3">
>>>>>>> f013e5eaf8ff7e16c00431bb7c410935494e0c28
            <div className="navbar-end">
              <a className="navbar-item">
                <Link to="/contact">Contact</Link>
              </a>
              <a className="navbar-item">
                <Link to="/profile">Profile</Link>
              </a>
              <a className="navbar-item">
                <Link to="/home">Home</Link>
              </a>
            </div>
          </div>
        </>
      )
      break
    case '/listItem':
      navLanding = (
        <>
<<<<<<< HEAD
          <div className="navbar-menu is-size-4">
=======
          <div id="navbarBasicExample " className="navbar-menu is-size-3">
>>>>>>> f013e5eaf8ff7e16c00431bb7c410935494e0c28
            <div className="navbar-end">
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
                <Link to="/home">Home</Link>
              </a>
            </div>
          </div>
        </>
      )
      break
    case '/listings':
      navLanding = (
        <>
<<<<<<< HEAD
          <div className="navbar-menu is-size-4">
=======
          <div id="navbarBasicExample " className="navbar-menu is-size-3">
>>>>>>> f013e5eaf8ff7e16c00431bb7c410935494e0c28
            <div className="navbar-end">
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
                <Link to="/home">Home</Link>
              </a>
            </div>
          </div>
        </>
      )
      break
    default:
      navLanding = (
        <>
<<<<<<< HEAD
          <div className="navbar-menu is-size-4">
=======
          <div id="navbarBasicExample " className="navbar-menu is-size-3">
>>>>>>> f013e5eaf8ff7e16c00431bb7c410935494e0c28
            <div className="navbar-end">
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
                <Link to="/home">Home</Link>
              </a>
            </div>
          </div>
        </>
      )
  }

  return (
    <>
      <IfAuthenticated>
        <Link to="/home">{navLanding}</Link>
        <div className="navbar-item">
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
