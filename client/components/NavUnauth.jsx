import React from 'react'
import { Link } from 'react-router-dom'
import { IfNotAuthenticated } from './Authenticated'

export default function NavUnauth(props) {
  const currentPage = props.location.pathname
  let navLandingUnauth = null

  switch (currentPage) {
    case '/':
      navLandingUnauth = (
        <>
          <div id="navbarBasicExample " class="navbar-menu is-size-4">
            <div class="navbar-end navbar-tab-hover-background-color">
              <a class="navbar-item ">
                <Link to="/about">About</Link>
              </a>
              <a class="navbar-item">
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
          <Link to="/contact">Contact</Link>
          <Link to="/">Welcome</Link>
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-primary">
                  <Link to="/signin">Sign in</Link>
                </a>
              </div>
            </div>
          </div>
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-primary">
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
          <Link to="/about">About</Link>
          <Link to="/">Welcome</Link>
          <Link to="/signin">Sign in</Link>
          <Link to="/register">Register</Link>
        </>
      )
      break
    case '/signin':
      navLandingUnauth = (
        <>
          <Link to="/">Welcome</Link>
          <Link to="/register">Register</Link>
        </>
      )
      break
    case '/register':
      navLandingUnauth = (
        <>
          <Link to="/">Welcome</Link>
          <Link to="/signin">Sign in</Link>
        </>
      )
      break
    default:
      navLandingUnauth = (
        <>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </>
      )
  }
  return (
    <>
      <div className="navbar is-primary" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="#" />
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
          <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" />
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
        <IfNotAuthenticated>
          {navLandingUnauth}
        </IfNotAuthenticated>

      </div>
    </>
  )
}
