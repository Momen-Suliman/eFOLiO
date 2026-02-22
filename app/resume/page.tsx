"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { resume } from "@/data/resume";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Github, Linkedin, ExternalLink } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.6,
    ease: [0.22, 1, 0.36, 1] as const,
    delay,
  },
});

export default function ResumePage() {
  const info = resume.information[0];

  return (
    <div className="container mx-auto px-6 py-12">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pointer-events-none"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeIn" }}
      >
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Personal Profile
          </h1>
          <p className="text-sm text-muted-foreground">
            A detailed overview of my academic journey
          </p>
        </div>
      </motion.div>

      <Card className="shadow-lg flex flex-col p-5 overflow-hidden transition-all">
        {/* ── HEADER: Portrait + Name + Contact ── */}
        <CardHeader className="p-0">
          <motion.section
            className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mb-12 pb-5 border-b border-border"
            {...fadeUp(0)}
          >
            {/* Portrait */}
            <div className="relative shrink-0 w-36 h-36 rounded-[33%] overflow-hidden bg-muted ring-2 ring-border pointer-events-none">
              {info.portraitFile ? (
                <Image
                  src={`${info.portraitFile}`}
                  alt={info.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-2xl font-semibold text-muted-foreground">
                  {info.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
              )}
            </div>

            {/* Name + title + contact row */}
            <div dir="rtl" className="flex-1 min-w-0">
              <h1 className="text-3xl font-bold text-foreground tracking-tight pointer-events-none">
                {info.name}
              </h1>
              <p className="text-base text-muted-foreground mt-1 mb-4 pointer-events-none">
                {info.title}
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href={`mailto:${info.email}`}
                  dir="ltr"
                  className="flex items-center gap-2 px-3 py-1.5 text-xs rounded-md border border-border bg-background hover:bg-accent transition-colors"
                >
                  <Mail size={15} className="shrink-0" />
                  {info.email}
                </a>
                <span className="h-6 w-px bg-border"></span>
                <a
                  href={`tel:${info.phone}`}
                  dir="ltr"
                  className="flex items-center gap-2 px-3 py-1.5 text-xs rounded-md border border-border bg-background hover:bg-accent transition-colors"
                >
                  <Phone size={15} className="shrink-0" />
                  {info.phone}
                </a>
                <span className="h-6 w-px bg-border"></span>
                <a
                  href={info.github}
                  dir="ltr"
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
                  dir="ltr"
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
                  dir="ltr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 text-xs rounded-md border border-border bg-background hover:bg-accent transition-colors"
                >
                  <ExternalLink size={15} className="shrink-0" />
                  Resume PDF
                </a>
              </div>
            </div>
          </motion.section>
        </CardHeader>

        {/* ── TWO-COLUMN BODY ── */}
        <CardContent className="p-0 flex-1">
          <div className="flex flex-col gap-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeIn" }}
            >
              <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4 pb-2 border-b border-border pointer-events-none">
                Academic Experience
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground pb-5">
                Independently architected and documented a full open- source
                project from the ground up — no team, no handholding, just a
                clear vision and the discipline to build it. Stepped up as the
                de facto lead on a team project, coordinating schema, code, and
                testing across contributors to deliver a polished result to
                senior colleagues.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* LEFT col (2/3): Summary + Education */}
            <div className="md:col-span-2 flex flex-col gap-10">
              {/* About */}
              <motion.section {...fadeUp(0.08)}>
                <Card className="pointer-events-none">
                  <CardHeader>
                    <CardTitle className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      About
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {info.summary}
                    </p>
                  </CardContent>
                </Card>
              </motion.section>

              {/* Education */}
              <motion.section {...fadeUp(0.14)}>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xs font-semibold uppercase tracking-widest text-muted-foreground pointer-events-none">
                      Education
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-6">
                    {resume.education.map((edu, i) => (
                      <div key={i} className="flex flex-col gap-3">
                        <div className="flex justify-between items-start gap-4">
                          <p className="text-md font-semibold text-foreground">
                            {edu.institution}
                          </p>
                          <Badge
                            variant="default"
                            className="whitespace-nowrap shrink-0 text-xs"
                          >
                            {edu.graduation}
                          </Badge>
                        </div>
                        <div className="flex flex-wrap justify-end-safe gap-2">
                          <Badge variant="secondary">{edu.degree}</Badge>
                          <Badge variant="secondary">{edu.fieldOfStudy}</Badge>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.section>
            </div>

            {/* RIGHT col (1/3): Skills */}
            <motion.aside {...fadeUp(0.2)}>
              <Card className="pointer-events-none">
                <CardHeader>
                  <CardTitle className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Skills
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-6">
                  {resume.skills.map((group, i) => (
                    <div key={i}>
                      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2.5">
                        {group.category}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <span
                            key={item}
                            className="text-xs px-2.5 py-1 rounded-md bg-muted text-muted-foreground border border-border"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.aside>
          </div>
        </CardContent>
        <CardFooter className="p-0 border-0 mt-10">
          <p className="text-xs text-muted-foreground text-center w-full">
            For more details, visit our other sections like{" "}
            <a href="/degree" className="text-primary hover:underline">
              Degree
            </a>
            ,{" "}
            <a href="/projects" className="text-primary hover:underline">
              Projects
            </a>{" "}
            and{" "}
            <a href="/leetcodes" className="text-primary hover:underline">
              LeetCodes
            </a>
            .
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
