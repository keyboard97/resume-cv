export interface Resume {
  name: string;
  title: string;
  contact: Contact;
  summary: string;
  experience: Experience[];
  education: Education[];
  skills: string[];
  strengths: string[];
}

export interface Contact {
  phone: string;
  email: string;
  github: string;
  linkedin: string;
  portfolio: string;
  address?: string;
  location?: string;
}

export interface Education {
  institution: string;
  location?: string;
  degree: string;
  date: DateClass;
}

// export enum WorkType {
//   HYBRID = "hybrid",
//   ONSITE = "onsite",
//   REMOTE = "remote",
// }

export interface Experience {
  company: string;
  companyUrl?: string;
  location?: string;
  workType?: string;
  role: string;
  date: DateClass;
  description?: string;
  stack: string[];
  projects: Project[];
}

export interface DateClass {
  start: string;
  end: string;
}

export interface Project {
  name: string;
  description: string;
  url?: string;
}
