import React from 'react'

export default function SingleProducts({product}) {
    const {id, name, image, description, price, category, isFeature} = product;
  return (
    <div className='mb-3'>
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <p>Price: ${price}</p>
    <p>{isFeature? "Featured Category" : "Feature is not available"}</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Add to cart</button>
    </div>
  </div>
</div>
    </div>
  )
}
