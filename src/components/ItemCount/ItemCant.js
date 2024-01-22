import { React, useState } from 'react';
import './ItemCount.css';

const ItemCant = ({ stock, onAdd, initialQuant = 1 })=> {
	const [count, setCount] = useState(initialQuant); 

	const handleChange = (e) => {
		if(e.target.value > 0 && e.target.value <= stock ) {
				setCount(e.target.value)
		}}
 
  return (
    <div className="itemCount mx-auto">
			<div className='contador mx-auto'>
				Cant:
				<input type='number' onChange={handleChange} value={count} style={{width:'60px', height:'25px'}}/>
			</div>
			<button className = 'btnIncrementar ms-2' onClick={() => onAdd(count)}>
				Agregar al carrito
			</button>
  </div>
  )
}

export default ItemCant