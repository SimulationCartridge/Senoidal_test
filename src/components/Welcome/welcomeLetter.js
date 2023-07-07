
import React, { useEffect, useState } from 'react';


const WelcomeLetter = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setShowText(true);
  }, []);

  return (
    <div>
     {showText && (
    <h2 className="welcome">
      <span className="banner-text">
        {'Senoidal'.split('').map((letter, index) => (
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
export default WelcomeLetter;


