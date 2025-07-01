import React, { useEffect, useRef } from 'react';
import { useInView } from '../hooks/useInView';

interface AboutProps {
  scrollY: number;
}

const About: React.FC<AboutProps> = ({ scrollY }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  
  const isInView = useInView(sectionRef);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="section-padding bg-white dark:bg-gray-800"
    >
      <div className="container-custom">
        <div className="section-heading-wrapper">
          <h2 className="section-title">About Me</h2>
        </div>
        
        <div 
          ref={textRef}
          className={`transition-all duration-700 delay-300 max-w-6xl mx-auto ${
            isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}
        >
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Photo Container */}
            <div className="lg:w-56 flex-shrink-0">
              <div className="w-full h-72 rounded-xl overflow-hidden shadow-xl border-4 border-white dark:border-gray-700">
                <img 
                  src="/images/MakleSelfie.jpg" 
                  alt="Makle Richards"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-6 text-blue-500 dark:text-blue-400 relative inline-block">
                Who I Am
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-500 dark:bg-blue-400"></span>
              </h3>
              
              <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                I am a recent graduate of the University of Northern Colorado, holding a Bachelor of Arts in Graphic Design and Studio Art with a minor in Digital Marketing. Throughout my time at UNCO, I served as Vice President of Delta Sigma Phi and as a Student Government Senator, where I advocated for student interests and policy improvements.
              </p>
              
              <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                Before college, I served in the U.S. Army as an infantry squad leader, where I developed leadership, discipline, and strategic planning skills that continue to inform my professional and creative work.
              </p>
              
              <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
                Outside of my career, I pursue photography and illustration as personal passions, continually exploring new ways to express stories through visual design.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Education</h4>
                  <p className="text-gray-700 dark:text-gray-300">B.A. in Graphic Design & Studio Art <br />Minor in Digital Marketing <br />University of Northern Colorado</p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Experience</h4>
                  <p className="text-gray-700 dark:text-gray-300">Graphic Design Intern at AlphaGraphics<br/>Designer of Solar Snapbacks<br/>Event Marketing & Design Lead</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;