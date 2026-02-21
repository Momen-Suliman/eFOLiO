"use client";
import Logo from "@/components/icons/Logo";
import ClipboardMail from "@/components/icons/clipboard-mail";
import { Github, Linkedin, Mail, Check } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

function Footer(){
    const currentYear = new Date().getFullYear();
    const email = "personal.momen@gmail.com";
    const [copied, setCopied] = useState(false);
    const socialLinks = [
        { icon: Github, label: "GitHub", href: "https://github.com/Momen-Suliman" },
        { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
    ];

    const copyEmail = () => {
        navigator.clipboard.writeText(email).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 3000);
        })};

    return(
        <motion.footer initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, ease: "easeOut" }}>
            <div className="container mx-auto px-6 py-4">
                <div className="flex flex-col items-center justify-between">
                    <Logo className="text-md"/>
                    <div className="h-px w-100 bg-border"></div>
                    <div className="flex items-center gap-4">
                        <div>
                            <button onClick={copyEmail} className="flex h-9 w-9 items-center justify-center cursor-pointer rounded-md border border-border bg-secondary/50 transition-colors hover:bg-accent hover:border-accent-foreground/20 disabled:opacity-50"
                                aria-label="Copy email to clipboard"
                                title={copied ? "Copied!" : email}
                            >
                                {copied ? (
                                    <Check className="h-4 w-4 text-green-500" />
                                ) : (
                                    <ClipboardMail className="h-4 w-4 text-foreground" />
                                )}</button>
                        </div>
                        <div className="h-7 w-px bg-border"></div>
                        <p className="text-sm text-center">A curated collection of academic and personal projects demonstrating a versatile technical toolkit—from full-stack web development to network simulation and database architecture.</p>
                        <div className="h-7 w-px bg-border"></div>
                        <div className="flex gap-3">
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
                        </div>
                    </div>
                    <p className="text-[0.70rem] text-center">Copyright © {currentYear} Momen Suliman. All content, projects, and original materials are protected. All Rights Reserved.</p>
                </div>
            </div>
        </motion.footer>
    );
}

export default Footer;
