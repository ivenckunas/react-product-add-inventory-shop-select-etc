import React from 'react'
import SingleProduct from './SingleProduct'

function Inventory({ products, selected, setSelected }) {
  return (
    <div className='prodInv'>
      {products.map((x, i) => <SingleProduct
        selected={selected === i}
        setSelected={setSelected}
        index={i}
        key={i} product={x} />)}
      < button > Sell product</button>
    </div >
  )
}

export default Inventory