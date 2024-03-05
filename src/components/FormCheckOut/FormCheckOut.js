import { useNavigate } from "react-router-dom";
import "./FormCheckOut.css";

const FormCheckOut = ( {handleSubmit,handleChange, datos, orderStatus} ) => {

  const navigate = useNavigate();
  
  return (
    
    <div>

      {orderStatus.id === 0 && orderStatus.outOfStock.length === 0
        ?<form className= 'formCheckOut mt-2' onSubmit={(event)=>handleSubmit(event)}>
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
        
        :<>
            {orderStatus.success ? 
              <>
                <p>Pedido realizado correctamente.</p>
                <p>Su código de pedido es: {orderStatus.id} </p>
                <button className = 'btnIncrementar mb-3' onClick={() => navigate('/')  }> Ir a inicio </button> 
              </>
            : 
              <> 
                <p>Error al realizar el pedido.</p>
                <p>Productos agotados:</p>
                <p> {orderStatus.outOfStock.map(prod => prod.title).join(', ')}</p> 
                <button className = 'btnIncrementar mb-3' onClick={() => navigate(-1)  }> Volver al carrito </button>
              </>
            }  
          </>

      }
    </div>
  );
};

export default FormCheckOut;