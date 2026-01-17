
import React from 'react';
import { Section } from '../types.ts';
import { Database, Users, ShieldCheck, Microscope } from 'lucide-react';

const Research: React.FC = () => {
  return (
    <section id={Section.Research} className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Mystical Background Aura */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-violet-900/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-900/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-violet-600/10 rounded-2xl border border-violet-500/20 text-violet-400">
              <Microscope size={32} className="animate-pulse" />
            </div>
          </div>
          <h2 className="text-violet-400 font-bold tracking-[0.4em] uppercase text-xs mb-4">Scientific Validation</h2>
          <h3 className="text-4xl md:text-6xl font-black text-white leading-tight text-glow mb-8">
            시간과 자본으로 증명된<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-emerald-300">절대적 신뢰의 가치</span>
          </h3>
          <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
            내몸애 멘토링 서비스는 단순한 경험칙을 넘어섭니다. <br className="hidden md:block" />
            수십 년간 축적된 방대한 데이터와 막대한 투자를 통해 <br className="hidden md:block" />
            무병장수의 알고리즘을 완벽하게 검증하였습니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Research Years */}
          <div className="group relative p-12 rounded-[3rem] bg-white/5 border border-white/10 hover:border-violet-500/40 transition-all duration-700 overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Database size={80} className="text-violet-400" />
            </div>
            <div className="relative z-10">
              <h4 className="text-slate-400 font-bold text-sm tracking-widest uppercase mb-4">Research Period</h4>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-7xl font-black text-white text-glow">25</span>
                <span className="text-2xl font-bold text-violet-400">YEARS</span>
              </div>
              <p className="text-slate-500 leading-relaxed text-sm font-medium">
                분기별 임상 관찰과 25년이라는 긴 시간 동안 <br />
                변치 않는 생체 법칙을 연구하여 <br />
                신뢰의 초석을 다졌습니다.
              </p>
            </div>
          </div>

          {/* Subjects */}
          <div className="group relative p-12 rounded-[3rem] bg-white/5 border border-white/10 hover:border-violet-500/40 transition-all duration-700 overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Users size={80} className="text-emerald-400" />
            </div>
            <div className="relative z-10">
              <h4 className="text-slate-400 font-bold text-sm tracking-widest uppercase mb-4">Study Subjects</h4>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-7xl font-black text-white text-glow">2.3</span>
                <span className="text-2xl font-bold text-emerald-400">만 명</span>
              </div>
              <p className="text-slate-500 leading-relaxed text-sm font-medium">
                총 23,000명 이상의 다양한 대상자 데이터를 통해 <br />
                모든 체질과 환경에 적용 가능한 <br />
                범용적 무병장수 코드를 완성했습니다.
              </p>
            </div>
          </div>

          {/* Investment */}
          <div className="group relative p-12 rounded-[3rem] bg-white/5 border border-white/10 hover:border-violet-500/40 transition-all duration-700 overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <ShieldCheck size={80} className="text-amber-400" />
            </div>
            <div className="relative z-10">
              <h4 className="text-slate-400 font-bold text-sm tracking-widest uppercase mb-4">Total Investment</h4>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-7xl font-black text-white text-glow">100</span>
                <span className="text-2xl font-bold text-amber-400">억+</span>
              </div>
              <p className="text-slate-500 leading-relaxed text-sm font-medium">
                100억 원 이상의 과감한 연구 개발 투자는 <br />
                PRONOIA 프로그램의 전문성과 <br />
                독보적인 기술력을 상징합니다.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24 p-10 rounded-[2.5rem] bg-gradient-to-r from-violet-900/20 to-indigo-900/20 border border-white/5 text-center max-w-4xl mx-auto">
          <p className="text-violet-200 text-lg italic font-light tracking-wide">
            "우리는 검증되지 않은 것은 말하지 않습니다. <br className="hidden md:block" />
            숫자가 말해주는 진실이 곧 '내몸애맞게'의 자부심입니다."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Research;
