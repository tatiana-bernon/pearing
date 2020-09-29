import React from 'react'
import { Link } from 'react-router-dom'
import Slideshow from './Slideshow'

function Landing() {
  return (
    <>
      <div>
        <Slideshow />
      </div>
      <div className="container landingPage has-background-primary">
        <h1 className="has-text-white is-size-1 has-text-centered "> Welcome to pearing! </h1>
      </div>
      <div>
        <div className="box is-size-4 pb-2 has-text-centered has-text-primary is-dark">
          <div className="my-6">
            <p>
              Pearing is not like any platform on the internet.
            </p>
            <p>
              Our sole purpose is to help you extend your knowledge by putting you into contact with other amazing devs like you, eager to learn more and help each other.
            </p>
            <p>
              Pearing, is where you will reunite with the joys of pair programming.
            </p>
            <br />
            <p>
              And while you will definitely find solutions to your bugs while working with someone else, you will also be extending your network! <br />How cool is that!
            </p>
            <br />
            <p>
              If it sounds like the website, you have always been hopeful to find, go ahead, you know what to do! <br />Oh, I forgot! <br />May the joys of pearing be with you!
            </p>
          </div>
          <div className="container has-background-primary-light has-text-centered mx-0 my-2">
            <Link to='/signin'>
              <button
                type="button"
                className="button is-large is-primary mx-6 my-6 has-text-weight-medium is-centered"
                data-testid="submitButton">
                Sign In
            </button>
            </Link>
            <Link to='/register'>
              <button
                type="button"
                className="button is-large is-primary is-outlined is-light mx-6 my-6 has-text-weight-medium is-centered"
                data-testid="submitButton">
                Register
            </button>
            </Link>
          </div>
          {/* Links */}
        </div>
      </div>
    </>
  )
}

export default Landing
