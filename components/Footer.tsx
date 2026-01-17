
import React from 'react';
import { COMPANY_NAME, BRAND_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-500 py-16 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div>
            <div className="flex flex-col mb-4">
              <h2 className="text-2xl font-black text-white">{COMPANY_NAME}</h2>
              <p className="text-xs font-bold tracking-[0.2em] text-violet-500">{BRAND_NAME} Natural Health Program</p>
            </div>
            <p className="text-sm max-w-sm leading-relaxed">
              누구나 120세까지 건강하고 풍요로운 삶을 살 수 있는 환경을 만들어 드리는 내몸애 멘토링 서비스입니다.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-x-12 gap-y-6 text-sm">
            <div className="flex flex-col gap-3">
              <h4 className="text-white font-bold mb-1">Company</h4>
              <a href="#" className="hover:text-violet-400 transition-colors">회사소개</a>
              <a href="#" className="hover:text-violet-400 transition-colors">인재채용</a>
              <a href="#" className="hover:text-violet-400 transition-colors">멘토 지원</a>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-white font-bold mb-1">Legal</h4>
              <a href="#" className="hover:text-violet-400 transition-colors font-bold text-violet-300">개인정보처리방침</a>
              <a href="#" className="hover:text-violet-400 transition-colors">이용약관</a>
              <a href="#" className="hover:text-violet-400 transition-colors">윤리강령</a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest opacity-60">
          <p>© 2024 {COMPANY_NAME}. All rights reserved.</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
            <p>설립년도: 2022년</p>
            <p>사업자등록번호: 226-88-02762</p>
            <p>대표이사: 김강산</p>
            <p>고객센터: 010-5078-5320</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
