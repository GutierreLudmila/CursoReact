import ItemCount from "./ItemCount"
import ItemList from "./ItemList"

const ItemListContainer = ({greeting}) => {
    return (
        <div className = "tienda-container">
          <h2> {greeting}</h2>
          <div>
              <ItemList />
          </div>
          <div>
            <ItemCount stock="5" initial="1" onAdd={(cantidad) => {console.log(cantidad)}}/>
          </div>
        </div>
    )
}

export default ItemListContainer