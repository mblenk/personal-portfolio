import React from 'react'

export default function FormButtons({ isPending, sent }) {
  return (
    <>
        { !isPending && !sent && <button className="w-1/4 h-10 mt-2 general-btn-sm md:general-btn" type="submit">Send</button>}
        { isPending && <button className="w-1/4 h-10 mt-2 general-btn-sm md:general-btn" type="submit" disabled>
            <img src="/loading-black.png" alt="loading icon" className='w-8 animate-spin'/>
            <span>Sending...</span>
        </button>}
        { sent && <button className="w-1/4 h-10 mt-2 general-btn-sm md:general-btn" type="submit" disabled>
            <img src="/sent-black.png" alt="loading icon" className='w-6 animate-pulse'/>
            <span>Sent!</span>
        </button>}
    </>
  )
}
