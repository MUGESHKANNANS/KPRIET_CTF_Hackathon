
import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-16 md:py-20 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <div className="cyber-box rounded-lg p-6 md:p-8 h-full">
              <img 
                src="https://images.pexels.com/photos/5380651/pexels-photo-5380651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Hacker working on computer" 
                className="rounded-lg w-full h-auto shadow-lg shadow-cyber-green/10"
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="text-white">ABOUT THIS</span>
              <span className="ml-2 text-white">/</span>
              <span className="ml-2 text-cyber-green text-glow">EVENT</span>
            </h2>
            
            <div className="space-y-5 text-lg">
              <p>
                Welcome to <span className="text-cyber-green font-bold">KPR CTF</span> Challenge 2025, South India's standalone offline national-level 
                <span className="text-cyber-green font-bold"> Capture the Flag (CTF) cybersecurity competition!</span>
              </p>
              
              <p>
                Hosted by Department of Computer Science and Engineering,<span className="text-cyber-green font-bold">KPR Institute of Engineering and Technology,</span>  in collaboration with top industry leaders like EC Council, Sparkout Tech Solutions and Hackup Technology, this event offers an unparalleled platform for students, professionals, and cybersecurity enthusiasts.
              </p>
              
              <p>
                Showcase your skills, solve real-world security challenges, and compete for exciting rewards, internships, and recognition.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="bg-cyber-dark rounded-lg p-4 border border-cyber-green/20 flex-1 min-w-[120px]">
                  <div className="text-cyber-green text-3xl font-bold">25+</div>
                  <div className="text-sm text-cyber-light/70">Challenging Tasks</div>
                </div>
                
                <div className="bg-cyber-dark rounded-lg p-4 border border-cyber-green/20 flex-1 min-w-[120px]">
                  <div className="text-cyber-green text-3xl font-bold">200+</div>
                  <div className="text-sm text-cyber-light/70">Teams Expected</div>
                </div>
                
                <div className="bg-cyber-dark rounded-lg p-4 border border-cyber-green/20 flex-1 min-w-[120px]">
                  <div className="text-cyber-green text-3xl font-bold">₹ 1Laks</div>
                  <div className="text-sm text-cyber-light/70">Prize Pool</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
