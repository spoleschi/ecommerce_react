import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function ItemCard( {id, title, price, galery} ) {
  return (
    <Card style={{ width: '15rem', margin:'1.5rem', borderRadius:'20px', padding:'0.5rem' }}>
      <Card.Img variant="top" src= {`../assets/${galery[0].url}`}/>
      <Card.Body>
        <Card.Title style={{ height: '8rem', margin:'1px', padding:'2.5px', overflow: 'hidden'}}>{title}</Card.Title>
        <Card.Text>
          ${new Intl.NumberFormat().format(price)} 
        </Card.Text>
        <Link to={`/detail/${id}`} className='btn btn-dark'>Ver detalle</Link>
      </Card.Body>
    </Card>
  );
}

export default ItemCard;