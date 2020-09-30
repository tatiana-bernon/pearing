import React from 'react'
import { Link } from 'react-router-dom'

function Contact () {
  return (
    <>
      <div className="container">
        <div className="columns">
          <div className="column box mx-2 mt-6 mb-6 pt-6 is-half">
            <img className="pt-4" src="../images/slideshow/23.JPG" />

          </div>

          <div className="column box mx-2 mt-6 mb-6 is-half ">
            <div className="">
              <h1 className="has-text-primary is-size-2 has-text-centered mx-3"> Send us a message! </h1>
            </div>

            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input className="input is-primary" type="text" placeholder="Name" />

                <div className="field">
                  <label className="label">Username</label>
                  <div className="control has-icons-left has-icons-right">
                    <input className="input is-primary" type="text" placeholder="Username" />
                    <span className="icon is-small is-left">
                      <i className="fas fa-user"></i>
                    </span>
                    <span className="icon is-small is-right">
                      <i className="fas fa-check"></i>
                    </span>
                  </div>
                  {/* <p className="help is-success">This username is available</p> */}
                </div>

                <div className="field">
                  <label className="label">Email</label>
                  <div className="control has-icons-left has-icons-right">
                    <input className="input is-primary" type="text" placeholder="Email" />
                    <span className="icon is-small is-left">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-small is-right">
                      <i className="fas fa-exclamation-triangle"></i>
                    </span>
                  </div>
                  {/* <p className="help is-danger">This email is invalid</p> */}
                </div>

                <div className="field">
                  <label className="label">Message</label>
                  <div className="control">
                    <textarea className="textarea is-primary" placeholder="Please enter your message"></textarea>
                  </div>

                  <div className="container has-text-centered">
                    <div className="control">
                      <Link to='/about'>
                        <button className="button is-medium is-primary mx-4 mt-3 mb-2 has-text-weight-medium is-centered">Submit</button>
                      </Link>
                      <Link to='/about'>
                        <button className="button is-medium is-primary is-outlined mx-4 mt-3 mb-2 has-text-weight-medium is-centered">Cancel</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Contact
