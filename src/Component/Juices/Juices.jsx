import React from 'react'
import './juices.css'
import juices1 from '../../assets/juice/1.png'
import juicesGlass from '../../assets/juice/juice-glass.png'
import Juice from '../../assets/juice/juice.png'
import { Container, Row } from 'react-bootstrap'
import Title from '../Title/Title'
import BtnOutline from '../BtnOutline/BtnOutline'

const Juices = () => {
  return (
    <div className='Juices-section position-relative pt-100'>
      <div className="text position-absolute start-0 end-0">yummy</div>
      <div>
        <img src={juices1} className='position-absolute start-0' style={{top: '-150px', zIndex: '-1'}}/>
        <img src={juicesGlass} className='position-absolute end-0' />
      </div>
      <div>
        <Container>
            <Row>
                <div className="col-7">
                    <img src={Juice} />
                </div>
                <div className="col-5 juice-d">
                    <Title contenth6={"Drink for Health"} contenth2={"Fresh Fruit"} contentSpan={"Juices"}/>
                    <p>
                      Us percipit urbanitas referrentur ea. Mei at numquam molestiae intellegam. Ansed dictas accumsan. Nam sint atqui voluptatibus an, pro ne malis semper perpetua. Nam sint atqui voluptatibus an, pro ne malis semper perpetua.
                    </p>
                    <BtnOutline btnName={"Buy Now"}/>
                </div>
            </Row>
        </Container>
      </div>
    </div>
  )
}

export default Juices
