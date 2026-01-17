
import React from 'react';
import { Section } from '../types.ts';
import { PROGRAM_DETAILS, PROGRAM_STEPS } from '../constants.tsx';
import { CheckCircle2, Sparkles } from 'lucide-react';

const Program: React.FC = () => {
  return (
    <section id={Section.Program} className="py-32 bg-[#09090b] text-white overflow-hidden relative">
      {/* Deep Cosmos Atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(76,29,149,0.15)_0%,_transparent_70%)]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="text-violet-400 w-6 h-6 animate-pulse" />
              <h2 className="text-violet-400 font-bold tracking-[0.3em] uppercase text-sm">Sacred Knowledge Initiation</h2>
            </div>
            <h3 className="text-4xl md:text-6xl font-black mb-10 leading-tight text-glow">
              멘토 장인의 지혜,<br />
              <span className="text-violet-300">그 신비의 전수자</span>
            </h3>
            <p className="text-slate-400 text-xl mb-12 leading-relaxed font-light">
              평범한 삶의 궤도를 벗어나 무병장수의 코드를 설계하는 절대적 전수자가 되십시오. 
              단 40시간, 멘토 장인의 밀도 높은 가르침이 당신의 운명을 비즈니스의 정점으로 안내합니다.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {PROGRAM_STEPS.map((step, idx) => (
                <div key={idx} className="flex items-start gap-5 p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                  <div className="w-14 h-14 rounded-2xl bg-violet-900/40 flex items-center justify-center text-violet-300 group-hover:bg-violet-600 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all">
                    {step.icon}
                  </div>
                  <div>
                    <p className="text-xs text-violet-400 font-bold uppercase tracking-widest mb-1">{step.title}</p>
                    <p className="text-xl font-black text-white">{step.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-emerald-400 to-indigo-600 rounded-[3.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
              <div className="relative bg-[#18181b] text-white rounded-[3.5rem] p-10 md:p-16 border border-white/10 shadow-2xl">
                <div className="absolute top-0 right-0 p-8">
                  <Sparkles className="text-violet-500/30 w-12 h-12" />
                </div>
                
                <div className="mb-10">
                  <span className="bg-violet-900/50 text-violet-300 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] border border-violet-500/20">Elite Master Course</span>
                  <h4 className="text-3xl font-black mt-6 text-white text-glow leading-snug">{PROGRAM_DETAILS.title}</h4>
                </div>

                <div className="mb-12 pb-10 border-b border-white/10">
                  <div className="flex items-baseline gap-2">
                    <p className="text-5xl md:text-6xl font-black text-violet-400">{PROGRAM_DETAILS.cost.split(' ')[0]}</p>
                    <p className="text-slate-500 font-medium">{PROGRAM_DETAILS.cost.split(' ').slice(1).join(' ')}</p>
                  </div>
                  <p className="text-slate-400 mt-4 font-light text-lg">인생의 차원을 바꾸는 가장 신비로운 투자</p>
                </div>

                <ul className="space-y-6 mb-12">
                  {[
                    "1:1 밀착형 멘토링 핵심 비기(秘技) 전수",
                    "PRONOIA 독점적 라이선스 운영권 제공",
                    "심화 환경 설계 알고리즘 마스터",
                    "프라이빗 멘토 네트워크 커뮤니티 소속",
                    "멘토 장인 수장(Master) 인증서 수여"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-5">
                      <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-violet-900/50 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      </div>
                      <span className="text-slate-200 font-medium leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => document.getElementById(Section.Contact)?.scrollIntoView({ behavior: 'smooth' })}
                  className="group relative w-full bg-white text-black py-6 rounded-2xl font-black text-xl hover:bg-violet-50 transition-all shadow-[0_20px_40px_rgba(0,0,0,0.4)] overflow-hidden"
                >
                  <div className="absolute inset-0 bg-violet-100 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative z-10">전수자 상담 신청하기</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;
