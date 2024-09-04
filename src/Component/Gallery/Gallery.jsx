import React from 'react'
import GalleryPart from '../GalleryPart/GalleryPart'
import g1 from '../../assets/gallery/1.jpg'
import g2 from '../../assets/gallery/2.jpg'
import g3 from '../../assets/gallery/3.jpg'
import g4 from '../../assets/gallery/4.jpg'
import g5 from '../../assets/gallery/5.jpg'

const Gallery = () => {
  return (
    <div className='gallery pt-100 d-flex'>
      <GalleryPart ImgG={g1}/>
      <GalleryPart ImgG={g2}/>
      <GalleryPart ImgG={g3}/>
      <GalleryPart ImgG={g4}/>
      <GalleryPart ImgG={g5}/>
    </div>
  )
}

export default Gallery