import React from 'react';

function Footer() {
  return (
    <footer className='footer'>
      <div className="contact-info">
        <h3>Contacto</h3>
        <p>Teléfono: 123-456-789</p>
        <p>Email: info@example.com</p>
      </div>
      <div className="social-media">
        <h3>Redes Sociales</h3>
        <ul>
          <li><a href="https://facebook.com">Facebook</a></li>
          <li><a href="https://twitter.com">Twitter</a></li>
          <li><a href="https://instagram.com">Instagram</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;