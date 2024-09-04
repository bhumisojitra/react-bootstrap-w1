import React from 'react'
import { Container, Nav, Navbar, Dropdown } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from '../../assets/logo/logo.png'
import HDropdown from '../HDropdown/HDropdown';

const Header = () => {
  return (
    <header>
      <Navbar expand="lg" className=" position-absolute z-1 w-100"> 
      <Container>
        <Navbar.Brand href="#home" className='m-3'>
            <img src={logo} />
        </Navbar.Brand>
          <Nav className="ms-auto">
            <HDropdown/>
          </Nav>
        <div className="header_cart">
            <ul className="d-flex align-items-center justify-content-center mb-0">
                <li style={{marginLeft: '6px'}}>
                    <a href="#" className='rounded-circle'>
                        <i className="bi bi-search text-white fs-5"></i> 
                    </a>
                </li>
                <li style={{marginLeft: '6px'}}>
                    <a href="#" className='rounded-circle'>
                        <i className="bi bi-list text-white fs-2 ms-4"></i>
                    </a>
                </li>
            </ul>
        </div>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header;