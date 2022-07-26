import { useState } from 'react'

export default function ProjectCard({ image, setActiveSlide, index }) {


  return (
    <>
        <div className="lg:h-96 w-full bg-white rounded-lg">
            <img src={image} alt="Golf Handicap Calculator webpage image" className='w-full rounded-lg object-cover' onClick={() => setActiveSlide(index)} />
        </div>
    </>
    
  )
}
  