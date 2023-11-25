import { React, useState, createContext } from 'react'

export const CartContext = createContext({
	cart: 0,
	cantTot: 0,
});

export const CartProvider = ( {children} ) => {

	const [cart, setCart] = useState([]);
	const [cantTot, setCantTot] = useState(0);
	console.log(cart);

	const addItem = (productToAdd) => {
		console.log(productToAdd)
		if (!isInCart(productToAdd.id)){
			setCart ([...cart,productToAdd]);
			setCantTot(cantTot+Number(productToAdd.cant));
		}
			
		else console.log('Ya se agregó ese producto previamente');
	}

	const isInCart = (id) => {
		return cart.some(prod => prod.id === id);
	} 
	
	// const removeProduct = (id) => {
	// 	const cartNew = cart.filter(prod => prod.id !== id);
	// 	setCart(cartNew);
	// }

	return (
		<CartContext.Provider value={{ cart, addItem, cantTot }}>
			{children}
		</CartContext.Provider>
	)

}
