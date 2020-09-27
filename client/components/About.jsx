/* eslint-disable react/no-unescaped-entities */
import React from 'react'

function About () {
  return (
    <>
      <div className='landingPage'>
        <h1 className="has-text-primary is-size-1 has-text-centered mx-6 mt-6 mb-6"> The story behind Pearing! </h1>
      </div>
      <div className="is-size-4  has-text-centered mx-5 mt-5 mb-5">
        <p>
          A platform bringing developers together to help each other or just jam!
        </p>
        <p>
          This idea spawned from a question. 'What is a resource I would want as a Junior Web Developer who has just graduated bootcamp?'
        </p>
        <p>
          With that in mind, the concept of an app where developers regardless of skill level could meet up to jam.
        </p>
        <br />
        <p>
          (Change this) And while you will definitely find solutions to your bugs while working with someone else, you will also be extending your network! <br />How cool is that!
        </p>
        <br />
        <p>
          (Change this) If it sounds like the website, you have always been hopeful to find, go ahead, you know what to do! <br />Oh, I forgot! <br />May the joys of pearing be with you!
        </p>
      </div>
      <h1 className="has-text-primary is-size-1 has-text-centered mx-6 mt-6 mb-6"> The original Pears! </h1>
      <div className="columns mb-6">
        <div className="column mx-3">
          <figure className="image is-256x256">
            <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"></img>
          </figure>
        </div>
        <div className="column mx-3">
          <figure className="image is-256x256">
            <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"></img>
          </figure>
        </div>
        <div className="column mx-3">
          <figure className="image is-256x256">
            <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"></img>
          </figure>
        </div>
        <div className="column mx-3">
          <figure className="image is-256x256">
            <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"></img>
          </figure>
        </div>
      </div>
    </>
  )
}
export default About
