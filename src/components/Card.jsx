import React from 'react';
import Image1 from '../assets/images/image-1.png'

function Card() {
  return (
      <div className="section">
        <div className="card">
          <span className="card--availability">SOLD OUT</span>
          <img className="card--image"
               src={Image1}
               alt="swimming lessons"/>

          <div className="card--stats">
            <i className="card--star fa-solid fa-star"></i>
            <p>5.0 <span className="card--stats-lightGray">(6) • USA</span></p>
          </div>

          <p>Life lessons with Katie Zaferes</p>
          <p><strong>From $136</strong> / person</p>

        </div>
      </div>
  )
}

export default Card
