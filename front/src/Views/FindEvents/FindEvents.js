import React from 'react'
import './FindEvents.scss'
const FindEvents = () => {
  return (
    <div className='wrapper'>
      <div className='findevents'>
        <div>
          <h1>Find Events Near You</h1>
          <input type="text" placeholder='Find Event By City' />
        </div>
      </div>
      <div className="filter">
        <h3>Filter By</h3>
        <div className="filter-container">
          <div className="filter-items">
            <h3>Language</h3>
            <h3>AI</h3>
            <h3>Cloud</h3>
            <h3>DevOps</h3>
            <h3>Availability</h3>
            <h3>Machine Learning</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FindEvents
