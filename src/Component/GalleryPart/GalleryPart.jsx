import React from 'react'
import './GalleryPart.css'

const GalleryPart = ({ ImgG }) => {
  return (
    <div className='galler-img position-relative'>
      <div className='image-container'>
        <div className="col-2">
          <img src={ImgG}/>
        </div>
      </div>
          <div className="hover-img position-absolute">
            <div className="gallery-img-plus">
              <a href="#">
                <i className="bi bi-plus-lg"></i>
              </a>
            </div>
          </div>
    </div>
  )
}

export default GalleryPart