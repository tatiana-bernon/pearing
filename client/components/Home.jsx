import React from 'react'
import { Link } from 'react-router-dom'
import List from './List'

function Home() {
  return (
    <>

      <div className="columns">
        <div className="column is-half box">
          <List />

        </div>

        <div className="column">
        <img src="../images/slideshow/23.JPG" alt="" />
        </div>
      </div>

      <div>
        <Link to='/addform'>
          <button
            type="button"
            className="button is-info"
            data-testid="submitButton">
            Create new pearing invitation!
        </button>
        </Link>
      </div>
    </>
  )
}
export default Home
