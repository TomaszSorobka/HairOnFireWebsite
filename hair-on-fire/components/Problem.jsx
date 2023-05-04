import React from 'react';
import Link from 'next/link';

const Problem = ({problem: {headline, url, category}}) => {
  return (
    <div>
        <Link href={url} >
            <div className='product-card product-image'>
                <p className = "product-name">
                    {headline}
                </p>
                <p className = "product-price">
                    {category}
                </p>
            </div>    
        </Link>
    </div>
  )
}

export default Problem