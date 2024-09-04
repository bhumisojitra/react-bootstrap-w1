import React from 'react'
import product from '../../assets/product/icon-4.png'
import product1 from '../../assets/product/image-1.jpg'
import product2 from '../../assets/product/pattern-3.png'
import { Container, Row } from 'react-bootstrap'
import Title from '../Title/Title'
import './Product.css'
import BtnOutline from '../BtnOutline/BtnOutline'

const Product = () => {
  return (
    <div className='product mt-100 overflow-hidden position-relative'>
            <img src={product} className='position-absolute start-0 bottom-0'/>
        <Container>
            <Row>
                <div className="col-6 position-relative">
                    <img src={product2} className='position-absolute start-100 z-1 h-100' />
                    <div className='ml-80 product-contanet'>
                        <Title contenth2={"Upcoming Our Beverage"}/>
                        <p className='w-100 fs-6 fw-normal'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className='mt-5'>
                            <BtnOutline btnName={"All Product"}/>
                        </div>
                    </div>
                </div>
                <div className="col-6 p-0">
                    <img src={product1} />
                </div>
            </Row>
        </Container>
    </div>
  )
}

export default Product
