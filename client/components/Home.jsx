import React from 'react'
import { Link } from 'react-router-dom'
import List from './List'

function Home () {
  return (
    <>
      <div className="container">
        <div className="box has-text centered mx-6 my-6 ">
          <h1 className="has-text-1 is-size-1 has-text-centered">May your pearing journey begin!</h1>
          <p className="has-text-centered is-size-4">Go ahead and scroll the list to see all the current pearing invitations open. <br/>And make your choice!</p>
        </div>
      </div>

      <div className="container">
        <div className="columns">
          <div className="column box mr-2 mt-3 is-half has-text-centered">
            <List />
          </div>
          <div className="column box ml-2 mt-3 mb-5 pt-6 is-half">
            <img className="pt-6" src="../images/slideshow/1.JPG" alt="" />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="has-text-centered">
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
