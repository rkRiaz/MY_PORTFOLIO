import React from "react"

const Heading = ({ heading, title }) => {
  return (
    <div className='heading-section '>
      <h1>{heading}</h1>
      <p style={{ wordSpacing: 0.5 }}>{title}</p>
    </div>
  )
}

export default Heading
