# ⭐️ Getting Started with eFOLiO

Welcome to **eFOLiO**—a starter portfolio app shell for developers and Computer Science students. This guide will help you set up the project, replace the sample content, and reshape the experience into something personal.

This starter shell is intentionally flexible. You can edit the data, swap components, delete pages, or rebuild entire sections until the app reflects your own style and story.

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
- Any code editor (I used [**VS Code**](https://code.visualstudio.com/download) for this project)

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
    2. To access the live app on another device (mobile) go to `/next.config.ts` and add your ip address.

---

### 📐 The Architecture (Where things live)

Understanding the file structure is key to customizing this starter shell:

- `/data`: The **Command Center.** This is where the example content lives so you can replace it with your own resume, courses, projects, and LeetCode examples.
- `/app`: **Next.js App Router**. These are the page entry points. You can keep them, rename them, or replace them with your own route structure.
- `/components`: **Extracted UI blocks**. This is where the page sections live. You can edit them, remove them, or reconstruct them entirely to match your design.
- `/public`: Store your **static assets** like images, PDFs, and favicons (browser tab icons) here.

> The goal of this shell is not to lock you into one layout. You should feel comfortable editing, replacing, removing, or rebuilding any part of it.

---

### ✍️ Populating Your Data

This app shell uses a **Data-Driven** UI. You don't need to rewrite the pages (`.tsx`); you just need to update the `.ts` files in the `/data` directory.

1. **Identity & Resume (`/data/resume.ts`)**  
   Update your name, contact info, professional summary, and technical skills.
   - **Profile Image:** Place your photo in `/public/images/` and update the path in this file.

2. **Academic Courses (`/data/courses.ts`)**
   - Input your coursework, grades, and semesters. The `DegreePage` will automatically categorize these and display grade-themed badges.

3. **Projects & Featured Work (`/data/projects.ts`)**  
   Add your GitHub repositories and live demo links.
   - **Featured Flag:** Setting `featured: true` will place the project in the featured projects carousel at the top of the page.

4. **LeetCode Solutions (`/data/leetcodes.ts`)**  
   Add the problems you've attempted or solved. - **Note:** The id must be the number of the leetcode (e.g., id: _274_ is titled: _H-Index_). - **Code Blocks:** You can paste your solutions directly into the `code` string field using backticks, as well as its direct external link. Ensure to add the problem description and explain how you solved it.

5. **The Resume PDF (`/public/Resume.pdf`)**  
   Replace the placeholder `Resume.pdf` & `Transcript.pdf` in the `/public` folder with your actual files. Ensure your filenames matches the exact names in the `/public` folder.

---

### 🎨 Advanced Customization

#### The Theme

The app shell has both light & dark modes. To adjust their colors, modify the `:root` and `.dark` variables in `/app/globals.css`. An LLM can help generate consistent color palettes for you.

#### Adding SPA Projects

If you have a complex single page application project that needs its own dedicated page (not just a card):

1. Create a new folder (all lower case) inside `/app/projects/<your-project-name>/`.
2. Add a file named `page.tsx` inside the project folder you just created.
3. In `/data/projects.ts`, add the project to the list (`featured: true`) & set the `route` of that project to `/projects/<your-project-name>`.

#### Removing the LeetCodes Page/Feature

If you don't want to showcase LeetCode solutions:

1. Delete the `/app/leetcodes` folder.
2. Delete the `/component/leetcodes` folder.
3. Delete the `/data/leetcodes.ts` file.
4. Remove the "LeetCodes" object from the links array in `/data/navigation.ts`.
5. Set the `algorithmsCourse` string in `/components/degree/course-card.tsx` to an empty string.

---

### 🚀 Deployment

The easiest way to deploy your eFOLiO is using **Vercel:**

1. Run `npm run build` in your terminal. This ensures there are no TypeScript errors or broken links. If this command finishes without red text, your Vercel deployment will likely succeed on the first try.
2. Push your code to GitHub.
   - remember to change the README.md to reflect your accomplishments.
   - ensure the resume, portrait, & transcript being pushed are YOURS!
   - Set the `algorithmsCourse` string in `/components/degree/course-card.tsx` to your algorithms course or delete that feature entirely.
   - DO NOT delete, change OR alter the LICENSE.md file.
3. Import the project into [Vercel](https://vercel.com).
4. It will automatically detect Next.js and deploy your portfolio to a live URL.
5. Change your URL from `localhost:3000` to the actual deployment link in `/data/navigation.ts`
6. Access the provided Vercel URL and test that everything live is YOURS!

---

### 📬 Contact Me With Questions!

Feel free to reach out to me via:

**Email:** `personal.momen@gmail.com`  
**GitHub:** [Momen Suliman](https://github.com/Momen-Suliman).  
**[This is left intentionally for future links!]**
