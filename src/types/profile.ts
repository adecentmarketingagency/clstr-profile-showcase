export interface ProfileData {
  name: string;
  photo: string;
  role: string;
  about: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  website: string;
  education: Education[];
  experience: Experience[];
  skills: string[];
  projects: Project[];
  posts: Post[];
  settings: PortfolioSettings;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startYear: string;
  endYear: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  description: string;
  startDate: string;
  endDate: string;
  current: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
  tags: string[];
}

export interface Post {
  id: string;
  title: string;
  content: string;
  date: string;
}

export type TemplateId = "minimal" | "eliana" | "typefolio" | "geeky";

export interface PortfolioSettings {
  isLive: boolean;
  showAbout: boolean;
  showEducation: boolean;
  showExperience: boolean;
  showSkills: boolean;
  showProjects: boolean;
  showPosts: boolean;
  slug: string;
  template: TemplateId;
}

export interface TemplateInfo {
  id: TemplateId;
  name: string;
  description: string;
  previewUrl: string;
  thumbnail: string;
}
