
import React from 'react';

const logos = [
  {
    name: "EC-Council",
    image: "https://netlabssolution.com//wp-content/uploads/2023/01/34449E85-0BFE-4271-85B4-044ACC07A2DD.png",
    description: "Leading provider of cybersecurity certification programs, including Certified Ethical Hacker (CEH)."
  },
  {
    name: "Sparkout",
    image: "https://www.sparkouttech.com/web-stories/assets/logo.png",
    description: "Tech solutions company specializing in custom software development and digital transformation."
  },
  {
    name: "Hackup",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEF5YIV3KX43ofP_2zx-IhIQ9wiLFqZ5qI7w&s",
    description: "Platform connecting developers with hackathons and coding challenges globally."
  },
  {
    name: "IEEE",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/IEEE_logo.svg/320px-IEEE_logo.svg.png",
    description: "World's largest technical professional organization dedicated to advancing technology for humanity."
  },
  {
    name: "Computer Society",
    image: "https://upload.wikimedia.org/wikipedia/en/archive/4/47/20211216195042%21IEEE_Computer.png",
    description: "Premier source for information, inspiration, and collaboration in computer science and engineering."
  }
];

const SponsorSection = () => {
  return (
    <section className="py-16 md:py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-white">OUR</span>
          <span className="ml-2 text-white">/</span>
          <span className="ml-2 text-cyber-green text-glow">SPONSORS</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center text-center">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg cyber-border flex flex-col items-center justify-center h-auto transition-all duration-300 hover:transform hover:-translate-y-2 opacity-90 hover:opacity-100"
            >
              <img 
                src={logo.image} 
                alt={logo.name} 
                className="max-h-16 max-w-full filter h-auto mb-4"
              />
              <h3 className="font-bold text-cyber-dark text-lg">{logo.name}</h3>
              <p className="text-center text-sm md:text-xl text-cyber-dark mt-2">{logo.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Want to Sponsor?</h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Join our mission to promote cybersecurity education and talent discovery. 
            Contact us to discuss sponsorship opportunities.
          </p>
          <a 
            href="mailto:exploit-x@kpriet.ac.in" 
            className="px-8 py-3 rounded-md text-cyber-green font-bold bg-transparent border-2 border-cyber-green hover:bg-cyber-green/10 transition duration-300 inline-block"
          >
            Become a Sponsor
          </a>
        </div>
      </div>
    </section>
  );
};

export default SponsorSection;
