import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const handleNavigation = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="container-custom flex justify-between items-center">
        <a 
          onClick={() => handleNavigation('home')} 
          className="text-2xl font-bold text-blue-500 cursor-pointer"
        >
          Portfolio<span className="text-teal-500">.</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-2">
            <li><button onClick={() => handleNavigation('home')} className="nav-link active-nav-link">Home</button></li>
            <li><button onClick={() => handleNavigation('about')} className="nav-link">About</button></li>
            <li><button onClick={() => handleNavigation('skills')} className="nav-link">Skills</button></li>
            <li><button onClick={() => handleNavigation('projects')} className="nav-link">Projects</button></li>
            <li><button onClick={() => handleNavigation('contact')} className="nav-link">Contact</button></li>
          </ul>
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <button 
          onClick={toggleMenu}
          className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors md:hidden"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white dark:bg-gray-900 z-40 transition-all duration-300 ${
        isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        {/* Close Button in Mobile Menu */}
        <div className="absolute top-5 right-4">
          <button 
            onClick={toggleMenu}
            className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="container-custom pt-24 pb-8">
          <nav className="flex flex-col">
            <ul className="flex flex-col space-y-6 text-xl">
              <li><button onClick={() => handleNavigation('home')} className="nav-link active-nav-link">Home</button></li>
              <li><button onClick={() => handleNavigation('about')} className="nav-link">About</button></li>
              <li><button onClick={() => handleNavigation('skills')} className="nav-link">Skills</button></li>
              <li><button onClick={() => handleNavigation('projects')} className="nav-link">Projects</button></li>
              <li><button onClick={() => handleNavigation('contact')} className="nav-link">Contact</button></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;