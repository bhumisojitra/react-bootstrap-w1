import React from 'react'
import './BlogCard.css'
import Card from 'react-bootstrap/Card';
import { Row } from 'react-bootstrap';

const BlogCard = ({ news }) => {
  return (
    <Row>
        <div className="col-4 ms-5">
            <Card style={{ width: '370px', border: 'none' }} className='CardBlog'>
                <Card.Img variant="top" src={news} className='BlogImg'/>
                <div className="overlay-box">
                    <div className="overlay-inner">
                        <div className="content">
                            <a href="#"><i className="bi bi-images"></i></a>
                        </div>
                    </div>
                </div>
                <Card.Body className="blog-card-info text-center">
                    <Card.Title>
                        <h6 className='text-center text-white'>smoothie</h6>
                    </Card.Title>
                    <Card.Text>
                        <div className='pop'>
                            <a href="#" className='fw-semibold'>
                                Broad bean and goats’ cheese <br /> bruschetta
                            </a>
                        </div>
                        <ul className='d-flex post-info align-items-center'>
                            <li style={{paddingLeft: '35px'}}>May 21, 2021</li>
                            <li>2 Comments</li>
                            <li>Share</li>
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    </Row>
    
    
  )
}

export default BlogCard
