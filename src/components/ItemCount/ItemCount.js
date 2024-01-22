import { React, useState } from 'react';
import './ItemCount.css';

function ItemCount ({ stock, onAdd, initialQuant = 1 }){

  const [count, setCount] = useState(initialQuant); 
  return(    
    <div className="itemCount mx-auto">
      <div className="contador">
        <button onClick={() => {if(count>1) setCount(count-1) }}> - </button>
        <div> {count} </div>
        <button onClick={() => {if(count < stock) setCount(count+1)}}> + </button>
      </div>
      <button className = 'btnIncrementar ms-2' onClick={() => onAdd(count)}>
        Agregar al carrito
      </button>
    </div>
  )
}

export default ItemCount;