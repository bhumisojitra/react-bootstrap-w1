import React from 'react'
import './Footer.css'
import footer1 from '../../assets/footer/footer-pattern-1.png'
import footer2 from '../../assets/footer/footer-pattern-2.png'
import footer3 from '../../assets/footer/pattern-6.png'
import { Container, Row } from 'react-bootstrap'
import FooterTitle from '../FooterTitle/FooterTitle'
import FooterForm from '../FooterForm/FooterForm'

const Footer = () => {
  return (
    <div className='footer position-relative bg-black overflow-hidden'>
        <img src={footer3} />
        <img src={footer1} className='position-absolute start-0 bottom-0'/>
        <img src={footer2} className='position-absolute end-0 bottom-0'/>
        <Container>
            <Row className='text-white footer-content'>
                <div className="col-6">
                    <Row>
                        <div className="col-6">
                            <FooterTitle footerT={"Contact Us"}/>
                            <p>
                                6Fifth Avenue 5501, Broadway, New York Morris Street London 1234
                            </p>
                            <ul>
                                <li><span><i className='bi bi-send-x'></i></span>Your mail @ gmail.com</li>
                                <li><span><i className="bi bi-telephone-fill"></i></span><a href="#" className='text-white'>(123) 4567 89000</a></li>
                            </ul>
                        </div>
                        <div className="col-6 ps-5">
                            <FooterTitle footerT={"Useful Links"}/>
                            <ul className='ps-0 link'>
                                <li>
                                    <a href="$">Home</a>
                                </li>
                                <li>
                                    <a href="$">About us</a>
                                </li>
                                <li>
                                    <a href="$">Blogs</a>
                                </li>
                                <li>
                                    <a href="$">Terms Of Service</a>
                                </li>
                                <li>
                                    <a href="$">Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                    </Row>
                </div>
                <div className="col-6">
                    <Row>
                        <div className="col-6">
                            <FooterTitle footerT={"Follow Us Now"}/>
                            <ul>
                                <li>
                                    <a href="#" className='text-white'>
                                        <span><i className="bi bi-facebook" style={{color: 'white'}}></i></span>
                                        facebook
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className='text-white'>
                                        <span><i className="bi bi-twitter" style={{color: 'white'}}></i></span>
                                        twitter
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className='text-white'>
                                        <span><i className="bi bi-instagram" style={{color: 'white'}}></i></span>
                                        instagram
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className='text-white'>
                                        <span><i className="bi bi-dribbble" style={{color: 'white'}}></i></span>
                                        dribbble
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <FooterTitle footerT={"Subscribe"}/>
                            <FooterForm />
                        </div>
                    </Row>
                </div>
            </Row>
            <div className="copy text-center text-white fw-medium fs-6 mt-4">
                © 2024 foodily All Rights Reserved.
            </div>
        </Container>
    </div>
  )
}

export default Footer
