
import React, { useEffect, useState } from 'react';


const Welcome = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setShowText(true);
  }, []);

  return (
    <div className='banner-container'>
      {showText && (
        <h2 className="welcome">
          <span className="banner-text">
            {'Bienvenidos'.split('').map((letter, index) => (
              <span
                key={index}
                style={{animationDelay: `${(index + 1) * 0.1}s` }}
              >
                {letter}
              </span>
            ))}
          </span>
        </h2>
      )}
    </div>
  );
}
export default Welcome;