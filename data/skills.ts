//populate languages/tools/frameworks you've used below and include links to their installation pages for easier dynamic interactions by recruiters/hiring managers.
export interface Skills {
  languages: Languages[];
  tools: Tools[];
  librariesAndFrameworks: LibrariesAndFrameworks[];
}

export interface Languages {
  language: string;
  url: string;
}

export interface Tools {
  tool: string;
  url: string;
}

export interface LibrariesAndFrameworks {
  name: string;
  url: string;
}

//Dynamic lookup functions
export const getLanguageData = (searchName: string) => {
  const match = skills.languages.find(
    (l) => l.language.toLowerCase() === searchName.toLowerCase(),
  );
  return match || { language: searchName, url: "#" };
};

export const getToolData = (searchName: string) => {
  const match = skills.tools.find(
    (t) => t.tool.toLowerCase() === searchName.toLowerCase(),
  );
  return match || { tool: searchName, url: "#" };
};

export const getFrameworkData = (searchName: string) => {
  const match = skills.librariesAndFrameworks.find(
    (f) => f.name.toLowerCase() === searchName.toLowerCase(),
  );
  return match || { name: searchName, url: "#" };
};

export const skills: Skills = {
  languages: [
    {
      language: "JavaScript",
      url: "https://nodejs.org/en/download",
    },
    {
      language: "TypeScript",
      url: "https://www.typescriptlang.org/download/",
    },
    {
      language: "Java",
      url: "https://www.java.com/en/download/manual.jsp",
    },
    {
      language: "Python",
      url: "https://www.python.org/downloads/",
    },
    {
      language: "SQL",
      url: "https://www.postgresql.org/download/",
    },
    {
      language: "Kotlin",
      url: "https://kotlinlang.org/docs/command-line.html",
    },
    {
      language: "Ruby",
      url: "https://www.ruby-lang.org/en/documentation/installation/",
    },
    {
      language: "MIPS",
      url: "https://computerscience.missouristate.edu/mars-mips-simulator.htm",
    },
  ],
  tools: [
    {
      tool: "GIT",
      url: "https://git-scm.com/install/",
    },
    {
      tool: "GitHub Actions",
      url: "https://github.com/features/actions",
    },
    {
      tool: "JUnit",
      url: "https://junit.org/",
    },
    {
      tool: "Node.js",
      url: "https://nodejs.org/en/download",
    },
    {
      tool: "Vite",
      url: "https://vite.dev/guide/",
    },
    {
      tool: "PostgreSQL",
      url: "https://www.postgresql.org/download/",
    },
    {
      tool: "SQLite",
      url: "https://sqlite.org/download.html",
    },
    {
      tool: "MySQL",
      url: "https://www.mysql.com/downloads/",
    },
  ],
  librariesAndFrameworks: [
    {
      name: "React",
      url: "https://react.dev/learn/installation",
    },
    {
      name: "Next.js",
      url: "https://nextjs.org/docs/app/getting-started/installation",
    },
    {
      name: "Flask",
      url: "https://flask.palletsprojects.com/en/stable/installation/",
    },
    {
      name: "Beautiful Soup",
      url: "https://pypi.org/project/beautifulsoup4/",
    },
    {
      name: "Psycopg",
      url: "https://pypi.org/project/psycopg2/",
    },
    {
      name: "Tailwind CSS",
      url: "https://tailwindcss.com/docs/installation/using-vite",
    },
    {
      name: "Shadcn/ui",
      url: "https://ui.shadcn.com/docs/installation",
    },
    {
      name: "Framer Motion",
      url: "https://motion.dev/docs/react",
    },
    {
      name: "Recharts",
      url: "https://recharts.github.io/en-US/guide/installation/",
    },
    {
      name: "Ruby on Rails",
      url: "https://guides.rubyonrails.org/install_ruby_on_rails.html",
    },
    {
      name: "Hilt",
      url: "https://developer.android.com/training/dependency-injection/hilt-android",
    },
    {
      name: "WorkManager API",
      url: "https://developer.android.com/jetpack/androidx/releases/work",
    },
    {
      name: "Jetpack Compose",
      url: "https://developer.android.com/develop/ui/compose/setup",
    },
  ],
};
