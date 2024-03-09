import { useState, useContext } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { NotificationContext } from '../../Notification/NotificationServices';
import { getProducts } from "../../services/firebase/Firestore/products";
import { useAsync } from "../../hooks/useAsync";

const ItemListContainer = ({ greeting }) =>  {

  const [textError] = useState('');

  const {categoryId} = useParams();

  const { setNotification } = useContext(NotificationContext);
 
  const {data: products, error, loading} = useAsync(() => getProducts(categoryId),[categoryId])
 
   
  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    setNotification(String(error),'error');
  }

  return (
    <div>
      <h1 className="m-4"> {greeting} </h1>
      <ItemList products={products} error = {textError}/>
    </div>
  )
}

export default ItemListContainer;