import { useState, useEffect, useContext } from "react";
// import { getNotes } from '../../asyncMock'
import { getProductByCat, getProducts } from '../../asyncMock'
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { NotificationContext } from '../../Notification/NotificationServices';



const ItemListContainer = ({ greeting }) =>  {
//  const [notas, setNotas] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const {categoryId} = useParams();
  // console.log({categoryId})
  const { setNotification } = useContext(NotificationContext);

  useEffect(()=>{
    setLoading(true);
    const asyncFunction = categoryId ? getProductByCat : getProducts;
    asyncFunction( categoryId ).then(response => {
      // console.log(response);
      setProducts(response);
    }).catch(error=>{
      console.log(error);
      setNotification(error,'error')
    }).finally(() => {
      setLoading(false);
    })
  },[categoryId,setNotification]);

  
  // const notasMapped = notas.map(nota => <li key={nota.id}>{nota.title}</li>);
  
  if (loading) {
    return <h1>Loading...</h1>
  }
  // console.log(notas);
  return (
    <div>
      <h1 className="m-4"> {greeting} </h1>
      {/* { notasMapped } */}
      <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer;