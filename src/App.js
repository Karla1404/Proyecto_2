import React from 'react';
import { BrowserRouter, Routes, Route,  Navigate } from 'react-router-dom'; 
import Login from './Login';
import SeccionesVisuales from './SeccionesVisuales';
import ContenidoPrincipal from './ContenidoPrincipal';



function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Login />} /> 
        <Route path="/visual-sections" element={<SeccionesVisuales />} />
        <Route path="/contenido-principal" element={<ContenidoPrincipal />} />
        <Route path="*" element={<Navigate to="/Login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
