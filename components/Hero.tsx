
import React from 'react';
import { Section } from '../types.ts';
import { BRAND_NAME, BRAND_SUBTITLE } from '../constants.tsx';

const Hero: React.FC = () => {
  return (
    <section id={Section.Home} className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Mystical Nature Background (Misty Forest) */}
      <div 
        className="absolute inset-0 z-0 scale-110"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=2500)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.6) saturate(0.8)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-violet-950/80 via-slate-900/40 to-slate-950" />
      </div>

      {/* Ethereal Glow Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full mystical-glow z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full mystical-glow z-0 animation-delay-2000" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 relative z-10 text-white text-center">
        <div className="mb-8 flex flex-col items-center animate-in fade-in zoom-in duration-1000">
          <div className="w-20 h-[1px] mb-6 bg-gradient-to-r from-transparent via-violet-400 to-transparent" />
          <h2 className="text-3xl md:text-4xl font-light tracking-[0.6em] mb-2 text-glow">{BRAND_NAME}</h2>
          <p className="text-xs font-medium tracking-[0.4em] text-violet-300/80 uppercase">{BRAND_SUBTITLE}</p>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-9xl font-black mb-10 leading-tight animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200">
          <span className="block text-violet-100/90 text-glow">생명의 비밀을 여는</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-emerald-300 to-violet-300 filter drop-shadow-[0_0_20px_rgba(167,139,250,0.5)]">
            신비로운 멘토링
          </span>
        </h1>
        
        <p className="text-lg md:text-2xl mb-14 text-violet-200/70 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-400 font-light leading-relaxed tracking-wide">
          태고의 지혜와 현대의 정교함이 만나는 곳.<br className="hidden md:block" />
          멘토 장인이 당신의 존재 속에 잠든 120세 무병장수의 코드를 깨웁니다.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-8 justify-center animate-in fade-in slide-in-from-bottom-14 duration-1000 delay-600">
          <button 
            onClick={() => document.getElementById(Section.About)?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-12 py-5 rounded-full font-bold text-lg transition-all overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10">신비의 여정 시작하기</span>
          </button>
          
          <button 
            onClick={() => document.getElementById(Section.Program)?.scrollIntoView({ behavior: 'smooth' })}
            className="group px-12 py-5 rounded-full font-bold text-lg border border-white/20 hover:border-violet-400/50 hover:bg-violet-900/20 backdrop-blur-md transition-all text-white"
          >
            전수자의 길 안내
          </button>
        </div>
      </div>

      {/* Floating Dust Particles (Mockup) */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-white rounded-full opacity-20 floating-element"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: i * 0.5 + 's',
              animationDuration: (Math.random() * 10 + 10) + 's'
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
