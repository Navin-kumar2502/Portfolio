import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <footer className='footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white'>
        <div className=' grid-cols-2 p-12 flex justify-between'>
            <Image 
            src='/images/logo1.jpg'
            alt="logo"
            width={80}
            height={80}
            />
            <p className='text-slate-600 pt-10'>All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer