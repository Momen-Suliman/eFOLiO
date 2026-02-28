"use client";
import Logo from "@/components/icons/Logo";
import ClipboardMail from "@/components/icons/clipboard-mail";
import { resume } from "@/data/resume";
import { Github, Linkedin, Check, FileUser } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

function Footer() {
  const currentYear = new Date().getFullYear();
  const email = resume.information[0].email;
  const fullName: string = `${resume.information[0].firstName} ${resume.information[0].lastName}`;

  const [copied, setCopied] = useState(false);
  const socialLinks = [
    { icon: Github, label: "GitHub", href: `${resume.information[0].github}` },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: `${resume.information[0].linkedin}`,
    },
  ];

  const copyEmail = () => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(email).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    } else {
      // safari uses traditional hidden textarea
      const textArea = document.createElement("textarea");
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Fallback copy failed", err);
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <motion.footer
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-col items-center justify-between">
          <Logo className="text-md" />
          <div className="h-px w-90 bg-border my-1"></div>
          <div className="flex items-center gap-3 py-2">
            <a
              href={`${resume.information[0].resumeFile}`}
              target="_blank"
              dir="ltr"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-secondary/50 transition-colors hover:bg-accent hover:border-accent-foreground/20 disabled:opacity-50"
            >
              <FileUser className="h-4 w-4 text-foreground" />
            </a>
            <button
              onClick={copyEmail}
              className="flex h-9 w-9 items-center justify-center cursor-pointer rounded-md border border-border bg-secondary/50 transition-colors hover:bg-accent hover:border-accent-foreground/20 disabled:opacity-50"
              aria-label="Copy email to clipboard"
              title={copied ? "Copied!" : email}
            >
              {copied ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <ClipboardMail className="h-4 w-4 text-foreground" />
              )}
            </button>

            <div className="h-4 sm:h-6 w-px bg-border"></div>

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
          <div className="h-px w-30 bg-border my-2"></div>

          <p className="text-sm text-center justify-center pt-2">
            Currently looking to specializing in entry-level Full-Stack
            Development, Backend Architecture, or Database Systems.
          </p>
          <p className="text-[0.70rem] text-center justify-center text-foreground/65">
            Copyright © {currentYear} {fullName}. All content, projects, &
            original materials are protected. All Rights Reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
