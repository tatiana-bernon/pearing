import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from './UserContext'
import { getSubjects } from '../api'


function subjects() {
  const [subjects, setSubjects] = useState([])

  useEffect(() => {
    getSubjects()
      .then(res => {
        setSubjects(res.subjects)
        return null
      })
      .catch((error) => {
        console.log('error: ' + error.message)
      })
  })

  return (

    <>
    <h1 title="subjects">Subjects</h1>
    <ul>
      {subjects.map(subject => (
        <li key={subject.id}>{subject.id} - {subject.subject}</li>
  ))}
    </ul>
    
    </>

  )
}


export default subjects