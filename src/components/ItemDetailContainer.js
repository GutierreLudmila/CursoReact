import {useEffect, useState} from "react" 
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail"
import {firestore} from "../components/Firebase"


const ItemDetailContainer = () => {

    const [dataProd,setDataProd] = useState ({});
    const {id} = useParams()

    useEffect (() =>{

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
               setDataProd(productos)   
            })
          .catch ((error) => {
            console.error(error)
          })

    },[id])

    return(
        <div>
           <div>
               < ItemDetail item={dataProd}/>
           </div>
        </div>
    )

}

export default ItemDetailContainer 
