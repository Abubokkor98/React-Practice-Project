import React, { useEffect, useState } from 'react'
import SingleProducts from './SingleProducts';

export default function AllProducts() {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('fakeData.json')
        .then(res=>res.json())
        .then(data=>setProducts(data.products))
    },[])
  return (
    <div className='mt-10'>
        {
            products.map(product=><SingleProducts product={product} key={product.id}></SingleProducts>)
        }
    </div>
    
  )
}
