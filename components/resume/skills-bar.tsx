"use client";
import { motion } from "framer-motion";
import { resume } from "@/data/resume";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Languages, LibrariesAndFrameworks, Tools } from "@/data/skills";

type SkillItem = Languages | Tools | LibrariesAndFrameworks;

export const SkillsBar = () => {
  const getItemName = (item: SkillItem): string => {
    if (`language` in item) return item.language;
    if ("tool" in item) return item.tool;
    if ("name" in item) return item.name;
    return "";
  };

  return (
    <motion.aside
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
    >
      <Card className="bg-background/50">
        <CardHeader>
          <CardTitle className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
            {"Skills"}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          {Object.entries(resume.skills).map(([categoryKey, items]) => (
            <div key={categoryKey}>
              <p className="text-xs font-medium italic uppercase tracking-widest text-muted-foreground mb-2.5">
                {categoryKey === "librariesAndFrameworks"
                  ? "Libraries & Frameworks"
                  : categoryKey}
              </p>

              <div className="flex flex-wrap gap-2">
                {items.map((item: SkillItem, idx: number) => {
                  const name = getItemName(item);
                  return (
                    <a
                      key={`${name}-${idx}`}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs px-2.5 py-1 rounded-md bg-sidebar-ring/30 hover:bg-sidebar-ring/50 text-muted-foreground border border-border transition-colors duration-200"
                    >
                      {name}
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </motion.aside>
  );
};
