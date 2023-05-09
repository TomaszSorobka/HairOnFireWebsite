import React from 'react';
import Link from 'next/link';

let links = {
    'parenting':'https://cdn-icons-png.flaticon.com/512/3079/3079247.png',
    'lifehacks':'https://cdn-icons-png.flaticon.com/512/306/306446.png',
    'education':'https://cdn-icons-png.flaticon.com/512/3778/3778120.png',
    'videoediting':'https://cdn-icons-png.flaticon.com/512/6979/6979672.png',
    'entrepreneurship': 'https://cdn-icons-png.flaticon.com/512/5225/5225015.png',
    'entrepreneur': 'https://cdn-icons-png.flaticon.com/512/5225/5225015.png'
}


const Problem = ({problem: {headline, url, category}}) => {
    if (url == null) return;

    if (headline.length > 70) {
        headline = headline.substring(0,67);
        headline = headline.concat('...');
    }
  return (
    <div>
        <Link href={url} target='_blank'>
            <div className='product-card product-image'>
                <img 
                    src={links[category.toLowerCase()]}
                    width={100}
                    height={100}
                    className="product-image"
                />
                <p className = "product-name">
                    {headline}
                </p>
                <div className='product-div'>
                    <p className = "product-price">
                    {category.toLowerCase()}
                    </p>
                </div>
                
            </div>    
        </Link>
    </div>
  )
}

export default Problem