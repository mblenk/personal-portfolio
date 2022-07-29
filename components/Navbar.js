import { useState, useEffect } from 'react'
import NavigationOption from './NavigationOption'
import Link from 'next/link'


export default function Navbar({ activeSlide }) {
  const [menuActive, setMenuActive] = useState(false)

  const handleClick = () => {
    menuActive ? setMenuActive(false) : setMenuActive(true)
  }

  return (  
    <>
      { !activeSlide && 
        <nav className="fixed z-20 w-full h-16 md:h-12 px-12">
          <img className={`ml-auto mt-4 h-12 w-12 dropshadow-lg cursor-pointer ${ menuActive ? "animate-pulse" : ""}`} src="/menu.png" alt="Menu Icon" onClick={handleClick}/>
          <div className={`text-green-500 absolute right-6 top-20 p-2 flex flex-col gap-4 font-bold rounded-xl bg-black/90 lg:bg-transparent ${ menuActive ? `transition ease-in translate-x-0 duration-300` : "transition ease-out translate-x-96 duration-1000"}`}>
                {/* <NavigationOption 
                  id={'#about'}
                  name={'About'}
                  menuActive={menuActive}
                  duration={300}
                /> */}
                <Link href='#about'>
                    <a className={`bg-green-500 text-white p-2 rounded-xl text-center cursor-pointer drop-shadow-lg border-green-500 border-4 hover:animate-pulse ${ menuActive ? `transition ease-in translate-x-0 duration-300` : "transition ease-out translate-x-96 duration-1000"}`}>About</a>
                </Link>
                {/* <NavigationOption 
                  id={'#projects'}
                  name={'Projects'}
                  menuActive={menuActive}
                  duration={500}
                /> */}
                <Link href='#projects'>
                    <a className={`bg-green-500 text-white p-2 rounded-xl text-center cursor-pointer drop-shadow-lg border-green-500 border-4 hover:animate-pulse ${ menuActive ? `transition ease-in translate-x-0 duration-500` : "transition ease-out translate-x-96 duration-1000"}`}>Projects</a>
                </Link>
                {/* <NavigationOption 
                  id={'#side-projects'}
                  name={'Mini Apps'}
                  menuActive={menuActive}
                  duration={500}
                /> */}
                <Link href='#side-projects'>
                    <a className={`bg-green-500 text-white p-2 rounded-xl text-center cursor-pointer drop-shadow-lg border-green-500 border-4 hover:animate-pulse ${ menuActive ? `transition ease-in translate-x-0 duration-700` : "transition ease-out translate-x-96 duration-1000"}`}>Side Projects</a>
                </Link>
                {/* <NavigationOption 
                  id={'#contact'}
                  name={'Contact'}
                  menuActive={menuActive}
                  duration={1000}
                /> */}
                <Link href='#contact'>
                    <a className={`bg-green-500 text-white p-2 rounded-xl text-center cursor-pointer drop-shadow-lg border-green-500 border-4 hover:animate-pulse ${ menuActive ? `transition ease-in translate-x-0 duration-1000` : "transition ease-out translate-x-96 duration-1000"}`}>Contact</a>
                </Link>
            </div>
        </nav> }
    </> 
        
  )
}

// { menuActive ? "/close_menu.png" : "/menu.png" }
