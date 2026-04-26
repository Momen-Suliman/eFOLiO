"use client";
import { motion } from "framer-motion";
import { resume } from "@/data/resume";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

export const SkillsBar = () => {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
    >
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
  );
};
