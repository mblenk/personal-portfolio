import Head from "next/head"
import About from "../components//about/About"
import { useState } from 'react'
import Navbar from "../components/Navbar"
import Projects from "../components/projects/Projects"
import Parallax from "../components/Parallax";
import ProjectModal from "../components/projects/ProjectModal"
import Contact from "../components/contact/Contact"
import { projectData } from "../data/projectData"


export default function Home() {
  const [endOfParallax, setEndOfParallax] = useState(false)
  const [contentVisible, setContentVisible] = useState(false)
  const [activeSlide, setActiveSlide] = useState(null)

  return (
    <>
      <Head>
        <title>Matt Blenkinsop - Developer Portfolio</title>
        <meta name="description" content="I am a self-taught javascript developer skilled in creating full-stack web applications." />

        {/* <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Lato&apos;display=swap" rel="stylesheet"></link>

        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto&apos;display=swap" rel="stylesheet"></link>
        
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Raleway&apos;display=swap" rel="stylesheet"></link> */}
      </Head>
      <main className="relative bg-black text-white tracking-wide">
        <Navbar activeSlide={activeSlide} />
        <div className="h-screen w-screen overflow-y-auto overflow-x-hidden perspective scroll-smooth">
          <Parallax 
            contentVisible={contentVisible} 
            endOfParallax={endOfParallax} 
          />
          <About 
            setEndOfParallax={setEndOfParallax} 
            setContentVisible={setContentVisible} 
          /> 
          <Projects setActiveSlide={setActiveSlide} />
          <Contact />
        </div>
        { activeSlide && <ProjectModal setActiveSlide={setActiveSlide} number={activeSlide} data={projectData} /> }      
      </main>
    </>
  )
}





          