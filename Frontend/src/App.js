import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './componentes/Login';
import Register from './componentes/Register';

function App(){

  return (

    <Router>
        
        <Routes>

          <Route path="/" exact element={<Login/>}/>
          <Route path="/registro" exact element={<Register/>}/>

        </Routes>


    </Router>

  );
}


export default App;
