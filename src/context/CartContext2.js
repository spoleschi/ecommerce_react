import { React, useState, createContext } from 'react'

export const CartContext2 = createContext({
	cart: 0,
	cantTot: 0,
	total: 0,
});

export const CartProvider2 = ( {children} ) => {

	const [cart, setCart] = useState([]);
	const [cantTot, setCantTot] = useState(0);
	const [total, setTotal] = useState(0);
	console.log(cart);

	const addItem = (productToAdd) => {
		console.log(productToAdd)
		if (!isInCart(productToAdd.id)){
			setCart ([...cart,productToAdd]);
			setCantTot(cantTot+Number(productToAdd.cant));
			setTotal(total+Number(productToAdd.cant*productToAdd.price));
			return true;
		}
			
		else return false;
	}

	const isInCart = (id) => {
		return cart.some(prod => prod.id === id);
	} 
	
	const removeProduct = (id) => {
		const restarCant = getProductQuantityAndPrice(id).cant;
		const restarPrice = getProductQuantityAndPrice(id).price;
		const cartNew = cart.filter(prod => prod.id !== id);
		setCart(cartNew);
		setCantTot(cantTot-Number(restarCant));
		setTotal(total-Number(restarCant*restarPrice));
	}

	const getProductQuantityAndPrice = (id) => {
		const product = cart.find(prod => prod.id === id)
	
		return {cant:product?.cant, price:product?.price}
	}

	const clearCart = () => {
		setCart([]);
		setCantTot(0);
		setTotal(0);
	} 	


	return (
		<CartContext2.Provider value={{ cart, cantTot,total, addItem,removeProduct, clearCart }}>
			{children}
		</CartContext2.Provider>
	)

}
