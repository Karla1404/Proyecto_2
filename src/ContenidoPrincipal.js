import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const ContenidoPrincipal = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '50px',
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
    padding: '10px',
    position: 'relative',
    marginTop: '30px',
    justifyContent: 'center',
  };

  const textContainerStyle = {
    background: 'rgba(255, 255, 255, 0.7)',
    padding: '25px',
    borderRadius: '20px',
    fontSize: '1.5em',
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: '-200px',
    lineHeight: '1.5',
  };

  return (
    <div style={containerStyle}>
      <span style={{ ...menuButtonStyle, ...menuIconStyle }} onClick={toggleMenu}>
        ☰
      </span>
      <div style={menuContainerStyle}>
        <Link to="/visual-sections">
          <button style={menuButton}>¿Qué es?</button>
        </Link>
        <Link to="/contenido-principal">
          <button style={menuButton}>Antecedentes</button>
        </Link>
        <Link to="/etapas">
          <button style={menuButton}>Etapas</button>
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
          <p>Historia</p>
          <p>La historia de la tecnología comprende el recuento histórico del desarrollo del ser humano, a través de la creación y uso de herramientas 
            y de técnicas que le han permitido atender propósitos prácticos.
             Gracias a ellas ha podido transformar el mundo a su alrededor para hacerse la vida más sencilla.</p>
          <p>Los avances tecnológicos son la consecuencia de la aplicación de la capacidad intelectual humana y de sus habilidades creativas. Por eso, 
            la historia de la tecnología puede entenderse también como el recuento histórico del desarrollo de las capacidades del ser humano.</p>
  
      <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Link to="/etapas">
            <button style={{ 
              backgroundColor: '#7B68EE',  
              color: 'white',  
              border: 'none', 
              padding: '10px 20px',  
              borderRadius: '5px', 
              cursor: 'pointer', 
              margin: '2 auto',
              display: 'block',
                       }}>
                  Ir a Descubrir
            </button>
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ContenidoPrincipal;