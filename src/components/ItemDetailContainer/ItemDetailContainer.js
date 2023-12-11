import { useState, useEffect } from "react";
// import { getNotes } from '../../asyncMock'
import { getProductById } from '../../asyncMock';
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams, useNavigate } from "react-router-dom";


const ItemDetailContainer = ({ id }) =>  {
//  const [notas, setNotas] = useState([]);
  const [product, setProduct] = useState('');
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();
  const navigate = useNavigate();
  // console.log(productId);

  useEffect(()=>{
    // console.log('entra'); 
    // console.log({ productId });
    // console.log(productId);
    getProductById( {productId} ).then(response => {
       setProduct(response);
    })
    .catch(error => console.log(error.message))
    .finally(() => {
      setLoading(false);
    })
  },[productId]);

  
  // const notasMapped = notas.map(nota => <li key={nota.id}>{nota.title}</li>);
  
  if (loading) {
    return <h1>Loading...</h1>
  }
  
  // console.log(product);

  return (
    <div>
      <ItemDetail {...product}/>
      <button className = 'btnIncrementar mb-3' onClick={() => navigate(-1)}> Volver </button>
    </div>
  )
}

export default ItemDetailContainer;