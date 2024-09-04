import React from 'react'
import './HDropdown.css'

const HDropdown = () => {
  return (
    <div>
        <ul className='d-flex nav'>
            <li className='dropdown position-relative ms-5'>
                <a href="#" className='text-decoration-none fs-6 fw-medium text-center pt-4'>Home</a>
                <div className='dropdown-menuu position-absolute'>
                    <ul className='p-0 m-0'>
                        <li><a href="#" className='text-decoration-none fs-6 fw-medium'>Home One</a></li>
                        <li><a href="#" className='text-decoration-none fs-6 fw-medium'>Home Two</a></li>
                        <li><a href="#" className='text-decoration-none fs-6 fw-medium'>Home Three</a></li>
                        <li><a href="#" className='text-decoration-none fs-6 fw-medium'>Home Four</a></li>
                    </ul>
                </div>
            </li>
            <li className='dropdown position-relative ms-5'>
                <a href="#" className='text-decoration-none fs-6 fw-medium text-center pt-4'>About</a>
                <div className='dropdown-menuu position-absolute'>
                    <ul className='p-0 m-0'>
                        <li><a href="#" className='text-decoration-none fs-6 fw-medium'>About</a></li>
                        <li><a href="#" className='text-decoration-none fs-6 fw-medium'>Team</a></li>
                        <li><a href="#" className='text-decoration-none fs-6 fw-medium'>Restaurant</a></li>
                    </ul>
                </div>
            </li>
            <li className='dropdown position-relative ms-5'>
                <a href="#" className='text-decoration-none fs-6 fw-medium text-center pt-4'>Menu</a>
                <div className='dropdown-menuu position-absolute'>
                    <ul className='p-0 m-0'>
                        <li><a href="#" className='text-decoration-none fs-6 fw-medium'>Menu</a></li>
                        <li><a href="#" className='text-decoration-none fs-6 fw-medium'>Milk Shake</a></li>
                        <li><a href="#" className='text-decoration-none fs-6 fw-medium'>Frappe</a></li>
                        <li><a href="#" className='text-decoration-none fs-6 fw-medium'>Boba Tea</a></li>
                        <li><a href="#" className='text-decoration-none fs-6 fw-medium'>Slushy</a></li>
                    </ul>
                </div>
            </li>
            <li className='dropdown position-relative ms-5'>
                <a href="#" className='text-decoration-none fs-6 fw-medium text-center pt-4'>Gallery</a>
                <div className='dropdown-menuu position-absolute'>
                    <ul className='p-0 m-0'>
                        <li><a href="#" className='text-decoration-none fs-6 fw-medium'>Gallery</a></li>
                        <li><a href="#" className='text-decoration-none fs-6 fw-medium'>Gallery 02</a></li>
                    </ul>
                </div>
            </li>
            <li className='dropdown position-relative ms-5'>
                <a href="#" className='text-decoration-none fs-6 fw-medium text-center pt-4'>Blog</a>
                <div className='dropdown-menuu position-absolute'>
                    <ul className='p-0 m-0'>
                        <li><a href="#" className='text-decoration-none fs-6 fw-medium'>Blog Classic</a></li>
                        <li><a href="#" className='text-decoration-none fs-6 fw-medium'>Blog Single 02</a></li>
                        <li><a href="#" className='text-decoration-none fs-6 fw-medium'>Blog Details</a></li>
                        <li><a href="#" className='text-decoration-none fs-6 fw-medium'>Not Found</a></li>
                    </ul>
                </div>
            </li>
            <li className='dropdown position-relative ms-5'>
                <a href="#" className='text-decoration-none fs-6 fw-medium text-center pt-4'>Contact</a>
            </li>
        </ul>
    </div>
  )
}

export default HDropdown
