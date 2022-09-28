import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react'
import FormButtons from './FormButtons';
import FormFields from './FormFields';
import HowToGetInTouch from './HowToGetInTouch';

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
      <HowToGetInTouch />
      <FormFields 
        email={email}
        setEmail={setEmail}
        name={name}
        setName={setName}
        message={message}
        setMessage={setMessage}
      />  
      <FormButtons 
        isPending={isPending}
        sent={sent}
      />   
    </form>
  )
}
