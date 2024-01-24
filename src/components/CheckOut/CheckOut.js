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

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!datos.nombre || !datos.telefono || !datos.direccion || !datos.email) {
      setNotification('error', 'Por favor rellene los campos obligatorios.');
    } else {

    // Aquí puedes realizar acciones con los datos, como enviarlos a un servidor o mostrarlos en la consola.
    console.log(datos);
  }};

  return (
    <div>
      <FormCheckOut handleSubmit = {handleSubmit} handleChange = {handleChange} datos = {datos} />
    </div>
  )
}

export default CheckOut
