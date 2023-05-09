import React from 'react'
import Link from 'next/link';

const FooterBanner = () => {
  return (
    <div className = "footer-banner-container">
      <div className='banner-desc'>
        <div className='left'>
          <p>Do you have any suggestions for this site?</p>
          <h3>Reach out to us!</h3>
          <h3>Contact:</h3>
          <p>example@email.com</p>
        </div>

        <div className='right'>
          <p>Check out my Twitter!</p>
          <h3>Thanks!</h3>
          <p></p>
          <Link href={'https://twitter.com/tomaszsorobka'}>
            <button type='button'>My Twitter</button>
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