import React, { useState, useEffect } from "react";

const Preloader: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // When the component mounts, wait a tiny bit then trigger the fade-out
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  const letters = ["L", "O", "A", "D", "I", "N", "G"];

  return (
    <div id="preloader" className={isLoaded ? "loaded" : ""}>
      <div id="ctn-preloader" className="ctn-preloader">
        <div className="animation-preloader">
          <div className="spinner" />
          <div className="txt-loading">
            {letters.map((char, index) => (
              <span
                key={index}
                data-text-preloader={char}
                className="letters-loading"
              >
                {char}
              </span>
            ))}
          </div>
        </div>
        <div className="loader-section section-left" />
        <div className="loader-section section-right" />
      </div>
    </div>
  );
};

export default Preloader;
