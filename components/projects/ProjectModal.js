import { useState } from 'react'
import ReactPlayer from 'react-player'

export default function ProjectModal({ number, setActiveSlide, data }) {
  const index = number - 1
  const [fadeOut, setFadeOut] = useState(false)

  const handleClick = () => {
    setFadeOut(true)
    setTimeout(() => {
      setActiveSlide(null)
    }, 500)
  }

  return (
        <div className={`fixed top-0 left-0 z-10 w-full h-full bg-black/70 animate-fadein ${ fadeOut ? "animate-fadeout" : "animate-fadein" }`} onClick={handleClick}>
            <div className="bg-black lg:my-12 mx-auto p-4 w-11/12 h-full lg:w-3/4 lg:h-3/4 rounded-xl relative lg:flex lg:gap-4 overflow-y-auto overflow-x-hidden border-green-500 border-8">
                <div className="lg:w-3/5 flex flex-col gap-2 p-1">
                  <h2 className='text-2xl lg:text-4xl underline font-bold mb-4'>{data[index].title}</h2>
                  <h3 className=''>{data[index].useage}</h3>
                  <h4 className='text-lg lg:text-xl underline font-semibold'>Skills learned</h4>
                  <p className=''>{data[index].learned}</p>
                  <h4 className='text-lg lg:text-xl underline font-semibold'>Background</h4>
                  <p className=''>{data[index].desc}</p>
                  <h4 className='text-lg lg:text-xl underline font-semibold'>Challenges faced</h4>
                  <p className=''>{data[index].challenges}</p>
                  <br />
                </div>
                <div className='lg:w-2/5 p-1 text-center'>
                  <div className='h-1/2 w-full flex justify-center items-center lg:mt-10 mb-10'>
                    <ReactPlayer url={data[index].videoLink} playing={true} loop={true} controls={true} height="100%" width="100%" />
                  </div>
                  <h4 className=' text-2xl underline font-semibold'>Stack used:</h4>
                  <ul className='text-center text-lg lg:text-xl'>
                    { data[index].stack.map(item => (
                      <li className='mt-2' key={item}>{item}</li>
                    ))}
                  </ul>
                  <a href={data[index].githubLink} target="_blank" rel="noreferrer" className='flex items-center gap-2 bg-green-500 rounded-full p-4 w-fit hover:border-2 hover:border-white mx-auto mt-4'>
                    <img src="/GitHub-Mark-Light-64px.png" alt="GitHub Logo" width="30" height="10"/>
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

