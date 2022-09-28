import React from 'react'

export default function SkillCard({ image, title, colour }) {
  return (
    <div className={`max-w-32 max-h-28 lg:max-w-full lg:max-h-40 p-1 md:p-3 ${colour} lg:hover:animate-pulse`}>
        <img src={image} alt="" className="h-3/4 w-full" />
        <h2 className='text-sm md:text-xl text-secondary drop-shadow-lg text-center mt-1 lg:mt-2'>{title}</h2>
    </div>
  )
}
