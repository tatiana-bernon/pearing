import React from 'react'
import Slideshow from './Slideshow'

function Landing () {
  return (
    <>
      <div>
        <Slideshow />
      </div>
      <section className="hero is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title has-text-white has-text-centered">
              Welcome to pearing!
            </h1>
          </div>
        </div>
      </section>
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
          {/* Links */}
        </div>
      </div>
    </>
  )
}

export default Landing
