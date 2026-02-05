"use client";
import Link from "next/link";
import { use, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "./ui/navigation-menu";

function Footer(){
    const currentYear = new Date().getFullYear();
    return(
        <motion.footer initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, ease: "easeOut" }}>
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <Link href="/" className="group">
                        <h1 className="text-lg font-bold text-logo transition-colors hover:text-primary">
                            eF O L I O
                        </h1>
                    </Link>
                    <div className="h-9 w-px bg-border"></div>
                    <p>This Electronic Portfolio and all its contents are copyright <b>©</b> {currentYear}. All rights reserved.</p>
                    <p></p>
                </div>
            </div>
        </motion.footer>
    );
}

export default Footer;
