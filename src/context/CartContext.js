import {createContext, useState} from 'react'; 

export const CartContext = createContext ();


export const CartContextProvider = ({children}) => {

   const [cart,setCart] = useState([]);

   const addItem = (item,quantity) =>{
    
    if (!InCart(item.id)){

        setCart([...cart, {item,quantity}])
    }else{

        const updateCart = [...cart]

        updateCart.forEach(element =>{
            if(element.item.id === item.id){
                element.quantity += quantity
            }
        })

        setCart(updateCart)

    }

   }

   const InCart = (id) => cart.find(element => element.item.id === id);

   const clear = () => setCart ([]);

   const removeItem = (id) => {
       const cartFilter = cart.filter(element => element.item.id === id)
       setCart(cartFilter) 
   }

   const totalPrice = () => cart.reduce ((acc, element)=> (acc += element.item.price * element.quantity), 0)

   const itemCount = () => {
       return cart.reduce ((acc, item) => (acc += item.quantity), 0)
   }

   console.log('Elementos del carrito',cart);
   return (
       <CartContext.Provider value={{addItem, clear, cart, removeItem,totalPrice,itemCount}}>
           {children}
       </CartContext.Provider>
   )
}