import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const InfoPDF = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setUploadedFile(file);
  };

  const handleDownload = () => {

    if (uploadedFile) {
      const url = URL.createObjectURL(uploadedFile);
      const a = document.createElement('a');
      a.href = url;
      a.download = uploadedFile.name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
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
    marginTop: '-110px',
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
    marginTop: '50px',
    lineHeight: '1.5',
  };


  return (
    <div style={containerStyle}>
      <span style={{ ...menuButtonStyle, ...menuIconStyle }} onClick={toggleMenu}>
        ☰
      </span>
      <div style={menuContainerStyle}>
        <Link to="/visual-sections">
          <button style={menuButton}>Buenvenida</button>
        </Link>
        <Link to="/contenido-principal">
          <button style={menuButton}>Antecedentes</button>
        </Link>
        <Link to="/etapas">
          <button style={menuButton}>Etapas</button>
        </Link>
        <Link to="/infoPDF"> 
          <button style={menuButton}>Descarga PDF</button>
        </Link>
        <Link to="/">
          <button style={menuButton}>Inicio</button>
        </Link>
        <div style={closeMenuButtonStyle} onClick={toggleMenu}>
          &#10005; Cerrar
        </div>
      </div>

      <div style={contentContainerStyle}>
        <h1 style={titleStyle}>Información en PDF</h1>
        <div style={textContainerStyle}>
        <div style={{ marginBottom: '300px' }}>
          <input type="file" accept=".pdf" onChange={handleFileChange} />
        </div>
        {uploadedFile && (
          <div style={{ marginBottom: '220px' }}>
            <p>Archivo cargado: {uploadedFile.name}</p>
            <button onClick={handleDownload}>Descargar</button>
          </div>
        )}
                 
        
          
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPDF;
