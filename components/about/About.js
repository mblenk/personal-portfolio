import Biography from './Biography.js';
import SkillCard from './SkillCard.js'

export default function About() {

  return (
    <div className="py-6 md:py-12 relative m-0 overflow-y-hidden" id="about" >
        <div className="w-5/6 mx-auto lg:flex relative sm:gap-12 lg:gap-16 bg-" >
            <Biography />
            <div className="m-0 lg:w-1/2 my-auto">
              {/* <p className="text-secondary md:text-xl mb-8">My skills include:</p> */}
              <div className="grid grid-cols-3 mt-4 lg:w-5/6 bg-neon neon mb-4">
                <SkillCard image={"/html-1.svg"} title={"HTML"} colour={"bg-green-500"}/>
                <SkillCard image={"/css-3.svg"} title={"CSS/Tailwind"} colour={"bg-blue-500"}/>
                <SkillCard image={"/javascript-1.svg"} title={"Javascript"} colour={"bg-red-500"}/>
                <SkillCard image={"/react-2.svg"} title={"ReactJS"} colour={"bg-orange-500"}/>
                <SkillCard image={"/nextjs-2.svg"} title={"NextJS"} colour={"bg-pink-500"}/>
                <SkillCard image={"/typescript.svg"} title={"Typescript"} colour={"bg-yellow-500"}/>
                <SkillCard image={"/node-js-white.svg"} title={"NodeJS"} colour={"bg-purple-500"}/>
                <SkillCard image={"/mongodb-icon-1.svg"} title={"MongoDB"} colour={"bg-teal-500"}/>
                <SkillCard image={"/firebase-1.svg"} title={"Firebase"} colour={"bg-cyan-500"}/>
                <SkillCard image={"/aws.svg"} title={"AWS"} colour={"bg-gray-500"}/>
                <SkillCard image={"/vercel.svg"} title={"Vercel"} colour={"bg-amber-500"}/>
                <SkillCard image={"/digitalocean.svg"} title={"DigitalOcean"} colour={"bg-indigo-500"}/>
              </div>
            </div>
        </div>
    </div>
  )
}

