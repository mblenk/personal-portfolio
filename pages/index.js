import Head from "next/head"
import About from "../components//about/About"
import Navbar from "../components/Navbar"
import Projects from "../components/projects/Projects"
import ProjectModal from "../components/projects/ProjectModal"
import Contact from "../components/contact/Contact"
import { projectData } from "../data/projectData"
import { useRef, useEffect, useState } from 'react'
import { gsap } from "gsap";


export default function Home() {
  const [activeSlide, setActiveSlide] = useState(null)
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
      <Head>
        <title>Matt Blenkinsop - Developer Portfolio</title>
        <meta name="description" content="I am a self-taught javascript developer skilled in creating full-stack web applications." />
      </Head>
      <main className="relative bg-black text-white tracking-wide">
        <Navbar activeSlide={activeSlide} />
        <div className="h-screen w-screen overflow-y-auto overflow-x-hidden perspective scroll-smooth">
          <About /> 
          <Projects setActiveSlide={setActiveSlide} />
          <Contact />
        </div>
        <div className="bg-black fixed top-0 left-0 h-full w-full flex justify-center items-center" ref={intro}>
              <div className="text-green-500 p-10">
                <h1 className="bg-black overflow-hidden text-center">
                  <span className="text translate-y-full inline-block text-7xl" ref={text1}>Matt Blenkinsop</span>
                </h1>
                <h1 className="bg-black overflow-hidden text-center">
                  <span className="text translate-y-full inline-block text-5xl" ref={text2}>Web Developer</span>
                </h1>
              </div>
            </div>
            <div className="bg-green-500 fixed top-0 left-0 w-full h-full translate-y-full" ref={slider}></div>
        { activeSlide && <ProjectModal setActiveSlide={setActiveSlide} number={activeSlide} data={projectData} /> }      
      </main>
    </>
  )
}





          