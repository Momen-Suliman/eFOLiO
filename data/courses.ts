export interface Course {
  id: number;
  code: string;
  name: string;
  grade: string;
  semester: string;
  category: "Computer Science" | "Computer Engineering" | "CS Elective";
  description: string;
  image: string;
}

export const courses: Course[] = [
  {
    id: 1,
    code: "CPE1040",
    name: "Introduction to Computer Engineering",
    grade: "A",
    semester: "Spring 2022",
    category: "Computer Engineering",
    description:
      "Applied the engineering design process & mathematical modeling to analyze raw data. Accomplished visual results through manipulating Micro Bit code & using different component orientation along with varying circuit formations.",
    image: "/images/cpe1040.png",
  },
  {
    id: 2,
    code: "CS3250",
    name: "Software Dev. Methods, & Tools",
    grade: "A",
    semester: "Spring 2025",
    category: "Computer Science",
    description:
      "Learned the basics of large-scale software development, including lifecycles, object-oriented techniques, and automation. Practiced TDD/BDD testing, error analysis, and performance tuning through a significant group project.",
    image: "/images/cs3250.jpg",
  },
  {
    id: 3,
    code: "CS3700",
    name: "Networks & Distributed Computing",
    grade: "A-",
    semester: "Fall 2025",
    category: "CS Elective",
    description:
      "Acquired an understanding of network applications. Focused on building reliable communication software, optimizing routing, & managing client/server architectures to ensure error-free, ordered data transmission.",
    image: "/images/cs3700.jpg",
  },
  {
    id: 4,
    code: "CS3710",
    name: "Web Application Development",
    grade: "A+",
    semester: "Fall 2025",
    category: "CS Elective",
    description:
      "Developed full-stack web applications using modern frameworks for rapid prototyping & deployment. Focused on building responsive, cross-platform application compatible with desktop, tablet, & mobile browsers.",
    image: "/images/cs3710.png",
  },
  {
    id: 5,
    code: "CS3810",
    name: "Principles of Database Systems",
    grade: "A+",
    semester: "Summer 2025",
    category: "CS Elective",
    description:
      "Designed and managed relational databases using SQL, normalization, and ER modeling. Developed stored procedures and explored relational algebra and semi-structured data to ensure efficient data storage and retrieval.",
    image: "/images/cs3810.jpg",
  },
  {
    id: 6,
    code: "CS4050",
    name: "Algorithms & Algorithm Analysis",
    grade: "A",
    semester: "Fall 2025",
    category: "Computer Science",
    description:
      "Analyzed efficient algorithms using Big O notation. Solved complex computing problems via divide-and-conquer, greedy solutions, & dynamic programming, to optimize time & computational resource usage.",
    image: "/images/cs4050.png",
  },
];
