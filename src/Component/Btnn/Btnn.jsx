import React from 'react'
import btnIcon from '../../assets/banner/btn-icon.png'
import './Btnn.css'
import AOS from 'aos';

const Btnn = () => {
  AOS.init();
  return (
    <div className="btn-box" data-aos="fade-down" data-aos-delay="1000">
        <a href="#" className='text-white'>
          <span className='text-center bg-white'>
              <img src={btnIcon} />
          </span>
        Buy Now
        </a>
    </div>
  )
}

export default Btnn
