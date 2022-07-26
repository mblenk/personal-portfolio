import React from 'react'

export default function Downloads() {
  return (
    <div className='lg:w-1/3 flex flex-col items-center gap-8 lg:pl-10 lg:border-l-2 lg:border-l-green-700 pb-10'>
        <h2 className='text-3xl text-green-700 font-semibold underline'>Links/downloads:</h2>
        <a href="/dummy.pdf" target="_blank" rel="noreferrer" className='bg-white p-2 rounded-xl text-green-700 text-center cursor-pointer drop-shadow-lg border-green-700 border-4 transition ease-in hover:border-8 hover:rounded-full duration-100 w-2/3 h-20 flex gap-2 items-center justify-center'>
            <img src="/download.png" alt="" className='h-10'/>
            <span className='font-semibold'>Download CV</span>
        </a>
        <a href="https://github.com/mblenk" target="_blank" rel="noreferrer" className='bg-white p-2 rounded-xl text-green-700 text-center cursor-pointer drop-shadow-lg border-green-700 border-4 transition ease-in hover:border-8 hover:rounded-full duration-100 w-2/3 h-20 flex gap-2 items-center justify-center'>
            <img src="/GitHub-Mark-64px.png" alt="" className='h-10'/>
            <span className='font-semibold'>GitHub</span>
        </a>
        <a href="https://www.linkedin.com/in/matthew-blenkinsop-589910116/" target="_blank" rel="noreferrer" className='bg-white p-2 rounded-xl text-green-700 text-center cursor-pointer drop-shadow-lg border-green-700 border-4 transition ease-in hover:border-8 hover:rounded-full duration-100 w-2/3 h-20 flex gap-2 items-center justify-center'>
            <img src="/LI-In-Bug.png" alt="" className='h-10'/>
            <span className='font-semibold'>LinkedIn</span>
        </a>
    </div>
  )
}
