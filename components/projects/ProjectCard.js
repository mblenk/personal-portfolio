import { useState } from 'react'

export default function ProjectCard({ image, setActiveSlide, index }) {


  return (
        <div className="lg:h-96 w-full bg-secondary rounded-lg">
            <img src={image} alt="Golf Handicap Calculator webpage image" className='w-full h-fullrounded-lg object-cover cursor-pointer' onClick={() => setActiveSlide(index)} />
        </div>
  )
}
  