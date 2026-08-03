//populate your projects below, if you'd like to showcase (build it within the webapp as an SPA) the project in the carousel set featured: true, ensure you add any language, library or framework to skills.ts before including here for dynamic interactions.
export interface Project {
  id: number;
  title: string;
  courseCode?: string;
  description: string;
  image?: string;
  githubUrl: string;
  route?: string;
  featured: boolean;
  techStack: {
    languages?: string[];
    tools?: string[];
    librariesAndFrameworks?: string[];
  };
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Starter Portfolio Shell",
    description:
      "A polished starter shell for building a personal portfolio. Replace the sample content with your own story, projects, and contact details.",
    image: "/images/efolio.png",
    githubUrl: "https://github.com/Momen-Suliman/eFOLiO",
    route: `/projects/efolio`,
    featured: true,
    techStack: {
      languages: ["TypeScript"],
      librariesAndFrameworks: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "Shadcn/UI",
      ],
    },
  },
  {
    id: 2,
    title: "Weather Dashboard",
    description:
      "An example weather app layout that can be reshaped into your own UI, data source, or API integration project.",
    image: "/images/weather_app_image.png",
    githubUrl: "https://github.com/your-name/weather-dashboard",
    route: `/projects/weather-app`,
    featured: true,
    techStack: {
      languages: ["TypeScript"],
      librariesAndFrameworks: ["React", "Next.js"],
    },
  },
  {
    id: 3,
    title: "Student Management Hub",
    courseCode: "CS3710",
    description:
      "A sample CRUD-style application that demonstrates how to structure a student dashboard, data relationships, and a simple admin experience.",
    image: "/images/sms.png",
    githubUrl: "https://github.com/your-name/student-management-hub",
    route: `/projects/crud-app`,
    featured: true,
    techStack: {
      languages: ["Ruby", "TypeScript"],
      tools: ["Vite", "SQLite"],
      librariesAndFrameworks: ["Ruby on Rails", "React"],
    },
  },
  {
    id: 4,
    title: "Compiler Basics",
    courseCode: "CS3210",
    description:
      "A sample parser project that shows how to document coursework work, architecture notes, and implementation milestones.",
    githubUrl: "https://github.com/your-name/compiler-basics",
    featured: false,
    techStack: {
      languages: ["Java"],
      tools: ["Parser Design", "Compiler Theory"],
    },
  },
  {
    id: 5,
    title: "Micro:Bit Learning Lab",
    courseCode: "CPE1040",
    description:
      "A starter example for hardware-focused projects, with a simple layout for demos, visuals, and step-by-step walkthroughs.",
    githubUrl: "https://github.com/your-name/microbit-learning-lab",
    featured: false,
    techStack: {
      languages: ["JavaScript"],
      tools: ["Micro:Bit", "Circuit Fundamentals"],
    },
  },
  {
    id: 6,
    title: "Realtime Chat Example",
    courseCode: "CS3700",
    description:
      "A sample networking project that can be adapted into a full chat app, messaging platform, or multiplayer demo.",
    githubUrl: "https://github.com/your-name/realtime-chat-example",
    featured: false,
    techStack: {
      languages: ["Python"],
      tools: ["Socket Programming", "UDP", "Multithreading"],
    },
  },
];
