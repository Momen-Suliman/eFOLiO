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
    title: "Full-Stack CRUD App",
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
    title: "Banking System",
    description:
      "A Java-based banking simulation using custom generic Stack and Queue implementations for account and customer management. Features automated transaction processing for Checking and Savings accounts with results exported to text files, demonstrating fundamental data structures and file I/O.",
    tools: ["Java", "OOP", "Generic Data Structures", "Unit Testing"],
    githubUrl: "https://github.com/Momen-Suliman/Banking-System",
    featured: false,
  },
  {
    id: "5",
    title: "Micro:Bit Scripts",
    description:
      "A collection of JavaScript programs for the Micro:Bit chip designed to teach coding and circuit fundamentals through hands-on learning progressions. Includes interactive visualizations and structured step-by-step exercises covering digital I/O, variables, loops, and hardware interaction.",
    tools: ["JavaScript", "Micro:Bit", "Circuit Fundamentals"],
    githubUrl: "https://github.com/Momen-Suliman/Micro-Bit-Scripts",
    featured: false,
  },
  {
    id: "6",
    title: "Simple Chat-App",
    description:
      "A multithreaded Python chat application using UDP sockets and multicast communication. Features a GUI client and centralized server with a custom comma-separated messaging protocol for user registration, broadcasting, and listing active users.",
    tools: [
      "Python",
      "Socket Programming",
      "Multithreading",
      "UDP/Multicast",
      "GUI",
    ],
    githubUrl: "https://github.com/Momen-Suliman/Simple-Chat-App",
    featured: false,
  },
  {
    id: "7",
    title: "RESTful-API",
    description:
      "A RESTful web service for sharing cybersecurity incidents built with Flask and Python. Implements authentication, pagination, and advanced search/filtering capabilities with a SQLite database and full-featured client application.",
    tools: ["Python", "Flask", "REST API", "SQLite", "Web Services"],
    githubUrl: "https://github.com/Momen-Suliman/RESTful-API",
    featured: false,
  },
  {
    id: "8",
    title: "Simple Web-Scrapper",
    description:
      "A Python web scraping project using BeautifulSoup (bs4) to extract country data from Scrape This Site. Demonstrates fundamental data mining techniques including HTML parsing, DOM tree navigation, and targeted element retrieval with JSON export.",
    tools: [
      "Python",
      "BeautifulSoup",
      "Web Scraping",
      "Data Mining",
      "JSONify",
    ],
    githubUrl: "https://github.com/Momen-Suliman/Simple-Web-Scrapper",
    featured: false,
  },
  {
    id: "9",
    title: "Recursive Descent Parser",
    description:
      "A recursive-descent parser for a C-like language built in Java. Implements EBNF grammar parsing with support for variables, control flow (if/else, while loops), expressions with operator precedence, and print statements.",
    tools: [
      "Java",
      "Parser Design",
      "EBNF",
      "Compiler Theory",
      "StreamTokenizer",
    ],
    githubUrl: "https://github.com/Momen-Suliman/Recursive-Descent-Parser",
    featured: false,
  },
  {
    id: "10",
    title: "RubyOnRails WebApp",
    description:
      "A Ruby on Rails and React (Vite) student management system featuring complex database relationships (one-to-one, one-to-many, many-to-many). Includes CRUD operations, custom foreign key displays, frontend design, and search functionality.",
    tools: ["Ruby on Rails", "React", "Vite", "SQLite"],
    githubUrl: "https://github.com/Momen-Suliman/RubyOnRails-WebApp",
    featured: false,
  },
  {
    id: "11",
    title: "Online Voting Simulator",
    description:
      "A secure voting system implemented using Python's XML-RPC paradigm. Features rigorous server-side validation including registration verification, double-voting prevention, ballot integrity checks, and election phase management.",
    tools: [
      "Python",
      "XML-RPC",
      "Remote Procedure Calls",
      "Security",
      "Validation",
    ],
    githubUrl: "https://github.com/Momen-Suliman/Online-Voting-Simulator",
    featured: false,
  },
  {
    id: "12",
    title: "Simple Client-Server Game",
    description:
      "A Python-based client/server number guessing game using UDP sockets. Features a state machine on the server (READY/BUSY) for managing single-player sessions with hint generation and attempt tracking.",
    tools: ["Python", "Socket Programming", "UDP", "State Machines"],
    githubUrl: "https://github.com/Momen-Suliman/Simple-ClientServer-Game",
    featured: false,
  },
];
