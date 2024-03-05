import { addDoc,collection, documentId, getDocs, query, where, writeBatch } from 'firebase/firestore';
import { db } from "..";

export const insertOrder = async (order) =>{
    const batch = writeBatch(db);
    const productRef = collection(db,'products3');
    const ids = order.items.map(prod => prod.id);

    const productsAddedInBD = await getDocs(query(productRef,where(documentId(),'in',ids)));
    const { docs } = productsAddedInBD;
    const outOfStock = [];
    
    docs.forEach( doc => {
      const stockDB = doc.data().stock;
      console.log("stock de producto en bd:");
      console.log(stockDB);
      const productsAddedToCart = order.items.find(prod => prod.id === doc.id );
      const cantProd = productsAddedToCart?.cant;
      console.log("Cantidad de producto en carro:");
      console.log(cantProd);
      if (stockDB >= cantProd)
      {
        console.log("entró por si en hay stock, ");
        batch.update(doc.ref,{ stock: stockDB - cantProd });
      }
      else
      {
        console.log("entró por else en hay stock");
        outOfStock.push({id: doc.id, ...doc.data()});
        console.log(outOfStock);
      }
    })

    if (outOfStock.length === 0) {
      console.log("entró por si en no hubo ningun producto sin stock");
      await batch.commit();
      const collectionRef = collection(db,'orders');
      const orderAdded = await addDoc(collectionRef,order);

      return { success: true, id: orderAdded.id, outOfStock };
    }
    else
      console.log("entró por else en no hubo ningun producto sin stock");
      return { success: false, id: 0, outOfStock };
}
