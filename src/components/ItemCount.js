import {useState} from "react"


const ItemCount = ({ stock, initial,  onAdd }) => {
 // Destucturing
    const [contador, setContador] = useState (parseInt(initial))

    const sumar = () => {

        if (contador < parseInt(stock)){
            setContador (contador + 1)
        }
    }

    const restarContador = () => {

        if (contador > initial){
            setContador (contador - 1)
        }
    }

    const agregar = () => {
        if (stock > 0 ){
            onAdd (contador)
        }
    }

if (stock > 0){
    return (
        <>
          <div className = "contador-container">
              <p>
                  Vaso de Gomitas
              </p>
              <div className = "contador">
                  <button  onClick={restarContador}>-</button>
                  <p>{contador}</p>
                  <button onClick={sumar}>+</button>
              </div>
              <button id="agregar-carrito" onClick={agregar}> Agregar al carrito</button>
          </div>
        </>
    )
}else {
    return (
        <>
          <div className = "contador-container">
              <p>
                  Vaso de Gomitas
              </p>
              <div className = "contador">
                  <button  onClick={restarContador}>-</button>
                  <p>{contador}</p>
                  <button onClick={sumar}>+</button>
              </div>
              <button id="agregar-carrito" disabled> Agregar al carrito</button>
          </div>
        </>
    )
 }
}

export default ItemCount
