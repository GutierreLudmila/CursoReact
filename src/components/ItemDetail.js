import { Link } from "react-router-dom"
import {useContext, useState} from "react" 
import ItemCount from "./ItemCount"
import { CartContext } from "../context/CartContext"


const ItemDetail = ({item}) => {


    const [terminado,setTerminado] = useState (false)
    const {addItem} = useContext (CartContext); 

   const onAdd = (cantidad) => {
       alert(`Agregaste ${cantidad} al carrito`)
       addItem(item,cantidad);
       setTerminado(true)
   }
    return(
         <>
        <div className = "items">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
        </div>
        <div>
            {!terminado ? (
             <ItemCount  stock={5} initial={1} onAdd={(onAdd)}/>
            ) : (
           <Link to="/cart">Termina tu compra</Link> 
            )}
        </div>
        </>
     )
}

export default ItemDetail