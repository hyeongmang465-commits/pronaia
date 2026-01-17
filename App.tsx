
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Principle from './components/Principle';
import RootCause from './components/RootCause';
import Research from './components/Research';
import CaseStudies from './components/CaseStudies';
import Program from './components/Program';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChat from './components/AIChat';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Principle />
        <RootCause />
        <Research />
        <CaseStudies />
        <Program />
        <Contact />
      </main>
      <Footer />
      <AIChat />
    </div>
  );
};

export default App;
