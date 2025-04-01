
import React, { useState, useEffect } from 'react';
import { Shirt, Utensils, Gift } from 'lucide-react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const registrationLink = "https://docs.google.com/forms/d/e/1FAIpQLSfbOwUKpNHMJl7zOQIv0fEyXiq0Nj095tSdxOZh7XITBpwqdA/viewform";

  useEffect(() => {
    // Set target date to April 5, 2025
const targetDate = new Date('April 05, 2025 00:00:00').getTime();

    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (difference < 0) {
        clearInterval(intervalId);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const CountdownBox = ({ value, label }: { value: number; label: string }) => (
    <div className="countdown-box relative flex flex-col items-center justify-center bg-cyber-dark p-4 rounded-lg shadow-lg border border-cyber-green/30 min-w-[70px] md:min-w-[90px]">
      <div className="absolute inset-0 bg-cyber-green/5 rounded-lg"></div>
      <span className="text-2xl md:text-4xl font-bold text-cyber-green">{value}</span>
      <span className="text-xs uppercase mt-1 text-cyber-light/70">{label}</span>
    </div>
  );

  const ParticipantPerk = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
    <div className="flex items-center space-x-2 mb-1">
      <div className="text-cyber-green">{icon}</div>
      <span>{text}</span>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center py-10 md:py-16">
      <h2 className="text-2xl md:text-5xl font-bold mb-8 text-center">
        <span className="text-glow ">Registration </span>
        <span className="ml-2 text-white"></span>
        <span className="ml-2 text-cyber-green text-glow">Deadline</span>
      </h2>
      
      <div className="flex space-x-3 md:space-x-10">
        <CountdownBox value={timeLeft.days} label="Days" />
        <CountdownBox value={timeLeft.hours} label="Hours" />
        <CountdownBox value={timeLeft.minutes} label="Minutes" />
        <CountdownBox value={timeLeft.seconds} label="Seconds" />
      </div>
      
      <div className="mt-10 text-center">
        <a 
          href={registrationLink}
          target="_blank"
          rel="noopener noreferrer"
          className="register-button px-8 py-3 rounded-md text-black font-bold bg-cyber-green hover:bg-opacity-90 transform hover:-translate-y-1 transition duration-300"
        >
          Register Now
        </a>
        <p className="mt-4 text-cyber-light/80">DON'T HESITATE TO JOIN US</p>
        <p className="font-medium text-lg">5 April 2025 - Saturday </p>
        
        {/* <div className="mt-5 text-sm inline-block bg-cyber-dark/60 p-4 rounded-lg border border-cyber-green/20">
          <h4 className="text-cyber-green font-bold mb-2 text-md">Every Participant Gets:</h4>
          <div className="flex flex-col items-start">
            <ParticipantPerk icon={<Shirt size={18} />} text="Event T-shirt" />
            <ParticipantPerk icon={<Utensils size={18} />} text="Lunch" />
            <ParticipantPerk icon={<Utensils size={18} />} text="Voucher" />
            <ParticipantPerk icon={<Gift size={18} />} text="Goody Bag" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default CountdownTimer;
