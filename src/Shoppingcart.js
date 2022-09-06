import React, { useContext } from 'react'
import CartContext from './Contextprovider'

const Shoppingcart = () => {
    const {items} =useContext(CartContext)
  return (
    <div>
    {
        items.map((item)=>{
            return<div className='shopping-bag'>
                <h2>{item.name}</h2>
                <h2>{item.image}</h2>
            </div>
        })
    }

    </div>
  )
}

export default Shoppingcart