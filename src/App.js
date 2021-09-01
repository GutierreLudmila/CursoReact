import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"



const App = () => {
    return (
           <>
            <NavBar/>
            <ItemListContainer greeting = "Tienda" /> 
            <ItemDetailContainer />
           </>
    )
}

export default App 