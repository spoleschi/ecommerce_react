import { useState, useEffect, useContext } from "react";
// import { getNotes } from '../../asyncMock'
// import { getProductByCat, getProducts } from '../../asyncMock'
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { NotificationContext } from '../../Notification/NotificationServices';
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase";
// import { createProducts } from "../../AsyncMock3";



const ItemListContainer = ({ greeting }) =>  {
//  const [notas, setNotas] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const {categoryId} = useParams();
  // console.log({categoryId})
  const { setNotification } = useContext(NotificationContext);

  useEffect(()=>{
    setLoading(true);
    // createProducts();
    const collectionRef = categoryId 
      ? query(collection(db, 'products3'),where('category', '==', categoryId))
      : collection(db, 'products3');

    getDocs(collectionRef).then(response => {
      
      const productsAdapted = response.docs.map(doc => {
        // const data = doc.data();
        // console.log(data);
        // console.log(data.galery);

        //cuando tenía la galery en un json
        // let jsonArray = JSON.parse(data.galery);
        // return {id: doc.id, ...doc.data(),galery: jsonArray};

        return {id: doc.id, ...doc.data()};

      })
      // console.log(productsAdapted);
      setProducts(productsAdapted);
      // setProducts(response);
    }).catch(error=>{
      console.log(error);
      setNotification(error,'error')
    }).finally(() => {
      setLoading(false);
    })
    
    
    // const asyncFunction = categoryId ? getProductByCat : getProducts;
    // asyncFunction( categoryId ).then(response => {
    //   // console.log(response);
    //   setProducts(response);
    // }).catch(error=>{
    //   console.log(error);
    //   setNotification(error,'error')
    // }).finally(() => {
    //   setLoading(false);
    // })
  },[categoryId]);

  
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