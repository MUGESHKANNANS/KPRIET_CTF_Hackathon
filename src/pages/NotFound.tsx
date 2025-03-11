
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cyber-dark p-4">
      <div className="cyber-box rounded-lg p-8 md:p-12 max-w-lg w-full text-center">
        <h1 className="text-7xl md:text-8xl font-bold text-cyber-green mb-6 cyber-glitch-effect" data-text="404">404</h1>
        <p className="text-xl md:text-2xl text-cyber-light mb-8">SYSTEM BREACH DETECTED: PATH NOT FOUND</p>
        <p className="text-cyber-light/70 mb-8 text-lg">The resource you're looking for might have been deleted, moved, or never existed.</p>
        <a 
          href="/" 
          className="inline-flex items-center px-6 py-3 rounded-md text-black font-bold bg-cyber-green hover:bg-opacity-90 transform hover:-translate-y-1 transition duration-300"
        >
          <ArrowLeft className="mr-2" size={20} />
          Return to Base
        </a>
      </div>
    </div>
  );
};

export default NotFound;
