import React, { useState } from 'react'
import axios from 'axios'
import e from 'cors'

export default function GuestAccessModal({ setGuestAccessModal }) {
    const [email, setEmail] = useState('')
    const [accessSent, setAccessSent] = useState(false)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsPending(true)
        try {
            const res = await axios.post('http://localhost:5000/api/user/createguestuser', {
                email
            },
            { 
                withCredentials: true, 
                credentials: 'include' 
            })
            console.log(res)

            setAccessSent(true)
            setIsPending(false)
        } catch(err) {
            console.log(err)
            setError(err.message + " - Error creating access. Please use the contact form to let me know and I can create an access link for you. Alternatively please try again later.")
            setIsPending(false)
        }
        
    }

  return (
    <div className={`fixed top-0 left-0 z-20 w-full h-full flex justify-center items-center bg-white/50 animate-fadein`} onClick={() => setGuestAccessModal(false)}>
        <div className='bg-background rounded-xl w-11/12 h-3/4 lg:w-1/2 text-center p-6 relative' onClick={e => e.stopPropagation()}>
            <h2 className='text-2xl underline mb-4'>Guest Access</h2>
            <p>This site is password protected. To access you will need an authorised access link. Please provide your email below and a link will be emailed to you. This email address will not be stored.</p>
            <p>Once your link has been emailed, your access will be valid for 30 minutes. Once your access has expired, you will need to request a new link in order to access the site again.</p>
            <form onSubmit={handleSubmit}>
                <label className='flex flex-col justify-center items-center gap-2 my-4'>
                    <span>Email:</span>
                    <input 
                        type="email" 
                        className='w-11/12 lg:w-1/2 bg-background border-2 border-neon rounded-xl p-2'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                { !isPending && !accessSent && <button className='general-btn-sm mx-auto' type='submit'>Request Access</button>}
                { isPending && !accessSent && <button className='general-btn-sm mx-auto' disabled>Requesting...</button>}
                { !isPending && accessSent && <button className='general-btn-sm mx-auto' disabled>Access sent!</button>}
                { !isPending && accessSent && <p className='mt-4'>Access request successful. Please check your inbox for your link. If you can't find the email, please check your junk folder.</p>}
                { error && <p className='mt-4'>{error}</p>}
            </form>
            <button className="absolute top-2 right-2" onClick={() => setGuestAccessModal(false)}>
                <img src="close_menu.png" alt="" height="40" width="40" />
            </button>
        </div>
    </div>
  )
}
