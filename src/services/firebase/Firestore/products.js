import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "..";

export const getProducts = (categoryId) => {
    
  return new Promise((resolve, reject) => {

      const collectionRef = categoryId 
      ? query(collection(db, 'products3'),where('category', '==', categoryId))
      : collection(db, 'products3');

      getDocs(collectionRef).then(response => {
      
        const productsAdapted = response.docs.map(doc => {
          return {id: doc.id, ...doc.data()};
        })
      
        resolve(productsAdapted);
        
      }).catch(error=>{
        reject(error);
      })
  })

} 