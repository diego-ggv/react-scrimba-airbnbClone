import React from 'react';

function Card()  {
  return(
      <div className="section card">
        <span className="card--availability">SOLD OUT</span>
        <img  className="card--image" 
              src="../../public/images/image-1.png" 
              alt="swimming lessons" />
        <div className="card--rating">
            <i className="card--star fa-solid fa-star"></i>
            <p>5.0</p>
        </div>
      </div>
  )
}

export default Card
