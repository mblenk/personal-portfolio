import { useState, useEffect } from 'react'
import NavigationOption from './NavigationOption'
import Link from 'next/link'


export default function Navbar({ activeSlide }) {

  return (    
      <nav className="z-10 w-5/6 mx-auto p-4 flex justify-center md:justify-end">
        <div className="md:mr-10 flex gap-4 text-secondary">
          <Link href='#about'>
            <a className='neon-button-sm md:neon-button'>About Me</a>
          </Link>
          <Link href='#projects'>
            <a className='neon-button-sm md:neon-button'>My Projects</a>
          </Link>
          <Link href='#side-projects'>
            <a className='neon-button-sm md:neon-button'>Side Projects</a>
          </Link>
          <Link href='#contact'>
            <a className='neon-button-sm md:neon-button'>Get in Touch</a>
          </Link>
        </div>
      </nav>      
  )
}


