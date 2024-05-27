import React, { useRef, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import SkillSection from '../components/SkillSection';
import PortfolioSection from '../components/PortfolioSection';
import ReviewsSection from '../components/ReviewsSection';
import ContactSection from '../components/ContactSection';
import HomeSection from '../components/HomeSection';

const HomePage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');
  const homeSectionRef = useRef<HTMLElement>(null);
  const portfolioSectionRef = useRef<HTMLElement>(null);
  const reviewSectionRef = useRef<HTMLElement>(null);
  const contactSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sections = [
      { id: 'homeSection', ref: homeSectionRef.current },
      { id: 'portfolioSection', ref: portfolioSectionRef.current },
      { id: 'reviewSection', ref: reviewSectionRef.current },
      { id: 'contactSection', ref: contactSectionRef.current },
    ];

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });

    sections.forEach(section => {
      if (section.ref) {
        observer.observe(section.ref);
      }
    });

    return () => {
      sections.forEach(section => {
        if (section.ref) {
          observer.unobserve(section.ref);
        }
      });
    };
  }, []);

  return (
    <>
      <div>
        <Navbar 
          homeSectionRef={homeSectionRef}
          portfolioSectionRef={portfolioSectionRef} 
          reviewSectionRef={reviewSectionRef} 
          contactSectionRef={contactSectionRef} 
          activeSection={activeSection}
        />
        <section ref={homeSectionRef} id="homeSection">
        <HomeSection contactSectionRef={contactSectionRef} portfolioSectionRef={portfolioSectionRef}/>
        </section>
        <SkillSection />
        <section ref={portfolioSectionRef} id="portfolioSection">
          <PortfolioSection />
        </section>
        <section ref={reviewSectionRef} id="reviewSection">
          <ReviewsSection />
        </section>
        <section ref={contactSectionRef} id="contactSection">
          <ContactSection />
        </section>
        <div></div>
      </div>
    </>
  );
};

export default HomePage;
