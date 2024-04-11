import React from 'react'
import './Card.css'
const Card = () => {
  return (
    <div className="container">
        <h1>პოპულარული ღონისძიებები</h1>
    <div className="row">
      <div className="col-sm-2">
        <div className="card horizontal-card">
          <div className="card-body">
            <h5 className="card-title">Part 1</h5>
            <p className="card-text">Content for Part 1</p>
            <img src='https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg' className='CardImg'/>
          </div>
        </div>
      </div>
      <div className="col-sm-2">
        <div className="card horizontal-card">
          <div className="card-body">
            <h5 className="card-title">Part 2</h5>
            <p className="card-text">Content for Part 2</p>
          </div>
        </div>
      </div>
      <div className="col-sm-2">
        <div className="card horizontal-card">
          <div className="card-body">
            <h5 className="card-title">Part 3</h5>
            <p className="card-text">Content for Part 3</p>
          </div>
        </div>
      </div>
      <div className="col-sm-2">
        <div className="card horizontal-card">
          <div className="card-body">
            <h5 className="card-title">Part 4</h5>
            <p className="card-text">Content for Part 4</p>
          </div>
        </div>
      </div>
      <div className="col-sm-2">
        <div className="card horizontal-card">
          <div className="card-body">
            <h5 className="card-title">Part 5</h5>
            <p className="card-text">Content for Part 5</p>
          </div>
        </div>
      </div>
      <div className="col-sm-2">
        <div className="card horizontal-card">
          <div className="card-body">
            <h5 className="card-title">Part 6</h5>
            <p className="card-text">Content for Part 6</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Card