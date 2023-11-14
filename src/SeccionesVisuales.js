import React, { useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

function SeccionesVisuales() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    minHeight: '100vh',
    background: '#7B68EE',
  };

  const menuButtonStyle = {
    fontSize: '40px',
    padding: '15px',
    cursor: 'pointer',
    color: 'white',
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
    padding: '15px 20px',
    cursor: 'pointer',
    fontSize: '17px',
    display: 'block',
    textAlign: 'center',
    width: '70%',
    marginBottom: '10px',
    borderRadius: '25%', 
    marginTop: '30px',
  };

  const menuContainerStyle = {
    width: menuOpen ? '250px' : '0',
    overflowX: 'hidden',
    transition: '0.5s',
    backgroundColor: '#C0C0C0',
    height: '100%',
    position: 'fixed',
    zIndex: '1',
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
  };

  const titleStyle = {
    zIndex: '6',
    fontSize: '3em',
    fontStyle: 'italic',
    textAlign: 'center',
  };

  const textContainerStyle = {
    background: 'rgba(255, 255, 255, 0.7)',
    padding: '20px',
    borderRadius: '10px',
    fontSize: '1.5em',
    fontStyle: 'italic',
  };

  const imageBackgroundContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '40vh',
  };
  
  const imageBackgroundStyle = {
    backgroundImage: 'url(https://media.licdn.com/dms/image/C5612AQG_7YHFjDykUQ/article-cover_image-shrink_720_1280/0/1619182170307?e=2147483647&v=beta&t=pPsAo09jtMGWE2YouHw6Zi0We8XvswwBZFW-sofJS6o)',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    padding: '100px',
    borderRadius: '8px',
  };

  return (
    <div style={containerStyle}>
      <span style={{ ...menuButtonStyle, ...menuIconStyle }} onClick={toggleMenu}>
        ☰
      </span>
      <div style={menuContainerStyle}>
        <button style={menuButton}>
          Inicio
        </button>
        <button style={menuButton}>
          Perfil
        </button>
        <button style={menuButton}>
          Configuración
        </button>
        <div style={closeMenuButtonStyle} onClick={toggleMenu}>
          &#10005; Cerrar
        </div>
      </div>
      <div style={contentContainerStyle}>
      <h1 style={titleStyle}>Bienvenido</h1>
      <div style={imageBackgroundContainerStyle}>
        <div style={imageBackgroundStyle}></div>
      </div>
      <div style={textContainerStyle}>
        <p><center>En este Blog podrás: </center></p>
        <p><center>Descubrir cosas nuevas sobre Tecnología que te harán apreender lo mas básico sobre esto</center></p>
       
        <Link to="/nueva-pantalla">
          <button style={{ 
            backgroundColor: '#7B68EE',  
            color: 'white',  
            border: 'none', 
            padding: '10px 20px',  
            borderRadius: '5px', 
            cursor: 'pointer', 
            margin: '0 auto',
            display: 'block',
          }}>
            Ir a descubrir
          </button>
        </Link>
      </div>
    </div>
  </div>
);
}

export default SeccionesVisuales;





