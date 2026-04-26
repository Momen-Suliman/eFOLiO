"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { resume } from "@/data/resume";
import { CardHeader } from "@/components/ui/card";
import { Mail, Phone, Github, Linkedin, ExternalLink } from "lucide-react";

export const ProfileHeader = () => {
  const info = resume.information[0];
  const fullName: string = `${info.firstName} ${info.lastName}`;

  return (
    <CardHeader className="p-0">
      <motion.section
        className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mb-12 pb-5 border-b border-border"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      >
        <div className="relative shrink-0 w-36 h-36 rounded-[33%] overflow-hidden bg-muted ring-2 ring-border pointer-events-none">
          {info.portraitFile ? (
            <Image
              src={`${info.portraitFile}`}
              alt="profile picture"
              loading="eager"
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-2xl font-semibold text-muted-foreground">
              {info.firstName
                .split(" ")
                .map((f) => f[0])
                .join("")}
            </div>
          )}
        </div>

        <div dir="rtl" className="flex-1 min-w-0">
          <h1 className="text-3xl font-semibold text-foreground tracking-tight cursor-default">
            {fullName}
          </h1>
          <p className="text-base text-muted-foreground mt-1 mb-4 cursor-default">
            {info.title}
          </p>

          <section className="flex flex-wrap gap-3">
            <a
              href={`mailto:${info.email}`}
              className="flex items-center gap-2 px-3 py-1.5 text-xs rounded-md border border-border bg-background hover:bg-accent transition-colors"
            >
              <Mail size={15} className="shrink-0" />
              {info.email}
            </a>
            <span className="h-6 w-px bg-border"></span>
            <a
              href={`tel:${info.phone}`}
              className="flex items-center gap-2 px-3 py-1.5 text-xs rounded-md border border-border bg-background hover:bg-accent transition-colors"
            >
              <Phone size={15} className="shrink-0" />
              {info.phone}
            </a>
            <span className="h-6 w-px bg-border"></span>
            <a
              href={info.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 text-xs rounded-md border border-border bg-background hover:bg-accent transition-colors"
            >
              <Github size={15} className="shrink-0" />
              GitHub
            </a>
            <span className="h-6 w-px bg-border"></span>
            <a
              href={info.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 text-xs rounded-md border border-border bg-background hover:bg-accent transition-colors"
            >
              <Linkedin size={15} className="shrink-0" />
              LinkedIn
            </a>
            <span className="h-6 w-px bg-border"></span>
            <a
              href={`${info.resumeFile}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 text-xs rounded-md border border-border bg-background hover:bg-accent transition-colors"
            >
              <ExternalLink size={15} className="shrink-0" />
              Resume PDF
            </a>
          </section>
        </div>
      </motion.section>
    </CardHeader>
  );
};
