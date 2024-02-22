import { useState, useEffect, useContext } from "react";
// import { getNotes } from '../../asyncMock'
// import { getProductByCat, getProducts } from '../../asyncMock'
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { NotificationContext } from '../../Notification/NotificationServices';
import { getProducts } from "../../services/firebase/Firestore/products";

// import { createProducts } from "../../AsyncMock3";



const ItemListContainer = ({ greeting }) =>  {
//  const [notas, setNotas] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [textError, setTextError] = useState('');

  const {categoryId} = useParams();
  // console.log({categoryId})
  const { setNotification } = useContext(NotificationContext);
  

  useEffect(()=>{
    setLoading(true);
    setNotification('Buscando productos','error');
    getProducts(categoryId).then(products => {
      setProducts(products);
      console.log('Llega acá?')
    }).catch(error=> {
      setNotification(String(error),'error');
      setTextError(String(error));
      //console.log(error);
    }).finally(() => {
      setLoading(false);
    })
  },[categoryId]); // eslint-disable-line
 
  
  if (loading) {
    return <h1>Loading...</h1>
  }
  // console.log(notas);
  return (
    <div>
      <h1 className="m-4"> {greeting} </h1>
      {/* { notasMapped } */}
      <ItemList products={products} error = {textError}/>
    </div>
  )
}

export default ItemListContainer;