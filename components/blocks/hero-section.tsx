"use client";
import Link from "next/link";
import { leetcodes } from "@/data/leetcodes";
import { courses } from "@/data/courses";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { resume } from "@/data/resume";

export default function HeroSection() {
  const totalLeetcodes =
    leetcodes.length === 1 ? leetcodes.length : leetcodes.length - 1;
  const totalCourses =
    courses.length === 1 ? courses.length : courses.length - 1;
  const totalProjects =
    projects.length === 1 ? projects.length : projects.length - 1;

  const name = resume.information[0].firstName;
  const githubUrl = resume.information[0].github;

  return (
    <div className="bg-transparent">
      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-40 md:py-35 lg:py-42">
          <motion.div
            className="mb-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-muted-foreground ring-1 ring-border hover:ring-ring transition-colors">
              <span className="hidden sm:inline">
                Open to Internships & Collaborations.
              </span>
              <span className="sm:hidden">Open to Opportunities.</span>{" "}
              <Link
                href={githubUrl}
                target="_blank"
                className="font-semibold text-logo"
              >
                <span aria-hidden="true" className="absolute inset-0" />
                See my Portfolio <span aria-hidden="true">→</span>
              </Link>
            </div>
          </motion.div>

          <div className="text-center cursor-default">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-foreground sm:text-7xl/20">
              <motion.span
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block"
              >
                Hi, I'm {name} {"—"}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.3,
                }}
                className="text-primary/50 font-light"
              >
                {" "}
                CS Student & Developer
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.35,
              }}
              className="mt-8 text-lg font-nomral text-pretty text-muted-foreground sm:text-xl/7"
            >
              Showcasing my academic journey, personal projects, & Full-Stack
              Apps—from Database Systems to Network Simulations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeIn", delay: 0.4 }}
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <Link
                href="/projects"
                className="rounded-md bg-linear-to-r from-ring to-logo px-3.5 py-2.5 text-sm font-semibold text-primary-foreground shadow-xs hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring transition-opacity"
              >
                View Projects
              </Link>
              <Link
                href="/resume"
                className="text-sm/6 font-semibold text-foreground hover:text-ring transition-colors"
              >
                My Resume <span aria-hidden="true">→</span>
              </Link>
            </motion.div>

            <div className="mt-16 flex items-center justify-center gap-x-10">
              {[
                {
                  label: "Courses",
                  href: "/degree",
                  value: `${totalCourses}${courses.length > 1 ? "+" : ""}`,
                },
                {
                  label: "Projects",
                  href: "/projects",
                  value: `${totalProjects}${projects.length > 1 ? "+" : ""}`,
                },

                {
                  label: "LeetCodes",
                  href: "/leetcodes",
                  value: `${totalLeetcodes}${leetcodes.length > 1 ? "+" : ""}`,
                },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: -24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.6 + index * 0.13,
                  }}
                >
                  <Link
                    key={stat.label}
                    href={stat.href}
                    className="group flex flex-col items-center gap-1 transition-colors"
                  >
                    <span className="text-2xl font-bold text-foreground group-hover:text-ring transition-colors">
                      {stat.value}
                    </span>
                    <span className="text-xs text-muted-foreground uppercase tracking-widest">
                      {stat.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
