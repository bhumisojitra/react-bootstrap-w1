import React from 'react'
import './BtnOutline.css'
import btnIcon2 from '../../assets/juice/btnicon2.png'

const BtnOutline = ({ btnName }) => {
  return (
    <div className="btn-box2">
        <a href="#">
          <span className='text-center'>
              <img src={btnIcon2} />
          </span>
        {btnName}
        </a>
    </div>
  )
}

export default BtnOutline
