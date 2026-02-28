"use client";
import Link from "next/link";
import Logo from "@/components/icons/Logo";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Github, Menu, Moon, Sun } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { resume } from "@/data/resume";

function Header() {
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);
  const socialLinks = [
    { icon: Github, label: "GitHub", href: `${resume.information[0].github}` },
  ];

  const links = [
    { name: "Home", href: "/" },
    { name: "Resume", href: "/resume" },
    { name: "Degree", href: "/degree" },
    { name: "Projects", href: "/projects" },
    { name: "LeetCodes", href: "/leetcodes" },
  ];

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

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

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b border-border bg-transparent backdrop-blur-lg shadow-md"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <NavigationMenu>
                <NavigationMenuList className="flex gap-1">
                  {links.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <NavigationMenuItem key={link.href}>
                        <Link
                          href={link.href}
                          onMouseEnter={() => setHoveredPath(link.href)}
                          onMouseLeave={() => setHoveredPath(null)}
                          className="relative cursor-pointer px-4 py-2 text-sm font-medium transition-colors"
                        >
                          <span
                            className={`relative cursor-pointer z-10 ${
                              isActive
                                ? "text-primary-foreground"
                                : "text-foreground hover:text-primary"
                            }`}
                          >
                            {link.name}
                          </span>

                          {isActive && (
                            <div className="absolute cursor-pointer inset-0 rounded-2xl bg-ring/50 border border-primary" />
                          )}

                          {hoveredPath === link.href && !isActive && (
                            <div className="absolute cursor-pointer inset-0 rounded-2xl bg-accent/50 border border-sidebar-ring" />
                          )}
                        </Link>
                      </NavigationMenuItem>
                    );
                  })}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            <div className="md:hidden">
              <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                <SheetTrigger className="p-2 hover:bg-accent rounded-md transition-colors">
                  <Menu className="h-5.5 w-5.5" />
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="bg-background/30 backdrop-blur-sm h-fit w-2/3 border-b rounded-2xl mr-[1.5vh] mt-[1.5vh] flex flex-col p-0"
                >
                  <SheetTitle className="bg-ring/20 text-xl text-logo tracking-wider font-medium border-b rounded-t-2xl py-2 items-center justify-center text-center">
                    Main Menu
                  </SheetTitle>
                  <nav className="flex flex-col flex-1 gap-4 items-center justify-evenly pb-5">
                    {links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setSheetOpen(false)}
                        className={`text-lg tracking-wide items-center justify-center text-center pb-0.5 ${pathname === link.href ? "text-background/80 font-bold rounded-2xl bg-ring/50 border border-primary px-2" : "text-foreground font-light"}`}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>

            <div className="h-6 w-px bg-border"></div>

            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-secondary/50 transition-colors hover:bg-accent hover:border-accent-foreground/20 disabled:opacity-50"
                  aria-label={social.label}
                >
                  <Icon className="h-4 w-4 text-foreground" />
                </a>
              );
            })}

            <button
              onClick={toggleTheme}
              disabled={theme === null}
              className="group relative flex cursor-pointer h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary/50 transition-colors hover:bg-accent hover:border-accent-foreground/20 disabled:opacity-50"
              aria-label="Toggle theme"
            >
              <motion.div
                initial={false}
                animate={{
                  scale: theme === "dark" ? 0 : 1,
                  rotate: theme === "dark" ? 180 : 0,
                  opacity: theme === "dark" ? 0 : 1,
                }}
                transition={{ duration: 0.3 }}
                className="absolute"
              >
                <Sun className="h-4 w-4 text-foreground group-hover:text-primary" />
              </motion.div>
              <motion.div
                initial={false}
                animate={{
                  scale: theme === "light" ? 0 : 1,
                  rotate: theme === "light" ? -180 : 0,
                  opacity: theme === "light" ? 0 : 1,
                }}
                transition={{ duration: 0.3 }}
                className="absolute"
              >
                <Moon className="h-4 w-4 text-foreground group-hover:text-primary" />
              </motion.div>
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

export default Header;
