import React from 'react'
import { Link } from 'react-router-dom'
import { logOff } from 'authenticare/client'
import { IfAuthenticated } from './Authenticated'

export default function NavAuth (props) {
  const currentPage = props.location.pathname
  let navLanding = null

  switch (currentPage) {
    case '/home':
      navLanding = (
        <>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/subjects">Subjects</Link>
        </>
      )
      break
    case '/profile':
      navLanding = (
        <>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/subjects">Subjects</Link>
          <Link to="/home">Home</Link>
        </>
      )
      break
    case '/contact':
      navLanding = (
        <>
          <Link to="/about">About</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/subjects">Subjects</Link>
          <Link to="/home">Home</Link>
        </>
      )
      break
    case '/about':
      navLanding = (
        <>
          <Link to="/contact">Contact</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/subjects">Subjects</Link>
          <Link to="/home">Home</Link>
        </>
      )
      break
    case '/subjects':
      navLanding = (
        <>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/home">Home</Link>
        </>
      )
      break
    case '/listItem':
      navLanding = (
        <>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/home">Home</Link>
        </>
      )
      break
  }

  return (
    <>
      <div className="nav">
        <IfAuthenticated>
          <Link to="/" onClick={logOff}>
            Log out
          </Link>
          <Link to="/home">{navLanding}</Link>
        </IfAuthenticated>
      </div>
    </>
  )
}
