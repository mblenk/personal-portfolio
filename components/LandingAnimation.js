import React from 'react'

export default function LandingAnimation() {
  return (
    <div className='w-full mx-auto h-full flex justify-center items-center min-h-full bg-background overflow-hidden'>
        <div className="landing-box md:landing-box-md lg:landing-box">
            <div className="lightbar-sm md:lightbar-md lg:lightbar"></div>
            <div className='absolute top-0 left-0 w-full h-full bg-background toplayer'></div>
            <h2 className='landing-animation-sm md:landing-animation-md lg:landing-animation text-5xl md:text-6xl lg:text-8xl'>Matt Blenkinsop</h2>
        </div>
    </div>
  )
}
