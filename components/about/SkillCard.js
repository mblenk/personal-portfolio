import React from 'react'

export default function SkillCard({ image, title, colour }) {
  return (
    <div className={`w-30 h-24 lg:w-full lg:h-40 p-1 md:p-3 rounded-xl ${colour}  lg:hover:animate-pulse`}>
        <img src={image} alt="" className="h-3/4 w-full" />
        <h2 className='text-sm md:text-xl text-white drop-shadow-lg text-center mt-1 lg:mt-2'>{title}</h2>
    </div>
  )
}
