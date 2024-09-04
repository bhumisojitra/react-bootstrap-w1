import React from 'react'
import { Carousel, Container, Row } from 'react-bootstrap'
import './banner.css'
import pattern1 from '../../assets/banner/pattern-1.png'
import BannerPart from '../BannerPart/BannerPart'
import banner1 from '../../assets/banner/banner-1.png'
import banner2 from '../../assets/banner/banner-2.png'
import banner3 from '../../assets/banner/banner-3.png'
import icon2 from '../../assets/banner/icon-2.png'
import icon6 from '../../assets/banner/icon-6.png'
import icon7 from '../../assets/banner/icon-7.png'

const Banner = () => {
  return (
    <>
      <Carousel>  
        <Carousel.Item>
            <BannerPart img={banner1} icon={icon2} bgColor={"#beb996"} leftSide={"0px"}/>
        </Carousel.Item>
        <Carousel.Item>
            <BannerPart img={banner2} icon={icon6} bgColor={"#beb996"} leftSide={"0px"} />
        </Carousel.Item>
        <Carousel.Item>
            <BannerPart img={banner3} icon={icon7} bgColor={"#A79BAC"} leftSide={"40px"} />
        </Carousel.Item>
      </Carousel>

      <div className='w-100 position-relative'>
        <img src={pattern1} alt="pattern1" className='position-absolute z-1 right-0 bg-no-repeat bottom-0 w-100'/>
      </div>
    </>
  )
}

export default Banner