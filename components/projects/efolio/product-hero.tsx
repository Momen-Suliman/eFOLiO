"use client";
import { Logo, brandProduct } from "@/components/icons/Logo";
import { TechStackBar } from "@/components/projects/efolio/techstack-bar";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Github } from "lucide-react";
import pkg from "@/package.json" with { type: "json" };

const version = pkg.version;

export const ProductHero = () => {
  return (
    <>
      <section className="pt-20 pb-16 flex flex-col items-center text-center cursor-default">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20 pointer-events-none">
            <Zap className="h-4 w-4" />
            <span className="inline-flex items-baseline">
              <small className="text-[10px] font-semibold tracking-wide mr-px self-center">
                v
              </small>
              {version}
            </span>
            | Open Source Shell
          </span>
        </motion.div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-3xl">
          <motion.div
            className="relative inline-block w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.25, ease: "easeOut" }}
            style={{ willChange: "transform, opacity" }}
          >
            <div className="relative z-10 whitespace-nowrap text-center">
              <Logo className="text-7xl sm:text-9xl md:text-9xl lg:text-9xl pt-5 pb-20 bg-linear-to-r from-foreground to-primary bg-clip-text text-transparent" />
            </div>

            <div className="absolute inset-0 -z-10 opacity-35 filter blur-md select-none pointer-events-none mix-blend-multiply dark:mix-blend-screen whitespace-nowrap text-center">
              <Logo className="text-7xl sm:text-9xl md:text-9xl lg:text-9xl pt-5 pb-20 bg-linear-to-r from-foreground to-primary bg-clip-text text-transparent" />
            </div>

            <div className="absolute inset-0 -z-5 opacity-75 filter blur-md select-none pointer-events-none mix-blend-multiply dark:mix-blend-screen whitespace-nowrap text-center">
              <Logo className="text-7xl sm:text-9xl md:text-9xl lg:text-9xl pt-5 pb-20 bg-linear-to-r from-foreground to-primary bg-clip-text text-transparent" />
            </div>
          </motion.div>
          <motion.span
            className="text-transparent bg-clip-text bg-linear-to-r from-foreground to-primary inline-block"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            The Electronic Portfolio for
          </motion.span>{" "}
          <br className="hidden md:block" />
          <motion.span
            className="text-transparent bg-clip-text bg-linear-to-r from-primary to-foreground inline-block"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            Serious Developers.
          </motion.span>
        </h1>

        <motion.p
          className="text-lg text-muted-foreground max-w-2xl mb-10 leading-relaxed"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.2 }}
        >
          A minimalist, data-driven Next.js shell. Populate your Development
          Journey into a single directory via simple TypeScript interfaces—no
          messy CSS required.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href="https://github.com/Momen-Suliman/eFOLiO/blob/main/GET_STARTED.md"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-linear-to-r from-accent to-sidebar-border border-2 border-ring text-secondary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2"
          >
            <Github className="h-5 w-5" /> Start your {brandProduct} Here!{" "}
            <ArrowRight className="h-4 w-4 ml-1" />
          </a>
        </motion.div>
      </section>
      <TechStackBar />
    </>
  );
};
