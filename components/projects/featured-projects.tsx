"use client";
import Image from "next/image";
import Link from "next/link";
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
import { motion } from "framer-motion";
import { getFrameworkData, getLanguageData, getToolData } from "@/data/skills";

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
        <CarouselContent className="flex item-stretch">
          {featured.map((project) => {
            const techStackData = [
              ...(project.techStack.languages || []).map((lang) => {
                const data = getLanguageData(lang);
                return {
                  name: lang,
                  url: data.url !== "#" ? data.url : undefined,
                };
              }),
              ...(project.techStack.tools || []).map((tool) => {
                const data = getToolData(tool);
                return {
                  name: tool,
                  url: data.url !== "#" ? data.url : undefined,
                };
              }),
              ...(project.techStack.librariesAndFrameworks || []).map((fw) => {
                const data = getFrameworkData(fw);
                return {
                  name: fw,
                  url: data.url !== "#" ? data.url : undefined,
                };
              }),
            ];

            return (
              <CarouselItem key={project.id} className="flex flex-col h-full">
                <Card className="bg-linear-to-b from-card/15 via-transparent/50 to-card/60 overflow-hidden flex flex-col h-130 sm:h-120">
                  <div className="relative w-full h-52 bg-muted flex items-center justify-center shrink-0">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt="decorative image"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        loading="eager"
                        quality="100"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-4xl font-bold text-muted-foreground/20 select-none">
                        {" "}
                        {project.title}{" "}
                      </span>
                    )}
                  </div>

                  <CardContent className="p-6 flex flex-col justify-between flex-1 gap-4 overflow-hidden">
                    <div className="flex flex-col gap-3 flex-1 overflow-y-auto pr-1">
                      <div className="flex justify-between items-start gap-4">
                        <h2 className="text-lg font-semibold text-foreground leading-tight cursor-default">
                          {" "}
                          {project.title}{" "}
                        </h2>
                        <div className="flex gap-2 shrink-0">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 px-3 py-1.5 text-xs rounded-md border border-border bg-background cursor-pointer"
                          >
                            {" GitHub "}
                          </a>
                          {project.route && (
                            <Link
                              href={project.route}
                              target="_blank"
                              className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 px-3 py-1.5 text-xs rounded-full border border-border bg-linear-to-r from-logo/20 to-card cursor-pointer"
                            >
                              {" DEMO "}
                            </Link>
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3sm:line-clamp-4">
                        {" "}
                        {project.description}{" "}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 cursor-default shrink-0 mt-auto pt-2 border-t border-border/10">
                      {techStackData.map((item, idx) => {
                        const uniqueKey = `${item.name}-${idx}`;
                        return item.url ? (
                          <a
                            key={uniqueKey}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block"
                          >
                            <Badge
                              variant="secondary"
                              className="text-xs hover:bg-secondary/80 transition-colors"
                            >
                              {" "}
                              {item.name}{" "}
                            </Badge>
                          </a>
                        ) : (
                          <Badge
                            key={uniqueKey}
                            variant="outline"
                            className="text-xs text-muted-foreground"
                          >
                            {" "}
                            {item.name}{" "}
                          </Badge>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <div className="flex justify-center items-center gap-3 sm:gap-5 mt-3 sm:mt-5">
          <CarouselPrevious className="cursor-pointer static translate-y-0 h-8 w-8 [&_svg]:h-4 [&_svg]:w-4" />
          <CarouselNext className="cursor-pointer static translate-y-0 h-8 w-8 [&_svg]:h-4 [&_svg]:w-4" />
        </div>
      </Carousel>
    </motion.div>
  );
};
