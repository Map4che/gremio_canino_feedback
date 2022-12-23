import React from 'react';
import {Link} from 'react-router-dom';

const Register=()=>{

    return(

        <div>
      <h1>Registro</h1>
      <h4>Solo usuarios autorizados tendran el acceso a la pagina      </h4>
    <form>
      <h2>Ingrese sus datos</h2>

    <input placeholder='Nombre'/>
    <input placeholder='Nombre del Colegio'/>
    <input placeholder='Email'/>
    <input placeholder='Contraseña' type='password'/>
    <input placeholder='Contraseña' type='password'/>
    <button>Crear</button>
    <button>Crear Cuenta</button>
    <Link to={'/'}>Cancelar</Link>
    </form>
    
    </div>
    );
}

export default Register;