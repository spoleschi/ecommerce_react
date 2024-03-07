import React, { useContext } from 'react'
import { CartContext2 } from '../../context/CartContext2'
import CartItem from '../CartItem/CartItem';
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = () => {

  const { cart, clearCart, total } = useContext(CartContext2);

  // return (
  //   <div>
  //     <h1>Carrito</h1>
  //     {
  //       cart.map(prod => <CartItem key={prod.id} {...prod} />)
  //     }
      

  //   </div>
  // )

  if (cart.length === 0){
    return <p className='m-4'> El carrito se encuentra vacío </p>
  }
  else
  {
    return  <section id= "secCarro" className='m-4'>
              <h4 className="modal-title">Carrito de compras</h4>
              <table className="tabla d-flex mt-2 mb-2">
                <tbody id="carrito" >
                  <tr>
                    <th>Producto</th>
                    <th>Cant.</th>
                    <th className="priority-5">Precio</th>
                    <th>Subtotal</th>
                    <th>Quitar</th>
                  </tr>
                  {
                    cart.map(prod => <CartItem key={prod.id} {...prod} />)
                  }
                </tbody>
              </table>
              <p><b> Total compra: <span className='p-3' id="total"> ${new Intl.NumberFormat().format(total)} </span> </b></p>
              <Link to='/' className = 'btn btn-secondary m-2'>Seguir comprando</Link> 
              <button id="vaciar" className="btn btn-secondary m-2" onClick={clearCart}>Vaciar</button>
              <Link to='/checkout' className = 'btn btn-secondary m-2'>Finalizar compra</Link> 
            </section>
              
  }

}

export default Cart;

