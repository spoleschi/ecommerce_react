import { useState, useEffect } from "react";

export const useAsync = (asyncFunction,dependencies= []) =>  {
//  const [notas, setNotas] = useState([]);
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

    if (!Array.isArray(dependencies)){
        dependencies = [];
    }

  useEffect(()=>{
    asyncFunction().then((resolve) => {
      setData(resolve);
    }).catch(error => {
        setError(error);
    }).finally(()=> {
      setLoading(false);
    })

  },dependencies); //eslint-disable-line

  return{
    data,
    error,
    loading
  }
}