import React, { useEffect, useRef } from 'react';
import { Calendar, Shirt, Utensils, Gift, Mail ,Ticket,Package } from 'lucide-react';
import { FaTshirt } from 'react-icons/fa';
// import '../app.css'



const HeroSection = () => {
  const networkRef = useRef<SVGSVGElement>(null);
  const registrationLink = "https://docs.google.com/forms/d/e/1FAIpQLSfbOwUKpNHMJl7zOQIv0fEyXiq0Nj095tSdxOZh7XITBpwqdA/viewform";
  const sponsorEmail = "exploitx@kpriet.ac.in";
  
  useEffect(() => {
    if (!networkRef.current) return;
    
    const createRandomConnections = () => {
      const svg = networkRef.current;
      if (!svg) return;
      
      // Clear previous connections
      while (svg.firstChild) {
        svg.removeChild(svg.firstChild);
      }
      
      const width = svg.clientWidth;
      const height = svg.clientHeight;
      
      // Create points
      const points = [];
      for (let i = 0; i < 15; i++) {
        points.push({
          x: Math.random() * width,
          y: Math.random() * height
        });
      }
      
      // Create connections
      points.forEach((point, i) => {
        // Create node
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", point.x.toString());
        circle.setAttribute("cy", point.y.toString());
        circle.setAttribute("r", "2");
        circle.classList.add("network-node");
        svg.appendChild(circle);
        
        // Connect to 2-3 random points
        const connections = Math.floor(Math.random() * 2) + 1;
        for (let j = 0; j < connections; j++) {
          const randomIndex = Math.floor(Math.random() * points.length);
          if (randomIndex !== i) {
            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute("x1", point.x.toString());
            line.setAttribute("y1", point.y.toString());
            line.setAttribute("x2", points[randomIndex].x.toString());
            line.setAttribute("y2", points[randomIndex].y.toString());
            line.classList.add("network-line");
            svg.appendChild(line);
          }
        }
      });
    };
    
    createRandomConnections();
    
    // Recreate connections on resize
    const handleResize = () => {
      createRandomConnections();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen pt-24 overflow-hidden  mt-12" id="home">
      {/* Background network animation */}
      <svg ref={networkRef} className="absolute inset-0 w-full h-full z-0 opacity-30" />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <div className="space-y-6 md:pr-12">
            <div className="inline-flex items-center py-1 px-3 rounded-full bg-cyber-green/10 border border-cyber-green/20 text-cyber-green text-sm font-medium mb-4 opacity-0 animate-fade-in-delay-1">
                <span className="mr-2">INTERNATIONAL-LEVEL CYBER QUEST</span>
              </div>
              <div className="flex items-center mb-4">
                {/* <img src="/placeholder.svg" alt="KPRIET Logo" className="h-14 mr-4" /> */}
                <p className="text-l md:text-2xl font-bold tracking-tight opacity-0 animate-fade-in-delay-1">
                  <span className="block font-exploit text-white">
                    Department of Computer Science and Engineering
                  </span>
                  <span className="block text-cyber-green mt-2 font-exploit">
                    organize 
                  </span>
                </p>
              </div>
              
              <div className="flex items-center mb-4">
                {/* <img src="/placeholder.svg" alt="KPRIET Logo" className="h-14 mr-4" /> */}
                <h1 className="text-2xl md:text-5xl font-bold tracking-tight opacity-0 animate-fade-in-delay-1 font-hacked">
                  <span className="font-exploit text-white">EXPLOIT-X</span>
                  <span className="text-cyber-green text-glow ml-2 font-exploit">KPR CTF</span>
                </h1>

              </div>
              
              <p className="text-2xl text-muted-foreground opacity-0 animate-fade-in-delay-2">
                Crack. Track. Conquer.
              </p>
              
              <div className="flex items-center space-x-4 opacity-0 animate-fade-in-delay-3">
                <div className="flex items-center space-x-2 text-cyber-green md:text-xl">
                  <Calendar size={18} />
                  <span className="font-medium">05  April 2025 - Saturday</span>
                </div>
              </div>
              
              <div className="opacity-0 animate-fade-in-delay-3">
                <p className="text-xl font-bold mb-1">PRIZES WORTH</p>
                <p className="text-4xl md:text-4xl font-bold text-cyber-green text-glow mb-3">INR: 1,00,000 + 50,000 <span className='text-white text-sm'>( voucher )</span></p>
                <p className="text-sm text-cyber-light/70 mb-1">(₹40,000 voucher by Ec-Council)</p>
                <p className="text-xl md:s text-muted-foreground mb-6">Registration Fee: ₹550/ $10 per head</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="register-button px-8 py-3 rounded-md text-black font-bold bg-cyber-green hover:bg-opacity-90 transform hover:-translate-y-1 transition duration-300"
                  >
                    Register Now
                  </a>
                  <a 
                    href={`mailto:${sponsorEmail}`}
                    className="border border-cyber-green text-cyber-green px-8 py-3 rounded-md font-bold hover:bg-cyber-green/10 transform hover:-translate-y-1 transition duration-300 flex items-center justify-center"
                  >
                    <Mail size={18} className="mr-2" />
                    Become a Sponsor
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 opacity-0 animate-fade-in-delay-4">
            <div className="relative mx-auto max-w-md">
              {/* Decorative elements */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyber-green/30 to-cyber-blue/30 rounded-lg blur-lg opacity-75 animate-pulse-green"></div>
              
              <div className="cyber-box relative rounded-lg p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-cyber-green">Event Highlights</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-cyber-green">⚡</div>
                    <span>Real-world cybersecurity challenges</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-cyber-green">⚡</div>
                    <span>Network with top cybersecurity professionals</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-cyber-green">⚡</div>
                    <span>Win exciting prizes and job opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-cyber-green">⚡</div>
                    <span>Build your resume with prestigious CTF experience</span>
                  </li>
                </ul>
                
                <div className="mt-6 pt-5 border-t border-cyber-green/20">
                  <div className="flex flex-wrap justify-between">
                    <div className="text-center mb-3 w-1/2 md:w-auto">
                      <div className="text-3xl font-bold text-cyber-green">2-4</div>
                      <div className="text-xs text-muted-foreground">Team Size</div>
                    </div>
                    <div className="text-center mb-3 w-1/2 md:w-auto">
                      <div className="text-3xl font-bold text-cyber-green">10+</div>
                      <div className="text-xs text-muted-foreground">Challenges</div>
                    </div>
                    <div className="text-center mb-3 w-1/2 md:w-auto">
                      <div className="text-3xl font-bold text-cyber-green">24h</div>
                      <div className="text-xs text-muted-foreground">Duration</div>
                    </div>
                    <div className="text-center mb-3 w-1/2 md:w-auto">
                      <div className="text-3xl font-bold text-cyber-green">∞</div>
                      <div className="text-xs text-muted-foreground">Learning</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-5 pt-5 border-t border-cyber-green/20">
                  <h4 className="text-lg font-bold mb-3 text-cyber-green">Every Participant Gets:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 text-cyber-green"><Shirt size={18} /></div>
                      <span>T-shirt</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 text-cyber-green"><Utensils size={18} /></div>
                      <span>Lunch</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 text-cyber-green"><Ticket size={18} /></div>
                      <span>Voucher</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 text-cyber-green"><FaTshirt size={18} /></div>
                      <span>Goody</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
