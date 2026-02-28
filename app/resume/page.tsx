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
    duration: 0.65,
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
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <div className="mb-8">
          <h1 className="text-4xl font-semibold text-foreground mb-2">
            Personal Profile
          </h1>
          <p className="text-sm text-muted-foreground">
            A detailed overview of my academic journey
          </p>
        </div>
      </motion.div>

      <Card className="shadow-lg flex flex-col p-5 bg-linear-to-b from-ransparent/50 via-transparent/50 to-card/60 overflow-hidden transition-all">
        <CardHeader className="p-0">
          <motion.section
            className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mb-12 pb-5 border-b border-border"
            {...fadeUp(0.1)}
          >
            <div className="relative shrink-0 w-36 h-36 rounded-[33%] overflow-hidden bg-muted ring-2 ring-border pointer-events-none">
              {info.portraitFile ? (
                <Image
                  src={`${info.portraitFile}`}
                  alt={info.firstName}
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
              <h1 className="text-3xl font-semibold text-foreground tracking-tight pointer-events-none">
                {info.firstName} {info.lastName}
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

        <CardContent className="p-0 flex-1">
          <div className="flex flex-col gap-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4 pb-2 border-b border-border pointer-events-none">
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
            <div className="md:col-span-2 flex flex-col gap-10">
              <motion.section {...fadeUp(0.18)}>
                <Card className="bg-background/50 pointer-events-none">
                  <CardHeader>
                    <CardTitle className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
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

              <motion.section {...fadeUp(0.26)}>
                <Card className="bg-background/50">
                  <CardHeader>
                    <CardTitle className="text-xs font-bold uppercase tracking-widest text-muted-foreground pointer-events-none">
                      Education
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-6">
                    {resume.education.map((edu, i) => (
                      <div key={i} className="flex flex-col gap-3">
                        <div className="flex justify-between items-start gap-4">
                          <p className="text-md font-medium text-foreground">
                            {edu.institution}
                          </p>
                          <Badge
                            variant="default"
                            className="whitespace-nowrap shrink-0 text-xs border-x-amber-400 bg-linear-to-r from-primary to-card/70 pointer-events-none"
                          >
                            {edu.graduation}
                          </Badge>
                        </div>
                        <div className="flex flex-wrap justify-end-safe gap-2">
                          <Badge
                            variant="secondary"
                            className="pointer-events-none"
                          >
                            {edu.fieldOfStudy}
                          </Badge>
                          <Badge
                            variant="secondary"
                            className="bg-muted-foreground/30 pointer-events-none"
                          >
                            {edu.degree}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.section>
            </div>

            <motion.aside {...fadeUp(0.32)}>
              <Card className="bg-background/50 pointer-events-none">
                <CardHeader>
                  <CardTitle className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Skills
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-6">
                  {resume.skills.map((group, i) => (
                    <div key={i}>
                      <p className="text-xs font-medium italic uppercase tracking-widest text-muted-foreground mb-2.5">
                        {group.category}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <span
                            key={item}
                            className="text-xs px-2.5 py-1 rounded-md bg-sidebar-ring/30 text-muted-foreground border border-border"
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
        <CardFooter className="p-0 border-0 mt-10 cursor-default">
          <p className="text-xs text-muted-foreground text-center w-full">
            For more details, visit our other pages{" "}
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
