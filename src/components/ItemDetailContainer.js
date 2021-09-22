import {useEffect, useState} from "react" 
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail"


const ItemDetailContainer = () => {

    const [dataProd,setDataProd] = useState ({});
    const {id} = useParams()

    useEffect (() =>{
        fetch ("https://mocki.io/v1/03e64626-7641-4f99-945e-a37ba19750fa")
        .then((response) => response.json())
        .then(data => { 
            const ID = data.find ((element) => element.id === id)
            setDataProd (ID)
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
