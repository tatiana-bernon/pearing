import React, { useState, useEffect, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { getSubjects, addNewListing } from '../api'

import { UserContext } from './UserContext'

function AddForm() {
  const [user] = useContext(UserContext)
  const [title, setTitle] = useState('')
  const [subject, setSubject] = useState('')
  const [subjects, setSubjects] = useState([])
  const [description, setDescription] = useState('')
  // const [pearLevel, setpearLevel] = useState(null)
  const history = useHistory()

  useEffect(() => {
    getSubjects()
      .then(res => {
        setSubjects(res.subjects)
        return null
      })
      .catch((error) => {
        console.log('error: ', error.message)
      })
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    if (user.id) {
      const newListing = {
        user_id: user.id,
        subject_id: subject,
        // pearLevel: pearLevel,
        title: title,
        description: description,
        status: 0,
        interested: 0
      }
      if (
        newListing.subject_id &&
        newListing.title &&
        newListing.description
      ) {
        addNewListing(newListing)
          .then(res => {
            // setAuthor(res.user.username)
            return null
          })
          .catch((error) => {
            console.log('error: ', error.message)
          })
        history.push('/home')
      }
    }
  }

  return (
    <>
      <div className="">
        <br></br>
        <div className="">
          <h1>Kindly fill the form below!</h1>
          <br></br>
          <h3>Create new invitation</h3>
          <form onSubmit={handleSubmit}>

            {/* <input className="input is-normal" type="text"
              placeholder="Pear level 1-10"
              name="pearLevel"
              value={ pearLevel } onChange={event => setpearLevel(event.target.value)}/> */}
            <div className="select is-primary mb-5">
              <select
                className="select"
                name="subjects"
                id="subject"
                onChange={event => setSubject(event.target.value)}>
                <option>Select your subject</option>
                {subjects.map(subject => (
                  <option key={subject.id} value={subject.id}>{subject.subject}</option>
                ))}
              </select>
            </div>
            <div className="mb-5">
              <h3> Title </h3>
              <input className="input is-normal is-primary" type="text"
                placeholder="Enter your title"
                name="title"
                value={title} onChange={event => setTitle(event.target.value)} />
            </div>
            <div>
              <h5>Description</h5>
              <textarea className="textarea is-normal is-primary"
                placeholder="Enter your description"
                name="description"
                value={description} onChange={event => setDescription(event.target.value)} />
              <br></br>
              <button className="button my-4 is-primary">Submit</button>
            </div>
          </form>
          <Link to='/home'>
            <button
              type="button"
              className="button is-primary"
              data-testid="submitButton">
              Back
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}
export default AddForm
