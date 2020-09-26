import React from 'react'
import { Link } from 'react-router-dom'

function Landing () {
  return (
    <>
      <div>
        <Link to='/signin'>
          <button
            type="button"
            className="button is-primary"
            data-testid="submitButton">
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
      </div>
    </>
  )
}

export default Landing
