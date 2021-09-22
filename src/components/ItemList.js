 import Item from "./Item"

const ItemList = (props) => {
      return (
          <div className="productos-cont">
             {props.products.map(element => {
                 return <Item key = {element.id} id={element.id} title ={element.title} description={element.description} price={element.price}/>
                })}
          </div>
      )
}

export default ItemList