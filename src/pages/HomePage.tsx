import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

interface HomePageProps {
  scrollY: number;
}

const HomePage: React.FC<HomePageProps> = ({ scrollY }) => {
  const location = useLocation();
  const state = location.state as { scrollTo?: string };

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