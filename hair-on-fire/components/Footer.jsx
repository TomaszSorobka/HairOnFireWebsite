import React from 'react'
import {AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2023 Hair OnFire All rights reserved</p>
      <p className='icons'>
        <AiFillInstagram/>
        <Link href='https://twitter.com/tomaszsorobka'>
          <AiOutlineTwitter/>
        </Link>
        
      </p>
    </div>
  )
}

export default Footer