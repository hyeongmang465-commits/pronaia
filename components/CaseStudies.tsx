
import React, { useState } from 'react';
import { Section, CaseStudy } from '../types.ts';
import { INITIAL_CASE_STUDIES } from '../constants.tsx';
import { Play, Plus, X, Video, FileText, User, UploadCloud, Info } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const [cases, setCases] = useState<CaseStudy[]>(INITIAL_CASE_STUDIES);
  const [activeVideo, setActiveVideo] = useState<CaseStudy | null>(null);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [newCase, setNewCase] = useState({
    title: '',
    description: '',
    videoUrl: '',
    mentor: ''
  });

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    const mockCase: CaseStudy = {
      id: Date.now().toString(),
      title: newCase.title,
      description: newCase.description,
      videoUrl: newCase.videoUrl || "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnailUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
      mentor: newCase.mentor
    };
    setCases([mockCase, ...cases]);
    setIsUploadModalOpen(false);
    setNewCase({ title: '', description: '', videoUrl: '', mentor: '' });
  };

  return (
    <section id={Section.CaseStudies} className="py-32 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.05)_0%,_transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-violet-400 font-bold tracking-[0.3em] uppercase text-sm mb-4">Evidence of Transformation</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white leading-tight text-glow">
              기적을 증명하는<br />
              <span className="text-violet-300">실증 사례 영상</span>
            </h3>
          </div>
          <button 
            onClick={() => setIsUploadModalOpen(true)}
            className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-2xl font-bold transition-all text-violet-200 group"
          >
            <Plus className="group-hover:rotate-90 transition-transform" />
            실증 사례 영상 등록
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {cases.map((item) => (
            <div 
              key={item.id} 
              className="group relative bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden hover:border-violet-500/50 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Thumbnail Area */}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={item.thumbnailUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-75 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <button 
                    onClick={() => setActiveVideo(item)}
                    className="w-16 h-16 rounded-full bg-violet-600 text-white flex items-center justify-center shadow-2xl shadow-violet-600/50 transform group-hover:scale-110 transition-all"
                  >
                    <Play fill="white" className="ml-1" />
                  </button>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-black text-violet-400 uppercase tracking-widest">Case Verified</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">{item.description}</p>
                <div className="flex items-center gap-3 pt-6 border-t border-white/10">
                  <div className="w-8 h-8 rounded-full bg-violet-900/50 flex items-center justify-center text-violet-400">
                    <User size={14} />
                  </div>
                  <span className="text-xs font-bold text-slate-300">{item.mentor}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Legal Disclaimer Box */}
        <div className="max-w-4xl mx-auto p-10 rounded-[2rem] bg-white/[0.03] border border-white/5 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 rounded-full bg-violet-500/10 flex items-center justify-center text-violet-400">
              <Info size={24} />
            </div>
          </div>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed font-light">
            지금까지 소개해 드린 실증 사례들은 각 개인의 체험 사례를 소개했을 뿐이며, <br className="hidden md:block" />
            <span className="text-white font-bold">누구나 동일한 효능·효과가 있다는 것은 의학적으로 검증된 사실이 없음을 알려 드립니다.</span><br />
            인체 운동 에너지 조절 프로그램 '프로노이아'는 의학적인 것과는 전혀 상관이 없으며, <br className="hidden md:block" />
            오직 건강한 삶, 부자인 삶, 풍요로운 삶을 살 수 있는 환경과 조건에 대해서 <br className="hidden md:block" />
            확인을 하고 검증을 하기 위한 <span className="text-violet-300 font-bold">테스트용</span>이라는 것을 참고하시기 바랍니다.
          </p>
        </div>
      </div>

      {/* Video Player Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12">
          <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-xl" onClick={() => setActiveVideo(null)} />
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10 animate-in zoom-in duration-300">
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <X />
            </button>
            <iframe 
              src={activeVideo.videoUrl} 
              className="w-full h-full" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* Upload Modal */}
      {isUploadModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md" onClick={() => setIsUploadModalOpen(false)} />
          <div className="relative w-full max-w-xl bg-[#18181b] rounded-[3rem] p-10 md:p-12 shadow-2xl border border-white/10 animate-in fade-in slide-in-from-bottom-8 duration-300">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-2xl font-black text-white">실증 사례 등록</h3>
                <p className="text-sm text-slate-400 mt-1">기적 같은 변화의 순간을 공유하세요.</p>
              </div>
              <button onClick={() => setIsUploadModalOpen(false)} className="text-slate-500 hover:text-white transition-colors">
                <X size={28} />
              </button>
            </div>

            <form onSubmit={handleUpload} className="space-y-6">
              <div>
                <label className="block text-xs font-black text-violet-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <FileText size={14} /> 사례 제목
                </label>
                <input 
                  required
                  type="text" 
                  value={newCase.title}
                  onChange={(e) => setNewCase({...newCase, title: e.target.value})}
                  placeholder="예: 120세 장수 모델의 일상"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-violet-500 transition-all font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-black text-violet-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <Video size={14} /> 영상 URL (YouTube 등)
                </label>
                <input 
                  type="url" 
                  value={newCase.videoUrl}
                  onChange={(e) => setNewCase({...newCase, videoUrl: e.target.value})}
                  placeholder="https://youtube.com/..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-violet-500 transition-all font-medium"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black text-violet-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <User size={14} /> 담당 멘토 장인
                  </label>
                  <input 
                    required
                    type="text" 
                    value={newCase.mentor}
                    onChange={(e) => setNewCase({...newCase, mentor: e.target.value})}
                    placeholder="성함을 입력하세요"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-violet-500 transition-all font-medium"
                  />
                </div>
                <div>
                   <label className="block text-xs font-black text-violet-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <UploadCloud size={14} /> 썸네일
                  </label>
                  <div className="w-full bg-white/5 border border-dashed border-white/20 rounded-2xl py-4 flex items-center justify-center text-xs text-slate-500 cursor-pointer hover:bg-white/10 transition-all">
                    자동 생성됨 (선택 사항)
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-black text-violet-400 uppercase tracking-widest mb-3">사례 상세 설명</label>
                <textarea 
                  required
                  rows={3}
                  value={newCase.description}
                  onChange={(e) => setNewCase({...newCase, description: e.target.value})}
                  placeholder="고객의 변화와 멘토링 내용을 간략히 적어주세요."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-violet-500 transition-all font-medium resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-violet-600 hover:bg-violet-700 text-white py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-violet-900/20"
              >
                동영상 사례 등록하기
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default CaseStudies;
