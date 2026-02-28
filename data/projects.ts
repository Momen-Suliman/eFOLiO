export interface Project {
  id: string;
  title: string;
  description: string;
  tools: string[];
  image?: string;
  githubUrl: string;
  internalRoute?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Full-Stack Task Manager",
    description:
      "A production-ready CRUD application featuring secure authentication and relational database management.",
    tools: ["Next.js", "Supabase", "Prisma", "Tailwind"],
    githubUrl: "https://github.com/yourusername/crud",
    internalRoute: "/projects/crud",
    featured: true,
  },
  {
    id: "2",
    title: "Crypto Miner Simulator",
    description:
      "An interactive visualization of blockchain mechanics, focusing on hashing algorithms and block validation logic.",
    tools: ["Framer Motion", "TypeScript", "React"],
    githubUrl: "https://github.com/yourusername/mining-sim",
    internalRoute: "/projects/mining-sim",
    featured: true,
  },
  {
    id: "3",
    title: "Dynamic Weather Dashboard",
    description:
      "Real-time weather tracking application utilizing REST APIs and dynamic UI states based on environmental data.",
    tools: ["React", "OpenWeather API", "Lucide Icons"],
    githubUrl: "https://github.com/yourusername/weather-app",
    internalRoute: "/projects/weather-app",
    featured: true,
  },
  {
    id: "4",
    title: "Polymorphic Banking Simulation",
    description:
      "A backend Java system implementing custom generic data structures for high-efficiency account and queue management.",
    tools: ["Java", "OOP", "Unit Testing"],
    githubUrl: "https://github.com/yourusername/banking-system",
    featured: false,
  },
  {
    id: "5",
    title: "Automated Country Scraper",
    description:
      "A Python-based data mining tool that programmatically parses HTML trees to extract and structure global metadata.",
    tools: ["Python", "BeautifulSoup", "Requests"],
    githubUrl: "https://github.com/yourusername/country-scraper",
    featured: false,
  },
  {
    id: "6",
    title: "Recursive-Decent Parser",
    description:
      "A custom language parser built for academic research into compiler design.",
    tools: ["Python", "Algorithms"],
    githubUrl: "https://github.com/yourname/parser",
    featured: false,
  },
];
