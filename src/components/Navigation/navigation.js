import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <div className="header-container">
    <nav className='navbar'>
        <NavLink className="navLink" exact to="/">Inicio</NavLink>
        <NavLink className="navLink" to="/archivo">Archivo</NavLink>
        <NavLink className="navLink" to="/nosotros">Nosotros</NavLink>   
        <div className="animation start-home"></div>
    </nav>
    </div>
  );
}

export default Navigation;