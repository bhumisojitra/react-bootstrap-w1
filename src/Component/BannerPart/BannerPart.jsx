import React from 'react'
import {Container, Row } from 'react-bootstrap'
import icon1 from '../../assets/banner/icon-1.png'
import icon3 from '../../assets/banner/icon-3.png'
import Btnn from '../Btnn/Btnn'
import './BannerPart.css'
import AOS from 'aos';

const BannerPart = ({ img, icon, bgColor, leftSide }) => {
  AOS.init();
  return (
    <div className='banner position-relative' style={{ backgroundColor: bgColor}}>
      <Container>
        <Row>
          <div className="col-5 banner-contanet">
            <h1 data-aos="fade-down" data-aos-delay="600">Heathly Smoothie</h1>
            <p className='text-white' data-aos="fade-down" data-aos-delay="800">Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
           <Btnn />
          </div>
          <div className="col-6 banner-img position-relative">
            <img src={img}/>
            <img src={icon3} alt="icon-3" className='position-absolute' style={{right: '20px', top: '-60px', zIndex: '1'}} data-aos="fade-right"  data-aos-delay="600"/>
          </div>
          <div className="slide">
              <img src={icon1} alt="icon-1" className='position-absolute top-0' style={{right: '0px'}} data-aos="fade-left"/>
              <img src={icon} alt="icon-2" className='position-absolute' style={{left: leftSide, right: '20px', bottom: '12%'}} data-aos="fade-right"  data-aos-delay="300"/>
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default BannerPart
