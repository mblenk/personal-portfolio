import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react'

export default function ContactForm() {
    const formRef = useRef()
    const publicKey = process.env.NEXT_PUBLIC_USER_ID
    const serviceKey = process.env.NEXT_PUBLIC_SERVICE_ID
    const templateKey = process.env.NEXT_PUBLIC_TEMPLATE_ID
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [isPending, setIsPending] = useState(false)
    const [sent, setSent] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsPending(true)
        await emailjs.sendForm(serviceKey, templateKey, formRef.current, publicKey)
        .then((result) => {
            console.log(result.text);
          }, (error) => {
            console.log(error.text);
          });
        setIsPending(false)
        setSent(true)
        setEmail('')
        setName('')
        setMessage('')
        setTimeout(() => {
            setSent(false)
        }, 2000)
    }

  return (
    <form className='flex flex-col lg:w-2/3 pb-10' ref={formRef} onSubmit={handleSubmit}>
        <h2 className='text-3xl text-white font-semibold underline'>How to get in touch:</h2>
        <h4 className='mt-4 text-xl'>You can email me directly at:</h4>
        <h4 className='mt-4 text-xl'>mgblenkinsop@outlook.com</h4>
        <h3 className='my-4 text-xl'>Alternatively please get in touch using the form below</h3>
        <h3 className='text-xl'>Email:</h3>
        <input className="text-white bg-black p-2 w-full rounded-lg my-2 border-4 outline-0 border-green-500" required type="email" name="reply_to" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <h3 className='text-xl'>Name:</h3>
        <input className="text-white bg-black p-2 w-full rounded-lg my-2 border-4 outline-0 border-green-500" required type="text" name="from_name" value={name} onChange={(e) => setName(e.target.value)}/>
        <h3 className='text-xl'>Message:</h3>
        <textarea className="text-white bg-black p-2 w-full rounded-lg my-2 border-4 outline-0 border-green-500" required type="text" name="message" rows="5" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        { !isPending && !sent && <button className="mt-2 font-semibold text-white bg-green-500 p-2 rounded-xl text-center cursor-pointer drop-shadow-lg transition ease-in hover:bg-white hover:text-green-500 duration-100 w-2/6 max-h-12" type="submit">Send</button>}
        { isPending && <button className="mt-2 flex gap-2 justify-center items-center font-semibold text-white bg-green-500 p-2 rounded-xl text-center cursor-pointer drop-shadow-lg transition ease-in hover:bg-white hover:text-green-500 duration-100 w-2/6 max-h-12" type="submit" disabled>
            <img src="/loading.png" alt="loading icon" className='h-full animate-spin'/>
            <span>Sending...</span>
        </button>}
        { sent && <button className="mt-2 flex gap-2 justify-center items-center font-semibold text-white bg-green-500 p-2 rounded-xl text-center cursor-pointer drop-shadow-lg transition ease-in hover:bg-white hover:text-green-500 duration-100 w-2/6 max-h-12" type="submit" disabled>
            <img src="/sent.png" alt="loading icon" className='h-full animate-pulse'/>
            <span>Sent!</span>
        </button>}
    </form>
  )
}
