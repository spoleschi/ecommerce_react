import React, { useState, useContext } from 'react';
import FormCheckOut from '../FormCheckOut/FormCheckOut';
import { NotificationContext } from '../../Notification/NotificationServices';

const CheckOut = () => {

  const { setNotification } = useContext(NotificationContext);

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

    // if (!datos.nombre || !datos.telefono || !datos.direccion || !datos.email) {
      // Validar campos
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
    // Aquí puedes realizar acciones con los datos, como enviarlos a un servidor o mostrarlos en la consola.
    console.log(datos);
  }};

  return (
      <FormCheckOut handleSubmit = {handleSubmit} handleChange = {handleChange} datos = {datos} />
  )
}

export default CheckOut
