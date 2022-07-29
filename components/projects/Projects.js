import { useRef, useEffect, useState } from 'react'
import { gsap } from "gsap";
import Slider from './Slider'
import { projectData } from '../../data/projectData'


export default function Projects({ setActiveSlide }) {
  // const [onScreen, setOnScreen] = useState(false)
  const fullProjects = projectData.filter(item => item.project === "full")
  const miniProjects = projectData.filter(item => item.project === "mini")

  // const showTitle = useRef()
  // const p = useRef()
  // const r = useRef()
  // const o = useRef()
  // const j = useRef()
  // const e = useRef()
  // const c = useRef()
  // const t = useRef()
  // const s = useRef()

  // useEffect(() => {
  //     const observer = new IntersectionObserver((entries, observer) => {
  //       const entryOne = entries[0];
  //       setOnScreen(entryOne.isIntersecting);
  //     });
  //     observer.observe(showTitle.current, { threshold: 1.0 });
  // }, [])

  // useEffect(() => {
  //     const tl = gsap.timeline({ defaults: { ease: "power1.out" } })

  //     tl.to(p.current, { x: "0%", opacity:1, duration: 0.05 })
  //     tl.to(r.current, { x: "0%", opacity:1, duration: 0.05 })
  //     tl.to(o.current, { x: "0%", opacity:1, duration: 0.05 })
  //     tl.to(j.current, { x: "0%", opacity:1, duration: 0.05 })
  //     tl.to(e.current, { x: "0%", opacity:1, duration: 0.05 })
  //     tl.to(c.current, { x: "0%", opacity:1, duration: 0.05 })
  //     tl.to(t.current, { x: "0%", opacity:1, duration: 0.05 })
  //     tl.to(s.current, { x: "0%", opacity:1, duration: 0.05 })
  // }, [onScreen])

  return (
    <div className="bg-black relative overflow-y-auto overflow-x-hidden py-24 border-t-8 border-t-green-500" id="projects">
      <div className="w-5/6 lg:w-3/4 mx-auto">
        <h1 className="text-green-500 text-6xl underline mt-10 flex font-bold">Projects</h1>
        {/* { onScreen && <h1 className="text-green-500 text-6xl underline mt-10 flex font-bold">
          <span className="-translate-x-120 opacity-0" ref={p}>P</span>
          <span className="-translate-x-120 opacity-0" ref={r}>r</span>
          <span className="-translate-x-120 opacity-0" ref={o}>o</span>
          <span className="-translate-x-120 opacity-0" ref={j}>j</span>
          <span className="-translate-x-120 opacity-0" ref={e}>e</span>
          <span className="-translate-x-120 opacity-0" ref={c}>c</span>
          <span className="-translate-x-120 opacity-0" ref={t}>t</span>
          <span className="-translate-x-120 opacity-0" ref={s}>s</span>
        </h1>} */}
        <br />
        <h3 className="text-xl">Here are some examples of recent projects I&apos;ve created using different tech stacks. The code for all of these apps is available on GitHub if you wish to view the source code behind them.</h3>
        <br />
        <h4 className="text-xl text-center">Click the images below to learn more...</h4>
        <h1 className="text-green-500 text-3xl underline mt-10 flex font-bold">Main Projects</h1>
        <Slider setActiveSlide={setActiveSlide} data={fullProjects} />
        <br />
        <br />
        <h1 className="text-green-500 text-3xl underline mt-10 flex font-bold" id="side-projects">Side Projects</h1>
        <Slider setActiveSlide={setActiveSlide} data={miniProjects} />
      </div>
    </div>
  )
}
