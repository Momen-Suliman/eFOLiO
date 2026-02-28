export interface Resume {
  information: Information[];
  education: Education[];
  skills: Skills[];
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
  portraitFile?: string;
  summary: string;
}

export interface Education {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  graduation: string;
}

export interface Skills {
  category: string;
  items: string[];
}

export const resume: Resume = {
  information: [
    {
      firstName: "Momen",
      lastName: "Suliman",
      title: "Software Engineering Student",
      email: "personal.momen@gmail.com",
      phone: "720-751-3617",
      linkedin: "https://www.linkedin.com",
      github: "https://github.com/Momen-Suliman",
      resumeFile: "/Momen_Suliman_Resume.pdf",
      portraitFile: "/images/portrait.jpg",
      summary:
        "Independently architected and documented a full open- source project from the ground up — no team, no handholding, just a clear vision and the discipline to build it. Stepped up as the de facto lead on a team project, coordinating schema, code, and testing across contributors to deliver a polished result to senior colleagues.",
    },
  ],
  education: [
    {
      institution: "Metropolitan State University of Denver",
      degree: "Bachelor of Science",
      fieldOfStudy: "Computer Science",
      graduation: "Graduating May, 2026",
    },
    {
      institution: "University of Colorado Boulder",
      degree: "Bachelor of Science",
      fieldOfStudy: "Computer Engineering",
      graduation: "Time: 2017-2018",
    },
  ],
  skills: [
    {
      category: "Programming Languages",
      items: ["Python", "JavaScript", "Java", "SQL"],
    },
    {
      category: "Frameworks & Libraries",
      items: [
        "React",
        "Next.js 15",
        "Flask",
        "Tailwind CSS",
        "Framer Motion",
        "Ruby on Rails",
      ],
    },
    {
      category: "Tools & Technologies",
      items: [
        "Git",
        "GitHub Actions",
        "JUnit 5",
        "Node.js",
        "PostgreSQL",
        "SQLite",
        "MySQL",
      ],
    },
  ],
};
