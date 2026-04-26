"use client";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";
import { projects } from "@/data/projects";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { motion } from "framer-motion";

export const FeaturedProjects = () => {
  const featured = projects.filter((p) => p.featured);

  return (
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
                    <Image
                      src={project.image}
                      alt=""
                      fill
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

                      {project.route && (
                        <Link
                          href={project.route}
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
                      <Badge key={tool} variant="secondary" className="text-xs">
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
  );
};
