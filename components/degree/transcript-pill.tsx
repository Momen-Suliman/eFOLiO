"use client";
import { resume } from "@/data/resume";
import { motion } from "framer-motion";

export const TranscriptPill = () => {
  const transcript: string = `${resume.information[0].transcript}`;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeIn", delay: 0.75 }}
      className="flex items-center justify-center pt-5 pb-0"
    >
      <a
        href={transcript}
        target="_blank"
        rel="noopener noreferrer"
        className="group block text-center max-w-md p-3 rounded-[2rem] border border-ring hover:border-foreground transition-all duration-200 bg-card hover:shadow-md"
      >
        <h3 className="text-2xl font-normal text-sidebar-foreground mb-2 group-hover:text-primary transition-colors">
          Academic History
        </h3>
        <p className="text-xs text-muted-foreground">
          For all additional Courses, view the Transcript.
        </p>
      </a>
    </motion.div>
  );
};
