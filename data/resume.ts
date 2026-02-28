export interface Resume {
  information: Information[];
  education: Education[];
  skills: Skills[];
}

export interface Information {
  name: string;
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
      name: "Momen Suliman",
      title: "Software Engineer Student",
      email: "personal.momen@gmail.com",
      phone: "720-751-3617",
      linkedin: "https://www.linkedin.com",
      github: "https://github.com/Momen-Suliman",
      resumeFile: "/Momen_Suliman_Resume.pdf",
      portraitFile: "/images/portrait.jpg",
      summary:
        "Aspiring software engineer with a strong foundation in computer science principles and a passion for developing innovative solutions. Proficient in multiple programming languages and experienced in full-stack web development, distributed computing, & Database Systems. Eager to contribute to impactful projects and continuously learn in a dynamic tech environment.",
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
