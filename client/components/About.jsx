/* eslint-disable react/no-unescaped-entities */
import React from 'react'

function About() {
  return (
    <>
      <div className='landingPage'>
        <h1 className="has-text-primary is-size-1 has-text-centered mx-6 mt-6 mb-6"> The story behind Pearing! </h1>
      </div>
      <div className="is-size-4  has-text-centered mx-5 mt-5 mb-5">
        <p>
          While we were completing our programming journey with EDA. During our bootcamp, pair programming was one of the main highlights which enabled us in growing our technical skills.
        </p>
        <p>
          This led us to the following reflection: 'What could I use as a Junior Web Developer,once I graduated from bootcamp, to continue improving my technical skills while extending my tech network?'
        </p>
        <p>
          This idea, kept brewing until we gathered to make such concept a reality.  where developers regardless of skill level could meet up to jam.
        </p>
        <br />
        <p>
          And voila!Pearing was born; the platform where developers regardless of skill level, meet up to jam.
        </p>
      </div>

      <div className="container" >
        <h1 className="has-text-primary is-size-1 has-text-centered mx-6 mt-6 mb-6"> The original Pears! </h1>
        <div className="columns mb-6">
          <div className="column mx-3">
            <figure className="image is-256x256">
              <img className="is-rounded" src="../images/original pear 1 copy.jpg"></img>
              <p className="pt-4 is-size-4 has-text-centered has-text-weight-bold">Daryl Chen</p>
            </figure>

          </div>
          <div className="column mx-3">
            <figure className="image is-256x256">
              <img className="is-rounded" src="../images/original pear 1.jpg"></img>
              <p className="pt-4 is-size-4 has-text-centered has-text-weight-bold">Bhavisha Das</p>
            </figure>
          </div>
          <div className="column mx-3">
            <figure className="image is-256x256">
              <img className="is-rounded" src="../images/DSC_1758.JPG"></img>
              <p className="pt-4 is-size-4 has-text-centered has-text-weight-bold">Andras Balint</p>
            </figure>
          </div>
          <div className="column mx-3">
            <figure className="image is-256x256">
              <img className="is-rounded" src="../images/DSC_1746.JPG"></img>
              <p className="pt-4 is-size-4 has-text-centered has-text-weight-bold">Tatiana Bernon</p>
            </figure>
          </div>
        </div>
      </div>
    </>
  )
}
export default About
