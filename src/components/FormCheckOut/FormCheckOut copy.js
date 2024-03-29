import "./FormCheckOut.css";

const FormCheckOut = ( {handleSubmit,handleChange, datos} ) => {

  return (
    <form className= 'formCheckOut mt-2' onSubmit={(event)=>handleSubmit(event)}>
      <h4>Datos de contacto</h4>
      <label htmlFor="nombre">
        Nombre:
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={datos.nombre}
          onChange={(event)=>handleChange(event)}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          id="email"
          name="email"
          value={datos.email}
          onChange={(event)=>handleChange(event)}
        />
      </label>
      <label>
        Dirección:
        <input
          type="text"
          id="direccion"
          name="direccion"
          value={datos.direccion}
          onChange={(event)=>handleChange(event)}
        />
      </label>
      <label>
        Teléfono:
        <input
          type="tel"
          id="telefono"
          name="telefono"
          value={datos.telefono}
          onChange={(event)=>handleChange(event)}
        />
      </label>
      <button className= "btn btn-secondary" type="submit">Generar pedido</button>
    </form>
  );
};

export default FormCheckOut;