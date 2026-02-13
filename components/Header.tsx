"use client";
import Link from "next/link";
import Logo from "@/components/icons/Logo";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Moon, Sun } from "lucide-react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "./ui/navigation-menu";

function Header(){
    const pathname = usePathname();
    const [hoveredPath, setHoveredPath] = useState<string | null>(null);
    const [theme, setTheme] = useState<"light" | "dark" | null>(null);
    
    const links = [
        {name: 'Home', href: '/'},
        {name: 'Resume', href: '/resume'},
        {name: 'Degree', href: '/degree'},
        {name: 'Projects', href: '/projects'},
        {name: 'LeetCodes', href: '/leetcodes'},
    ]

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
            className="sticky top-0 z-50 w-full border-b border-border bg-background backdrop-blur-lg shadow-md"
        >
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <Logo />
                    <div className="flex items-center gap-4">
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
                                                <span className={`relative cursor-pointer z-10 ${
                                                    isActive 
                                                        ? 'text-primary-foreground' 
                                                        : 'text-foreground hover:text-primary'
                                                }`}>
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

                        <div className="h-6 w-px bg-border"></div>

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
                                    opacity: theme === "dark" ? 0 : 1
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
                                    opacity: theme === "light" ? 0 : 1
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
