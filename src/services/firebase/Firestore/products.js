import { getDocs, collection, query, where, getDoc, doc } from "firebase/firestore";
import { db } from "..";
import { createProductAdapted } from "../../../adapter/productAdapted";

export const getProducts = (categoryId) => {
    
  return new Promise((resolve, reject) => {

      const collectionRef = categoryId 
      ? query(collection(db, 'products3'),where('category', '==', categoryId))
      : collection(db, 'products3');

      getDocs(collectionRef).then(response => {
      
        const productsAdapted = response.docs.map(doc => {
          // return {id: doc.id, ...doc.data()};
          return createProductAdapted(doc);
        })
      
        resolve(productsAdapted);
        
      }).catch(error=>{
        reject(error);
      })
  })

} 

export const getProduct = (productId) => {

  return new Promise((resolve, reject) => {
    const docRef = doc(db,'products3', productId);
   
    getDoc(docRef).then(response => {
      // const productAdapted = {id: response.id, ...response.data()};
      const productAdapted = createProductAdapted(response);
      resolve(productAdapted);
    }).catch(error => {
      reject(error);
    })
  })
}