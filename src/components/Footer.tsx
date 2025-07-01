import React from 'react';
import { Instagram, Linkedin, Heart, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="border-t border-[#353535] bg-[#111827] text-[#f5f5f5] py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="flex flex-row gap-16">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-400">Site Map</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-[#f5f5f5] hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="text-[#f5f5f5] hover:text-white transition-colors">About</a></li>
                <li><a href="#skills" className="text-[#f5f5f5] hover:text-white transition-colors">Skills</a></li>
                <li><a href="#projects" className="text-[#f5f5f5] hover:text-white transition-colors">Projects</a></li>
                <li><a href="#contact" className="text-[#f5f5f5] hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-400">Let's Connect</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/makle-richards" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#f5f5f5] hover:text-white transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://www.instagram.com/king_makle?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#f5f5f5] hover:text-white transition-colors"
                  aria-label="Instagram Profile"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4 w-full md:w-auto">
            <div className="text-center md:text-right w-full">
              <a href="#" className="text-2xl font-bold text-blue-400">
                Portfolio<span className="text-teal-400">.</span>
              </a>
              <p className="mt-2 text-[#f5f5f5] max-w-xs mx-auto md:ml-auto md:mx-0">
               Designs with experience in mind.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end gap-2 w-full">
              <div className="flex items-center space-x-4 justify-center md:justify-end w-full">
                <button 
                  onClick={toggleTheme}
                  className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                  aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                  {theme === 'dark' ? (
                    <Sun size={20} className="text-yellow-400" />
                  ) : (
                    <Moon size={20} className="text-[#f5f5f5]" />
                  )}
                </button>
              </div>
              <p className="text-[#f5f5f5] text-sm text-center md:text-right w-full">
                &copy; {currentYear} Makle Richards. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;