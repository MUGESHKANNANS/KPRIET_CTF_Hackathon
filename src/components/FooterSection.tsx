
import React from 'react';
import { ChevronRight, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const FooterSection = () => {
  const registrationLink = "https://docs.google.com/forms/d/e/1FAIpQLSfbOwUKpNHMJl7zOQIv0fEyXiq0Nj095tSdxOZh7XITBpwqdA/viewform";
  const sponsorEmail = "exploit-x@kpriet.ac.in";
  
  return (
    <footer className="bg-cyber-darker">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center mb-6">
              {/* <img src="/placeholder.svg" alt="KPRIET Logo" className="h-10 mr-3" /> */}
              <div>
                <h3 className="font-bold text-2xl text-cyber-green font-exploit">EXPLOIT-X</h3>
                <p className="text-cyber-green font-exploit">KPR CTF</p>
              </div>
            </div>
            <p className="text-cyber-light/70 mb-6">
              South India's standalone offline national-level Capture the Flag cybersecurity competition.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/KPRIETonline/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-cyber-dark/80 h-10 w-10 rounded-full flex items-center justify-center text-cyber-green hover:bg-cyber-green hover:text-cyber-dark transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/kprietonline/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-cyber-dark/80 h-10 w-10 rounded-full flex items-center justify-center text-cyber-green hover:bg-cyber-green hover:text-cyber-dark transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://twitter.com/KPRIETonline?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-cyber-dark/80 h-10 w-10 rounded-full flex items-center justify-center text-cyber-green hover:bg-cyber-green hover:text-cyber-dark transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://in.linkedin.com/school/kprietonline/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-cyber-dark/80 h-10 w-10 rounded-full flex items-center justify-center text-cyber-green hover:bg-cyber-green hover:text-cyber-dark transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-cyber-green font-bold text-xl mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/#about">About</FooterLink>
              <FooterLink href="/#eligibility">Eligibility</FooterLink>
              <FooterLink href="/#rules">Rules</FooterLink>
              <FooterLink href="/#why-join">Why Join</FooterLink>
              <FooterLink href="/#sponsors">Sponsors</FooterLink>
              <FooterLink href={registrationLink}>Register Now</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="text-cyber-green font-bold text-xl mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="text-cyber-green mr-3 mt-1 flex-shrink-0" size={18} />
                <a href={`mailto:${sponsorEmail}`} className="text-cyber-light/70 hover:text-cyber-green transition-colors">
                  {sponsorEmail}
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="text-cyber-green mr-3 mt-1 flex-shrink-0" size={18} />
                <span className="text-cyber-light/70">+91-422-2635600</span>
              </li>
              <li className="flex items-start">
                <MapPin className="text-cyber-green mr-3 mt-1 flex-shrink-0" size={18} />
                <p className="text-cyber-light/70">
                  KPR Institute of Engineering and Technology,<br />
                  Arasur, Coimbatore,<br />
                  Tamil Nadu 641407
                </p>
              </li>
            </ul>
            
            <div className="mt-8">
              <h4 className="text-cyber-green font-bold text-xl mb-4">Sponsors</h4>
              <p className="text-cyber-light/70 mb-4">
                Ec-Council (₹40,000 voucher)
              </p>
              <a 
                href={`mailto:${sponsorEmail}`}
                className="inline-flex items-center text-cyber-green hover:underline"
              >
                <span>Become a Sponsor</span>
                <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-cyber-green/20 mt-12 pt-8 text-center">
          <p className="text-cyber-light/60">
            &copy; {new Date().getFullYear()} EXPLOIT-X CTF. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <a 
      href={href} 
      className="flex items-center text-cyber-light/70 hover:text-cyber-green transition-colors"
    >
      <ChevronRight size={16} className="mr-2 text-cyber-green" />
      <span>{children}</span>
    </a>
  </li>
);

export default FooterSection;
