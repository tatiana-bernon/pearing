import React from 'react'
import { Link } from 'react-router-dom'
import List from './List'

function Home() {
  return (
    <>
      <div className="container">
        <div className="box has-text centered mx-3 my-3">
        <h1 className="has-text-1 is-size-1 has-text-centered">Welcome your pearing homepage!</h1>
        <p>Go ahead and scroll the list to see all the current pearing invitations open. And make your choice!</p>
        </div>
      </div>
      
      <div className="container">
        <div className="columns">
          <div className="column box mr-2 mt-6 is-half has-text-centered">
            <List />
          </div>
          <div className="column box ml-2 mt-6 mb-5 is-half">
            <img src="../images/slideshow/1.JPG" alt="" />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="box has-text-centered">
          <Link to='/addform'>
            <button
              type="button"
              className="button is-primary is-large"
              data-testid="submit Button">
              Create new pearing invitation!
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}
export default Home
