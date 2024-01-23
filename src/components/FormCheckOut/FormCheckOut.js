import React, { useState, useContext } from 'react';
import "./FormCheckOut.css";
import { NotificationContext } from '../../Notification/NotificationServices';

const FormCheckOut = () => {

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
    <form className= 'formCheckOut mt-2' onSubmit={handleSubmit}>
      <h3 class="panel-header panel-header-sticky">Datos de contacto</h3>
      <label>
        Nombre:
        <input
          type="text"
          name="nombre"
          value={datos.nombre}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={datos.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Dirección:
        <input
          type="text"
          name="direccion"
          value={datos.direccion}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Teléfono:
        <input
          type="tel"
          name="telefono"
          value={datos.telefono}
          onChange={handleChange}
        />
      </label>
      <br />
      <button className= "btn btn-secondary" type="submit">Generar pedido</button>
    </form>
  );
};

export default FormCheckOut;