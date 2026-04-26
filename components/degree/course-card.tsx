"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { courses } from "@/data/courses";
import { projects } from "@/data/projects";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "../ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";

export const CourseCard = () => {
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);
  const getGradeColor = (grade: string) => {
    switch (grade) {
      case "A+":
        return "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20";
      case "A":
        return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20";
      case "A-":
        return "bg-lime-500/10 text-lime-600 dark:text-lime-400 border-lime-500/20";

      case "B+":
        return "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20";
      case "B":
        return "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20";
      case "B-":
        return "bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/20";

      case "C+":
        return "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20";
      case "C":
        return "bg-amber-400/10 text-amber-700 dark:text-amber-300 border-amber-400/20";
      case "C-":
        return "bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/20";

      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const truncateDescription = (
    description: string,
    maxLength: number = 250,
  ) => {
    if (description.length <= maxLength) return description;
    return description.substring(0, maxLength).trim() + "...";
  };

  // Add the Course code of the algorithms class below to link it to /leetcodes or a different route
  const algorithms = "CS4050";

  return courses.map((course, index) => (
    <motion.div
      key={course.id}
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.7,
        ease: "easeIn",
        delay: 0.2 + index * 0.09,
      }}
    >
      <Card
        key={course.id}
        className="shadow-lg flex flex-col min-h-full pb-0 pt-0 overflow-hidden transition-all hover:shadow-lg hover:border-primary/50 cursor-pointer select-none"
        onClick={() =>
          setSelectedCourse((prevId) =>
            prevId === course.id ? null : course.id,
          )
        }
        tabIndex={0}
        role="button"
        aria-expanded={selectedCourse === course.id}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setSelectedCourse((prevId) =>
              prevId === course.id ? null : course.id,
            );
          }
        }}
      >
        <div className="relative h-48 w-full bg-muted">
          <Image src={course.image} alt="" fill className="object-cover" />
        </div>

        <CardHeader>
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1">
              <CardTitle className="text-lg">{course.name}</CardTitle>
              <CardDescription className="text-primary tracking-wide">
                {course.code}
              </CardDescription>
            </div>
            <Badge className={getGradeColor(course.grade)} variant="outline">
              {course.grade}
            </Badge>
          </div>
        </CardHeader>

        {selectedCourse === course.id ? (
          <>
            <CardContent className="flex-1 min-h-30 pt-0">
              <div className="flex items-center gap-2 mb-3 mt-2">
                <div className="h-px flex-1 bg-border" />
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
                  Course Projects
                </span>
                <div className="h-px flex-1 bg-border" />
              </div>

              <div className="space-y-2 overflow-y-auto max-h-40 pr-2 custom-scrollbar">
                {projects.filter((p) => p.courseCode === course.code).length >
                0 ? (
                  projects
                    .filter((p) => p.courseCode === course.code)
                    .map((project) => (
                      <a
                        key={project.id}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="group flex items-center justify-between p-3 rounded-lg border border-border/50 bg-secondary/20 transition-all hover:bg-secondary/40 hover:border-primary/40 hover:shadow-sm"
                      >
                        <div className="flex items-center gap-3">
                          <Github className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                          <div className="flex flex-col">
                            <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">
                              {project.title}
                            </span>
                            <span className="text-[10px] text-muted-foreground line-clamp-1">
                              {project.tools.slice(0, 2).join(" • ")}
                            </span>
                          </div>
                        </div>

                        <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                      </a>
                    ))
                ) : (
                  <div className="flex flex-col items-center justify-center py-4 text-center">
                    <p className="text-[10px] text-muted-foreground italic">
                      {course.code == algorithms ? (
                        <a
                          href="/leetcodes"
                          onClick={(e) => e.stopPropagation()}
                          className="text-[.85rem] px-3 py-2 text-xs bg-primary text-primary-foreground rounded-md hover:opacity-90 inline-block"
                        >
                          View LeetCodes
                        </a>
                      ) : (
                        "No projects archived for this course yet."
                      )}
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </>
        ) : (
          <>
            <CardContent className="flex-1 min-h-30">
              <p className="text-sm text-muted-foreground">
                {truncateDescription(course.description, 250)}
              </p>
            </CardContent>
          </>
        )}

        <CardFooter className="flex items-center justify-between border-t pt-4 pb-6 bg-card/30">
          <Badge variant="secondary" className="text-xs">
            {course.category}
          </Badge>
          <span className="text-xs tracking-wide text-muted-foreground">
            {course.semester}
          </span>
        </CardFooter>
      </Card>
    </motion.div>
  ));
};
