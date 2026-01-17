
import React from 'react';
import { Section } from '../types';
import { CORE_VALUES, BRAND_NAME } from '../constants';
import Logo from './Logo';

const About: React.FC = () => {
  return (
    <section id={Section.About} className="py-32 bg-slate-950 text-white overflow-hidden relative">
      {/* Background Atmosphere */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-slate-950/50" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-violet-900/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-900/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-28">
          <div className="flex flex-col items-center mb-8 animate-in fade-in duration-1000">
             <div className="mb-6 floating-element filter drop-shadow-[0_0_20px_rgba(167,139,250,0.6)]">
                <Logo className="w-32 h-auto" />
             </div>
             <h2 className="text-4xl font-black text-white tracking-widest text-glow mb-2">{BRAND_NAME}</h2>
             <p className="text-xs font-bold tracking-[0.5em] text-violet-400/70 uppercase">SACRED NATURAL PROGRAM</p>
          </div>
          <h3 className="text-4xl md:text-6xl font-black mb-10 text-white leading-tight">
            멘토 장인이 전수하는<br />
            <span className="text-violet-300">신성한 균형의 법칙</span>
          </h3>
          <p className="text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto font-light">
            우리는 단순히 생존을 넘어서는 법을 가르칩니다. <br className="hidden md:block" />
            **멘토 장인**의 1:1 인도 아래, 당신의 신체적·정신적·경제적 환경이 <br className="hidden md:block" />
            가장 신비롭고 완벽한 조화를 이루는 지점을 발견하게 될 것입니다.
          </p>
        </div>

        {/* The Mystical Diagram Visual */}
        <div className="relative max-w-3xl mx-auto aspect-square flex items-center justify-center mb-32 scale-90 md:scale-110">
           {/* Glow Aura */}
           <div className="absolute inset-0 bg-violet-500/10 rounded-full blur-[80px] animate-pulse" />

           {/* The Deep Purple Diamond */}
           <div className="absolute inset-4 bg-violet-900 rotate-45 rounded-[5rem] shadow-[0_0_100px_rgba(76,29,149,0.4)] border border-violet-400/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-950 via-slate-900 to-indigo-950 opacity-90" />
              {/* Animated Lines inside diamond */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-white transform translate-y-12 rotate-[-15deg]" />
                <div className="absolute bottom-0 right-0 w-full h-[1px] bg-white transform -translate-y-24 rotate-[25deg]" />
              </div>
           </div>

           {/* The Circular Nodes (Orbs) */}
           <div className="relative z-10 w-full h-full p-8 md:p-16 grid grid-cols-2 gap-12">
              {/* Top - Wealthy Life */}
              <div className="col-span-2 flex justify-center -mb-8">
                 <div className="group relative w-48 h-48 md:w-64 md:h-64 rounded-full flex flex-col items-center justify-center text-center p-8 transition-all duration-700 hover:scale-110">
                    <div className="absolute inset-0 bg-gradient-to-b from-amber-100 to-amber-200 rounded-full shadow-[0_0_40px_rgba(251,191,36,0.3)] border-2 border-white/50" />
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity rounded-full" />
                    <div className="relative z-10">
                      <p className="text-[11px] font-bold text-violet-900/40 mb-2 uppercase tracking-tighter">Inner Sanctum</p>
                      <h4 className="text-2xl md:text-3xl font-black text-violet-950 drop-shadow-sm">{CORE_VALUES[1].title}</h4>
                      <p className="text-[10px] mt-3 text-violet-800 font-bold tracking-widest">1:1 환경 멘토링</p>
                    </div>
                 </div>
              </div>

              {/* Bottom Left - Healthy Life */}
              <div className="flex justify-end pr-4">
                 <div className="group relative w-40 h-40 md:w-56 md:h-56 rounded-full flex flex-col items-center justify-center text-center p-6 transition-all duration-700 hover:scale-110">
                    <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 to-emerald-100 rounded-full shadow-[0_0_30px_rgba(16,185,129,0.2)] border-2 border-white/50" />
                    <div className="relative z-10">
                      <p className="text-[10px] font-bold text-violet-900/40 mb-1 uppercase tracking-tighter">Life Code</p>
                      <h4 className="text-xl md:text-2xl font-black text-violet-900">{CORE_VALUES[0].title}</h4>
                      <p className="text-[9px] mt-2 text-violet-800/70 font-bold uppercase tracking-widest">Longevity Design</p>
                    </div>
                 </div>
              </div>

              {/* Bottom Right - Prosperous Life */}
              <div className="flex justify-start pl-4">
                 <div className="group relative w-40 h-40 md:w-56 md:h-56 rounded-full flex flex-col items-center justify-center text-center p-6 transition-all duration-700 hover:scale-110">
                    <div className="absolute inset-0 bg-gradient-to-b from-amber-400 to-amber-500 rounded-full shadow-[0_0_30px_rgba(245,158,11,0.3)] border-2 border-white/50" />
                    <div className="relative z-10">
                      <p className="text-[10px] font-bold text-violet-900/40 mb-1 uppercase tracking-tighter">Abundance</p>
                      <h4 className="text-xl md:text-2xl font-black text-violet-950">{CORE_VALUES[2].title}</h4>
                      <p className="text-[9px] mt-2 text-violet-900/60 font-bold uppercase tracking-widest">Universal Flow</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {CORE_VALUES.map((value, idx) => (
            <div key={idx} className="group p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-violet-500/30 hover:bg-white/10 transition-all duration-500 hover:-translate-y-3">
              <div className="mb-8 inline-block p-5 bg-violet-950/50 rounded-2xl shadow-inner group-hover:text-violet-300 transition-colors">
                {React.cloneElement(value.icon as React.ReactElement, { className: "w-10 h-10" })}
              </div>
              <h4 className="text-2xl font-bold mb-4 text-white text-glow">{value.title}</h4>
              <p className="text-slate-400 leading-relaxed font-light">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
