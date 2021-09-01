import {useEffect, useState} from "react" 
import ItemDetail from "./ItemDetail"

const URL = "https://mocki.io/v1/36cc74dd-ec20-4261-86bf-2d0fea9acc89" ;
const id = "04"; 

const ItemDetailContainer = () => {

    const [dataProd,setDataProd] = useState ([]);

    useEffect (() =>{
        fetch (URL)
        .then((response) => response.json())
        .then((data) => {
              const ID = data.find (data => data.id == id)
              setDataProd(ID)
            })
    },[])

    return(
        <div>
           <div>
               < ItemDetail dataProd = {dataProd}/>
           </div>
        </div>
    )

}

export default ItemDetailContainer 
