# eFOLiO

**A high-performance, 'soon to be' open-source portfolio app shell built with Next.js 16. It will help CS students with showcasing academic milestones and personal development projects.**

---

## 🚀 The Elevator Pitch

This platform serves as a high-performance 'shell' designed to enable Computer Science students to architect their professional identity. Built on Next.js 16, it provides a robust, pre-configured codebase that handles the heavy lifting of routing, performance, and UI consistency, allowing students to focus on showcasing their unique engineering journey, academic milestones, and personal development innovations.

## ✨ Core Features

- **Interactive Header:** Real-time path detection and theme toggling (Light/Dark).
- **Degree Report:** A data-driven academic transcript with categorized CS coursework.
- **Project Hub:** A collection of GitHub-linked repositories and live, internal SPAs.
- **LeetCode Tracker:** Static solution library focusing showcasing problem solving skills.
- **Performance First:** Built with [Tailwind CSS v4](https://tailwindcss.com) for zero-runtime CSS and [Framer Motion](https://www.framer.com) for 60fps animations.

## 🛠 Tech-Stack

| Category       | Technology                                                                   |
| :------------- | :--------------------------------------------------------------------------- |
| **Framework**  | [Next.js 16 (App Router)](https://nextjs.org)                                |
| **Styling**    | [Tailwind CSS v4](https://tailwindcss.com)                                   |
| **Components** | [Shadcn UI](https://ui.shadcn.com) & [Framer Motion](https://www.framer.com) |
| **Language**   | [TypeScript](https://www.typescriptlang.org)                                 |
| **Deployment** | [Vercel](https://vercel.com)                                                 |

## 🏁 Getting Started

### Prerequisites

- Node.js (v20 or higher recommended)
- npm or pnpm

### Installation Steps

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Momen-Suliman/eFOLiO.git
    ```
2.  **check Prerequisites:**
    ```bash
    node -v
    npm -v
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Run the development server:**
    ```bash
    npm run dev
    ```
5.  **View the app:**
    Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Project Architecture

```text
/app          # File-based routing and page layouts
/components   # Reusable UI components (Shadcn) and global site elements
/data         # Centralized TypeScript objects for courses, projects, and LeetCodes
/lib          # Core utility functions (e.g., the cn helper for Tailwind)
```

## 🤝 Contributions

Once I finish setting up the app scaffold (and have my own version of the web-app launched), this app shell will be open to any contribution requests and any potential feature requests. STAY TUNED!
