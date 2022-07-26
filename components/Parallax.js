import { useRef, useEffect } from 'react'
import { gsap } from "gsap";

export default function Parallax({ contentVisible, endOfParallax }) {
    const myRef = useRef()
    const text1 = useRef()
    const text2 = useRef()
    const slider = useRef()
    const intro = useRef()

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power1.out" } })

        tl.to(text1.current, { y: "0%", duration: 1.5, stagger: 0.25 })
        tl.to(text2.current, { y: "0%", duration: 1, stagger: 0.25 })
        tl.to(slider.current, { y: "-100%", duration: 1.5, delay: 0.5 })
        tl.to(intro.current, { y: "-100%", duration: 1 }, "-=1")
    })


  return (
    <>
        <header className="relative flex justify-center items-center preserve-3d h-full w-full">
            <div className={endOfParallax ? "sky-scrolled" : "sky-showing"}></div>
            <img 
              src="/clouds.png" 
              className={endOfParallax ? "hide-clouds" : "clouds"}
            />
            <img 
              src="/sun.png" 
              className="sun"
            />
            <img 
              src="/mountain_scene.png" 
              // className={contentVisible ? "hide-mountains" : "mountains"}
              className='mountains'
            />
            <img 
              src="/forest_path.png" 
              // className={contentVisible ? "hide-forest" : "forest"}
              className='forest'
            />
            <h1 className="drop-shadow-2xl font-bold text-green-700 text-7xl absolute mb-96 font-sans" ref={myRef}>Welcome</h1>
            <h4 className="drop-shadow-2xl font-bold text-green-700 text-3xl absolute mb-56">Scroll down to learn more about me...</h4>
            <img src="/down_icon.png" alt="" className="h-18 w-18 animate-bounce mb-24" />
            <div className="bg-black fixed top-0 left-0 h-full w-full flex justify-center items-center" ref={intro}>
              <div className="text-green-700 p-10">
                <h1 className="bg-black overflow-hidden text-center">
                  <span className="text translate-y-full inline-block text-7xl" ref={text1}>Matt Blenkinsop</span>
                </h1>
                <h1 className="bg-black overflow-hidden text-center">
                  <span className="text translate-y-full inline-block text-5xl" ref={text2}>Web Developer</span>
                </h1>
              </div>
            </div>
            <div className="bg-green-700 fixed top-0 left-0 w-full h-full translate-y-full" ref={slider}></div>
        </header>
        <div className="speed-1 h-full -z-10"></div>  
        <div className="speed-1 h-full -z-10"></div>  
        <div className={`speed-1 h-full -z-10 ${endOfParallax ? "transition ease-in bg-black duration-700" : "transition ease-in bg-transparent duration-700"} `}></div> 
    </>
  )
}
