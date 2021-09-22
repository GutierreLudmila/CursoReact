import {useEffect, useState} from "react"
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"



const ItemListContainer = ({greeting}) => {


    const [products,setProducts] = useState ([]);
    const {categoryId} = useParams()

    useEffect (() => {
 
        fetch ("https://mocki.io/v1/03e64626-7641-4f99-945e-a37ba19750fa")
        .then((response) => response.json())
        .then((data) => { 

          if(categoryId){
            const cat = data.filter (data => data.categoryId === categoryId)
            setProducts(cat) 
          }else{
            setProducts(data)
          }

           }
              
    )},[categoryId])
    
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