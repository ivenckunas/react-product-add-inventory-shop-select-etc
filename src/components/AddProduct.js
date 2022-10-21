import React, { useRef } from 'react'

function AddProduct({ addProd }) {

  const inpRef = useRef()

  return (
    <div>
      <h2>Add new product to inventory</h2>
      <input ref={inpRef} type="text" placeholder='insert product photo url' />
      <button onClick={() => addProd(inpRef.current.value)}>Add new product</button>
    </div>
  )
}

export default AddProduct