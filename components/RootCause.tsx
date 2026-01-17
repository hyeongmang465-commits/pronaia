
import React from 'react';
import { Section } from '../types';
import { AlertTriangle, Ghost, Users2, ShieldAlert, Sparkle } from 'lucide-react';

const RootCause: React.FC = () => {
  const causes = [
    {
      icon: <ShieldAlert className="w-10 h-10" />,
      title: "육체적 한계 (Physical)",
      desc: "인체 운동 에너지의 불균형은 세포의 정체를 유발하고, 이는 곧 질병과 노화라는 육체적 결과로 나타납니다.",
      color: "border-red-500/20 text-red-400"
    },
    {
      icon: <Ghost className="w-10 h-10" />,
      title: "정신적 정체 (Mental)",
      desc: "내부 에너지가 원활히 흐르지 못할 때 마음은 불안과 우울에 잠식됩니다. 정신의 건강 역시 에너지의 역학입니다.",
      color: "border-orange-500/20 text-orange-400"
    },
    {
      icon: <Users2 className="w-10 h-10" />,
      title: "사회적 단절 (Social)",
      desc: "개인의 에너지 장이 무너지면 관계와 경제적 흐름이 막힙니다. 풍요로운 삶은 외부와의 에너지 공명에서 시작됩니다.",
      color: "border-amber-500/20 text-amber-400"
    },
    {
      icon: <Sparkle className="w-10 h-10" />,
      title: "영적 상실 (Spiritual)",
      desc: "인체 에너지 조절의 실패는 존재의 의미를 상실하게 합니다. 120세 무병장수는 영적 에너지가 깨어날 때 완성됩니다.",
      color: "border-indigo-500/20 text-indigo-400"
    }
  ];

  return (
    <section id={Section.RootCause} className="py-32 bg-[#0a0a0c] relative overflow-hidden">
      {/* Dark Red/Violet Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(127,29,29,0.1)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(76,29,149,0.05)_0%,_transparent_50%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] font-black tracking-[0.3em] uppercase mb-6">
            <AlertTriangle size={14} className="animate-pulse" /> The Origin of Disruption
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-8">
            인생의 모든 고통은 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-violet-400 to-indigo-400">에너지 조절의 실패</span>에서 옵니다.
          </h2>
          <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed">
            질병, 가난, 불행, 그리고 허무함. <br className="hidden md:block" />
            우리가 겪는 모든 문제는 결국 '인체 운동 에너지'가 <br className="hidden md:block" />
            본연의 궤도를 이탈했기 때문에 발생하는 물리적 현상입니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {causes.map((item, idx) => (
            <div 
              key={idx} 
              className={`p-10 rounded-[3rem] bg-white/[0.02] border ${item.color} backdrop-blur-sm group hover:bg-white/[0.05] transition-all duration-500`}
            >
              <div className="mb-8 p-4 bg-slate-900/50 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              <h4 className="text-xl font-black text-white mb-4">{item.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 max-w-5xl mx-auto">
          <div className="relative p-12 rounded-[3.5rem] bg-gradient-to-br from-violet-900/10 to-transparent border border-white/5 overflow-hidden">
             <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                <AlertTriangle size={150} />
             </div>
             <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                <div className="shrink-0 w-24 h-24 rounded-full bg-violet-600 flex items-center justify-center text-white shadow-2xl shadow-violet-600/50">
                  <span className="text-4xl font-black">!</span>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white mb-4">왜 '멘토 장인'의 환경 설계가 필요한가요?</h3>
                  <p className="text-slate-400 leading-relaxed font-light">
                    인간은 스스로 자신의 에너지가 어디서 새고 있는지 인지하기 어렵습니다. 
                    25년의 연구와 100억의 투자가 입증한 '에너지 조절 알고리즘'을 통해 
                    **멘토 장인**은 당신의 정신, 육체, 사회적 위치, 영적 깊이를 다시 정렬해 드립니다. 
                    이 정렬이 곧 120세 무병장수로 가는 유일한 과학적 길입니다.
                  </p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RootCause;
