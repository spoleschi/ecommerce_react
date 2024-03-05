import { useState, useContext } from 'react';
import FormCheckOut from '../FormCheckOut/FormCheckOut';
import { NotificationContext } from '../../Notification/NotificationServices';
import { CartContext2 } from '../../context/CartContext2'
//import { addDoc,collection, documentId, getDocs, query, where, writeBatch } from 'firebase/firestore';
//import { db } from '../../services/firebase';
//import { useNavigate } from 'react-router-dom'; 
import { insertOrder } from '../../services/firebase/Firestore/orders';

const CheckOut = () => {

  const { setNotification } = useContext(NotificationContext);
  const { cart, clearCart, total } = useContext(CartContext2);
  //const navigate = useNavigate();
  const [orderStatus, setOrderStatus] = useState({
    success: false,
    id: 0,
    outOfStock:  []
  });
  const [datos, setDatos] = useState({
    nombre: '',
    email: '',
    direccion: '',
    telefono: '',
  });
  
  const handleChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  function validateDatos(datos) {
    const validationErrors = {};

    // if (!datos.nombre || !datos.telefono || !datos.direccion || !datos.email) {
    // Validar campos
  
    // Validar nombre
    if (datos.nombre.length < 3) {
      validationErrors.nombre = 'El nombre debe tener al menos 3 caracteres.';
    }
  
    // Validar email
    if (!datos.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)) {
      validationErrors.email = 'El correo electrónico no es válido.';
    }
  
    // Validar domicilio
    if (datos.direccion.length < 5) {
      validationErrors.direccion = 'La dirección debe tener al menos 5 caracteres.';
    }
  
    // Validar teléfono
    if (!datos.telefono.match(/^[0-9]{10}$/)) {
      validationErrors.telefono = 'El teléfono debe tener 10 dígitos.';
    }
  
    return validationErrors;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

   const validationErrors = validateDatos(datos);
    if ( Object.entries(validationErrors).length !== 0) {

      // const a = validationErrors.length();
      // console.log(a);
      let error = Object.values(validationErrors)[0];
      
      // let errores = '';
      // for (const property in validationErrors) {
      //   errores +=  `${property}: ${validationErrors[property]}`;
      // }

      setNotification(`Error. ${error}`, 'Por favor rellene los campos obligatorios.');
    } else {
      console.log(datos);
      createOrder()
    }
  };

  const createOrder = async () => {
    
    const order = {
      buyer: {
        name: datos.nombre,
        email: datos.email,
        phone: datos.telefono,
        dom: datos.direccion,
      },
      items: cart,
      total: total
    };

    try{
            
      const result  = await insertOrder(order)

      console.log(result);
      setOrderStatus(result);

      if (result.success)
      {
        console.log("entro y debería limpiar el carro")
        clearCart();
      }


      // if (idNewOrder)
      // {
      //   console.log(insertOrder);
      //   clearCart();
      //   setNotification(`Se ha generado la orden de compra con el código: ${idNewOrder}`, 'success') ;
      //   setTimeout(() => {navigate('/');}, 4000);
      // }
      // else{
      //   const prodsSinStock = outOffStock.map(prod => prod.title);
      //   console.log(prodsSinStock.toString());
      //   setNotification(`No hay stock de los siguientes productos: ${prodsSinStock.toString()}`, 'error') ;
      // }

    }catch(error){
      console.log(String(error))
      setNotification(String(error), 'error');
    }

    // const collectionRef = collection(db,'orders');
    // addDoc(collectionRef,order).then(response => {
    //   console.log(response.id);
    //   clearCart();
    //   setNotification(`Se ha generado la orden de compra con el código ${response.id}`, 'success') ;
    //   setTimeout(() => {
    //     navigate('/');
    // }, 4000)
    // }).catch(error => {
    //   console.log(error);
    // });
  
  }  
    return (
        <FormCheckOut handleSubmit = {handleSubmit} handleChange = {handleChange} datos = {datos} orderStatus = {orderStatus}/>
    )
}

export default CheckOut;
