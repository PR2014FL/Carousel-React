import React from 'react'

function Card({currentImg="https://images.unsplash.com/photo-1543791842-f91bcd359625?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHB1ZXJ0byUyMHJpY298ZW58MHx8MHx8fDA%3D"}) {
    return (
      <div className="cardContainer">
        <img  className="aPic" src={currentImg} alt="" />
        </div>
    )
  }

export default Card