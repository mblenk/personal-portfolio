import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'



export default function ProjectDetail({ data, index }) {
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)
  const url = process.env.NEXT_PUBLIC_GUEST_ACCESS_CREATE
  const router = useRouter()

  const handleClick = async () => {

    setIsPending(true)
    try {
        const res = await axios(url,
        { 
            withCredentials: true, 
            credentials: 'include' 
        })
        if(res.data.token){
          const url = `https://solschfantasydraft.co.uk/login?token=${res.data.token}`
          router.push(url)
        }

        // setAccessSent(true)
        // setIsPending(false)
    } catch(err) {
        console.log(err)
        setIsPending(false)
        alert('There was an error creating the guest access token. Please try again later, or use the contact form to get in touch and an email access link can be provided.')
    }
    
}

  return (
    <>
        <h2 className='text-2xl lg:text-4xl underline font-bold mb-4'>{data.title}</h2>
        <h3 className=''>{data.useage}</h3>
        { !data.host && data.title !== 'Portfolio Page' && <a href={data.url} target="_blank" rel="noreferrer" className="general-btn-sm md:general-btn" disabled>This project is not currently being hosted</a>}
        { data.host && !data.guest_access && <a href={data.url} target="_blank" rel="noreferrer" className="general-btn-sm md:general-btn">Click here for a live version hosted with {data.host}</a>}
        { data.host && data.guest_access && !isPending && <button className='general-btn-sm md:general-btn' onClick={handleClick}>Click here for a live version hosted with {data.host}</button>}
        { data.host && data.guest_access && isPending && <button className='general-btn-sm md:general-btn' disabled>Creating access token...</button>}
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
