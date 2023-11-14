import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; 
import Login from './Login';
import SeccionesVisuales from './SeccionesVisuales';



function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Login />} /> 
        <Route path="/visual-sections" element={<SeccionesVisuales />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
