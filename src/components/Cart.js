import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import {CartContext} from '../context/CartContext'

const Cart = () => {
     
    const {clear, removeItem, cart, totalPrice, itemCount} = useContext(CartContext)

    return(
        <div>
            {cart.length === 0 ? (
                <>
                <h1>No hay productos en el carrito</h1>
                <Link to="/">Volver al Menu</Link>
                </>
            ) : (
                   cart.map(element => {
                       return (
                           <>
                           <div>
                               <h1>{element.item.title}</h1>
                                <button onClick={() => removeItem(element.item.id)}>Eliminar</button>
                            </div>
                            
                              <p>${totalPrice()}</p>
                            </>
                        )
                   })
            ) }

            <button onClick={clear}>Vaciar Carrito</button>
        </div>    
    )

}

export default Cart