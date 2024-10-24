import React, { useState } from 'react'
import './CartContainer.css'
import Cart from './Cart'
import About from './About'

export default function CartContainer() {
    const [isActive, SetIsActive] = useState({
        cart: true,
        status:"active"
    })
    
    const handleActiveStatus = (status) =>{
        if (status=="cart"){
            SetIsActive({
                cart: true,
                status:"cart"
            })
        }
        else{
            SetIsActive({
                cart: false,
                status:"about"
            })
        }
    }
    console.log(isActive);
  return (
    <div>
        <h1>CartContainer</h1>
        <div className='flex gap-5 font-semibold'>
        <div onClick={()=>handleActiveStatus('cart')} className={`${isActive.cart?"active btn":"btn"}`}>CART</div>
        <div onClick={()=>handleActiveStatus('About')} className={`${isActive.cart?"btn":"active btn"}`}>About</div>
        </div>

        {isActive.cart?<Cart></Cart>:
        <About></About>}
    </div>
  )
}
