import { useState, useEffect } from "react";
// import { getNotes } from '../../asyncMock'
import { getProductByCat, getProducts } from '../../asyncMock'
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";



const ItemListContainer = ({ greeting }) =>  {
//  const [notas, setNotas] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const {categoryId} = useParams();
  // console.log({categoryId})

  useEffect(()=>{
    setLoading(true);
    const asyncFunction = categoryId ? getProductByCat : getProducts;
    asyncFunction( categoryId ).then(response => {
      // console.log(response);
      setProducts(response);
    }).finally(() => {
      setLoading(false);
    })
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