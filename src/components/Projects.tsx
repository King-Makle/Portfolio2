import React, { useState, useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { projectsData, categories } from '../data/projectsData';
import { Link } from 'react-router-dom';
import IconStream from './IconStream';

interface ProjectsProps {
  scrollY: number;
}

const Projects: React.FC<ProjectsProps> = ({ scrollY }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);
  
  const filteredProjects = activeCategory === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-padding bg-white dark:bg-gray-800"
    >
      <div className="container-custom">
        <div className="section-heading-wrapper">
          <h2 className="section-title">My Projects</h2>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button 
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === 'all' 
                ? 'bg-blue-500 text-white shadow-md transform scale-105' 
                : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 hover:scale-105'
            }`}
          >
            All
          </button>
          
          {categories.map(category => (
            <button 
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category 
                  ? 'bg-blue-500 text-white shadow-md transform scale-105' 
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 hover:scale-105'
              }`}
            >
              {category === '3d' ? '3D' : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              project={project}
              index={index}
              isVisible={isInView}
            />
          ))}
        </div>
      </div>
      
      {/* Icon Stream below projects */}
      <IconStream />
    </section>
  );
};

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    image: string;
    category: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
  };
  index: number;
  isVisible: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, isVisible }) => {
  return (
    <div 
      className={`project-card card group transition-all duration-700 overflow-hidden`}
      style={{ 
        transitionDelay: `${index * 100}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(50px)'
      }}
    >
      <Link to={`/project/${project.id}`} className="block">
        <div className="relative overflow-hidden h-48">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>
      
      <div className="p-6">
        <Link to={`/project/${project.id}`}>
          <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors">
            {project.title}
          </h3>
        </Link>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.map(tech => (
            <span 
              key={tech} 
              className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;