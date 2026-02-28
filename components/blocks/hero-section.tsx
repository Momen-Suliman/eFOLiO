"use client";
import Link from "next/link";
import { leetcodes } from "@/data/leetcodes";
import { courses } from "@/data/courses";
import { projects } from "@/data/projects";

export default function HeroSection() {
  const totalLeetcodes = leetcodes.length - 1;
  const totalCourses = courses.length - 1;
  const totalProjects = projects.length - 1;

  return (
    <div className="bg-transparent">
      {/* Hero body */}
      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          {/* Availability pill */}
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-muted-foreground ring-1 ring-border hover:ring-ring transition-colors">
              Open to internships & collaborations.{" "}
              <Link href="/resume" className="font-semibold text-logo">
                <span aria-hidden="true" className="absolute inset-0" />
                See my resume <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Headline */}
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-foreground sm:text-7xl">
              Hi, I'm Momen —{" "}
              <span className="text-primary/50">CS Student & Developer</span>
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-muted-foreground sm:text-xl/8">
              A showcase of my academic journey, personal projects, and
              full-stack apps—from database systems to network simulations.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/projects"
                className="rounded-md bg-linear-to-r from-ring to-logo px-3.5 py-2.5 text-sm font-semibold text-primary-foreground shadow-xs hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring transition-opacity"
              >
                View Projects
              </Link>
              <Link
                href="/resume"
                className="text-sm/6 font-semibold text-foreground hover:text-logo transition-colors"
              >
                My Resume <span aria-hidden="true">→</span>
              </Link>
            </div>

            {/* Quick-link stats row */}
            <div className="mt-16 flex items-center justify-center gap-x-10">
              {[
                {
                  label: "Projects",
                  href: "/projects",
                  value: `${totalProjects}+`,
                },
                {
                  label: "Courses",
                  href: "/courses",
                  value: `${totalCourses}+`,
                },
                {
                  label: "LeetCode",
                  href: "/leetcode",
                  value: `${totalLeetcodes}+`,
                },
              ].map((stat) => (
                <Link
                  key={stat.label}
                  href={stat.href}
                  className="group flex flex-col items-center gap-1 transition-colors"
                >
                  <span className="text-2xl font-bold text-foreground group-hover:text-logo transition-colors">
                    {stat.value}
                  </span>
                  <span className="text-xs text-muted-foreground uppercase tracking-widest">
                    {stat.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
