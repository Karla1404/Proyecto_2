import React, { useState } from 'react';
import bienvenidoImage from './assets/iniciar-sesion.png';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (email === 'karla@gmail.com' && password === '12345') {
      handleLogin();
    } else {
      setError('Correo electrónico o contraseña incorrectos');
    }
  };

  const handleLogin = () => {
    navigate('/visual-sections');
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    background: '#7B68EE',
    padding: '20px',
  };

  const formStyle = {
    background: 'rgba(255, 255, 255, 0.8)',
    padding: '65px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    maxWidth: '300px',
    width: '100%',
  };

  const labelStyle = {
    fontStyle: 'italic',
    fontSize: '1.8em',
    textAlign: 'center',
  };

  const labelStyle2 = {
    fontStyle: 'italic',
    fontSize: '2.0em',
    textAlign: 'center',
  };
  const inputStyle = {
    fontSize: '1.4em',
    width: '100%',
    marginBottom: '10px',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };

  const buttonStyle = {
    background: 'coral',
    fontSize: '1.4em',
    width: '100%',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const imageContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const imageStyle = {
    width: '90px',
    height: 'auto',
    borderRadius: '60%',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
  };

  return (
    <div style={containerStyle}>
      <form style={formStyle} onSubmit={handleSubmit}>
        <h2 style={labelStyle2}>Bienvenid@ Bloguer@</h2>
        <div style={imageContainerStyle}>
          <img src={bienvenidoImage} alt="Bienvenido" style={imageStyle} />
        </div>
        <h2 style={labelStyle2}>Inicia sesión</h2>

        <div>
          <label style={labelStyle}>Correo electrónico:</label>
          <input type="email" placeholder="Correo electrónico" style={inputStyle} value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label style={labelStyle}>Contraseña:</label>
          <input type="password" placeholder="Contraseña" style={inputStyle} value={password} onChange={handlePasswordChange} />
        </div>
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
        <button style={buttonStyle} type="submit">
          Iniciar sesión
        </button>
      </form>
    </div>
  );
}

export default Login;









