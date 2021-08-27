import {useEffect} from "react"
import Item from "./Item"

const promesa = new promise ((res,rej) =>{
    setTimeout (() =>{
        console.log(" id, title, description, price, pictureUrl")
        res()
        rej()
    },2000 )
})



const ItemList = () => {


    return (
        <div>
            <Item />
        </div>
    )
}

export default ItemList