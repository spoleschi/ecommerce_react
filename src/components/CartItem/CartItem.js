import { useCart } from '../../context/CartContext2'
//import Card from 'react-bootstrap/Card';
//import ItemCount from '../ItemCount/ItemCount';

const CartItem = ({id, title, price, cant, img}) => {
  // id, title, price, galery
  // const { cart } = useContext(CartContext2);
 
  const { removeProduct } = useCart;

  return (
    // <div>
    //   <div className='containerCart'>
    //     {/* <img src={img} alt={name}/> */}
    //     {/* <img variant="top" src= {`../assets/${galery[0].url}`} alt={title}/> */}
    //     <h1 className="name">{title}</h1>
    //     <p className="price">Precio U: ${price}</p>
    //     <p className="">Cantidad: {cant}</p>
    //     <p className="SubTotal">Subtotal: ${cant * price}</p>
    //     <button onClick={()=>removeProduct(id)}> Eliminar</button>

    //   </div>
      // <Card style={{ margin:'1.5rem', borderRadius:'20px', padding:'0.5rem' }}>
      //   <Card.Body style={{ display:'flex', justifyContent:'space-around', alignItems:'center'}}>
      //     <Card.Img style={{ height:'5rem',width:'auto' }} variant="top" src= {img}/>
      //     <Card.Title style={{ margin:'1px',overflow: 'hidden'}}>{title}</Card.Title>
      //     <Card.Text style={{ margin:'0'}} > ${price} </Card.Text>
      //     {/* <ItemCount stock={stock} onAdd={onAddhandler}/>  */}
      //     <Card.Text style={{ margin:'0'}} > Cantidad: {cant} </Card.Text>
      //     <Card.Text> Subtotal: ${cant * price} </Card.Text>
      //   </Card.Body>
      // </Card>

      <tr>
        {/* <td>{title}</td> */}
        <td> <img style={{ height:'4rem',width:'auto' }} src={img} alt={title}/> {title}</td>
        <td>{cant}</td>
        <td className="priority-5">${new Intl.NumberFormat().format(price)}</td>
        <td>${new Intl.NumberFormat().format(price * cant)}</td>
        <td><button className='btn btn-outline-secondary' onClick={()=>removeProduct(id)}>+</button></td>
        <td><button className='btn btn-outline-secondary' onClick={()=>removeProduct(id)}>-</button></td>
        <td><button className='btn btn-outline-secondary' onClick={()=>removeProduct(id)}>X</button></td>
      </tr>

    // </div>

  )
}

export default CartItem;