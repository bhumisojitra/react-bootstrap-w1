import React from 'react'
import { Container, Row, Carousel } from 'react-bootstrap'
import Title from '../Title/Title'
import ReviewPart from '../ReviewPart/ReviewPart'
import r1 from '../../assets/review/R-1.png'

const Review = () => {
  return (
    <div className='review pt-100'>
      <Container>
        <Row>
            <div className='text-center'>
                <Title contenth6={"Testimonial"} contenth2={"What People Say"}/>
            </div>
            <div className='position-relative'>
            <Carousel>  
              <Carousel.Item>
                <ReviewPart />
              </Carousel.Item>
              <Carousel.Item>
                <ReviewPart />
              </Carousel.Item>
            </Carousel>
                <img src={r1} className='position-absolute top-0' style={{left: '25%'}}/>
            </div>
        </Row>
      </Container>
    </div>
  )
}

export default Review
