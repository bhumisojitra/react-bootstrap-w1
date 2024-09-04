import React from 'react'
import sDesign from '../../assets/juice/s-1.png'

const Title = ({ contenth6, contenth2, contentSpan }) => {
  return (
    <>
      <h6 style={{color: '#beb996', fontSize: '24px', fontWeight: '400px', letterSpacing:'2px', fontFamily: 'Niconne'}}>{contenth6}</h6>
      <h2 style={{color: '#27272f', fontWeight: '600', lineHeight: '1.3em', marginTop: '8px', fontSize: '48px'}}>{contenth2}<span style={{color: '#de9190'}}>{contentSpan}</span></h2>
      <img src={sDesign} style={{width: '70px', height: '22px'}} />
    </>
  )
}

export default Title
