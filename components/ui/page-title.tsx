"use client";
import { motion } from "framer-motion";

interface PageTitleProps {
  title: string;
  desc: string;
}

const PageTitle = ({ title, desc }: PageTitleProps) => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pointer-events-none"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
    >
      <div className="mb-8">
        <h1 className="text-4xl tracking-wide font-semibold text-foreground mb-2">
          {title}
        </h1>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </div>
    </motion.div>
  );
};

export { PageTitle };
