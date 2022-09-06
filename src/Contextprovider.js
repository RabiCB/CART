import { createContext,useState } from "react";
const CartContext =createContext();
export function CartProvider({children}){
    const [items,setItems]=useState([])
    const addtocart=(newitem)=>{ 
        setItems((prevState)=>[...prevState,newitem]);
    }
    return(
        <CartContext.Provider value={{items,addtocart }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContext;