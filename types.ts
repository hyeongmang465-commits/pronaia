
export enum Section {
  Home = 'home',
  About = 'about',
  Principle = 'principle',
  RootCause = 'rootcause',
  Research = 'research',
  CaseStudies = 'cases',
  Service = 'service',
  Program = 'program',
  Contact = 'contact'
}

export interface NavItem {
  label: string;
  target: Section;
}

export interface ProgramInfo {
  title: string;
  duration: string;
  cost: string;
  description: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  mentor: string;
}
