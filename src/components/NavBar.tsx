
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const registrationLink = "https://docs.google.com/forms/d/e/1FAIpQLSfbOwUKpNHMJl7zOQIv0fEyXiq0Nj095tSdxOZh7XITBpwqdA/viewform";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-cyber-darker py-2 shadow-lg shadow-cyber-green/10' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            {/* <img src="/placeholder.svg" alt="KPRIET Logo" className="h-8 w-auto" /> */}
            <div className="text-cyber-green font-bold text-2xl tracking-wider font-exploit">
              EXPLOIT-X
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/#about">About</NavLink>
            <NavLink href="/#rules">Rules</NavLink>
            <NavLink href="/#sponsors">Sponsors</NavLink>
            <a 
              href={registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="register-button px-6 py-2 rounded-md text-black font-bold bg-cyber-green hover:bg-opacity-90 transform hover:-translate-y-1 transition duration-300"
            >
              Register Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button onClick={toggleMenu} className="md:hidden text-cyber-green">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-cyber-darker px-4 pt-4 pb-6 space-y-4 border-t border-cyber-green/30">
          <MobileNavLink href="/" onClick={toggleMenu}>Home</MobileNavLink>
          <MobileNavLink href="/#about" onClick={toggleMenu}>About</MobileNavLink>
          <MobileNavLink href="/#rules" onClick={toggleMenu}>Rules</MobileNavLink>
          <MobileNavLink href="/#sponsors" onClick={toggleMenu}>Sponsors</MobileNavLink>
          <a 
            href={registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full register-button mt-2 px-6 py-3 rounded-md text-black font-bold bg-cyber-green hover:bg-opacity-90 transform transition duration-300 text-center"
          >
            Register Now
          </a>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="text-cyber-light font-medium hover:text-cyber-green transition-colors duration-300">
    {children}
  </a>
);

const MobileNavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) => (
  <a 
    href={href} 
    className="flex items-center justify-between text-cyber-light hover:text-cyber-green py-2 border-b border-cyber-green/20"
    onClick={onClick}
  >
    <span>{children}</span>
    <ChevronRight size={18} className="text-cyber-green" />
  </a>
);

export default NavBar;
