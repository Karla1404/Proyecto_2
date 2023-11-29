import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

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
    padding: '20px',
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
    padding: '40px',
    position: 'relative',
    marginTop: '30px',
    justifyContent: 'center',

  };

  const titleStyle = {
    zIndex: '6',
    fontSize: '3em',
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: '-40px',
  };

  const textContainerStyle = {
    background: 'rgba(255, 255, 255, 0.7)',
    padding: '40px',
   borderRadius: '40px',
    fontSize: '1.6em',
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: '-200px',
    lineHeight: '1.5',
  };

  const imageBackgroundContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '40vh',
    marginTop: '-60px',

  };
  
  const images = [
    'https://gabrielaaraya.weebly.com/uploads/2/8/2/8/28288873/8035169.jpg',

  ];

  const imagesContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
    marginBottom: '60px',
  };

const imageStyle = {
  width: '100%',
  maxWidth: '300px', 
  marginBottom: '40px', 
  borderRadius: '8px',
};
  

 
  return (
    <div style={containerStyle}>
      <span style={{ ...menuButtonStyle, ...menuIconStyle }} onClick={toggleMenu}>
        ☰
      </span>
      <div style={menuContainerStyle}>
      <Link to="/visual-sections">
      <button style={menuButton}>
        Bienvenida
       </button>
       </Link>

       <Link to="/contenido-principal">
       <button style={menuButton}>
        Antecedentes
       </button>
        </Link>
        
        <Link to="/etapas">
        <button style={menuButton}>
         Etapas
        </button>
        </Link>
        <Link to="/infoPDF"> 
          <button style={menuButton}>
            Descarga PDF
        </button>
        </Link>

        <Link to="/">
            <button style={menuButton}>Inicio</button>
          </Link>

        <div style={closeMenuButtonStyle} onClick={toggleMenu}>
          &#10005; Cerrar
        </div>
      </div>
      <div style={contentContainerStyle}>
        <h1 style={titleStyle}>Bienvenid@</h1>
        
        <h2 style={titleStyle}>Al mejor Blog sobre Tecnología</h2>
        <div style={imageBackgroundContainerStyle}>
        <div style={imagesContainerStyle}>
          
        </div>
        </div>
        <div style={textContainerStyle}>
        <p><center>En este Blog podrás: </center></p>
        <p><center>Descubrir cosas nuevas sobre Tecnología que te harán aprender lo mas básico sobre ello</center></p>
        <p><center>Desde sus inicios hasta lo que es el día de hoy. Además cuales fueron las revoluciones tecnológicas que han surgido.</center></p>
        
        {images.map((imageUrl, index) => (
            <img key={index} src={imageUrl} alt={`Image ${index}`} style={imageStyle} />
          ))}
        <p><center>Empecemos por:</center></p>
        <p><center>¿Qué es la Tecnología?</center></p>
        <p><center>La tecnología es la aplicación de los conocimientos científicos y de la comprensión del universo, a la resolución concreta 
          y puntual de los problemas del ser humano. 
          Esto significa crear, diseñar y mejorar bienes o servicios disponibles para facilitar la adaptación de la especie al medio ambiente 
          y la satisfacción de sus deseos o necesidades físicas, sociales, culturales</center></p>

          <img src="https://assets.puzzlefactory.pl/puzzle/338/795/original.jpg" alt="Descripción de la imagen" style={{ width: '100%', maxWidth: '300px', marginBottom: '20px', borderRadius: '8px' }} />
       
         <div style={{ display: 'flex', justifyContent: 'center' }}>
         <Link to="/contenido-principal">
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
}

export default SeccionesVisuales;





