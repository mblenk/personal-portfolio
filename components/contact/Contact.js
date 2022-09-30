import React, { useRef, useState } from 'react'
import ContactForm from './ContactForm'
import Downloads from './Downloads'

export default function Contact() {
  

  return (
    <div className="relative overflow-y-auto overflow-x-hidden py-12" id="contact">
        <h2 className="neon-flash-text text-4xl md:text-6xl underline flex font-bold w-5/6 lg:w-3/4 mx-auto">Contact</h2>
        <div className=" w-5/6 lg:w-3/4 lg:flex gap-8 mx-auto mt-10 relative">
            <ContactForm />
            <Downloads />
        </div>
    </div>
  )
}
