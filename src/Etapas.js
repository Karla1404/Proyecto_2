import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';


const Etapas = () => {
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
        fontSize: '4em',
        fontStyle: 'italic',
        textAlign: 'center',
        marginTop: '-100px', 
      };

      const titleStyle2 = {
        zIndex: '5',
        fontSize: '1em',
        fontStyle: 'italic',
        textAlign: 'center',
        marginTop: '30px', 
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
      marginTop: '90px',
      lineHeight: '1.5',
    };
  
    const tableStyle = {
      width: '80%', 
      margin: '30px auto',
      borderCollapse: 'collapse',
      backgroundColor: '#cccccc', 
    };
  
    const thStyle = {
      border: '1px solid #ddd',
      padding: '8px',
      textAlign: 'center',
      backgroundColor: '#f2f2f2',
    };
  
    const tdStyle = {
      border: '1px solid #ddd',
      padding: '8px',
      textAlign: 'center',
    };
  

    const tableData = [
      { etapa: 'Prehistoria', periodo: 'Hace 2,5 millones de años hasta 5000 a.C', avancestecnologicos: 'Prehistoria: fuego, herramientas y rueda: La evolución tecnológica comenzó hace 2,5 millones de años con los Homo habilis, los primeros seres humanos que desarrollaron herramientas de piedra' },
      { etapa: 'Antigüedad', periodo: '5000 a.C hasta el siglo V', avancestecnologicos: 'Antigüedad: escritura, obras civiles y matemáticas: La Antigüedad comenzó con el desarrollo de los primeros sistemas de escritura, como el creado por la civilización sumeria en cerca del año 5000 a. C, el más antiguo registrado hasta ahora.' },
      { etapa: 'Edad Media', periodo: 'Siglo V hasta siglo XV', avancestecnologicos: 'Edad Media: molinos de viento, relojes y tenedor: La Edad Media comenzó en el siglo V, cuando el cultivo de cereales se hacía con molinos de agua, que funcionaban con fuerza hidráulica. La invención de los molinos de viento fue un desarrollo tecnológico que permitió cultivar alimentos en lugares donde no existían caudales de agua, masificando la agricultura. ' },
      { etapa: 'Edad Moderna', periodo: 'Siglo XV hasta mediados del siglo XVIII', avancestecnologicos: 'Edad moderna: imprenta, telescopio y viajes exploratorios: Dos hechos marcan el inicio de la Edad Moderna: la invención de la imprenta y el descubrimiento del continente americano.' },
      { etapa: 'Edad Contemporánea', periodo: 'Desde mitad del siglo XVIII hasta el presente', avancestecnologicos: 'Edad contemporánea: La Edad Contemporánea es el período histórico de mayor evolución tecnológica y podría dividirse, a su vez, en tres etapas. La primera corresponde a la Revolución industrial, que comenzó en el siglo XVIII. La segunda, la era de la computación y la informática, en el siglo XX. Y la actual, en la que la tecnología apunta hacia la computación cuántica y la inteligencia artificial (IA).' },
    ];
  
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
        <h1 style={titleStyle}>Etapas de la Tecnología</h1>
        <center> <h2>TABLA DE ETAPAS</h2> </center>

        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Etapa</th>
              <th style={thStyle}>Período</th>
              <th style={thStyle}>Avances Tecnológicos</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.etapa}</td>
                <td style={tdStyle}>{row.periodo}</td>
                <td style={tdStyle}>{row.avancestecnologicos}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={textContainerStyle}>
        <h3 style={titleStyle2}>Prehistoria: fuego, herramientas y rueda:</h3>
    <p>La evolución tecnológica comenzó hace 2,5 millones de años con los Homo habilis,
      los primeros seres humanos que desarrollaron herramientas de piedra.
      La tecnología de ese período también incluyó:</p>
    <br />
    <p>El uso del fuego:
    <br />
      El conocimiento de la creación y uso del fuego fue crucial para la sobrevivencia de los primeros humanos que salieron de África y se desplazaron a zonas más frías como Asia o Europa.
      Esta tecnología les permitió comer alimentos cocidos y sobrevivir a las bajas temperaturas.</p>
      <br />
      <img src="https://qph.cf2.quoracdn.net/main-qimg-c71382421e37bb5a26f348593a5e8702-lq" alt="Descripción de la imagen" style={{ width: '100%', maxWidth: '300px', marginBottom: '20px', borderRadius: '8px' }} />
     <p>Las primeras técnicas de agricultura:
     <br />
       Esto les permitió abandonar el estilo de vida nómada y convertirse en sedentarios, lo que repercutió en la formación de las primeras sociedades arcaicas.
       <br />
       <img src="https://historia.nationalgeographic.com.es/medio/2019/12/12/neandertales-en-su-dia-a-dia_8ff8ddb6_1280x720.jpg" alt="Descripción de la imagen" style={{ width: '100%', maxWidth: '300px', marginBottom: '20px', borderRadius: '8px' }} />
       <br />
       La invención de la rueda:
       <br />
      Se estima que la rueda se inventó entre el año 5000 y el 3000 a.C. En un principio, se utilizaba como adorno de ciertos artefactos pequeños, hasta que se descubrió su aplicación como medio de transporte rudimentario.

        El trabajo con metales fundidos en fuego marca el fin de la prehistoria en términos tecnológicos y da paso a la Edad antigua.</p> 
        <img src="https://cdn5.dibujos.net/dibujos/pintados/202120/creacion-de-la-rueda-culturas-prehistoria-12269024.jpg" alt="Descripción de la imagen" style={{ width: '100%', maxWidth: '300px', marginBottom: '20px', borderRadius: '8px' }} />
  
        <h3 style={titleStyle2}>Antigüedad: escritura, obras civiles y matemáticas:</h3>
        <p>La Antigüedad comenzó con el desarrollo de los primeros sistemas de escritura, como el creado por la civilización sumeria en cerca del año 5000 a. C, 
          el más antiguo registrado hasta ahora. Otros aportes de esta época fueron:</p>
          <br />
          <p>Desarrollo urbano:
            <br />
         La evolución tecnológica se expresó en la creación de las primeras ciudades con sus respectivas infraestructuras: acueductos, sistemas de drenaje, 
         baños públicos, etc. Los egipcios ingeniaron pirámides monumentales de piedra y sistemas de cultivo.</p>
         <img src="https://cdn.forbes.com.mx/2018/08/cdmx-640x360.jpg" alt="Descripción de la imagen" style={{ width: '100%', maxWidth: '300px', marginBottom: '20px', borderRadius: '8px' }} />
         <br />
         <p>Matemática y herramientas:
          <br />
          Los griegos desarrollaron las matemáticas avanzadas e inventaron la palanca, la bomba hidráulica y el astrolabio, entre otras herramientas. 
          En lo que hoy es el continente americano, los mayas, los aztecas y los incas desarrollaron calendarios solares y lunares, sistemas numéricos complejos y la observación astronómica.</p>
          <img src="https://2.bp.blogspot.com/-S3WvNYadPNI/V-uzbamq8QI/AAAAAAAAJYk/SvqBQNv41SgC0hvPj-I6SO6nuHlixg1fQCLcB/s1600/arquemed.jpg" alt="Descripción de la imagen" style={{ width: '100%', maxWidth: '300px', marginBottom: '20px', borderRadius: '8px' }} />
          
          <p>La Antigüedad terminó con la caída del Imperio Romano de Occidente, en el año 476.</p>
          <br />
          <h3 style={titleStyle2}>Edad Media: molinos de viento, relojes y tenedor:</h3>
          <p>La Edad Media comenzó en el siglo V, cuando el cultivo de cereales se hacía con molinos de agua, que funcionaban con fuerza hidráulica. 
            La invención de los molinos de viento fue un desarrollo tecnológico que permitió cultivar alimentos en lugares donde no existían caudales de agua,
             masificando la agricultura. Otros avances tecnológicos de esa época fueron:</p>
             <br />
             <p>Relojes mecánicos:
              <br/>
            Otro paso importante en la evolución tecnológica de la Edad Media fue la creación de los relojes mecánicos, mucho más exactos que sus antecesores, 
            los relojes de sol. Con este invento, se masificó la idea del tiempo dividido en fracciones, llamadas horas.</p>
            <img src="https://historia.nationalgeographic.com.es/medio/2020/03/09/alg-194160_de42a5fa_1200x630.jpg" alt="Descripción de la imagen" style={{ width: '100%', maxWidth: '300px', marginBottom: '20px', borderRadius: '8px' }} />
            <br/>
            <p>Uso del tenedor:
            <br/>
            Otro artefacto importante y que hoy en día es imprescindible es el tenedor. Aunque ya existían herramientas para trinchar las comidas, en Europa se comía con las manos, 
            poniendo las verduras y la carne sobre una rebanada de pan. La popularización del tenedor revolucionó la forma de comer en la Edad Media, dando paso a una forma mucho más higiénica de consumir los alimentos.</p>
            <img src="https://lagallofa.files.wordpress.com/2013/05/4409b-08.jpg" alt="Descripción de la imagen" style={{ width: '100%', maxWidth: '300px', marginBottom: '20px', borderRadius: '8px' }} />
             <p>La Edad Media termina con la caída del Imperio Bizantino o Imperio Romano de Oriente en 1453.</p>
             <br />
             <h3 style={titleStyle2}>Edad moderna: imprenta, telescopio y viajes exploratorios:</h3>
             <p>Dos hechos marcan el inicio de la Edad Moderna: 
             <br />
              la invención de la imprenta y el descubrimiento del continente americano.</p>
              <p>La imprenta de Guttenberg:
                <br />
               El gran salto tecnológico de la Edad moderna fue impulsado por Johannes Guttenberg con la invención de la imprenta en el año 1450. 
               Los chinos habían inventado el papel, pero fue en la época medieval que su uso llegó a Europa y la imprenta permitió la reproducción de textos sobre papel, dando origen a los libros tal y como los conocemos.</p>
               <img src="https://curiosfera-historia.com/wp-content/uploads/qui%C3%A9n-invent%C3%B3-la-imprenta-1.jpg" alt="Descripción de la imagen" style={{ width: '100%', maxWidth: '300px', marginBottom: '20px', borderRadius: '8px' }} />
               <br />
               <p>El telescopio de Galileo:
                <br />
              Galileo Galilei inventó el telescopio en 1609. Esto le permitió hacer aportes fundamentales en el ámbito de la astronomía, 
              como la descripción de la superficie lunar y la confirmación de que la Tierra no era el centro del universo.</p>
              <img src="https://josevicentediaz.files.wordpress.com/2014/06/captura20.jpg" alt="Descripción de la imagen" style={{ width: '100%', maxWidth: '300px', marginBottom: '20px', borderRadius: '8px' }} />
               <br />
               <p>El encuentro de dos mundos:</p>
                <br />
                En la Edad Moderna también comenzaron los viajes exploratorios que dieron como 
                resultado el descubrimiento del continente americano por parte de los europeos, liderados por 
                Cristóbal Colón en el año 1492. Esto inició un período de hallazgos de técnicas, tecnología y materias primas que tuvo un profundo impacto en tecnologías posteriores.<p/>
                <img src="https://humanidades.com/wp-content/uploads/2023/07/Descubrimiento-de-america-Colon.jpg" alt="Descripción de la imagen" style={{ width: '100%', maxWidth: '300px', marginBottom: '20px', borderRadius: '8px' }} />

               <p> El fin de la Edad Moderna estuvo marcado por el estallido de la Revolución Francesa, en el año 1789.</p>
               <br />
               <h3 style={titleStyle2}>Edad contemporánea:</h3>
               <p>La Edad Contemporánea es el período histórico de mayor evolución tecnológica y podría dividirse, a su vez, en tres etapas.
                 La primera corresponde a la Revolución industrial, que comenzó en el siglo XVIII. La segunda, la era de la computación y la informática, 
                 en el siglo XX. Y la actual, en la que la tecnología apunta hacia la computación cuántica y la inteligencia artificial (IA).</p> 
                 <p> Máquina a vapor, tren de vapor, electricidad Revolución Industrial: </p>
                <p>Mientras Francia vivía un proceso de revolución política, en Gran Bretaña se estaba gestando la Revolución industrial. 
                Esta transformación fue impulsada por inventos como la máquina de vapor, un motor que transformaba energía térmica en energía mecánica y que permitió, a su vez, el desarrollo del tren a vapor.
                <br />
                La máquina de vapor tuvo múltiples aplicaciones, lo que permitió el crecimiento de diversos tipos de industrias, como la minería y la explotación de hidrocarburos.
                El tren se convirtió en una nueva forma de transporte mucho más eficiente que las carretas tiradas por caballos.
                <br />
                A finales de esta época, en 1833, es cuando comienza a utilizarse la electricidad de forma masiva para iluminar espacios públicos y luego, de forma doméstica.</p>
                <br />
                <img src="https://www.meridadeyucatan.com/wp-content/uploads/2018/08/MAQUINA-DE-VAPOR.jpg" alt="Descripción de la imagen" style={{ width: '100%', maxWidth: '300px', marginBottom: '20px', borderRadius: '8px' }} />
                <p>Computadoras, internet, viajes espaciales (siglo XX):
                <br />
                 A mediados del siglo XX se dieron a conocer las primeras computadoras, 
                 máquinas de grandes dimensiones y con poca capacidad de procesamiento de datos.
                 La tecnología empleada en su diseño fue evolucionando hasta convertirlas en lo que son hoy: dispositivos pequeños, portátiles,
                 con capacidad de procesamiento de datos multimedia. Esta evolución fue impulsada, a su vez, por el desarrollo de internet, 
                 que cambió la forma de comunicarnos y de recibir y enviar información.
                  
                 Por otra parte, en 1969 el ser humano llegó a la Luna por primera vez. Se abrieron las puertas a nuevos desarrollos tecnológicos 
                 que permitieran la exploración del espacio y que incluso tendrían aplicaciones prácticas.</p>
                 <img src="https://i.blogs.es/835990/tecnologia-netflix/450_1000.jpeg" alt="Descripción de la imagen" style={{ width: '100%', maxWidth: '300px', marginBottom: '20px', borderRadius: '8px' }} />
                 <br />
                 <br />
                 <p>Computación cuántica, inteligencia artificial, turismo espacial (siglo XXI):
                 <br />
               Hoy en día, la evolución de la tecnología digital está impulsada por la computación cuántica, 
               que permite el procesamiento de grandes cantidades de datos, imposibles de procesar con las computadoras de uso común.
               <br />
              Además, se desarrollan soluciones basadas en la inteligencia artificial con el objetivo de que en el largo plazo 
              sustituyan algunas actividades realizadas por el ser humano.
              <br />
              Por su parte, la tecnología espacial ya ha evolucionado de tal forma que ya investigan vías para convertir a 
              otros planetas en lugares habitables para el ser humano. También es posible hacer viajes turísticos a 100 kilómetros de altura de la Tierra, que es lo que se considera el inicio del espacio exterior.</p>
              <img src=" https://ia-latam.com/wp-content/uploads/2019/02/etica4.jpg" alt="Descripción de la imagen" style={{ width: '100%', maxWidth: '300px', marginBottom: '20px', borderRadius: '8px' }} />
             

         </div>
          
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          </div>
          </div>
        </div>
  );
};

export default Etapas;
