import {useEffect, useState} from "react"
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"
import {firestore} from "../components/Firebase"


const ItemListContainer = ({greeting}) => {


    const [products,setProducts] = useState ([]);
    const {categoryId} = useParams()

    useEffect (() => {

      console.log(firestore)

      const db = firestore;

      const collection = firestore.collection("productos")
      
      const query = collection.get()

      query
      .then((snapshot) => {
            const docs = snapshot.docs

            const productos = []

            docs.forEach((doc) =>{
              const docSnapshot = doc
              console.log (docSnapshot.id)
              console.log (docSnapshot.data())

              const producto_con_id = {...docSnapshot.data(), id:docSnapshot.id}      
              productos.push(producto_con_id)
            })
                   setProducts(productos)   
            })
          .catch ((error) => {
            console.error(error)
          })
              
    },[categoryId])
    
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