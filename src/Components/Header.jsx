import React from 'react'

export default function Header() {
  return (
    <nav className='flex justify-between bg-gray-400 p-4 font-bold text-2xl'>
        <h1>logo</h1>
        <ul className='flex gap-5'>
            <li>HOME</li>
            <li>Product</li>
            <li>Cart 1</li>
            <li>$ 500</li>
        </ul>
        
    </nav>
  )
}
