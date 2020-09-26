import React, { useState, useEffect } from 'react'
import { getSubjects } from '../api'

function AddForm () {
  const [title, setTitle] = useState('')
  const [subjects, setSubjects] = useState([])
  const [description, setDescription] = useState('')
  const [pearLevel, setpearLevel] = useState('')

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
    console.log(title, subjects, description)
  }

  return (
    <>
      <div className="create-event-form columns is-8">
        <div className="column">
          <h1>Kindly fill the form below!</h1>
          <h3>Create new invitation</h3>
          <form onSubmit={handleSubmit}>

            <input className="input is-normal" type="text"
              placeholder="Pear level 1-10"
              name="pearLevel"
              value={ pearLevel } onChange={event => setpearLevel(event.target.value)}/>

            <select
              className="select"
              name="subjects"
              id="subject">
              <option>Select your subject</option>
              {subjects.map(subject => (
                <option key={subject.id} value='1'>{subject.subject}</option>
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
        </div>
      </div>
    </>
  )
}
export default AddForm
