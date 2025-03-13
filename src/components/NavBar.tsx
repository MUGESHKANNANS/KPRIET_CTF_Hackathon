import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import kprlogo from "../assets/Logo Variation-updated-16-White (1).png";
import logo6 from "../assets/logo6.png";

const sponsorLogos = [
  "https://netlabssolution.com//wp-content/uploads/2023/01/34449E85-0BFE-4271-85B4-044ACC07A2DD.png",
  "https://www.sparkouttech.com/web-stories/assets/web-logo.png",
  "https://ieeecs-media.computer.org/tc-media/sites/27/2020/03/05191106/IEEE-CS_LogoTM-white.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/IEEE_logo.svg/320px-IEEE_logo.svg.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEF5YIV3KX43ofP_2zx-IhIQ9wiLFqZ5qI7w&s",
  logo6,
  
];

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentIndexes, setCurrentIndexes] = useState([0]);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleResize = () => setIsSmallScreen(window.innerWidth < 768);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isSmallScreen) {
      const interval = setInterval(() => {
        setCurrentIndexes((prevIndexes) => {
          let nextIndex = (prevIndexes[0] + 1) % sponsorLogos.length;
          return [nextIndex];
        });
      }, 3000); // Change every 3 seconds

      return () => clearInterval(interval);
    }
  }, [isSmallScreen]);

  return (
    <nav className={`fixed top-0 left-0  right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-cyber-darker py-2 shadow-lg shadow-cyber-green/10' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        
        {/* Left Side - College Logo */}
        <Link to="/">
          <img src={kprlogo} alt="KPRIET Logo" className="h-20 w-auto" />
        </Link>

        {/* Right Side - Sponsor Logos */}
        <div className="flex space-x-4">
          {isSmallScreen ? (
            // Show rotating logos on mobile
            currentIndexes.map((index) => (
              <img key={index} src={sponsorLogos[index]} alt={`Sponsor ${index}`} className="h-12 w-auto transition-opacity duration-500" />
            ))
          ) : (
            // Show all logos statically on desktop
            sponsorLogos.map((logo, index) => (
              <img key={index} src={logo} alt={`Sponsor ${index}`} className="h-12 w-auto pr-6" />
            ))
          )}
        </div>

      </div>
    </nav>
  );
};

export default NavBar;
