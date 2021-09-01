const ItemDetail = (props) => {
     return(
        <div className = "items">
            <h3>{props.dataProd.title}</h3>
            <p>{props.dataProd.description}</p>
            <p>{props.dataProd.price}</p>
        </div>
     )
}

export default ItemDetail