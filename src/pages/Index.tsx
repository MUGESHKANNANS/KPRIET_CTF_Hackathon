
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import CountdownTimer from '@/components/CountdownTimer';
import AboutSection from '@/components/AboutSection';
import EligibilitySection from '@/components/EligibilitySection';
import WhyJoinSection from '@/components/WhyJoinSection';
import SponsorSection from '@/components/SponsorSection';
import FooterSection from '@/components/FooterSection';
import RulesSection from '@/components/RulesSection';

const Index = () => {
  useEffect(() => {
    // Smooth scroll for all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
          const targetElement = document.querySelector(href);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
    
    // Add parallax effect on scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      document.body.style.backgroundPositionY = `${scrollY * 0.05}px`;
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-cyber-dark overflow-x-hidden">
      <NavBar />
      <HeroSection />
      <CountdownTimer />
      <section id="about">
        <AboutSection />
      </section>
      <section id="eligibility">
        <EligibilitySection />
      </section>
      <section id="rules">
        <RulesSection />
      </section>
      <section id="why-join">
        <WhyJoinSection />
      </section>
      <SponsorSection />
      <FooterSection />
    </div>
  );
};

export default Index;
