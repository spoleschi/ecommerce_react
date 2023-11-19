import { React, useState, createContext } from 'react'

export const CartContext = createContext();

export const CartProvider = ( {children} ) => {

	const [cart, setCart] = useState([]);
	console.log(cart);

	const addItem = (productToAdd) => {
		console.log(productToAdd)
		if (!isInCart(productToAdd.id))  setCart ([...cart,productToAdd]);
		else console.log('Ya se agregó ese producto previamente');
	}

	const isInCart = (id) => {
		return cart.some(prod => prod.id === id);
	} 
	
	return (
		<CartContext.Provider value={{ cart, addItem }}>
			{children}
		</CartContext.Provider>
	)

}
