import { addDoc,collection, documentId, getDocs, query, where, writeBatch } from 'firebase/firestore';
import { db } from "..";

export const insertOrder = async (order, outOffStock) =>{
    const batch = writeBatch(db);
    const productRef = collection(db,'products3');
    const ids = order.items.map(prod => prod.id);

    const productsAddedInBD = await getDocs(query(productRef,where(documentId(),'in',ids)));
    const { docs } = productsAddedInBD;
    docs.forEach( doc => {
      const stockDB = doc.data().stock;
      const productsAddedToCart = order.items.find(prod => prod.id === doc.id );
      const cantProd = productsAddedToCart?.cant;
      if (stockDB >= cantProd)
          batch.update(doc.ref,{ stock: stockDB - cantProd });
      else
          outOffStock.push({id: doc.id, ...doc.data()});
      console.log(outOffStock);
    })

    if (outOffStock.length === 0) {
      await batch.commit();
      const collectionRef = collection(db,'orders');
      const orderAdded = await addDoc(collectionRef,order);
      return orderAdded.id;
    }
    else
      return false;
}
