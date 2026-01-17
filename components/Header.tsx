
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { COMPANY_NAME, NAV_ITEMS } from '../constants.tsx';
import Logo from './Logo.tsx';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button 
          onClick={() => scrollToSection('home')}
          className="flex items-center gap-4 group"
        >
          <div className="group-hover:scale-110 transition-transform duration-500 transform-gpu">
            <Logo className="w-12 h-auto" />
          </div>
          <div className="flex flex-col items-start leading-none">
            <span className="text-2xl font-black tracking-tighter text-white text-glow">
              {COMPANY_NAME}
            </span>
            <span className="text-[9px] font-black tracking-[0.4em] text-violet-400 uppercase opacity-80">
              PRONOIA SYSTEM
            </span>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.target}
              onClick={() => scrollToSection(item.target)}
              className="group relative text-xs font-black tracking-widest text-slate-300 hover:text-white transition-colors uppercase"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-violet-400 group-hover:w-full transition-all duration-300" />
            </button>
          ))}
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-6 py-2 rounded-full bg-violet-600/20 border border-violet-500/40 text-violet-200 text-xs font-black tracking-widest hover:bg-violet-600 hover:text-white transition-all shadow-glow"
          >
            상담하기
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-0 left-0 right-0 h-screen bg-slate-950 flex flex-col items-center justify-center space-y-8 p-6 animate-in fade-in zoom-in duration-300">
          <button className="absolute top-6 right-6 text-white" onClick={() => setIsOpen(false)}>
            <X className="w-10 h-10" />
          </button>
          <Logo className="w-24 h-auto mb-8 opacity-50" />
          {NAV_ITEMS.map((item) => (
            <button
              key={item.target}
              onClick={() => scrollToSection(item.target)}
              className="text-3xl font-black text-white hover:text-violet-400 tracking-tighter"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
