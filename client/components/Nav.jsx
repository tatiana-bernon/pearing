import React from 'react'
import { Link } from 'react-router-dom'
import { logOff } from 'authenticare/client'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

export default function Nav (props) {
  let currentPage = props.location.pathname
  let navLanding = null
  let navLandingUnauth = null 

  switch (currentPage) {
    case '/':
      navLandingUnauth = (
        <>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/signin">Sign in</Link>
          <Link to="/register">Register</Link>
        </>
      )
      break
    case '/about':
      navLanding = (
        <>
          <Link to="/about">About</Link>
          <Link to="/home">Home</Link>
        </>
      )
      break
    case '/contact':
      navLanding = (
        <>
          <Link to="/contact">Contact</Link>
          <Link to="/home">Home</Link>
        </>
      )
      break
    case '/home':
      navLanding = (
        <>
          <Link to="/contact">Contact</Link>
          <Link to ="/profile">Profile</Link>
          <Link to ="/subjects">Subjects</Link>
          <Link to ="/signOut">SignOut</Link>
          <Link to="/home">Home</Link>
        </>
      )
      case '/profile':
      navLanding = (
        <>
          <Link to="/contact">Contact</Link>
          <Link to ="/profile">Profile</Link>
          <Link to ="/home">Home</Link>
          <Link to ="/subjects">Subjects</Link>
          <Link to ="/signOut">SignOut</Link>
        </>
      )
      break
      default:
        navLanding = (
          <>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </>
        )
      
  }
  return (
    <>
      <div className="nav">
        <IfAuthenticated>
          <Link to="/" onClick={logOff}>
            Log out
          </Link>
          <Link to="/">Home</Link>
        </IfAuthenticated>
        <IfNotAuthenticated>{navLandingUnauth}</IfNotAuthenticated>
      </div>
    </>
  )
}