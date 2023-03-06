import React from 'react';
import Image1 from '../assets/images/image-1.png'

function Card() {
  return (
      <div className="section">
        <div className="card--image">
          <span className="card--availability">SOLD OUT</span>
          <img src={Image1} alt="swimming lessons"/>
          
          <div className="card--rating">
            <i className="card--star fa-solid fa-star"></i>
            <p>5.0 <span className="card--rating-lightGray">(6) USA</span></p>
          </div>
          
          <p>Life lessons with Katie Zaferes</p>
          <p><strong>From $136</strong> / person</p>
          
        </div>
      </div>
  )
}

export default Card
