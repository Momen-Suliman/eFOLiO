//populate the course object with your own courses. If your school portal provide an API, you can fetch the data to the respective interface values.
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
      "A starter example showing how to highlight coursework, key concepts, and hands-on learning outcomes in a polished card layout.",
    image: "/images/cpe1040.png",
  },
  {
    id: 2,
    code: "CS3250",
    name: "Software Development Methods & Tools",
    grade: "A",
    semester: "Spring 2025",
    category: "Computer Science",
    description:
      "Replace this sample description with your own course work, major projects, and lessons learned.",
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
      "Use this card to showcase network theory, teamwork experience, or a project that demonstrates distributed systems.",
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
      "A good example of a course card that can link to a project, feature a grade badge, and describe a practical build outcome.",
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
      "This sample content makes it easy to show databases, SQL work, schema design, and other technical highlights.",
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
      "Swap this copy with your own algorithm study notes, problem-solving experience, or advanced coursework takeaways.",
    image: "/images/cs4050.png",
  },
];
