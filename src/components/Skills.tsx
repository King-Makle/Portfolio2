import React, { useEffect, useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { skillsData } from '../data/skillsData';

interface SkillsProps {
  scrollY: number;
}

const Skills: React.FC<SkillsProps> = ({ scrollY }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);
  
  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section-padding bg-gray-50 dark:bg-gray-900"
    >
      <div className="container-custom">
        <div className="text-center">
          <h2 className="section-title">My Skills</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <div className={`transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            <h3 className="text-2xl font-bold mb-8 text-blue-500 dark:text-blue-400 relative inline-block">
              Technical Skills
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-500 dark:bg-blue-400"></span>
            </h3>
            
            <div className="space-y-6">
              {skillsData.technical.map((skill, index) => (
                <SkillBar 
                  key={skill.name} 
                  name={skill.name} 
                  percent={skill.percent} 
                  delay={index * 100}
                  isVisible={isInView}
                />
              ))}
            </div>
          </div>
          
          {/* Soft Skills */}
          <div className={`transition-all duration-700 delay-300 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            <h3 className="text-2xl font-bold mb-8 text-blue-500 dark:text-blue-400 relative inline-block">
              Soft Skills
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-500 dark:bg-blue-400"></span>
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              {skillsData.soft.map((skill, index) => (
                <SkillCard 
                  key={skill.name} 
                  name={skill.name} 
                  icon={skill.icon} 
                  delay={index * 100}
                  isVisible={isInView}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface SkillBarProps {
  name: string;
  percent: number;
  delay: number;
  isVisible: boolean;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, percent, delay, isVisible }) => {
  const barRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (barRef.current && isVisible) {
      setTimeout(() => {
        barRef.current?.classList.add('animated');
      }, delay);
    }
  }, [isVisible, delay]);

  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="font-medium text-gray-700 dark:text-gray-300">{name}</span>
        <span className="text-sm text-gray-600 dark:text-gray-400">{percent}%</span>
      </div>
      <div className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full">
        <div 
          ref={barRef}
          className="skill-bar h-2.5 rounded-full bg-blue-500"
          style={{ '--percent': `${percent}%` } as React.CSSProperties}
        ></div>
      </div>
    </div>
  );
};

interface SkillCardProps {
  name: string;
  icon: string;
  delay: number;
  isVisible: boolean;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, icon, delay, isVisible }) => {
  return (
    <div 
      className={`transition-all duration-500 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1`}
      style={{ 
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
      }}
    >
      <div className="flex items-center">
        <div className="mr-3 text-blue-500 dark:text-blue-400">
          <span className="text-2xl">{icon}</span>
        </div>
        <span className="font-medium">{name}</span>
      </div>
    </div>
  );
};

export default Skills;