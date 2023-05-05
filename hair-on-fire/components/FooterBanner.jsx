import React from 'react'
import Link from 'next/link';

const FooterBanner = () => {
  return (
    <div className = "footer-banner-container">
      <div className='banner-desc'>
        <div className='left'>
          <p>paragraph</p>
          <h3>h3-1</h3>
          <h3>h3-2</h3>
          <p>p2</p>
        </div>

        <div className='right'>
          <p>paragraph</p>
          <h3>h3-1</h3>
          <p>p2</p>
          <Link href={'https://twitter.com/tomaszsorobka'}>
            <button type='button'>zobacz moj twitter</button>
          </Link>
        </div>

        <img
          src='C:\Users\TS\Desktop\HairOnFireWebsite-safe\HairOnFireWebsite\hair-on-fire\img\parenting.png'
          className="footer-banner-image"
        />

      </div>
    </div>
  )
}

export default FooterBanner