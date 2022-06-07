import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  
  return (
    <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <span>REDUX STORE</span>
        <div>
            <Link className="navLink" to="/">Home</Link>
            <Link className="navLink" to="/cart">Cart</Link>
            <span className='cartCount'>Cart Items: {cart.length}</span>
        </div>
    </div>
  )
}

export default Navbar