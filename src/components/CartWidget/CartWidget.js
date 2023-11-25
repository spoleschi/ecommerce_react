// import cart from './assets/cart-check-fill.svg'
import { useContext } from "react";
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
  
  const {cantTot} = useContext(CartContext); 

  return(
      // <div>
      //     <button >
      //         <img src={cart} style={{width: '2rem', height:'auto'}} alt='cart'/>
      //         4 
      //     </button>
          
      // </div>

      <div className="d-flex">
        <a href="" id="linkCarro" className="d-flex btn btn-outline-dark fs-5 p-1" >
          <i className="bi-cart-fill me-1"></i>
          {/* <img  src={cart} alt='cart'/> */}
            <span id="cantCarrito" className="badge bg-dark text-white ms-1 pt-2 rounded-pill">{cantTot}</span>
        </a>
      </div>



  )
}

export default CartWidget;