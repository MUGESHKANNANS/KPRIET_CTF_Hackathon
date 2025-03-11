
import React from 'react';
import { Box, Users, Award, Trophy } from 'lucide-react';

const ReasonCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-cyber-dark border border-cyber-green/20 rounded-lg p-6 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg hover:shadow-cyber-green/5 md:text-xl">
    <div className="text-cyber-green mb-4 flex justify-center">
      {icon}
    </div>
    <h3 className="text-lg font-bold text-center mb-2">{title}</h3>
    <p className="text-cyber-light/70 text-sm text-center md:text-l">{description}</p>
  </div>
);

const WhyJoinSection = () => {
  const registrationLink = "https://docs.google.com/forms/d/e/1FAIpQLSfbOwUKpNHMJl7zOQIv0fEyXiq0Nj095tSdxOZh7XITBpwqdA/viewform";
  
  return (
    <section className="py-16 md:py-20 relative" id="why-join">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-white">WHY</span>
          <span className="ml-2 text-white">/</span>
          <span className="ml-2 text-cyber-green text-glow">JOIN?</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ReasonCard
            icon={<Box size={48} className="animate-float" />}
            title="HACK. HACK. HACK."
            description="Top-notch hacking content created by CSE, KPRIET customized for the event."
          />
          
          <ReasonCard
            icon={<Award size={48} className="animate-float" />}
            title="DEVINE PRIZES"
            description="Win the biggest and most exclusive prizes ever!"
          />
          
          <ReasonCard
            icon={<Users size={48} className="animate-float" />}
            title="COMMUNITY PARTY"
            description="Meet the most fun, skilled, and interactive hacking community. Become one of us and have fun while learning!"
          />
          
          <ReasonCard
            icon={<Trophy size={48} className="animate-float" />}
            title="BE THE CHAMPION"
            description="Are you ready to achieve eternal glory? Push. Burn through your battles and get ready for scoreboard domination!"
          />
        </div>
        
        <div className="mt-12 pt-12 border-t border-cyber-green/20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <img 
                src="https://media.istockphoto.com/id/1218592795/photo/hacker-using-laptop-and-falling-dollar-bills.jpg?s=2048x2048&w=is&k=20&c=adQehsSBxrSRUqXOFtNPutAUkbNf8kaLv-OMJcZJ-Xo=" 
                alt="Hacker with glowing keyboard" 
                className="rounded-lg w-full max-w-md mx-auto h-auto shadow-lg shadow-cyber-green/10"
              />
            </div>
            
            <div className="w-full md:w-1/2 md:pl-12">
              <h3 className="text-2xl font-bold mb-4 text-cyber-green">PRIZE POOL: INR 1,00,000 + ₹40,000 (VOUCHERS)</h3>
              <p className="text-lg mb-6">
                Exciting cash prizes by KPR and vouchers worth ₹40,000 by EC-Council for top-performing teams, internship and job opportunities for outstanding participants. Certificates for all registered participants.
              </p>
              
              <h3 className="text-2xl font-bold mb-4">
                READY TO <span className="text-cyber-green">CRACK. TRACK. CONQUER.</span>
              </h3>
              
              <a 
                href={registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="register-button inline-block mt-4 px-8 py-3 rounded-md text-black font-bold bg-cyber-green hover:bg-opacity-90 transform hover:-translate-y-1 transition duration-300"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinSection;
