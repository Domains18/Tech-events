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
    </div>
  )
}

export default FindEvents
