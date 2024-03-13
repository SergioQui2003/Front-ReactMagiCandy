import './styles/Inicio.css';
import Header from './components/Header';
import Footer from './components/Footer';





function App() {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="../CSS/Inicio.css" />
        <link rel="icon" href="../src/assets/img/Icono.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />
        <script
          src="https://kit.fontawesome.com/44485b0623.js"
          crossOrigin="anonymous"></script>
        <title>MagiCandy</title>
      </head>
      <body>
        {/* ESTE ES EL MENU BLANCO CON CADA UNA DE LAS PAGINAS */}
        <Header />
        {/* AQUI VA LA IMAGEN PRINCIPAL DE LA WEB--BANNER */}
        <div className="banner">
          <img src="../src/IMG/Banner.jpg" alt="Banner de la pagina web" /><br />
        </div>
        <div className="containerOne">
          <p className="persuasive-text"><strong>¡Has llegado a un mundo de experiencias inolvidables!</strong></p><br />
        </div>
        {/* AQUI VAN LAS TRES (3) PRIMERAS IMAGENES DE LOS PRODUCTOS */}
        <div className="container-products">
          <img src="../SRC/ASSETS/IMG/Producto 2.jpg" alt="Frutitas" />
          <img src="../SRC/ASSETS/IMG/Producto 6.jpg" alt="Dulce Trigo" />
          <img src="../SRC/ASSETS/IMG/Producto 3.jpg" alt="Panditas" />
        </div><br />
        {/* BOTON DE VER MAS EN LA PAG. PRINCIPAL */}
        <button className="btn-see-more" role="boton"><a href="Productos.html">Ver más ➜ </a></button>
        <div className="containerOne">
          <p className="persuasive-text"><strong>Hacemos felices lo mejores momentos del día con tan solo un dulce en tu boca.</strong></p><br />
        </div>
        {/* REDES SOCIALES DE LA PAGINA PRINCIPAL */}
        <div className="container-nets">
          <ul>
            <li><a href="https://www.instagram.com/magiccandys/" target="_blank"><img src="../SRC/ASSETS/IMG/instagram.svg" width="30" height="30" /></a></li>
            <li><a href="https://www.facebook.com/profile.php?id=100091925247816" target="_blank"><img src="../SRC/ASSETS/IMG/facebook.svg" width="30" height="30" /></a></li>
            <li><a href="https://web.whatsapp.com" target="_blank"><img src="../SRC/ASSETS/IMG/whatsapp.svg" width="30" height="30" /></a></li>
          </ul>
        </div>
        {/* ICONO DE whatsapp PARA COMUNICACION */}
        <a href="https://wa.me/+3133813154" className="botonW" title="Envíanos un mensaje" target="_blank">
          <i className="fa fa-whatsapp"></i>
          {/* para que el ícono funcione, debemos incluir la librería de íconos fontawesome */}
        </a>
        {/* ESTE ES EL FOOTER DE LA PAG.PRINCIPAL NO AGREGAR INFORMACIÓN AQUÍ */}
        <Footer />
      </body>
    </html>
    
  );
}

export default App;
