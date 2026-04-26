"use client";
import { projects } from "@/data/projects";
import { Github } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { motion } from "framer-motion";

export const ProjectCard = () => {
  const archived = projects.filter((p) => !p.featured);

  return (
    <>
      <motion.div
        className="flex justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-5"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeIn" }}
      >
        <h3 className="text-2xl font-normal text-sidebar-foreground mb-2">
          Technical Archive
        </h3>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {archived.map((project) => (
          <motion.div
            className="flex justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            key={project.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeIn",
              delay: 0.2 + project.id * 0.09,
            }}
          >
            <Card className="pb-0 pt-0 flex flex-col justify-start">
              <CardHeader className="pt-4 [.border-b]:pb-1 items-center border-b bg-card/30">
                <div className="flex justify-between items-center gap-2">
                  <CardTitle className="text-sm font-semibold text-foreground leading-snug bg-card/30">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.title}
                    </a>
                  </CardTitle>
                  <a
                    href={project.githubUrl}
                    aria-hidden="true"
                    tabIndex={-1}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors shrink-0"
                  >
                    <Github size={15} />
                  </a>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
              <CardFooter>
                <div className="pb-3 flex flex-wrap gap-1.5 cursor-default">
                  {project.tools.map((tool) => (
                    <Badge
                      key={tool}
                      variant="outline"
                      className="text-xs bg-accent"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </>
  );
};
