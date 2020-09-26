import React from 'react'
import SignIn from './SignIn'
import Register from './Register'

function Landing () {
  return (
    <>
      <div className='landingPage'>
        <h1> Welcome to Pearing! </h1>
      </div>

      <div className='button'>
        <link to={SignIn}>
          <button type='button'> Sign In </button>
        </link>
        <link to={Register}>
          <button type='button'> Register </button>
        </link>

      </div>
    </>
  )
}

export default Landing
