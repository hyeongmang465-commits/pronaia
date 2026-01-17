
import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Principle from './components/Principle.tsx';
import RootCause from './components/RootCause.tsx';
import Research from './components/Research.tsx';
import CaseStudies from './components/CaseStudies.tsx';
import Program from './components/Program.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import AIChat from './components/AIChat.tsx';

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
