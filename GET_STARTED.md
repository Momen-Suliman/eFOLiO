# ⭐️ Getting Started with eFOLiO

Welcome to **eFOLiO**—a minimalist, production-ready portfolio app shell built for Computer Science students and developers. This guide will help you set up your environment, integrate your professional data, and customize the design to make it your own.

---

### 📚 Prior Knowledge

Before starting, make sure you have **minimal understanding** of these languages & Frameworks:

- **HTML:** [HTML](https://www.youtube.com/watch?v=HD13eq_Pmp8) is responsible for the structure and content of a webpage.
- **TailWind CSS:** [TailWind](https://www.youtube.com/watch?v=6biMWgD6_JY) is a utility-first framework responsible for the visual presentation and layout.
- **React JavaScript:** [JavaScript](https://www.youtube.com/watch?v=CgkZ7MvWUAA) is responsible for the behavior and interactivity of a webpage.
- **Next.js:** [Next.js](https://www.youtube.com/watch?v=I1V9YWqRIeI) is a React-based framework for developing full-stack web applications.

---

### 🛠️ Prerequisites

Before you begin, ensure you have the following installed:

- [**Node.js**](https://nodejs.org/en/download/current) (v18.0 or higher)
- [**npm**](https://nodejs.org/en/download/current) (included with Node.js) **OR** [**pnpm**](https://pnpm.io/installation) **OR** [**bun**](https://bun.com/docs/installation) (Package managers)
- Any code editor ([**VS Code**](https://code.visualstudio.com/download) is recommended for this project)

---

### 📥 Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Momen-Suliman/eFOLiO.git
    cd efolio
    ```
2.  **Clone the repository:**
    ```bash
    rm -rf .git
    git init
    ```
3.  **Check Prerequisites:**
    ```bash
    node -v
    npm -v
    ```
4.  **Install dependencies:**
    ```bash
    npm install
    ```
5.  **Run the development server:**
    ```bash
    npm run dev
    ```
6.  **View the live app:**
    1. Open [http://localhost:3000](http://localhost:3000) in your browser.
    2. Open `http://<your IP>:3000` on a mobile browser; provided in the VS Code terminal as `- Network:       http://10.0.0.0:3000` after running the `npm run dev` cmd.

---

### 📐 The Architecture (Where things live)

Understanding the file structure is key to customizing this app shell:

- `/data`: The **Command Center.** You will spend 90% of your time here. This folder contains the TypeScript files that populate your resume, degree, projects, & LeetCode stats.
- `/app`: **Next.js App Router**. These are the Orchestrator pages. They manage the layout and state (e.g., which LeetCode problem is currently selected).
- `/components`: **Extracted UI blocks**.
  - Contains folders for each page which hold editable `.tsx` files. If you want to change how a project card looks or how the resume is styled, **_look here!_**
  - `/ui`: contains primitive shared Shadcn/UI primitives (Cards, Buttons, Badges). Try not to mess with them since they're imports.
- `/public`: Store your **static assets** like images, PDFs, and favicons (browser tab icons) here.

---

### ✍️ Populating Your Data

This app shell uses a **Data-Driven** UI. You don't need to rewrite the pages (`.tsx`); you just need to update the `.ts` files in the `/data` directory.

1. **Identity & Resume (`data/resume.ts`)**  
   Update your name, contact info, professional summary, and technical skills.
   - **Profile Image:** Place your photo in `/public/images/` and update the path in this file.

2. **Academic Courses (`data/courses.ts`)**
   - Input your coursework, grades, and semesters. The `DegreePage` will automatically categorize these and display grade-themed badges.

3. **Projects & Featured Work (`data/projects.ts`)**  
   Add your GitHub repositories and live demo links.
   - **Featured Flag:** Setting `featured: true` will place the project in the featured projects carousel at the top of the page.

4. **LeetCode Solutions (`data/leetcodes.ts`)**  
   Add the problems you've attempted or solved. - **Note:** The id must be the number of the leetcode (e.g., id: _274_ is titled: _H-Index_). - **Code Blocks:** You can paste your solutions directly into the `code` string field using backticks.

5. **The Resume PDF (/public/)**  
   Replace the placeholder resume.pdf in the `/public` folder with your actual resume. Ensure the filename matches exactly what is linked in your `data/resume.ts` or `Footer.tsx`.

---

### 🎨 Advanced Customization

#### The Theme

The app shell uses a dark-brown "Night Mode" by default. To adjust the primary colors, modify the `:root` and `.dark` variables in `app/globals.css`. AI can help generate consistent color palettes for you.

#### Adding SPA Projects

If you have a complex single page application project that needs its own dedicated page (not just a card):

1. Create a new folder (all lower case) inside `app/projects/[your-project-name]/`.
2. Add a `page.tsx` inside the project folder you just created.
3. In `data/projects.ts`, add the project to the list (`featured: true`) & set the `href` of that project to `/projects/[your-project-name]`.

#### Removing the LeetCode Page/Feature

If you don't want to showcase LeetCode solutions:

1. Delete the `app/leetcodes` folder.
2. Delete the `component/leetcodes` folder.
3. Remove the "LeetCodes" object from the links array in `data/navigation.ts`.

---

### 🚀 Deployment

The easiest way to deploy your eFOLiO is using **Vercel:**

1. Run `npm run build` in your terminal. This ensures there are no TypeScript errors or broken links. If this command finishes without red text, your Vercel deployment will likely succeed on the first try.
2. Push your code to GitHub.
   - remember to change the README.md to reflect your accomplishments.
   - ensure the resume being pushed is YOURS!
   - DO NOT delete, change OR alter the LICENSE.md file.
3. Import the project into [Vercel](https://vercel.com).
4. It will automatically detect Next.js and deploy your portfolio to a live URL.
5. Access the provided Vercel URL and test that everything live is YOURS!

---

### 📬 Contact Me With Questions!

Feel free to reach out to me via:

**Email:** `personal.momen@gmail.com`  
**GitHub:** [Momen Suliman](https://github.com/Momen-Suliman).  
**[This is left intentionally for future links!]**
