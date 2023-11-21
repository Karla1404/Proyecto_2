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

  };

  const titleStyle = {
    zIndex: '6',
    fontSize: '3em',
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: '-50px',
  };

  const textContainerStyle = {
    background: 'rgba(255, 255, 255, 0.7)',
    padding: '25px',
    borderRadius: '20px',
    fontSize: '1.5em',
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: '-200px',
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
    'https://media.licdn.com/dms/image/C5612AQG_7YHFjDykUQ/article-cover_image-shrink_720_1280/0/1619182170307?e=2147483647&v=beta&t=pPsAo09jtMGWE2YouHw6Zi0We8XvswwBZFW-sofJS6o',
    
  ];

  const imagesContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
  };

  const imageStyle = {
    width: '100%',
    maxWidth: '300px', 
    marginBottom: '10px',
    borderRadius: '8px',

  };
  

 
  return (
    <div style={containerStyle}>
      <span style={{ ...menuButtonStyle, ...menuIconStyle }} onClick={toggleMenu}>
        ☰
      </span>
      <div style={menuContainerStyle}>
      <Link to="/">
      <button style={menuButton}>
        Inicio
       </button>
       </Link>

       <Link to="/contenido-principal">
       <button style={menuButton}>
        Antecedentes
       </button>
        </Link>
        
        <Link to="/configuracion">
        <button style={menuButton}>
         Configuración
        </button>
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
        <p><center>Descubrir cosas nuevas sobre Tecnología que te harán aprender lo mas básico sobre esto</center></p>
        {images.map((imageUrl, index) => (
            <img key={index} src={imageUrl} alt={`Image ${index}`} style={imageStyle} />
          ))}
        <p><center>¿Qué es la Tecnología?</center></p>
        <p><center>La tecnología es el conjunto de nociones y conocimientos científicos que el ser humano utiliza para lograr un objetivo preciso, que puede ser la solución 
         de un problema especifico del individuo o la satisfacción de alguna de sus necesidades.</center></p>
      
       
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





