import React from 'react'
import Plant1 from "../assets/bonsai.jpg"
import Plant2 from "../assets/OIP (13).jpg"
import Plant3 from "../assets/Aloe-Vera-Plant.jpg"

const Image = () => {
  return (
    <div className='container'>
      <img src={Plant1} alt="A beautiful bonsai plant"></img> 
      <img src={Plant2} alt="Plant2"/>
      <img src={Plant3} alt="Plant3"/>

    </div>
  )
}

export default Image
