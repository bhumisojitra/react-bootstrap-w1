import React from 'react'
import pattern1 from '../../assets/deals/pattern-1.png'
import pattern2 from '../../assets/deals/pattern-2.png'
import deal from '../../assets/deals/2.jpg'
import dealGlass from '../../assets/deals/deal.png'
import { Container, Row } from 'react-bootstrap'
import './Deals.css'
import Email from '../Email/Email'

const Deals = () => {
  return (
    <div className='position-relative pb-5 w-100 full-height' style={{backgroundImage: `url(${deal})`, backgroundAttachment: 'fixed', backgroundSize: 'cover', marginTop: '100px', }}>
        <img src={pattern1} alt="pattern-1" className='w-100 position-absolute start-0'/>
        <img src={pattern2} alt="pattern-2" className='w-100 position-absolute z-1 bottom-0 start-0' />
        <Container>
            <Row>
                <div className="col-8"> 
                    <div className="content-box position-absolute z-2 d-flex justify-content-center align-items-center">
                        <img src={dealGlass} alt="dealGlass" className='position-absolute'/>
                        <div className='text-center text-white'>
                            <h6 className='fw-normal' style={{fontSize: '24px', letterSpacing:'2px', fontFamily: 'Niconne'}}>30% Off For juice</h6>
                            <h2  className='fw-semibold' style={{lineHeight: '1.3em', marginTop: '8px', fontSize: '48px'}}>Big Deals of the Week</h2>
                            <p className='w-100 mt-3 fs-6'>
                                Us percipit urbanitas referrentur ea. Mei at numquam molestiae <br /> intellegam. Ansed dictas accumsan. 
                            </p>
                            <div className='email'>
                                <h5 className='w-100 fs-6 fw-bold'>To Get New Of Our Deals</h5>
                                <Email />
                            </div>
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
    </div>
  )
}

export default Deals
