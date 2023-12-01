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
    marginTop: '-70px',
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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
  };
  
  const textContainerStyle = {
    background: 'rgba(255, 255, 255, 0.7)',
    padding: '80px',
    borderRadius: '40px',
    fontSize: '1.6em',
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: '40px',
    lineHeight: '1.5',
    width: '80%', 
    alignSelf: 'center', 
    marginTop: '-200px',
  };

  return (
    <div style={containerStyle}>
      <span style={{ ...menuButtonStyle, ...menuIconStyle }} onClick={toggleMenu}>
        ☰
      </span>
      <div style={menuContainerStyle}>
        <Link to="/visual-sections">
          <button style={menuButton}>Bienvenida</button>
        </Link>
        <Link to="/contenido-principal">
          <button style={menuButton}>Antecedentes</button>
        </Link>
        <Link to="/etapas">
          <button style={menuButton}>Etapas</button>
        </Link>

        <Link to="/">
            <button style={menuButton}>Inicio</button>
          </Link>
        <div style={closeMenuButtonStyle} onClick={toggleMenu}>
          &#10005; Cerrar
        </div>
      </div>
      <div style={contentContainerStyle}>
        <h1 style={titleStyle}>Antecedentes de la Tecnología</h1>
        <div style={imageBackgroundContainerStyle}>
          <div style={imageBackgroundStyle}></div>
        </div>
        <div style={textContainerStyle}>
          <p>¿Conoces la Historia?</p>
          <img
           src="https://img.tecnomagazine.net/2018/04/historia-de-la-tecnologia-1.jpg"
           alt="Descripción de la imagen"
           style={{
           width: '90%', 
           maxWidth: '300px',
           marginBottom: '10px',
           borderRadius: '8px',
           }}
         />
          <p style={{ textAlign: 'justify' }}>La historia de la tecnología comprende el recuento histórico del desarrollo del ser humano, a través de la creación y uso de herramientas 
            y de técnicas que le han permitido atender propósitos prácticos.
             Gracias a ellas ha podido transformar el mundo a su alrededor para hacerse la vida más sencilla.</p>
          <p style={{ textAlign: 'justify' }}>Los avances tecnológicos son la consecuencia de la aplicación de la capacidad intelectual humana y de sus habilidades creativas. Por eso, 
            la historia de la tecnología puede entenderse también como el recuento histórico del desarrollo de las capacidades del ser humano.</p>
          <p style={{ textAlign: 'justify' }}>El origen e inicio de la tecnología se remonta a casi 4.9 millones de años atras cuando los seres vivos que vivían en aquel entonces 
            se veían envueltos en una feroz lucha por la supervivencia.</p>
            <img src="https://s-media-cache-ak0.pinimg.com/736x/ac/b0/a5/acb0a57e92dd6f21f12050863541f5e1.jpg" alt="Descripción de la imagen" style={{ width: '100%', maxWidth: '300px', marginBottom: '20px', borderRadius: '8px' }} />
            
          <p style={{ textAlign: 'justify' }}>Entre ellos estaba el hombre primitivo, peludo, con poca razón y mucha fuerza. Y si bien por aquel entonces el humano era más mono que hombre en si, poco a poco fue 
            desarrollando su inteligencia para lograr alimentarse, cazar y hasta protegerse de las inclemencias del tiempo no mojarse cuando llovía o evitar el frío con pieles animales

           Con el correr del tiempo aprendió también sober que si plataba semillas de las frutas que comía, crecían árboles, nació entonces la agricultura. 
           Y también así descubrió que habían otros materiales como fibras que le permitían abrigarse mejor que con simples cueros de animales, así nació lo que hoy conocemos como ropa.

          También se dió cuenta que al pisar suelos con piedras o espinas sus pies se dañaban y sangraba, por lo que se las ingenió para recubrirlos con lo que hoy llamamos zapatos.</p>
          <img src="https://1.bp.blogspot.com/-LbYcsy9GSyA/Ugi10_jxAzI/AAAAAAAASLU/K4afJLyKZKs/s1600/roma-varios.jpg" alt="Descripción de la imagen" style={{ width: '100%', maxWidth: '300px', marginBottom: '20px', borderRadius: '8px' }} />

          <p style={{ textAlign: 'justify' }}>Más adelante vió el potencial de la luz eléctrica con el fabuloso Thomas Alba Edison e inventó la luz eléctrica para alumbrar el mundo y las vidas de millones de personas.

           Y llegó el día en que inventó la informática y computadoras para procesar la información de manera rápida y eficaz para evitar hacerlo a mano.</p>

           <img src="https://image.slidesharecdn.com/diapositivasjuan-170505011627/95/historial-del-el-computador-5-638.jpg?cb=1493946999" alt="Descripción de la imagen" style={{ width: '100%', maxWidth: '300px', marginBottom: '20px', borderRadius: '8px' }} />

           <p style={{ textAlign: 'justify' }}>Es decir, la tecnología es lo que ha ayudado al hombre a mejorar la calidad de vida a través de la historia, lo ha ayudado a concretar cada uno de sus deseos y necesidades, 
           desde cocinar, hasta volar, o comunicarse con otros seres alrededor del mundo.</p>
      
           <div style={{ display: 'flex', justifyContent: 'center' }}></div>
           <Link to="/etapas">
         <button
          style={{
          backgroundColor: '#7B68EE',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
          margin: '20px auto', 
          display: 'block',
        }}
      >
        Siguiente
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContenidoPrincipal;