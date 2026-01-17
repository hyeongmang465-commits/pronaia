
import React from 'react';
import { Section } from '../types';
import { Zap, Activity, Atom, Wind } from 'lucide-react';

const Principle: React.FC = () => {
  return (
    <section id={Section.Principle} className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Energy Line Animations */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative group">
              {/* Central Kinetic Orb */}
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-violet-600/20 rounded-full blur-[80px] animate-pulse" />
                <div className="absolute inset-4 border-2 border-violet-400/20 rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-12 border border-cyan-400/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Atom className="w-24 h-24 text-violet-400 mx-auto mb-4 floating-element" />
                    <div className="bg-white/5 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
                      <span className="text-cyan-300 font-black tracking-widest text-sm uppercase">Kinetic Energy System</span>
                    </div>
                  </div>
                </div>

                {/* Satellite Points */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-violet-500 rounded-full shadow-[0_0_15px_rgba(139,92,246,0.8)]" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.8)]" />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-violet-400 font-bold tracking-[0.4em] uppercase text-xs mb-4">The Universal Law of Motion</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white leading-tight text-glow mb-8">
              물질의 운동에너지는 곧<br />
              <span className="text-violet-300">인체의 생명에너지</span>입니다.
            </h3>
            
            <div className="space-y-10">
              <div className="flex gap-6 group">
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-violet-400 group-hover:bg-violet-600 group-hover:text-white transition-all duration-500">
                  <Zap size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">에너지 보존과 전이의 법칙</h4>
                  <p className="text-slate-400 leading-relaxed font-light">
                    우주의 모든 물질이 운동에너지를 가지고 있듯이, 유기체인 인체 또한 고유의 운동에너지를 보유합니다. 우리는 이 에너지가 순환하고 유지되는 물리적 메커니즘을 발견했습니다.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-500">
                  <Activity size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">과학적 증명: 생체 운동성</h4>
                  <p className="text-slate-400 leading-relaxed font-light">
                    25년의 연구는 '인체 내 에너지 흐름의 관성'을 측정하는 데 집중되었습니다. 23,000명의 데이터를 통해 확인된 이 원리는 인체가 최적의 운동성을 가질 때 노화가 억제됨을 증명합니다.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                  <Wind size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">환경 설계를 통한 에너지 최적화</h4>
                  <p className="text-slate-400 leading-relaxed font-light">
                    내몸애 멘토링은 물리적 '조건'과 '환경'을 조정하여 인체의 운동에너지를 극대화합니다. 이는 단순한 건강 관리가 아닌, 생명의 물리적 궤도를 수정하는 정교한 설계입니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-10 border-t border-white/10">
              <p className="text-violet-200/60 text-sm italic leading-relaxed">
                * 본 원리는 100억 이상의 투자와 수만 명의 임상 데이터를 바탕으로 한 PRONOIA만의 독자적인 '생체 물리 에너지 시스템'입니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Principle;
