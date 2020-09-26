import React from 'react'
import { Link } from 'react-router-dom'

function Landing () {
  return (
    <>
      <section>
        <div className='landingPage'>
          <h1> Welcome to Pearing! </h1>
        </div>
      </section>
      <section>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>

      <section>

        <Link to='/signin'>
          <button
            type="button"
            className="button is-primary"
            data-testid="submit Button">
            Sign In
          </button>
        </Link>

        <Link to='/register'>
          <button
            type="button"
            className="button is-primary"
            data-testid="submitButton">
              Register
          </button>
        </Link>

      </section>
    </>
  )
}

export default Landing
