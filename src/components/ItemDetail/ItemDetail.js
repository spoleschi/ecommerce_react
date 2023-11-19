// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemCant from '../ItemCount/ItemCant';
// import ProductSlider from '../ProductSlider/ProductSlider';
import './ItemDetail.css';
import Carousel from 'react-bootstrap/Carousel';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';



const ItemDetail = ( {id, title, price, galery,stock, desc} ) => {
  
  // const [stockDisp, setStockDisp] = useState(stock);
  const [cantSel, setCantSel] = useState(0);
  const navigate = useNavigate();

  const [inputType, setInputType] = useState('button')

  // function onAddhandler(cant) {
  //   // setStock(setStock - cant)
  //   if (cant <= stock)
  //   {
  //     cant > 1 ? console.log(`Se agregaron ${cant} unidades al carrito`) : console.log('Se agregó 1 unidad al carrito.');
  //     setCantSel(cant)
  //     // setStock(stock-cant); 
  //   }
  //   else
  //   {
  //     console.log('No hay stock suficiente.');
  //     alert('No hay stock suficiente');
  //   }
  // };

  const {addItem} = useContext(CartContext); 
  // console.log (addItem);

  function onAddhandler(cant) {
    // setStock(setStock - cant)
    if (cant <= stock)
    {
      cant > 1 ? console.log(`Se agregaron ${cant} unidades al carrito`) : console.log('Se agregó 1 unidad al carrito.');
      const productToAdd  = {id, title, price, cant}
      setCantSel(cant);
      addItem(productToAdd);
      // setStock(stock-cant); 
    }
    else
    {
      console.log('No hay stock suficiente.');
      alert('No hay stock suficiente');
    }
  };


  const Count = inputType === 'button' ? ItemCount : ItemCant

  return (
    <Card className='border0'>
      {/* <div style={{display:'flex', justifyContent:'center'}}>
        <Card.Img src={`../assets/${img}`} style={{ width:'400px'}} />
      </div> */}

      {/* <div style={{display:'flex', justifyContent:'center'}}>
         <CarouselExample />
        <CarouselDark />
      </div> */}
      
    <div className='card-head'>
      {/* {img.map(imagen=>{return '../assets/'+imagen})} */}
      {/* <ProductSlider img={img.map(imagen=>{return '../assets/'+imagen})} /> */}
      {/* <ProductSlider img={['../assets/Auriculares/Jbl _Quantum_50_Black01.jpg','../assets/Auriculares/318445-300-300.jpg','../assets/Auriculares/image-0fd0d2a336754c62818df5fd296215cc.jpg']} /> */}

      {/* Carrusel con imágenes de la galería del producto */}
      <Carousel variant="dark">
      
        {galery.map(imagen => 
        <Carousel.Item key={imagen.id}>
          <img 
            className="d-block w-100"
            src={'../assets/'+imagen.url}
            alt={imagen.url}
          />
        </Carousel.Item>)}
      </Carousel>

      {/* ---------------------------------------------- */}

      <div className="card-addProd">
        <h2>{title}</h2>
        <h5 className="m-4 text-muted">{price}</h5>
        {cantSel === 0 ? 
          <div>
            <Count stock={stock} onAdd={onAddhandler}/> 
            <button onClick={() => setInputType(inputType === 'button' ? 'input' : 'button')}>{inputType === 'button' ? 'Pasar a input' : 'Pasar a button'}</button>
          </div>:
          <div className='itemCount mx-auto'> 
            <button onClick={() => navigate('/')} className = 'btnIncrementar me-2'>Seguir comprando</button>
            <Link to='/' className = 'btnIncrementar'>Finalizar compra</Link> 
          </div>
        }
      </div>
    </div>
      <Card.Body>
        <Card.Title>Descripción del producto</Card.Title>
        <Card.Text className='m-4'>
          {desc} 
        </Card.Text>
        {/* <Card.Subtitle className="m-4 text-muted">{price}</Card.Subtitle> */}
        {/* <h5 className="m-4 text-muted">{price}</h5>
        <ItemCount stock={stock} onAdd={onAddhandler}/> */}
        {/* <Button variant="secondary">Comprar</Button> */}
      </Card.Body>
    </Card>
  );
}

export default ItemDetail;