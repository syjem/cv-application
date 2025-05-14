export interface PersonalDetails {
  name: string;
  email: string;
  phone: string;
  address: string;
  title: string;
  summary: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Skill {
  id: string;
  name: string;
}

export interface ResumeData {
  personalDetails: PersonalDetails;
  education: Education[];
  experience: Experience[];
  skills: Skill[];
  themeColor: string;
}
