import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  
  const dispatch = useDispatch();

  const removeProductHandler = (productId) => {
      dispatch(remove(productId));
  }

  return (
    <div>
        <h3>Cart</h3>
        {!cartItems.length && <h5>No items in Cart</h5>}
        {
          cartItems.length 
            ? 
              <div className='cartWrapper'>
                {cartItems.map((product) => <div key={product.id} className='cartCard'>
                    <img src={product.image} alt=''/>
                    <h5>{product.title}</h5>
                    <h5>{product.price}</h5>
                    <button onClick={() => removeProductHandler(product.id)} className='btn'>Remove</button>
                </div>)}
              </div>  
            : 
            ""
        }
    </div>
  )
}

export default Cart