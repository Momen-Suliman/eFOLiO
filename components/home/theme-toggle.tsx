"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark" | null>("light");

  const toggleTheme = () => {
    if (!theme) return;
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);

      const storedTheme = localStorage.getItem("theme") as
        "light" | "dark" | null;

      const activeTheme = storedTheme || "light";
      setTheme(activeTheme);

      if (activeTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <button
      onClick={toggleTheme}
      disabled={!mounted || theme === null}
      className="group relative flex cursor-pointer h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary/50 transition-colors hover:bg-accent hover:border-accent-foreground/20 disabled:opacity-50"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          scale: !mounted || theme === "dark" ? 0 : 1,
          rotate: !mounted || theme === "dark" ? 180 : 0,
          opacity: !mounted || theme === "dark" ? 0 : 1,
        }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <Sun className="h-4 w-4 text-foreground group-hover:text-primary" />
      </motion.div>

      <motion.div
        initial={false}
        animate={{
          scale: !mounted || theme === "light" ? 0 : 1,
          rotate: !mounted || theme === "light" ? -180 : 0,
          opacity: !mounted || theme === "light" ? 0 : 1,
        }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <Moon className="h-4 w-4 text-foreground group-hover:text-primary" />
      </motion.div>
    </button>
  );
}
