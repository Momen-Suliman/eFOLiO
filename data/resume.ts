//populate this section as you would with an online form.
import { skills, type Skills } from "@/data/skills";

export interface Resume {
  information: Information[];
  education: Education[];
  skills: Skills;
}

export interface Information {
  firstName: string;
  lastName: string;
  title: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  resumeFile: string;
  transcript: string;
  portraitFile?: string;
  summary: string;
  jobStatus: string;
  footerNote: string;
}

export interface Education {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  graduation: string;
}

export const resume: Resume = {
  information: [
    {
      firstName: "Ada",
      lastName: "Lovelace",
      title: "Backend Junior Developer",
      email: "adalove@gmail.com",
      phone: "(919) 110-0110",
      linkedin: "https://www.linkedin.com",
      github: "https://github.com/",
      transcript: "/Transcript.pdf",
      resumeFile: "/Resume.pdf",
      portraitFile: "/images/portrait.jpg",
      summary:
        "This starter portfolio shows one possible layout for a personal site. Replace the sample story with your own background, projects, and goals so the experience becomes truly yours.",
      jobStatus: "Open to Opportunities",
      footerNote:
        "Use this shell as a foundation and customize every section until it reflects your identity.",
    },
  ],
  education: [
    {
      institution: "Example University",
      degree: "Bachelor of Science",
      fieldOfStudy: "Computer Science",
      graduation: "Expected 2027",
    },
    {
      institution: "Example Community College",
      degree: "Associate of Arts",
      fieldOfStudy: "Mathematics",
      graduation: "Completed 2024",
    },
  ],
  skills: skills,
};
