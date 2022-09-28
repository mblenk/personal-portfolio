import React from 'react'

export default function ProjectDetail({ data, index }) {
  return (
    <>
        <h2 className='text-2xl lg:text-4xl underline font-bold mb-4'>{data.title}</h2>
        <h3 className=''>{data.useage}</h3>
        { !data.url && <a href={data.url} target="_blank" rel="noreferrer" className="general-btn-sm md:general-btn" disabled>This project is not currently being hosted</a>}
        { data.url && data.url !== '/' && <a href={data.url} target="_blank" rel="noreferrer" className="general-btn-sm md:general-btn">Click here for a live version hosted with {data.host}</a>}
        <h4 className='text-lg lg:text-xl underline font-semibold'>Skills learned</h4>
        <p className=''>{data.learned}</p>
        <h4 className='text-lg lg:text-xl underline font-semibold'>Background</h4>
        <p className=''>{data.desc}</p>
        <h4 className='text-lg lg:text-xl underline font-semibold'>Challenges faced</h4>
        <p className=''>{data.challenges}</p>
        <br />
    </>
  )
}
