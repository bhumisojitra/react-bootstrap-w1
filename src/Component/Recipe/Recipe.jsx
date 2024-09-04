import React from 'react'
import Title from '../Title/Title'
import circle1 from '../../assets/recipe/icon-1.png'
import circle2 from '../../assets/recipe/icon-2.png'
import circle3 from '../../assets/recipe/icon-3.png'
import circles from '../../assets/recipe/circles.png'
import recipe1 from '../../assets/recipe/recipe-1.png'
import recipe2 from '../../assets/recipe/recipe-2.png'
import recipe3 from '../../assets/recipe/recipe-3.png'
import recipe4 from '../../assets/recipe/recipe-4.png'
import recipe from '../../assets/recipe/recipe.png'
import { Container, Row } from 'react-bootstrap'
import './Recipe.css'

const Recipe = () => {
  return (
    <div className='recipe position-relative pt-100'>
        <div className="text position-absolute start-0 end-0" style={{top: '40px'}}>yummy</div>
        <img src={circle1} className='position-absolute' style={{left: '50px'}} />
        <img src={circle2} className='position-absolute' style={{right: '20%', top: '50px'}}/>
        <img src={circle3} className='position-absolute' style={{right: '5%', bottom: '-15%'}}/>
        <div className='text-center'>
            <Title contenth6={"Best for You"} contenth2={"Detox Smoothie Recipe"}/>
        </div>
        <Container className='pt-100'>
            <img src={circles} className='position-absolute' style={{left: '37%'}}/>
            <Row>
                <div className="col-5 pt-50">
                    <div className="recipe-box position-relative">
                        <div className="icon position-absolute top-0 end-0">
                            <img src={recipe1} />
                        </div>
                        <div className='recipe-contanet1'>
                            <h6 className='fw-semibold'>Cucumber</h6>
                            <p>Us percipit urbanitas referrentur ea. Mei at <br /> numquam molestiae</p>
                        </div>
                    </div>
                    <div className="recipe-box position-relative" style={{marginRight: '50px'}}>
                        <div className="icon position-absolute top-0 end-0">
                            <img src={recipe2} />
                        </div>
                        <div className='recipe-contanet'>
                            <h6 className='fw-semibold'>Apple</h6>
                            <p>Us percipit urbanitas referrentur ea. <br /> Mei at numquam molestiae</p>
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <img src={recipe} alt="recipe" className='position-absolute' style={{bottom: '30px'}}/>
                </div>
                <div className="col-5 pt-50">
                    <div className="recipe-box2 position-relative" style={{textAlign: 'left'}}>
                        <div className="icon position-absolute top-0" style={{left: '8%'}}>
                            <img src={recipe3} />
                        </div>
                        <div className='recipe-contanet'>
                            <h6 className='fw-semibold'>Lemon</h6>
                            <p>Us percipit urbanitas referrentur ea. Mei at <br /> numquam molestiae</p>
                        </div>
                    </div>
                    <div className="recipe-box2 position-relative" style={{textAlign: 'left', marginLeft: '50px'}}>
                        <div className="icon position-absolute top-0" style={{left: '9%'}}>
                            <img src={recipe4} />
                        </div>
                        <div className='col-11 recipe-contanet'>
                            <h6 className='fw-semibold'>Fresh Water</h6>
                            <p>Us percipit urbanitas referrentur ea. <br /> Mei at numquam molestiae</p>
                        </div>
                    </div>
                </div>
                
            </Row>
        </Container>
    </div>
  )
}

export default Recipe
