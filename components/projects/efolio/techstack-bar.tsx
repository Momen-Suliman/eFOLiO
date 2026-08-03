"use client";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { getLanguageData, getToolData, getFrameworkData } from "@/data/skills";
import {
  Terminal,
  Layout,
  Wind,
  Code2,
  Shield,
  Blocks,
  ChartPie,
} from "lucide-react";

export const TechStackBar = () => {
  const mainProject = projects[0];

  const techStackData = mainProject
    ? [
        ...(mainProject.techStack.languages || []).map((lang) => {
          const data = getLanguageData(lang);
          return { name: data.language, url: data.url };
        }),
        ...(mainProject.techStack.tools || []).map((tool) => {
          const data = getToolData(tool);
          return { name: data.tool, url: data.url };
        }),
        ...(mainProject.techStack.librariesAndFrameworks || []).map((fw) => {
          const data = getFrameworkData(fw);
          return { name: data.name, url: data.url };
        }),
      ]
    : [];

  const iconMap: Record<string, React.JSX.Element> = {
    "Next.js": <Layout className="h-5 w-5" />,
    "React": <Code2 className="h-5 w-5" />,
    "Tailwind CSS": <Terminal className="h-5 w-5" />,
    "TypeScript": <Shield className="h-5 w-5" />,
    "Framer Motion": <Wind className="h-5 w-5" />,
    "Shadcn/UI": <Blocks className="h-5 w-5" />,
    "Recharts": <ChartPie className="h-5 w-5" />,
  };

  return (
    <motion.section
      className="border-y border-border/20 bg-background/5 backdrop-blur-md py-6 mb-20 relative"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.65, ease: "easeIn", delay: 0.4 }}
    >
      <div className="relative flex w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          className="flex whitespace-nowrap items-center gap-16 md:gap-24 pl-16 md:pl-24 opacity-80 hover:opacity-100 transition-opacity duration-500"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
        >
          {[...techStackData, ...techStackData].map((skill, index) => (
            <a
              key={`${skill.name}-${index}`}
              href={skill.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Learn more about ${skill.name}`}
              className="text-sm md:text-lg font-normal flex items-center gap-2 text-muted-foreground hover:text-ring transition-colors cursor-pointer"
            >
              <span className="text-sidebar-foreground">
                {iconMap[skill.name] || <Code2 className="h-5 w-5" />}
              </span>
              {skill.name}
            </a>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
