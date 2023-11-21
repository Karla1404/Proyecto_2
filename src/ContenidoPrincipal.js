import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ContenidoPrincipal = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '250px',
    background: '#7B68EE',
  };

  const titleStyle = {
    zIndex: '6',
    fontSize: '3em',
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: '-250px',
  };

  const imageBackgroundContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const imageBackgroundStyle = {
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    padding: '100px',
    borderRadius: '8px',
  };

  const menuButtonStyle = {
    fontSize: '40px',
    padding: '20px',
    cursor: 'pointer',
    color: 'white',
    position: 'fixed',
    top: '20px',
    left: '20px',
    zIndex: '10',
  };

  const menuIconStyle = {
    display: menuOpen ? 'none' : 'block',
  };

  const menuItemStyle = {
    margin: '10px 0',
  };

  const menuButton = {
    backgroundColor: '#7B68EE',
    color: 'black',
    border: '1px solid black',
    padding: '15px 50px',
    cursor: 'pointer',
    fontSize: '17px',
    display: 'block',
    textAlign: 'center',
    width: '100%',
    marginBottom: '15px',
    borderRadius: '25%',
    marginTop: '50px',
    margin: '20px 6',
  };

  const menuContainerStyle = {
    width: menuOpen ? '250px' : '0',
    overflowX: 'hidden',
    transition: '0.5s',
    backgroundColor: '#C0C0C0',
    height: '100%',
    position: 'fixed',
    zIndex: '5',
    top: '0',
    left: '0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const closeMenuButtonStyle = {
    fontSize: '20px',
    padding: '15px',
    cursor: 'pointer',
    color: 'red',
    marginTop: 'auto',
  };

  const contentContainerStyle = {
    flex: '1',
    padding: '20px',
    position: 'relative',
    marginTop: '30px',
  };

  const textContainerStyle = {
    background: 'rgba(255, 255, 255, 0.7)',
    padding: '60px',
    borderRadius: '253px',
    fontSize: '1.5em',
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: '-200px',
  };

  return (
    <div style={containerStyle}>
      <span style={{ ...menuButtonStyle, ...menuIconStyle }} onClick={toggleMenu}>
        ☰
      </span>
      <div style={menuContainerStyle}>
        <Link to="/">
          <button style={menuButton}>Inicio</button>
        </Link>
        <Link to="/contenido-principal">
          <button style={menuButton}>Antecedentes</button>
        </Link>
        <Link to="/configuracion">
          <button style={menuButton}>Configuración</button>
        </Link>
        <div style={closeMenuButtonStyle} onClick={toggleMenu}>
          &#10005; Cerrar
        </div>
      </div>
      <div style={contentContainerStyle}>
        <h1 style={titleStyle}>Inicios de la Tecnología</h1>
        <div style={imageBackgroundContainerStyle}>
          <div style={imageBackgroundStyle}></div>
        </div>
        <div style={textContainerStyle}>
          <p>En este Blog podrás:</p>
          <p>Descubrir cosas nuevas sobre Tecnología que te harán aprender lo más básico sobre esto</p>
        </div>
      </div>
    </div>
  );
};

export default ContenidoPrincipal;



