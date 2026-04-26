"use client";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Badge } from "@/components/ui/badge";
import { resume } from "@/data/resume";

export const EducationSection = () => {
  const info = resume.information[0];

  return (
    <div className="md:col-span-2 flex flex-col gap-10">
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      >
        <Card className="bg-background/50 pointer-events-none">
          <CardHeader>
            <CardTitle className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Academic Experience
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {info.summary}
            </p>
          </CardContent>
        </Card>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      >
        <Card className="bg-background/50">
          <CardHeader>
            <CardTitle className="text-xs font-bold uppercase tracking-widest text-muted-foreground pointer-events-none">
              Education
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            {resume.education.map((edu, i) => (
              <div key={i} className="flex flex-col gap-3">
                <div className="flex justify-between items-start gap-4">
                  <p className="text-md font-medium text-foreground">
                    {edu.institution}
                  </p>
                  <Badge
                    variant="default"
                    className="whitespace-nowrap shrink-0 text-xs border-x-amber-400 bg-linear-to-r from-primary to-card/70 pointer-events-none"
                  >
                    {edu.graduation}
                  </Badge>
                </div>
                <div className="flex flex-wrap justify-end-safe gap-2">
                  <Badge variant="secondary" className="pointer-events-none">
                    {edu.fieldOfStudy}
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-muted-foreground/30 pointer-events-none"
                  >
                    {edu.degree}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </motion.section>
    </div>
  );
};
