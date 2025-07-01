import React, { useEffect, useRef } from 'react';
import { ChevronDown, Instagram, Linkedin } from 'lucide-react';

interface HeroProps {
  scrollY: number;
}

const Hero: React.FC<HeroProps> = ({ scrollY }) => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (parallaxRef.current) {
      parallaxRef.current.style.transform = `translateY(${scrollY * 0.15}px)`;
    }
  }, [scrollY]);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div 
        ref={parallaxRef}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.6)"
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 z-10"></div>
      
      <div className="container-custom z-20 text-white pt-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight text-white animate-fade-in">
            Hi, I'm <span className="text-blue-400">Makle Richards</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-gray-200 animate-fade-in delay-100">
            Visual Strategist & UI/UX Designer
          </h2>
          <p className="text-lg md:text-xl mb-10 text-gray-300 animate-fade-in delay-200">
            I create beautiful, functional, and user-friendly digital experiences.
            My passion is building modern web applications with cutting-edge technologies.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-in delay-300">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-outline border-white text-white hover:bg-white hover:text-gray-900">
              Contact Me
            </a>
          </div>
          
          <div className="mt-12 flex space-x-6 animate-fade-in delay-400">
            <a 
              href="https://www.linkedin.com/in/makle-richards" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://www.instagram.com/king_makle?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Instagram Profile"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <a href="#about" className="text-white">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;