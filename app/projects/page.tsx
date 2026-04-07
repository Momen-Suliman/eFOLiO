"use client";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import Link from "next/link";

export default function ProjectsPage() {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1], delay },
  });

  const featured = projects.filter((p) => p.featured);
  const archived = projects.filter((p) => !p.featured);

  return (
    <div className="container mx-auto px-6 py-12">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.75, ease: "easeIn" }}
      >
        <div className="mb-8">
          <h1 className="text-4xl tracking-wide font-semibold text-foreground mb-2">
            Projects Portfolio
          </h1>
          <p className="text-sm text-muted-foreground">
            Turning academic concepts into real-world applications
          </p>
        </div>
      </motion.div>

      <motion.div
        className="flex justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.3,
        }}
      >
        <Carousel className="w-full mx-auto max-w-[100vh]">
          <CarouselContent>
            {featured.map((project) => (
              <CarouselItem key={project.id}>
                <Card className="bg-linear-to-b from-card/15 via-transparent/50 to-card/60 overflow-hidden">
                  <div className="relative w-full h-52 bg-muted flex items-center justify-center">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-4xl font-bold text-muted-foreground/20 select-none">
                        {project.title}
                      </span>
                    )}
                  </div>

                  <CardContent className="p-6 flex flex-col gap-4">
                    <div className="flex justify-between items-start gap-4">
                      <h2 className="text-lg font-semibold text-foreground leading-tight cursor-default">
                        {project.title}
                      </h2>
                      <div className="flex gap-2 shrink-0">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 px-3 py-1.5 text-xs rounded-md border border-border bg-background cursor-pointer"
                        >
                          GitHub
                        </a>

                        {project.internalRoute && (
                          <Link
                            href={project.internalRoute}
                            className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 px-3 py-1.5 text-xs rounded-md border border-border bg-linear-to-r from-logo/20 to-card cursor-pointer"
                          >
                            LAUNCH
                          </Link>
                        )}
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 cursor-default">
                      {project.tools.map((tool) => (
                        <Badge
                          key={tool}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden sm:flex justify-center items-center gap-5 mt-5">
            <CarouselPrevious className="cursor-pointer static translate-y-0" />
            <CarouselNext className="cursor-pointer static translate-y-0" />
          </div>
        </Carousel>
      </motion.div>

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

      <div>
        <motion.div
          className="flex justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {archived.map((project) => (
              <Card
                key={project.id}
                className="pb-0 pt-0 flex flex-col justify-start"
              >
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
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
