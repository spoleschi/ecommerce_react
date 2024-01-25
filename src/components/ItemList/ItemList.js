// import Item from "../Item/Item";
import ItemCard from "../ItemCard/ItemCard";
import './ItemList.css';
// import { memo } from 'react';

const ItemList = ( props ) => {
  
  // console.log(props.products[0].price);

  return(
    // <div style={{ display: 'flex',justifyContent:'space-around',flexWrap:'wrap' }}>
    <div className="contenedor">
      {/* {props.notas.map(prod => <Item key= {prod.id} {...prod} />)}     */}
      {props.products.length > 0
        ?props.products.map(prod => <ItemCard key= {prod.id} {...prod} />)
        :<p>No hay productos</p>
      }
    </div>
      
  )
} 

export default ItemList;
// export default memo(ItemList);

