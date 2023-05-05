import React from 'react'
import Link from 'next/link';
import { FaCoffee} from 'react-icons/fa'


const Navbar = () => {
  return (
    <div className='navbar-container site-title-fire'>
      <p>
        <Link href="/">Hair On Fire</Link>
      </p>

      <button type="button" className='cart-icon' onClick='1'>
        <FaCoffee/>
        {/* <span className='cart-item-qty'></span> */}
      </button>
    </div>
  )
}

export default Navbar