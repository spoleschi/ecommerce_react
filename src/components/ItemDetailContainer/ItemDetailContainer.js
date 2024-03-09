import { useContext } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams, useNavigate } from "react-router-dom";
import { getProduct } from "../../services/firebase/Firestore/products";
import { NotificationContext } from "../../Notification/NotificationServices";
import { useAsync } from "../../hooks/useAsync";

const ItemDetailContainer = ({ id }) =>  {

  const { productId } = useParams();
  const navigate = useNavigate();
  const { setNotification } = useContext(NotificationContext);
    
  const { data: product, error, loading } = useAsync(()=>getProduct(productId),[productId]);
  
  if (loading) {
    return <h1>Loading...</h1>
  }
  
  if (error) {
    setNotification(String(error),'error');
  }

  return (
    <div>
      {!(product === undefined) && <ItemDetail {...product}/>}
      <button className = 'btnIncrementar mb-3' onClick={() => navigate(-1)}> Volver </button>
    </div>
  )
}

export default ItemDetailContainer;