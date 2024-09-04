import React from 'react'
import { Container, Row } from 'react-bootstrap'
import author from '../../assets/review/author-1.jpg'
import './ReviewPart.css'

const ReviewPart = () => {
  return (
    <div className='ReviewPart pt-50 text-center position-relative z-1'>
      <Container>
        <Row>
            <div className='review-img'>
                <img src={author}/>
            </div>
            <p className='fw-medium'>“Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br />ullamco.”</p>
            <h6 className='fw-normal'>Meredith Grant <span>- Host Mother</span></h6>
        </Row>
      </Container>
    </div>
  )
}

export default ReviewPart
