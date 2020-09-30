import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from './UserContext'
import { Link } from 'react-router-dom'

import {
  getMyList,
  deleteListing,
  getInterestedList,
  getUserById,
  changeStatusToTwo,
  changeStatusToThree,
  getMyPearings,
  getMyPearingsByOthers,
  addPear,
  getMyCompleted,
  getMyCompletedByOthers,
  getMyInterests
} from '../api'

function Pearings () {
  const [user] = useContext(UserContext)
  const [myList, setMyList] = useState([])
  const [, setInterestedList] = useState([])
  const [interestedUsers, setInterestedUsers] = useState([])
  const [selected, setSelected] = useState(null)
  const [acceptedPears, setAcceptedPears] = useState([])
  const [acceptedByOtherPears, setAcceptedByOtherPears] = useState([])
  const [completedPears, setCompletedPears] = useState([])
  const [completedByOthersPears, setCompletedByOthersPears] = useState([])
  const [myInterests, setMyInterests] = useState([])

  useEffect(() => {
    if (user.id) {
      getMyList(user.id)
        .then(res => {
          setMyList(res)
          return null
        })
        .catch((error) => {
          console.log('error: ', error.message)
        })
      getMyPearings(user.id)
        .then(res => {
          setAcceptedPears(res)
          return null
        })
        .catch((error) => {
          console.log('error: ', error.message)
        })
      getMyPearingsByOthers(user.id)
        .then(res => {
          setAcceptedByOtherPears(res)
          return null
        })
        .catch((error) => {
          console.log('error: ', error.message)
        })
      getMyCompleted(user.id)
        .then(res => {
          setCompletedPears(res)
          return null
        })
        .catch((error) => {
          console.log('error: ', error.message)
        })
      getMyCompletedByOthers(user.id)
        .then(res => {
          setCompletedByOthersPears(res)
          return null
        })
        .catch((error) => {
          console.log('error: ', error.message)
        })
      getMyInterests(user.id)
        .then(res => {
          setMyInterests(res)
          return null
        })
        .catch((error) => {
          console.log('error: ', error.message)
        })
    }
  }, [])

  const handleDelete = (e) => {
    const id = Number(e.target.value)
    deleteListing(id)
    getMyList(user.id)
      .then(res => {
        setMyList(res)
        return null
      })
      .catch((error) => {
        console.log('error: ', error.message)
      })
  }

  const handleInterested = (e) => {
    const id = Number(e.target.value)
    setInterestedUsers([])
    setSelected(id)
    getInterestedList(id)
      .then(res => {
        setInterestedList(res)
        return res
      })
      .then((res) => {
        res.map(user => {
          // eslint-disable-next-line promise/no-nesting
          return getUserById(user.user_id)
            .then(res => {
              setInterestedUsers(interestedUsers => [...interestedUsers, res])
              return null
            })
        })
        return null
      })
      .catch((error) => {
        console.log('error: ', error.message)
      })
  }

  const handleAccept = (e) => {
    const pearing = {
      pearId: e.target.value,
      id: selected
    }
    setInterestedUsers([])
    changeStatusToTwo(selected)
    addPear(pearing)
    getMyList(user.id)
      .then(res => {
        setMyList(res)
        return null
      })
      .catch((error) => {
        console.log('error: ', error.message)
      })
    getMyPearings(user.id)
      .then(res => {
        setAcceptedPears(res)
        return null
      })
      .catch((error) => {
        console.log('error: ', error.message)
      })
  }

  const handleCompleted = (e) => {
    changeStatusToThree(e.target.value)
    getMyList(user.id)
      .then(res => {
        setMyList(res)
        return null
      })
      .catch((error) => {
        console.log('error: ', error.message)
      })
    getMyPearings(user.id)
      .then(res => {
        setAcceptedPears(res)
        return null
      })
      .catch((error) => {
        console.log('error: ', error.message)
      })
    getMyCompleted(user.id)
      .then(res => {
        setCompletedPears(res)
        return null
      })
      .catch((error) => {
        console.log('error: ', error.message)
      })
  }

  return (
    <>      
      <div className="box">        
        <h2 className="has-text-primary is-size-2 has-text-centered mx-6 mt-1 mb-6">My Pearing Requests</h2>
        <div className="box has-background-primary">
          <div className="columns">
            <div className="column is-half">              
                <p className="has-text-white is-size-3 has-text-centered mx-6 mt-1 mb-6">Created by me</p>
                <div className="ListContainer">
                  {myList.map(listing => (
                    <div key={listing.id} className=" ItemDirection">
                      <div className="tile is-ancestor">
                        <div className="tile is-vertical is-12">
                          <div className="tile">
                            <div className="tile is-parent is-vertical">
                              <article className="tile is-child notification has-text-primary is-primary is-light">                              
                                  <p className="title has-text-left">ID: {listing.id} - {listing.title}</p>
                                  <p className="subtitle has-text-left">interested: {listing.interested}</p>
                                  <div className="field is-grouped">                                   
                                    <p className="control">
                                      <button type="button"
                                        className="button is-warning is-small"
                                        data-testid="submit Button" value={listing.id} onClick={handleInterested}>Show</button>
                                    </p>
                                    <p className="control">    
                                      <button type="button"
                                              className="button is-danger is-small"
                                              data-testid="submit Button" value={listing.id} onClick={handleDelete}>Delete</button>
                                    </p>
                                  </div>                                
                              </article>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>                    
                  ))}
                </div>
              
            </div>          
            <div className="column is-half">
                <p className="has-text-white is-size-3 has-text-centered mx-6 mt-1 mb-6">Created By Other Pears</p>
                <div className="ListContainer">
                  {interestedUsers.map(user => (                 
                    <div key={user.user.id} className="ItemDirection">
                      <div className="tile is-ancestor">
                      <div className="tile is-vertical is-12">
                        <div className="tile">
                          <div className="tile is-parent is-vertical">
                            <article className="tile is-child notification has-text-primary is-primary is-light">                            
                                <p className="title has-text-left">Name: {user.user.username} - Email: {user.user.email}</p>
                                <p className="subtitle has-text-left">Info: {user.user.info}</p>                                
                                <p className="control">
                                <button type="button"
                                        className="button is-primary is-small" 
                                        value={user.user.id} 
                                        onClick={handleAccept}>Accept
                                </button>
                                </p>                            
                            </article>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>                  
                  ))}
                </div>
            </div>
          </div>
        </div>
      </div>
      {/* Daryl code starts here */}
      <div>
       
          {/* start of box */}
          <div className="box has-background-white">
            {/* current pearing box */}
            <div className="box">
              <h2 className="has-text- is-size-2 has-text-centered mx-6 mt-1 mb-6">Current Pearings</h2>
              <div className="columns">
                <div className="column is-half">
                  <article className="tile is-child notification has-text-primary is-primary is-light">
                    <h3>Created By Me</h3>
                    <ul className="ListContainer ItemDirection">
                      {acceptedPears.map(pearing => (
                        <li key={pearing.id}>
                          Title: {pearing.title}<br></br>
                          Description: {pearing.description}<br></br>
                          Pear: {pearing.username}<br></br>
                          Pear's email: {pearing.email}<br></br>
                          <button value={pearing.id} onClick={handleCompleted}>Completed</button>
                        </li>
                      ))}
                    </ul>
                  </article>
                </div>
                <hr></hr>
                <div className="column is-half">
                  <article className="tile is-child notification has-text-primary is-primary is-light">
                    <h3>Created By Other Pears</h3>
                    <ul className="ListContainer ItemDirection">
                      {acceptedByOtherPears.map(pearing => (
                        <li key={pearing.id}>
                          Title: {pearing.title}<br></br>
                Description: {pearing.description}<br></br>
                Created by: {pearing.username}<br></br>
                        </li>
                      ))}
                    </ul>
                  </article>
                </div>
              </div>
            </div>
            {/* end of accepted pearings box */}
            <hr></hr>
            {/* start of completed Pearings box */}
              <h2 className="has-text-primary is-size-2 has-text-centered mx-6 mt-6 mb-6">Completed Pearings</h2>
              <div className="columns">
                <div className="column is-half">
                  <h1 className="has-text-white	is-size-2 has-text-centered mx-6 mt-6 mb-6">Created By Me</h1>
                  <article className="tile is-child notification has-text-primary is-primary is-light">                    
                    <ul className="ListContainer ItemDirection">
                      {completedPears.map(pearing => (
                        <li key={pearing.id}>
                          Title: {pearing.title}<br></br>
                Pear: {pearing.username}<br></br>
                        </li>
                      ))}
                    </ul>
                  </article>
                </div>
                <div className="column is-half">
                  <h1 className="has-text-white is-size-2 has-text-centered mx-6 mt-6 mb-6">Created By Other Pears</h1>
                  <article className="tile is-child notification has-text-primary is-primary is-light">
                    <ul className="ListContainer ItemDirection">
                      {completedByOthersPears.map(pearing => (
                        <li key={pearing.id}>
                          Title: {pearing.title}<br></br>
                Created By: {pearing.username}<br></br>
                        </li>
                      ))}
                    </ul>
                  </article>
                </div>
              </div>
            </div>
            {/* end of completed pearings box */}

          {/* end of box */}

       
        <h2 className="has-text-primary is-size-2 has-text-centered pt-3 pb-3 mx-6 mt-1 mb-3">Waiting to be peared...</h2>
        <div className="box has-background-primary"> 
          
          <div>
            <div className="container box">
              <div className="container tile is-ancestor">
                <div className="tile is-vertical is-12">
                  <div className="tile" >
                    <div className="tile is-parent is-vertical">
                      <article className="tile is-child notification is-size-5 has-text-primary is-primary is-light">
                        <ul>
                          {myInterests.map(pearing => (
                            <li key={pearing.id}>
                              {pearing.title}<br></br>
                            </li>
                          ))}
                        </ul>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />
        <div className="container has-text-centered">
          <Link to='/addform'>
            <button
              type="button"
              className="button is-primary is-large"
              data-testid="submitButton">
              Create Pearing Invitation!
            </button>
          </Link>
        </div>
      </div>
      <br></br>
    </>
  )
}

export default Pearings
