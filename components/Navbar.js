import { useState, useEffect } from 'react'
import NavigationOption from './NavigationOption'
import Link from 'next/link'


export default function Navbar({ activeSlide }) {

  return (  
    <>
      { !activeSlide && 
        <nav className="fixed w-full h-16 md:h-12 px-12">
          <Link>
            
          </Link>
        </nav> }
    </> 
        
  )
}

// { menuActive ? "/close_menu.png" : "/menu.png" }
