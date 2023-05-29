import cart from './assets/cart-check-fill.svg'


const CartWidget = () => {
    return(
        // <div>
        //     <button >
        //         <img src={cart} style={{width: '2rem', height:'auto'}} alt='cart'/>
        //         4 
        //     </button>
            
        // </div>

        <form class="d-flex">
          <a href="" id="linkCarro" class="d-flex btn btn-outline-dark fs-5 p-1" >
            <i class="bi-cart-fill me-1"></i>
            {/* <img  src={cart} alt='cart'/> */}
              <span id="cantCarrito" class="badge bg-dark text-white ms-1 rounded-pill">0</span>
          </a>
        </form>



    )
}

export default CartWidget;