const Item = (props) => {
    return (
        <div className = "items">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <p>{props.price}</p>
        </div>
    )
    
}

export default Item