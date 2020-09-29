import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { getList } from '../api'

function List () {
  const [list, setList] = useState([])

  useEffect(() => {
    getList()
      .then(res => {
        setList(res.list)
        return null
      })
      .catch((error) => {
        console.log('error: ', error.message)
      })
  }, [])

  return (
    <>
      {/* <div className="tile is-ancestor">
  <div className="tile is-vertical is-8">
    <div className="tile">
      <div className="tile is-parent is-vertical">
        <article className="tile is-child notification is-primary">
          <p className="title">Vertical...</p>
          <p className="subtitle">Top tile</p>
        </article>
  </div> */}
      {list.map(listing => {
        if (listing.status < 2) {
          return (
            <>
              <div className="container has-text-centered tile is-ancestor">
                <div className="tile is-vertical is-12">
                  <div className="tile">
                    <div className="tile is-parent is-vertical">
                      <article className="tile is-child notification is-info">

                        <Link key={listing.id} to={`/listings/${listing.id}`} >
                          <p className="title">{listing.title} - {listing.subject}</p>
                          <p className="subtitle">Interested: {listing.interested}</p>
                        </Link>

                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </>

          )
        }
      })}

      {/* <Link to='/addform'>
        <button
          type="button"
          className="button is-info"
          data-testid="submitButton">
          Create new pearing invitation!
        </button>
      </Link> */}
    </>
  )
}

export default List
