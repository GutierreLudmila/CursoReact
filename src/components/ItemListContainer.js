import {useEffect, useState} from "react"
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"


const productos = [{
  id: "01", 
  title: "Alfajor", 
  description: "Alfajor de chocolate", 
  price: "$40", 
  pictureUrl: "imgAlfajor" 
},
{
  id: "02", 
  title: "Gomitas Mogul", 
  description: "Gomitas saborizadas", 
  price: "$30", 
  pictureUrl: "imgGomitas" 
},
{
  id: "03", 
  title: "Chocolate", 
  description: "Barra de chocolate negro", 
  price: "$70", 
  pictureUrl: "imgChoco" 
}];

const promesa = new Promise ((resolve, reject) => {
    setTimeout (() => {
      resolve (productos);
      reject (console.log("No se encontraron los productos"))
    },2000)
});


const ItemListContainer = ({greeting}) => {

    const [products,setProducts] = useState ([]);

    useEffect (() => {
      promesa 
              .then( (resultado) => setProducts(resultado))
              .catch(error => error)
              .finally(() => console.log('Fin promesa, se encontraron los productos'))
    },[])

    return (
        <div className = "tienda-container">
          <h2> {greeting}</h2>
          <div>
              <ItemList products={products}/>
          </div>
          <div>
            <ItemCount stock="5" initial="1" onAdd={(cantidad) => {console.log(cantidad)}}/>
          </div>
        </div>
    )
}

export default ItemListContainer