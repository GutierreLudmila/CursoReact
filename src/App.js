import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import Cart from "./components/Cart"
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { CartContextProvider } from "./context/CartContext"


const App = () => {
    return (
        <CartContextProvider>
            <BrowserRouter>
                <NavBar/>
            
                <Switch>
                  <Route key="" path= "/" component={ItemListContainer} exact />
                  <Route key="" path= "/category/:categoryId" component={ItemListContainer} />
                  <Route key="" path= "/item/:id" component={ItemDetailContainer} />
                  <Route key="" path ="/cart"  component={Cart}></Route>
                 </Switch>
            </ BrowserRouter>
        </CartContextProvider>
    )
}

export default App 