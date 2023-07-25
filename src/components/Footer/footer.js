
import React from "react";

function Footer() {

  const handleInstagramClick = () => {
    // Redireccionar a la página de Instagram
    window.location.href = 'https://instagram.com/senoidalhz?igshid=MmIzYWVlNDQ5Yg==';
  };



  return (
    <div className="footer-container">
      <div className="section-divider"></div> {/* Línea divisora */}
      <footer className="footer">
        <div className="contact-info">
          <h3>Redes Sociales</h3>
        </div>
        <div className="social-media">
          <ul>
            <img className="instagram-icon" onClick={handleInstagramClick} />
          </ul>
        </div>
      </footer>
    </div>
  );
}


export default Footer;
