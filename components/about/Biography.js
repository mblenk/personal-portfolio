import { useState } from 'react'

export default function Biography() {
    const [longText, setLongText] = useState(false)

  return (
    <div className='flex flex-col mt-12 lg:mt-0 lg:w-1/2'>
        <div className="relative">
            <img src="/me.jpeg" alt="Profile Image" className="relative rounded-full w-full object-cover border-green-500 border-4 hover:z-20 "/>
            <div className='flex my-4 gap-4 justify-center -z-10'>
                <button className='bg-green-500 text-white p-3 rounded-xl text-center cursor-pointer drop-shadow-lg transition ease-in hover:bg-white hover:text-green-500 duration-100 font-semibold' onClick={() => setLongText(false)}>Short version</button>
                <button className='bg-green-500 text-white p-3 rounded-xl text-center cursor-pointer drop-shadow-lg transition ease-in hover:bg-white hover:text-green-500 duration-100 font-semibold' onClick={() => setLongText(true)}>Long version</button>
            </div>
        </div>
        <div className="h-1/2 lg:max-h-[18rem] z-10 p-2 lg:overflow-auto "> 
            <div className="">
                { !longText && <p className="animate-fadein">So you want the short story? Well I was first introduced to coding at the end of 2021 and was immediately hooked. I made the decision to quit my job as a Global Buyer and teach myself to code. I started with the basics of HTML, CSS and Javascript and then began experimenting with different projects, experiencing equal amounts of satisfation and frustration along the way! <br /><br/>In my spare time I like to keep active and am keen on rock climbing, running, squash and golf. I&apos;m based in Nottingham in the UK which is very convenient for long walks in the Peak District.</p>}

                { longText && <>
                    <p className="animate-fadein">Ok settle in, here&apos;s the long version. We&apos;ll start in 2016 when I graduated from Nottingham University with a law degree. At this point I&apos;d already decided that a career as a lawyer didn&apos;t interest me but had no idea what to do with my life. Like most graduates I started applying for every job I could find that looked remotely interesting and that I could adapt the skillset of a law degree to. Eventually I was offered a job as a Procurement Graduate at a large Railway OEM. After two years on a graduate scheme rotating through different departments I took on a full-time role as a Commodity Buyer. Over the next three years I moved from being a Commodity Buyer to working as a Regional Buyer and eventually a Global Buyer, responsible for projects in the UK and internationally whilst working with suppliers based across the globe.</p>
                    <br />
                    <p className="animate-fadein">After 5 years in the company I was looking for the next challenge but was starting to realise that Procurement wasn&apos;t the career path that I could see myself in for the rest of my working life. I&apos;d learned so much during my time there and was exposed to so many manufacturing and commercial concepts but the role wasn&apos;t offering the fulfilment that I wanted. I had always enjoyed building/creating things and found a lot of the engineering discussions at work very interesting so I knew that I wanted a career that would afford opportunities to build/create/design rather than just paying and then managing suppliers to do those jobs for me like in my procurement role. It was around this time that I was building some Microsoft Excel sheets with some complicated formulae and functionalities and I found this incredibly satisfying and was able to spend hours doing this without really realising. The obvious step up from this was coding and so I began to research what it takes to learn it and begin a career path.</p>
                    <br />
                    <p className="animate-fadein">Thankfully I had easy access to someone who works as a Full Stack developer in the form of my younger brother and he pointed me in the direction of Free Code Camp. After spending almost the entire Christmas break sat in front of my laptop working through their courses I realised that this was something that I really enjoyed and appealed to my problem-solving personality. I decided to take the plunge and handed in my notice at work. I continued to work on the FCC courses alongside my notice period and 3 months later I finished my final day as a procurement professional and my coding journey could hit full speed. I began to work through project after project, each time trying to learn new skills. I&apos;ve loved learning Javascript and want to continue to develop my skills both in Javascript and eventually in other languages. My next target is to learn either C++ or Python.</p>
                    <br />
                    <p className="animate-fadein">When I&apos;m not at my laptop I like to keep active. Last year my girlfriend insisted I go rock climbing with her and now I&apos;m hooked, having completed both a top-roping course and lead climbing course with the plan to progress to climbing bigger walls outdoors. I also do a lot of running, having done a number of half marathons and one marathon, as well as some triathlons a few years back. I play in a squash team in the local Nottinghamshire leagues and have also taken up golf over the last couple of years. I also enjoy reading and anything true-crime related on Netflix. I speak very good French and am also fluent in German, having studied it alongside my law degree and spent a year living in Hannover as part of the Erasmus scheme.</p>
                    <br />
                    <p>If you have any questions about anything, please feel free to get in touch using the details in the Contact section at the bottom of the page! </p>
                </>
                }
            </div>
        </div>
    </div>     
  )
}

// transition ease-in hover:scale-150 hover:-translate-x-20 hover:translate-y-20 hover:border-8 duration-150

// lg:transition lg:ease-in lg:hover:scale-200 lg:hover:text-sm lg:hover:-translate-x-48 lg:hover:-translate-y-20 lg:hover:border-8 lg:hover:border-green-500 lg:hover:bg-black lg:hover:p-4 lg:hover:rounded-lg lg:duration-150