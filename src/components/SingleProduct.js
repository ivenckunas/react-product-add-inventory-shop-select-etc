import React from 'react'

function SingleProduct({ product, selected, setSelected, index }) {

  return (
    <div onClick={() => setSelected(index)} className={`singleProd ${selected ? 'selected' : ''}`}>
      <img src={product.photo} alt="" />
      <h3>Price: {product.price}</h3>
    </div>
  )
}

export default SingleProduct