import Carousel from 'better-react-carousel'
import ProjectCard from './ProjectCard'

export default function Slider({ setActiveSlide, data }) {
  const sortDataByIndex = data.sort((a, b) => a.index - b.index) 

  return (
    <div className="mt-8 relative">
        <Carousel 
            cols={1} rows={1} gap={10} showDots={true} 
            dotColorActive={'rgb(34 197 94)'} loop 
            containerStyle={{
                padding: '20px 10px 10px 10px',
                borderRadius: '10px'
            }}
        >
          {sortDataByIndex.map(item => (
            <Carousel.Item key={item.index}>
              <ProjectCard setActiveSlide={setActiveSlide} index={item.index} image={item.imageLink} />
            </Carousel.Item>
          ))}
        </Carousel>
    </div>
   
  )
}



