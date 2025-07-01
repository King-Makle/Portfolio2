import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Award, Lightbulb, ChevronLeft, ChevronRight } from 'lucide-react';
import { projectsData } from '../data/projectsData';

interface ProjectDetail {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  category: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  timeline: string;
  role: string;
  achievements: string[];
  lessonsLearned: string[];
  screenshots: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projectsData.find(p => p.id === id) as ProjectDetail;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Reset carousel to first image when project changes
    setCurrentImageIndex(0);
  }, [id]);

  const handleNextImage = () => {
    if (project?.screenshots) {
      setCurrentImageIndex((prev) => (prev + 1) % project.screenshots.length);
    }
  };

  const handlePrevImage = () => {
    if (project?.screenshots) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? project.screenshots.length - 1 : prev - 1
      );
    }
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <button
            onClick={() => navigate('/')}
            className="btn btn-primary"
          >
            Return to Portfolio
          </button>
        </div>
      </div>
    );
  }

  const isDesignProject = project.category === 'design';

  return (
    <main className="pt-24 pb-16">
      <div className="container-custom">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 mb-8 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Portfolio
        </button>

        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-3 mb-6">
            {project.technologies.map(tech => (
              <span
                key={tech}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Project Images */}
        {project.id === 'delta-sigma-phi' ? (
          <div className="mb-12">
            {/* Delta Sigma Phi Layout - Horizontal row with 3 photos */}
            <div className="flex gap-4">
              {/* First image - Book (adjusted width) */}
              <div className="flex-[2] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                <img
                  src={project.screenshots[0]}
                  alt={`${project.title} book`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              
              {/* Second image - Polo (square container) */}
              <div className="w-64 h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                <img
                  src={project.screenshots[1]}
                  alt={`${project.title} polo`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              
              {/* Third image - Flyer (adjusted width) */}
              <div className="flex-[2] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                <img
                  src={project.screenshots[2]}
                  alt={`${project.title} flyer`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        ) : project.id === 'urban-reflections' ? (
          <div className="mb-12">
            {/* Urban Reflections Carousel - Container matches photo size */}
            <div className="relative max-w-4xl mx-auto">
              <div className="relative rounded-xl overflow-hidden shadow-lg group">
                <img
                  src={project.screenshots[currentImageIndex]}
                  alt={`${project.title} image ${currentImageIndex + 1}`}
                  className="w-full h-auto object-contain transition-all duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Navigation Arrows */}
              {project.screenshots.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
                    aria-label="Next image"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}

              {/* Navigation Dots */}
              {project.screenshots.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {project.screenshots.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === currentImageIndex
                          ? 'bg-white scale-110'
                          : 'bg-gray-400/70 hover:bg-gray-300/80'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              )}

              {/* Image Counter */}
              {project.screenshots.length > 1 && (
                <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {project.screenshots.length}
                </div>
              )}
            </div>
          </div>
        ) : project.id === 'secret-typography' ? (
          <div className="mb-12">
            {/* Secret Typography Layout - Left side: 3 images (60%), Right side: 1 tall image (40%) */}
            <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-4">
              {/* Left Column - 3 images stacked (55%) */}
              <div className="lg:w-[55%] flex flex-col gap-4">
                {/* Top Row - Two equal square containers */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Top Left Square - First angled view */}
                  <div className="aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                    <img
                      src={project.screenshots[1]}
                      alt={`${project.title} angled view 1`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Top Right Square - Second angled view */}
                  <div className="aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                    <img
                      src={project.screenshots[2]}
                      alt={`${project.title} angled view 2`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>
                
                {/* Bottom - Wide rectangular container for placard (15% taller) */}
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group" style={{ height: '115%' }}>
                  <img
                    src={project.screenshots[3]}
                    alt={`${project.title} Secret Typography Love placard`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
              
              {/* Right Column - One tall image spanning full height (45%) */}
              <div className="lg:w-[45%]">
                <div className="h-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                  <img
                    src={project.screenshots[0]}
                    alt={`${project.title} full wall installation`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : project.id === 'colorado-tattoo-convention' ? (
          <div className="mb-12">
            {/* 2-Column Grid Layout */}
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Left Column - Image 1 */}
              <div className="lg:w-[65%] flex-shrink-0">
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full border-0 border-gray-300 group">
                  <img
                    src={project.screenshots[0]}
                    alt={`${project.title} main image`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Right Column - Contains two images stacked */}
              <div className="flex-1 flex flex-col gap-4">
                {/* Image 2 - Top */}
                <div className="flex-1">
                  <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full border-[3px] border-gray-300 group">
                    <img
                      src={project.screenshots[1]}
                      alt={`${project.title} detail 1`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Image 3 - Bottom */}
                <div className="flex-1">
                  <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full border-[3px] border-gray-300 group">
                    <img
                      src={project.screenshots[2]}
                      alt={`${project.title} detail 2`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : project.id === 'spliteasy' ? (
          <div className="mb-12">
            {/* Banner Image - Full Width */}
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow mb-5 group">
              <img
                src={project.screenshots[0]}
                alt={`${project.title} banner`}
                className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>

            {/* Two Column Layout - 66% / 33% with 20px gap */}
            <div className="flex flex-col gap-5 max-[600px]:gap-5 min-[600px]:flex-row min-[600px]:gap-5">
              {/* Left Column - UI Design Board (66%) */}
              <div className="min-[600px]:w-[55%]">
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                  <img
                    src={project.screenshots[1]}
                    alt={`${project.title} UI design board`}
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Right Column - Style Guide (33%) */}
              <div className="min-[600px]:w-[46%]">
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                  <img
                    src={project.screenshots[2]}
                    alt={`${project.title} style guide`}
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : project.id === 'alphagraphics-internship' ? (
          <div className="mb-12">
            {/* AlphaGraphics Custom Layout */}
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Large left image - reduced by 20% from 2/3 to ~53% */}
              <div className="lg:w-[59%]">
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                  <img
                    src={project.screenshots[0]}
                    alt={`${project.title} main image`}
                    className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Right 2×2 grid of smaller images - increased to ~47% */}
              <div className="lg:w-[41.3%] grid grid-cols-2 grid-rows-2 gap-4">
                {project.screenshots.slice(1, 5).map((src, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border-2 border-white group"
                  >
                    <img
                      src={src}
                      alt={`${project.title} screenshot ${idx + 2}`}
                      className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {project.screenshots.map((screenshot, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                <img
                  src={screenshot}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}

        {/* Project Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            {/* Overview */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                {project.fullDescription}
              </p>
            </section>

            {/* Features */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2 mt-1 text-blue-500">•</span>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Implementation/Process */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Implementation Challenges</h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300">
                  {project.challenges.join('\n')}
                </p>
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            {/* Project Info Card */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg sticky top-24">
              {/* Timeline */}
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <Calendar size={20} className="text-blue-500 mr-2" />
                  <h3 className="text-lg font-semibold">Timeline</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{project.timeline}</p>
              </div>

              {/* Role */}
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <Clock size={20} className="text-blue-500 mr-2" />
                  <h3 className="text-lg font-semibold">My Role</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{project.role}</p>
              </div>

              {/* Achievements */}
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <Award size={20} className="text-blue-500 mr-2" />
                  <h3 className="text-lg font-semibold">Achievements</h3>
                </div>
                <ul className="space-y-2">
                  {project.achievements.map((ach, idx) => (
                    <li key={idx} className="text-gray-700 dark:text-gray-300">
                      • {ach}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Lessons Learned */}
              <div>
                <div className="flex items-center mb-2">
                  <Lightbulb size={20} className="text-blue-500 mr-2" />
                  <h3 className="text-lg font-semibold">Lessons Learned</h3>
                </div>
                <ul className="space-y-2">
                  {project.lessonsLearned.map((lesson, idx) => (
                    <li key={idx} className="text-gray-700 dark:text-gray-300">
                      • {lesson}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetails;