import { useState } from 'react'
import ReactPlayer from 'react-player'
import ProjectDetail from './ProjectDetail'
import TechStack from './TechStack'

export default function ProjectModal({ number, setActiveSlide, data }) {
  const modalData = data.find(project => project.index === number)
  const [fadeOut, setFadeOut] = useState(false)

  const handleClick = () => {
    setFadeOut(true)
    setTimeout(() => {
      setActiveSlide(null)
    }, 500)
  }

  return (
        <div className={`fixed top-0 left-0 z-10 w-full h-full bg-black/70 animate-fadein ${ fadeOut ? "animate-fadeout" : "animate-fadein" }`} onClick={handleClick}>
            <div className="bg-background lg:my-12 mx-auto p-4 w-11/12 h-full lg:w-5/6 lg:h-5/6 rounded-xl relative lg:flex lg:gap-4 overflow-y-auto overflow-x-hidden border-secondary neon border-8">
                <div className="lg:w-3/5 flex flex-col gap-2 p-1">
                  <ProjectDetail data={modalData} />
                </div>
                <div className='lg:w-2/5 h-full p-1 text-center flex flex-col items-center mb-4'>
                  {modalData.videoLink && <div className='h-1/2 w-full flex justify-center items-center lg:mt-10 mb-6'>
                    <ReactPlayer url={modalData.videoLink} playing={true} loop={true} controls={true} height="100%" width="100%" />
                  </div>}
                  <TechStack data={modalData} video={modalData.videoLink}/>
                  <a href={modalData.githubLink} target="_blank" rel="noreferrer" className='general-btn-sm md:general-btn mt-4'>
                    <img src="/GitHub-Mark-64px.png" alt="GitHub Logo" width="30" height="10"/>
                    <span className='font-4xl font-bold'>GitHub</span>
                  </a>
                </div>
                <button className="absolute top-2 right-2" onClick={handleClick}>
                  <img src="close_menu.png" alt="" height="40" width="40" />
                </button>
            </div>
        </div>
  )
}

