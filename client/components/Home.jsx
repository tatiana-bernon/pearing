import React from 'react'
import { Link } from 'react-router-dom'
import List from './List'

function Home () {
  return (
    <>

      <div className="columns">
        <div id="ScrollBar" className="column mt-6 mx-1 is-half box has-text-centered">
          <List />

        </div>

        <div className="column mt-6 container">
          <img className="mt-6 mb-6" src="../images/slideshow/1..JPG" alt="" />
        </div>
      </div>

      <div className="container has-text-centered">
        <Link to='/addform'>
          <button
            type="button"
            className="button is-primary is-large"
            data-testid="submit Button">
            Create new pearing invitation!
          </button>
        </Link>
      </div>
    </>
  )
}
export default Home
