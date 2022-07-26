import React, { useRef, useState } from 'react'
import ContactForm from './ContactForm'
import Downloads from './Downloads'

export default function Contact() {
  

  return (
    <div className="bg-black relative overflow-y-auto overflow-x-hidden py-24 border-t-8 border-t-green-700" id="contact">
        <h2 className="text-green-700 text-6xl underline flex font-bold w-3/4 mx-auto">Contact</h2>
        <div className="w-3/4 lg:flex gap-8 mx-auto mt-10 relative">
            <ContactForm />
            <Downloads />
        </div>
    </div>
  )
}
