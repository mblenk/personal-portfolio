import Biography from './Biography.js';
import SkillCard from './SkillCard.js'

export default function About() {

  return (
    <div className="bg-black py-24 relative m-0 overflow-y-hidden" id="about" >
        <div className="w-3/4 mx-auto lg:flex relative sm:gap-12 lg:gap-8" >
            <div className="m-0 lg:w-1/2">
              <h1 className="text-green-500 text-3xl md:text-6xl font-bold mt-4">Hi, I&apos;m Matt 👋</h1>
              <br />
              <p className="text-white md:text-xl">I am a self-taught javascript developer able to create Full-Stack web applications.</p>
              <br />
              <p className="text-white md:text-xl">My skills include:</p>
              <div className="grid grid-cols-3 gap-2 md:gap-4 mt-4 lg:w-5/6">
                <SkillCard image={"/html-1.svg"} title={"HTML"} colour={"bg-green-500"}/>
                <SkillCard image={"/css-3.svg"} title={"CSS"} colour={"bg-blue-500"}/>
                <SkillCard image={"/javascript-1.svg"} title={"Javascript"} colour={"bg-red-500"}/>
                <SkillCard image={"/react-2.svg"} title={"ReactJS"} colour={"bg-orange-500"}/>
                <SkillCard image={"/nextjs-2.svg"} title={"NextJS"} colour={"bg-cyan-500"}/>
                <SkillCard image={"/tailwindcss.svg"} title={"Tailwind"} colour={"bg-yellow-500"}/>
                <SkillCard image={"/nodejs.svg"} title={"NodeJS"} colour={"bg-purple-500"}/>
                <SkillCard image={"/mongodb-icon-1.svg"} title={"MongoDB"} colour={"bg-teal-500"}/>
                <SkillCard image={"/firebase-1.svg"} title={"Firebase"} colour={"bg-cyan-500"}/>
              </div>
            </div>
            <Biography />
        </div>
    </div>
  )
}

