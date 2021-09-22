import { Link } from "react-router-dom"
import React, {useContext} from 'react'
import {CartContext} from '../context/CartContext'

const CartWidget = () => {

    const { cart, itemCount} = useContext(CartContext)

    return (
        <>
        <Link to='/cart' id="icono" className="material-icons">shopping_cart</Link>
        {cart.length > 0 && <p id="quantity">{itemCount()}</p>}

        </>
    )
}

export default CartWidget