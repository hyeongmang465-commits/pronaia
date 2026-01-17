
import React, { useState } from 'react';
import { Section } from '../types.ts';
import { Send, Phone, MapPin, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('문의가 접수되었습니다. 곧 연락드리겠습니다!');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <section id={Section.Contact} className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-5xl font-black mb-8 text-violet-900 leading-tight">
              무병장수의 첫걸음,<br />전문가와 상담하세요
            </h2>
            <p className="text-lg text-slate-600 mb-12 max-w-lg">
              내몸애 멘토링 서비스 혹은 전수 창업 프로그램에 대해 궁금하신 점을 남겨주시면 정성을 다해 답변해 드리겠습니다.
            </p>

            <div className="space-y-8">
              <div className="flex gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-violet-600 shadow-md group-hover:bg-violet-600 group-hover:text-white transition-all">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-slate-800 uppercase tracking-wider text-xs mb-1">PHONE</h4>
                  <p className="text-lg font-bold text-slate-700">010-5078-5320</p>
                </div>
              </div>
              <div className="flex gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-violet-600 shadow-md group-hover:bg-violet-600 group-hover:text-white transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-slate-800 uppercase tracking-wider text-xs mb-1">EMAIL</h4>
                  <p className="text-lg font-bold text-slate-700">hyeongmang465@gmail.com</p>
                </div>
              </div>
              <div className="flex gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-violet-600 shadow-md group-hover:bg-violet-600 group-hover:text-white transition-all">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-slate-800 uppercase tracking-wider text-xs mb-1">LOCATION</h4>
                  <p className="text-lg font-bold text-slate-700">경기도 여주시 우암로 135-20, 1층</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-100">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3">성함 / 상호명</label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-violet-500 focus:ring-4 focus:ring-violet-100 outline-none transition-all font-medium"
                  placeholder="성함을 입력해주세요"
                />
              </div>
              <div>
                <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3">연락처</label>
                <input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-violet-500 focus:ring-4 focus:ring-violet-100 outline-none transition-all font-medium"
                  placeholder="010-0000-0000"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3">이메일 주소</label>
              <input
                required
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-violet-500 focus:ring-4 focus:ring-violet-100 outline-none transition-all font-medium"
                placeholder="example@email.com"
              />
            </div>
            <div className="mb-8">
              <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3">문의 내용</label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-violet-500 focus:ring-4 focus:ring-violet-100 outline-none transition-all resize-none font-medium"
                placeholder="어떤 상담이 필요하신가요?"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-violet-800 text-white py-5 rounded-2xl font-black text-xl hover:bg-violet-900 transition-all flex items-center justify-center gap-3 group shadow-xl shadow-violet-200"
            >
              상담 예약 신청하기
              <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
