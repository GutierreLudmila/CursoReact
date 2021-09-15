import ItemCount from "./ItemCount"
import {useEffect, useState} from "react" 

const ItemDetail = (props) => {

   
    return(
         <>
        <div className = "items">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <p>{props.price}</p>
        </div>
        <div>
            <ItemCount />
            {/* <button onClick={handleClick}>Termina tu compra</button> */}
        </div>
        </>
     )
}

export default ItemDetail