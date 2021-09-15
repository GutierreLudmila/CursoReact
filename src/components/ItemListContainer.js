import {useEffect, useState} from "react"
import { useParams } from "react-router-dom";
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
    const {id} = useParams()

    useEffect (() => {
 
        fetch ("https://mocki.io/v1/36cc74dd-ec20-4261-86bf-2d0fea9acc89")
        .then((response) => response.json())
        .then((data) => { 

          if(id){
            const prod = data.filter (data => data.id == id)
            setProducts(prod) 
          }else{
            setProducts(data)
          }

           }
              
    )},[id])
    
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