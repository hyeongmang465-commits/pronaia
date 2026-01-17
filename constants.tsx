
import React from 'react';
import { Section, NavItem, ProgramInfo, CaseStudy } from './types.ts';
import { Heart, TrendingUp, Sparkles, Award, ShieldCheck, Clock } from 'lucide-react';

export const COMPANY_NAME = "내몸애맞게";
export const BRAND_NAME = "PRONOIA";
export const BRAND_SUBTITLE = "Natural Health Program";

export const NAV_ITEMS: NavItem[] = [
  { label: '홈', target: Section.Home },
  { label: 'PRONOIA 철학', target: Section.About },
  { label: '핵심 원리', target: Section.Principle },
  { label: '불균형의 원인', target: Section.RootCause },
  { label: '검증 데이터', target: Section.Research },
  { label: '실증사례', target: Section.CaseStudies },
  { label: '창업 전수 프로그램', target: Section.Program },
  { label: '문의하기', target: Section.Contact },
];

export const CORE_VALUES = [
  {
    icon: <Heart className="w-8 h-8 text-violet-600" />,
    title: "건강한 삶",
    color: "bg-[#e8f5e9]", 
    textColor: "text-violet-900",
    description: "멘토 장인의 1:1 지도로 120세 무병장수를 위한 최적의 신체 환경을 구축합니다."
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-violet-600" />,
    title: "부자인 삶",
    color: "bg-[#fff9c4]", 
    textColor: "text-violet-900",
    description: "건강한 에너지와 풍요로운 마인드셋을 전수하여 경제적 자유의 기틀을 마련합니다."
  },
  {
    icon: <Sparkles className="w-8 h-8 text-violet-600" />,
    title: "풍요로운 삶",
    color: "bg-[#ffd54f]", 
    textColor: "text-violet-900",
    description: "개인별 맞춤 환경 설계를 통해 삶의 질을 극대화하고 진정한 행복을 완성합니다."
  }
];

export const INITIAL_CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-cancer-recovery',
    title: "유방암 4기 전이 극복 및 생체 활력 완전 회복",
    description: "62년생 여성 고객님으로, 겨드랑이 6cm 종양과 전이암으로 고통받던 중 22년 4월부터 인체 운동 에너지 조절을 시작하셨습니다. 현재 암은 사라졌으며 간 기능 개선과 함께 65세의 나이에도 밤샘이 가능할 정도의 활기찬 삶을 되찾으셨습니다.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", 
    thumbnailUrl: "https://images.unsplash.com/photo-1581578731522-421712790938?auto=format&fit=crop&q=80&w=800",
    mentor: "내몸애 멘토 장인 전수"
  },
  {
    id: '1',
    title: "만성 피로 극복과 10년 젊어진 생체 리듬",
    description: "멘토 장인의 1:1 환경 설계를 통해 무너졌던 수면 패턴과 활력을 되찾은 실제 사례입니다.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", 
    thumbnailUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
    mentor: "김지안 멘토 장인"
  },
  {
    id: '2',
    title: "무병장수 프로그램을 통한 당뇨 수치 정상화",
    description: "식이 환경과 생활 조건을 개선하여 약 없이 건강한 수치를 유지하게 된 60대 고객님의 기록입니다.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", 
    thumbnailUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800",
    mentor: "이현우 멘토 장인"
  }
];

export const PROGRAM_DETAILS: ProgramInfo = {
  title: "멘토 장인 양성 - 전수 창업자 이수 프로그램",
  duration: "40시간 집중 교육",
  cost: "4,000만원 (부가가치세 별도)",
  description: "내몸애 멘토링의 핵심인 '120세 무병장수 환경 설계' 노하우를 1:1로 전수받아 전문 멘토 장인으로 거듭나는 최고위 창업 과정입니다."
};

export const PROGRAM_STEPS = [
  { icon: <Clock />, title: "이수 시간", value: "총 40시간" },
  { icon: <Award />, title: "자격 부여", value: "멘토 장인(Master) 인증" },
  { icon: <ShieldCheck />, title: "비즈니스 지원", value: "1:1 서비스 운영 시스템 전수" }
];
