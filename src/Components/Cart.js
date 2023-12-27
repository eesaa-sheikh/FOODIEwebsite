import React from 'react'
import Dishes from './Dishes'
import foodOptions from './Dishes'
import BuyCart from './Dishes' 
import { List } from '@mui/material'


const Cart = ({foodOptions, buyCart}) => {


  


  return (
    <div className='cartContainer'>
      <h1 className="cartHeading">Your Shopping Cart</h1>
      <BuyCart className='dishesContainer'>
        {buyCart?.map((data) =>(
            <body className='bodyTitle' key = {data.index}>   
            <List>
              {buyCart}
            </List>

            </body>
        ))};
        </BuyCart>
        <button onClick={()=>console.log(buyCart)} className='secondary-button'>Head to Checkout</button>

    </div>

  )
}

export default Cart
