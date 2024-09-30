import React,{createContext, useState} from 'react';

const CartContext = createContext({
    cart: [],
    cartLength: 0,
    addToCart: ()=>{}
})

export const CartContextProvider = (props) => {

    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart((prevState) => {
            return [...prevState, item];
       })
    }

    const cartContext = {
        cart: cart,
        cartLength: cart.length,
        addToCart: addToCart
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartContext;

