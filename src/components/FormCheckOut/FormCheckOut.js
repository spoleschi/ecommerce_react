import "./FormCheckOut.css";

const FormCheckOut = ( {handleSubmit,handleChange, datos} ) => {

  return (
    <form className= 'formCheckOut mt-2' onSubmit={(event)=>handleSubmit(event)}>
      <h4>Datos de contacto</h4>
      <label>
        Nombre:
        <input
          type="text"
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
          name="email"
          value={datos.email}
          onChange={(event)=>handleChange(event)}
        />
      </label>
      <br />
      <label>
        Dirección:
        <input
          type="text"
          name="direccion"
          value={datos.direccion}
          onChange={(event)=>handleChange(event)}
        />
      </label>
      <br />
      <label>
        Teléfono:
        <input
          type="tel"
          name="telefono"
          value={datos.telefono}
          onChange={(event)=>handleChange(event)}
        />
      </label>
      <br />
      <button className= "btn btn-secondary" type="submit">Generar pedido</button>
    </form>
  );
};

export default FormCheckOut;