import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <div className='main-container'>
      <div className="logo"><p>My Logo</p></div>
    <nav className='nav'>
      <div className='navigation-links'>
        <NavLink className="navLink" exact to="/">Inicio</NavLink>
        <NavLink className="navLink" to="/archivo">Archivo</NavLink>
        <NavLink className="navLink" to="/nosotros">Nosotros</NavLink>   
        </div>
    </nav>
    </div>
  );
}

export default Navigation;