import React from 'react'
import './boxes.css'

function Boxes({title, url}) {
  return (
    <div className='content_box'>
      <p>{title}</p>
    </div>
  )
}

export default Boxes