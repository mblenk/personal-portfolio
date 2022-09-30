import React from 'react'

export default function FormFields({ email, setEmail, name, setName, message, setMessage}) {
  return (
    <>
        <h3 className='text-xl'>Email:</h3>
        <input className="text-secondary neon bg-background p-2 w-full rounded-lg my-4 border-secondary border-2" required type="email" name="reply_to" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <h3 className='text-xl'>Name:</h3>
        <input className="text-secondary neon bg-background p-2 w-full rounded-lg my-4 border-secondary border-2" required type="text" name="from_name" value={name} onChange={(e) => setName(e.target.value)}/>
        <h3 className='text-xl'>Message:</h3>
        <textarea className="text-secondary neon bg-background p-2 w-full rounded-lg my-4 border-secondary border-2" required type="text" name="message" rows="5" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
    </>
  )
}
