import React from 'react'
import { Link } from 'react-router-dom'
import { IfNotAuthenticated } from './Authenticated'

export default function NavUnauth (props) {
  const currentPage = props.location.pathname
  let navLandingUnauth = null

  switch (currentPage) {
    case '/':
      navLandingUnauth = (
        <>
          <div id="navbarBasicExample " className="navbar-menu is-size-4">
<<<<<<< HEAD
            <div className="navbar-end navbar-tab-hover-background-color">
              <a className="navbar-item ">
=======
            <div className="navbar-end">
              <a className="navbar-item">
>>>>>>> ff64de540805cc8cc3de79eeb264f68fc6905917
                <Link to="/about">About</Link>
              </a>
              <a className="navbar-item">
                <Link to="/contact">Contact</Link>
              </a>
            </div>
          </div>
        </>
      )
      break
    case '/about':
      navLandingUnauth = (
        <>
          <div id="navbarBasicExample" className="navbar-menu is-size-5">
            <div className="navbar-end">
              <a className="navbar-item">
                <Link to="/contact">Contact</Link>
              </a>
              <a className="navbar-item">
                <Link to="/">Welcome</Link>
              </a>
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary is-light">
                  <Link to="/signin">Sign in</Link>
                </a>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons is-outlined ">
                <a className="button is-primary has-text-primary ">
                  <Link to="/register">Register</Link>
                </a>
              </div>
            </div>
          </div>
        </>
      )
      break
    case '/contact':
      navLandingUnauth = (
        <>
          <div id="navbarBasicExample" className="navbar-menu is-size-5">
            <div className="navbar-end">
              <a className="navbar-item">
                <Link to="/about">About</Link>
              </a>
              <a className="navbar-item">
                <Link to="/">Welcome</Link>
              </a>
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary is-medium">
                  <Link to="/signin">Sign in</Link>
                </a>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary is-medium">
                  <Link to="/register">Register</Link>
                </a>
              </div>
            </div>
          </div>
        </>
      )
      break
    case '/signin':
      navLandingUnauth = (
        <>
          <div id="navbarBasicExample" className="navbar-menu is-size-5">
            <div className="navbar-end">
              <a className="navbar-item">
                <Link to="/">Welcome</Link>
              </a>
              <a className="navbar-item">
                <Link to="/register">Register</Link>
              </a>
            </div>
          </div>
        </>
      )
      break
    case '/register':
      navLandingUnauth = (
        <>
          <div id="navbarBasicExample" className="navbar-menu is-size-5">
            <div className="navbar-end">
              <a className="navbar-item">
                <Link to="/About">About</Link>
              </a>
              <a className="navbar-item">
                <Link to="/">Welcome</Link>
              </a>
              <a className="navbar-item">
                <Link to="/signin">Sign in</Link>
              </a>
            </div>
          </div>
        </>
      )
      break
    default:
      navLandingUnauth = (
        <>
          <div id="navbarBasicExample" className="navbar-menu is-size-5">
            <div className="navbar-end ">
              <a className="navbar-item">
                <Link to="/about">About</Link>
              </a>
              <a className="navbar-item">
                <Link to="/contact">Contact</Link>
              </a>
            </div>
          </div>
        </>
      )
  }
  return (
    <>
<<<<<<< HEAD
      <div className="navbar is-primary is-flex-widescreen" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="#" />
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" />
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
        <IfNotAuthenticated>
          {navLandingUnauth}
        </IfNotAuthenticated>

      </div>
=======
      <IfNotAuthenticated>
        {navLandingUnauth}
      </IfNotAuthenticated>
>>>>>>> ff64de540805cc8cc3de79eeb264f68fc6905917
    </>
  )
}
