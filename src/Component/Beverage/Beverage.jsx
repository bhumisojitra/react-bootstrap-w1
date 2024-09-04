import React from 'react'
import Title from '../Title/Title'
import { Container, Row } from 'react-bootstrap'
import beverage from '../../assets/beverage/beverage.png'
import BeverageSection from '../BeverageSection/BeverageSection'
import Beverage1 from '../../assets/beverage/Beverage-1.jpg'
import Beverage2 from '../../assets/beverage/Beverage-2.jpg'
import Beverage3 from '../../assets/beverage/Beverage-3.jpg'
import Beverage4 from '../../assets/beverage/Beverage-4.jpg'
import Beverage5 from '../../assets/beverage/Beverage-5.jpg'
import Beverage6 from '../../assets/beverage/Beverage-6.jpg'
import Beverage7 from '../../assets/beverage/Beverage-7.jpg'
import Beverage8 from '../../assets/beverage/Beverage-8.jpg'
import BtnOutline from '../BtnOutline/BtnOutline'

const Beverage = () => {
  return (
    <div className='pt-100 position-relative'>
        <img src={beverage} alt="beverage img" className='position-absolute'/>
        <Container>
            <Row>
                <div className='text-center mb-3'>
                    <Title contenth6={"Best for You"} contenth2={"Our Beverage"}/>
                </div>
                <div className='d-flex'>
                    <BeverageSection bevImg={Beverage1} bevName={"Milkshake"}/>
                    <BeverageSection bevImg={Beverage2} bevName={"Frappe"}/>
                    <BeverageSection bevImg={Beverage3} bevName={"Boba Drinks"}/>
                    <BeverageSection bevImg={Beverage4} bevName={"Mojito"}/>
                </div>
                <div className='d-flex'>
                    <BeverageSection bevImg={Beverage5} bevName={"Slushy"}/>
                    <BeverageSection bevImg={Beverage6} bevName={"Hot Chocolate"}/>
                    <BeverageSection bevImg={Beverage7} bevName={"smoothie"}/>
                    <BeverageSection bevImg={Beverage8} bevName={"coffee"}/>
                </div>
                <div className='text-center'>
                    <BtnOutline btnName={"View All Products"}/>
                </div> 
            </Row>
        </Container>
    </div>
  )
}

export default Beverage
