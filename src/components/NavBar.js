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
              <Link to = "/boxes">Boxes</Link>
              <Link to = "/golosinas">golosinas</Link>
              <Link to = "/snacks">Snacks</Link>
              <CartWidget />
           </nav>
         </header>
        </>
        )
    }
    
    export default NavBar