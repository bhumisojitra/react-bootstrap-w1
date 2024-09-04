import React from 'react'
import Header from '../../Component/Header/Header'
import Banner from '../../Component/Banner/Banner'
import Juices from '../../Component/Juices/Juices'
import Beverage from '../../Component/Beverage/Beverage'
import Deals from '../../Component/Deals/Deals'
import Recipe from '../../Component/Recipe/Recipe'
import Product from '../../Component/Product/Product'
import Review from '../../Component/Review/Review'
import Blog from '../../Component/Blog/Blog'
import Gallery from '../../Component/Gallery/Gallery.jsx'
import Footer from '../../Component/Footer/Footer.jsx'

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Juices />
      <Beverage />
      <Deals /> 
      <Recipe />
      <Product />
      <Review />
      <Blog />
      <Gallery />
      <Footer />
    </>
  )
}

export default Home
