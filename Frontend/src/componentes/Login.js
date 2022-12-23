import React from 'react';
import {Link} from 'react-router-dom';

const Login=()=>{

  return (

    <div>
      <h1>Bienvenido al Gremio Canino</h1>
      <h4>Solo usuarios autorizados tendran el acceso a la pagina      </h4>
    <form>
      <h2>Ingrese sus datos</h2>

    <input placeholder='Email'/>
    <input placeholder='Contraseña' type='password'/>
    <button>Iniciar Sesion</button>
    <Link to={'/registro'}
    type='submit'>Crear cuenta</Link>
    </form>
    
    </div>

  );
}


export default Login;
