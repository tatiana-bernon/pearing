import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <>
      <div className='landingPage'>
        <h1 className="has-text-primary is-size-1 has-text-centered mx-6 mt-6 mb-6"> Welcome to pearing! </h1>
      </div>
      <div className="is-size-4  has-text-centered mx-5 mt-5 mb-5">
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


        <div className="container has-text-centered">
          <Link to='/signin'>
            <button
              type="button"
              className="button is-medium is-primary mx-6 mt-6 mb-6 has-text-weight-medium is-centered"
              data-testid="submitButton">
              Sign In
          </button>
          </Link>
          <Link to='/register'>
            <button
              type="button"
              className="button  is-medium is-primary is-outlined mx-6 mt-6 mb-6 has-text-weight-medium is-centered"
              data-testid="submitButton">
              Register
          </button>
          </Link>
        </div>
        
        <div className="columns container">
      <figure className="column image is-square mx-2 mt-2 mb-5">
        <img src="https://bulma.io/images/placeholders/128x128.png"/>
      </figure>
      <figure className="column image is-square mx-2 mt-2 mb-5">
        <img src="https://bulma.io/images/placeholders/128x128.png"/>
      </figure>
      <figure className="column image is-square mx-2 mt-2 mb-5">
        <img src="https://bulma.io/images/placeholders/128x128.png"/>
      </figure>
      <figure className="column image is-square mx-2 mt-2 mb-5">
        <img src="https://bulma.io/images/placeholders/128x128.png"/>
      </figure>
      </div>
    </>
  )
}

export default Landing
