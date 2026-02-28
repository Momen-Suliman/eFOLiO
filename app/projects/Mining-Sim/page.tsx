"use client";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pointer-events-none"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeIn" }}
      >
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Crypto Miner
          </h1>
          <p className="text-sm text-muted-foreground">
            A simple BTC mining simulator
          </p>
        </div>
      </motion.div>
    </div>
  );
}
