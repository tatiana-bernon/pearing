import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { getList } from '../api'

function List() {
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
      <div className="ScrollBar">
        {list.map(listing => {
          if (listing.status < 2) {
            return (
              <div key={listing.id}>
                <div className="tile is-ancestor">
                  <div className="tile is-vertical is-12">
                    <div className="tile">
                      <div className="tile is-parent is-vertical">
                        <article className="tile is-child notification has-text-primary is-primary is-light">
                          <Link key={listing.id} to={`/listings/${listing.id}`} >
                            <p className="title has-text-left">{listing.title}</p>
                            <p className="subtitle has-text-left">Subject: {listing.subject}</p>
                            <p className="subtitle has-text-right has-text-primary-dark">Interested: {listing.interested}</p>
                          </Link>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        })}
      </div>

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
