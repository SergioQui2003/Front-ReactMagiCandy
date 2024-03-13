import React from 'react'

function Navbar() {
  return (
    <header>
    <a href="Inicio.html"><img className="logo" src="../SRC/ASSETS/IMG/MGCwhite.jpg" alt="Logo" height="70px" width="200px" /></a>
    <input type="checkbox" id="check" />
    <label htmlFor="check" className="show-menu">&#8801;</label>
    <nav className="menu">
      <a href="Cuenta.html">Cuenta</a>
      <a href="Inicio.html">Inicio</a>
      <a href="Productos.html">Productos</a>
      <a href="Nosotros.html">Nosotros</a>
      <a href="Contacto.html">Contacto</a>
      <a href="Carrito.html"><i className="fas fa-shopping-cart"></i></a>
      <label htmlFor="check" className="hide-menu">&#215;</label>
    </nav>
  </header>
  )
}

export default Navbar
