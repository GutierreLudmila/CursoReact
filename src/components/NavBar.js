import CartWidget from "./CartWidget"
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <>
         <header>
           <nav>
             <Link to = "/">
               <h1 id = "titulo">
                 Antojitos Bajoneros
               </h1>
              </Link>
              <Link to = "/category/Boxes">Boxes</Link>
              <Link to = "/category/Golosinas">golosinas</Link>
              <Link to = "/category/Snacks">Snacks</Link>
              <CartWidget />
           </nav>
         </header>
        </>
        )
    }
    
    export default NavBar