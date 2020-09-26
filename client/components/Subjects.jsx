// import React, { useState, useEffect } from 'react'
// import { getSubjects } from '../api'

// function subjects () {
//   const [subjects, setSubjects] = useState([])

//   useEffect(() => {
//     getSubjects()
//       .then(res => {
//         setSubjects(res.subjects)
//         return null
//       })
//       .catch((error) => {
//         console.log('error: ' + error.message)
//       })
//   })

//   return (

//     <>
//       <h1 title="subjects">Subjects</h1>
//       <ul>
//         {subjects.map(subject => (
//           <li key={subject.id}>{subject.id} - {subject.subject}</li>
//         ))}
//       </ul>

//     </>

//   )
// }

// export default subjects
import React from 'react'
// import './style.css'
class Dropdown extends React.Component {
  constructor () {
    super()
    this.state = {
      displayMenu: false
    }
    this.showDropdownMenu = this.showDropdownMenu.bind(this)
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this)
  }

  showDropdownMenu (event) {
    event.preventDefault()
    this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu)
    })
  }

  hideDropdownMenu () {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu)
    })
  }

  render () {
    return (
      <div className="dropdown" style = {{ background: 'red', width: '200px' }} >
        <div className="button" onClick={this.showDropdownMenu}> My Setting </div>
        { this.state.displayMenu ? (
          <ul>
            <li><a className="active" href="#Create Page">Create Page</a></li>
            <li><a href="#Manage Pages">Manage Pages</a></li>
            <li><a href="#Create Ads">Create Ads</a></li>
            <li><a href="#Manage Ads">Manage Ads</a></li>
            <li><a href="#Activity Logs">Activity Logs</a></li>
            <li><a href="#Setting">Setting</a></li>
            <li><a href="#Log Out">Log Out</a></li>
          </ul>
        )
          : (
            null
          )
        }
      </div>
    )
  }
}
export default Dropdown
