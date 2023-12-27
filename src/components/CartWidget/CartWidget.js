// import cart from './assets/cart-check-fill.svg'
import { useContext } from "react";
import { CartContext2 } from '../../context/CartContext2';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const CartWidget = () => {
  
  const {cantTot} = useContext(CartContext2); 

  return(
      // <div>
      //     <button >
      //         <img src={cart} style={{width: '2rem', height:'auto'}} alt='cart'/>
      //         4 
      //     </button>
          
      // </div>

      <div className="d-flex">
        {/* <a href="/cart" id="linkCarro" className="d-flex btn btn-outline-dark fs-5 p-1" > */}
         <Link to="/cart" className="d-flex btn btn-outline-dark fs-5 p-1">
          <i className="bi-cart-fill me-1"></i>
          {/* <img  src={cart} alt='cart'/> */}
            <span id="cantCarrito" className="badge bg-dark text-white ms-1 pt-2 rounded-pill">{cantTot}</span>
        {/* </a> */}
        </Link>
      </div>



  )
}

export default CartWidget;