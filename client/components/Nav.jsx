import React from 'react'
import { Link } from 'react-router-dom'
import { logOff } from 'authenticare/client'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

export default function Nav (props) {
  let currentPage = props.location.pathname
  let navLanding = null
  // let navLandingUnauth = null 

  switch (currentPage) {
    case '/':
      navLanding = (
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
          <Link to="/">Welcome</Link>
          <Link to="/signin">Sign in</Link>
          <Link to="/register">Register</Link>
        </>
      )
      break
    case '/contact':
      navLanding = (
        <>
          <Link to="/">Welcome</Link>
          <Link to="/signin">Sign in</Link>
          <Link to="/register">Register</Link>
        </>
      )
      break
    case '/home':
      navLanding = (
        <>
          <Link to="/contact">Contact</Link>
          <Link to ="/profile">Profile</Link>
          <Link to ="/subjects">Subjects</Link>
          <Link to="/">Welcome</Link>
        </>
      )
      case '/profile':
      navLanding = (
        <>
          <Link to="/contact">Contact</Link>
          <Link to ="/profile">Profile</Link>
          <Link to="/">Welcome</Link>
          <Link to ="/subjects">Subjects</Link>

        </>
      )
         break
         case '/signin':
           navLanding = (
             <>
               <Link to="/">Welcome</Link>
               <Link to="/register">Register</Link>
             </>
      )
      break
      case '/register':
        navLanding = (
          <>
            <Link to="/">Welcome</Link>
            <Link to="/signin">Sign In</Link>
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
          <Link to="/">Welcome</Link>
        </IfAuthenticated>
        <IfNotAuthenticated>{navLanding}</IfNotAuthenticated>
      </div>
    </>
  )
}