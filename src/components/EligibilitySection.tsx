
import React from 'react';

const EligibilitySection = () => {
  const registrationLink = "https://docs.google.com/forms/d/e/1FAIpQLSfbOwUKpNHMJl7zOQIv0fEyXiq0Nj095tSdxOZh7XITBpwqdA/viewform";
  
  return (
    <section className="py-16 md:py-20 relative" id="eligibility">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="text-white">WHO CAN JOIN</span>
              <span className="ml-2 text-white">/</span>
              <span className="ml-2 text-cyber-green text-glow">THE CTF</span>
            </h2>
            
            <div className="space-y-6 text-lg">
              <p>
                This CTF is for all infosec beginners, cybersecurity enthusiasts, and anyone eager to test their skills while saving the planet.
              </p>
              
              <p>
                The competition is open to students. Teams must have 2 to 4 members. Any form of cheating, collusion, or unethical behavior will lead to disqualification.
              </p>
              
              <p>
                Attacking event infrastructure or sharing flags and solutions with other teams is strictly prohibited.
              </p>
              
              <ul className="space-y-3 mt-6">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-cyber-green">→</div>
                  <span>College/University Students</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-cyber-green">→</div>
                  <span>Working Professionals in IT</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-cyber-green">→</div>
                  <span>Security Researchers</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-cyber-green">→</div>
                  <span>Cybersecurity Enthusiasts</span>
                </li>
              </ul>
              
              <a 
                href={registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="register-button mt-4 px-8 py-3 rounded-md text-black font-bold bg-cyber-green hover:bg-opacity-90 transform hover:-translate-y-1 transition duration-300 inline-block"
              >
                Register Now
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="cyber-box rounded-lg p-6 md:p-8 h-full">
              <img 
                src="https://images.pexels.com/photos/5380607/pexels-photo-5380607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Hacker in hoodie" 
                className="rounded-lg w-full h-auto shadow-lg shadow-cyber-green/10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EligibilitySection;
