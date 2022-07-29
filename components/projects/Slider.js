import Carousel from 'better-react-carousel'
import ProjectCard from './ProjectCard'

export default function Slider({ setActiveSlide, data }) {

  return (
    <div className="mt-12 relative">
        <Carousel 
            cols={1} rows={1} gap={10} showDots={true} 
            dotColorActive={'rgb(34 197 94)'} loop 
            containerStyle={{
                padding: '20px 10px 10px 10px',
                borderRadius: '10px'
            }}
        >
          {data.map(item => (
            <Carousel.Item key={item.index}>
              <ProjectCard setActiveSlide={setActiveSlide} index={item.index} image={item.imageLink} />
            </Carousel.Item>
          ))}
        </Carousel>
    </div>
   
  )
}

/* <Carousel.Item>
                <ProjectCard setActiveSlide={setActiveSlide} index={1} image={"/golf-hcap-calc.png"} />
            </Carousel.Item>
            <Carousel.Item>
                <ProjectCard setActiveSlide={setActiveSlide} index={2} image={"/portfolio-page.png"} />
            </Carousel.Item>
            <Carousel.Item>
                <ProjectCard setActiveSlide={setActiveSlide} index={3} image={"/toil-tracker.png"} />
            </Carousel.Item>
            <Carousel.Item>
                <ProjectCard setActiveSlide={setActiveSlide} index={4} image={"/golf-stats.png"} />
            </Carousel.Item> */

