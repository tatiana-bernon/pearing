import React, { useState, useEffect, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { getSubjects, addNewListing } from '../api'

import { UserContext } from './UserContext'

function AddForm () {
  const [user] = useContext(UserContext)
  const [title, setTitle] = useState(null)
  const [subject, setSubject] = useState(null)
  const [subjects, setSubjects] = useState([])
  const [description, setDescription] = useState(null)
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

  function handleSubmit (e) {
    e.preventDefault()
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

  return (
    <>
      <div className="">
        <div className="">
          <h1>Kindly fill the form below!</h1>
          <h3>Create new invitation</h3>
          <form onSubmit={handleSubmit}>

            {/* <input className="input is-normal" type="text"
              placeholder="Pear level 1-10"
              name="pearLevel"
              value={ pearLevel } onChange={event => setpearLevel(event.target.value)}/> */}

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

            <h3> Title </h3>
            <input className="input is-normal" type="text"
              name="title"
              value={title} onChange={event => setTitle(event.target.value)}/>

            <h5>Description</h5>
            <textarea className="textarea is-normal"
              placeholder="Enter your description"
              name="description"
              value={description} onChange={event => setDescription(event.target.value)}/>
            <button className="button my-4 is-primary">Submit</button>
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
