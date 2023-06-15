import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <div className='main-container'>
      <div className="logo"><p>My Logo</p></div>
    <nav className='nav'>
      <div className='navigation-links'>
        <NavLink  to="/inicio" className="navLink">Inicio</NavLink>
        <NavLink  to="/archivo" className="navLink">Archivo</NavLink>
        <NavLink  to="/nosotros" className="navLink">Nosotros</NavLink>   
        </div>
    </nav>
    </div>
  );
}

export default Navigation;