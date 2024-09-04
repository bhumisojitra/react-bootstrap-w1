import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './BeverageSection.css'

const BeverageSection = ({ bevImg, bevName }) => {
  return (
    <div className='mt-4'>
      <Container>
        <Row>
            <div className="col-12 Beverag">
                <div className="images">
                    <a href="#">
                        <img src={bevImg} style={{borderRadius: '8px'}}/>    
                    </a>
                </div>
                <h6 className='text-center'>
                    <a href="#">{bevName}</a>
                </h6>
                <p className='text-center'>3 products</p>
            </div>
        </Row>
      </Container>
    </div>
  )
}

export default BeverageSection
