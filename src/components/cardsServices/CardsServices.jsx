import React from 'react'
import './cardsServices.css'

const CardsServices = ({title,description,imagge}) => {
  return (
    <div className='card-element'>
        {imagge}
       <h3>{title}</h3>
       <p>{description}</p>
    </div>
  )
}

export default CardsServices
