import React from 'react'

export default function TechStack({ data, video }) {
  const length = data.stack.length

  return (
    <>
        <h4 className='text-2xl underline font-semibold'>Stack used:</h4>
        <ul className={`text-center text-lg lg:text-xl ${ length > 4 && video ? "grid gap-x-8 grid-cols-2 " : ""}`}>
          { data.stack.map(item => (
              <li className='mt-2' key={item}>{item}</li>
          ))}
        </ul>
    </>
  )
}
