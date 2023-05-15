import React from 'react'
import Link from 'next/link'

const HeroBanner = () => {
  return (
    <div className = "hero-banner-container">
        <div>
       
            <p className="beats-solo">Every great business starts with a problem</p>
            <h3>Need problems?</h3>
            <h1>We got you!</h1>
            <img src="img/onfire.png" alt="problem"
            className="hero-banner-image"/>
        </div>

        <div>
            <Link href="/about">
                <button type="button">Learn more</button>
                
            </Link>
            <div className="desc">
                <h5>Who is a &lsquo;hair on fire&rsquo; customer?</h5>
                <p>Urgent and frustrated customer who is in desperate need of a solution to problem.</p>
            </div>
        </div>
        
    </div>
  )
}



export default HeroBanner