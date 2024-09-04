import React from "react";
import { Container } from "react-bootstrap";
import Title from "../Title/Title";
import './Blog.css'
import b5 from '../../assets/blog/pattern-5.png'
import BlogCard from "../BlogCard/BlogCard";
import news1 from '../../assets/blog/news-1.jpg'
import news2 from '../../assets/blog/news-2.jpg'
import news3 from '../../assets/blog/news-3.jpg'


const Blog = () => {
    return(
        <div className="blog pt-150 position-relative">
            <img src={b5} className="position-absolute"/>
            <Container>
                    <div className="text-center">
                        <Title contenth6={"News & Recipe"} contenth2={"Our Fruitsome Blog"}/>
                        <h6 className="fw-normal mb-0">Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, <br /> vel scelerisque nisl consectetur et.</h6>
                    </div>
                <div className="pt-50 d-flex">
                    <BlogCard news={news1}/>
                    <BlogCard news={news2}/>
                    <BlogCard news={news3}/>
                </div>
            </Container>
        </div>
    )
}

export default Blog