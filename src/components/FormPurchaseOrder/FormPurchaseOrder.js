import React from 'react'
import { NotificationContext } from '../../Notification/NotificationServices';
import { CartContext2 } from '../../context/CartContext2'

const FormPurchaseOrder = (datos) => {

  const { cart, clearCart, total } = useContext(CartContext2);

  return (
    
    <section id= "secProductos" className='m-4'>
      <h4 className="modal-title">Compra realizada</h4>
      <table className="tabla d-flex mt-2 mb-2">
        <tbody id="carrito" >
          <tr>
            <th>Producto</th>
            <th>Cant.</th>
            <th className="priority-5">Precio</th>
            <th>Subtotal</th>
          </tr>
          {
            cart.map(prod => <CartItem key={prod.id} {...prod} />)
          }
        </tbody>
      </table>
      <p><b> Total compra: <span className='p-3' id="total"> ${new Intl.NumberFormat().format(total)} </span> </b></p>
      
      <h4 className="modal-title">Datos comprador</h4>
      <div>
        <label>Nombre: { datos.nombre }</label>
      </div>


      <Link to='/checkout' className = 'btn btn-secondary m-2'>Finalizar compra</Link> 
    </section>

  )
}

export default FormPurchaseOrder