import {useEffect, useState} from "react" 
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail"


const ItemDetailContainer = () => {

    const [dataProd,setDataProd] = useState ();
    const {id} = useParams();

    useEffect (() =>{
        fetch ("https://mocki.io/v1/c1824497-c1b0-4ee5-98f4-7b97e270981f")
        .then((response) => response.json())
        .then((data) => {
              const ID = data.find (data => data.id == id)
              setDataProd(ID)
            })

    },[id])

    return(
        <div>
           <div>
               < ItemDetail dataProd = {dataProd}/>
           </div>
        </div>
    )

}

export default ItemDetailContainer 
