import React from 'react'
import './FooterTitle.css'

const FooterTitle = ({ footerT }) => {
  return (
    <div className='footer-title'>
      <h6 className='fw-semibold'>{footerT}</h6>
    </div>
  )
}

export default FooterTitle
