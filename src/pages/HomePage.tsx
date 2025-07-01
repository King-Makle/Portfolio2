import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import { useSeo } from '../hooks/useSeo';
import { useStructuredData } from '../hooks/useStructuredData';

interface HomePageProps {
  scrollY: number;
}

const HomePage: React.FC<HomePageProps> = ({ scrollY }) => {
  const location = useLocation();
  const state = location.state as { scrollTo?: string };

  // SEO for homepage
  useSeo({
    title: 'Makle Richards | Visual Strategist & UI/UX Designer Portfolio',
    description: 'Professional portfolio of Makle Richards, a visual strategist and UI/UX designer specializing in graphic design, 3D modeling, photography, and user experience design. View my latest projects and creative work.',
    image: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    url: window.location.href,
    type: 'website',
    keywords: 'Makle Richards, visual strategist, UI/UX designer, graphic design, portfolio, web design, 3D modeling, photography, creative director'
  });

  // Structured data for homepage
  useStructuredData({
    type: 'Person',
    data: {
      name: 'Makle Richards',
      jobTitle: 'Visual Strategist & UI/UX Designer',
      description: 'Professional visual strategist and UI/UX designer with expertise in graphic design, 3D modeling, photography, and user experience design.',
      url: window.location.href,
      image: '/images/MakleSelfie.jpg',
      sameAs: [
        'https://www.linkedin.com/in/makle-richards',
        'https://www.instagram.com/king_makle?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
      ],
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: 'University of Northern Colorado',
        description: 'Bachelor of Arts in Graphic Design and Studio Art with a minor in Digital Marketing'
      },
      knowsAbout: [
        'Graphic Design',
        'UI/UX Design',
        'Visual Strategy',
        '3D Modeling',
        'Photography',
        'Brand Identity',
        'Digital Marketing',
        'Adobe Creative Suite'
      ],
      email: 'Michaelrichards1220@gmail.com',
      telephone: '+1-505-362-0936',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Fort Collins',
        addressRegion: 'CO',
        addressCountry: 'US'
      }
    }
  });

  useEffect(() => {
    if (state?.scrollTo) {
      const element = document.getElementById(state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      // Clear the state after scrolling
      window.history.replaceState({}, document.title);
    }
  }, [state]);

  return (
    <main>
      <Hero scrollY={scrollY} />
      <About scrollY={scrollY} />
      <Skills scrollY={scrollY} />
      <Projects scrollY={scrollY} />
      <Contact scrollY={scrollY} />
    </main>
  );
};

export default HomePage;