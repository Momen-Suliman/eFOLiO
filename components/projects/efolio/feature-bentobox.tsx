"use client";
import { motion } from "framer-motion";
import {
  Code2,
  Moon,
  TowerControl,
  Terminal,
  Zap,
  Network,
} from "lucide-react";

export const BentoFeatures = () => {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };
  return (
    <section className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight mb-1">
          {"Core Architecture"}
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          {"Everything you need to showcase your professional trajectory."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pointer-events-none">
        <motion.div
          {...fadeUp}
          className="col-span-1 p-8 rounded-2xl border-2 border-border bg-background/0 backdrop-blur-md hover:bg-card/80 transition-colors"
        >
          <div className="h-10 w-10 rounded-lg bg-red-500/10 flex items-center justify-center mb-5">
            <Terminal className="h-5 w-5 text-red-500" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{"Data-Driven State"}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {
              "Automatically render your populated resume, coursework, and projects strictly through the "
            }
            <code className="relative rounded bg-muted px-[0.2rem] font-mono text-sm font-semibold">
              {"/data"}
            </code>
            {
              " directory and watch the entire site reflect your initial web-app."
            }
          </p>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ delay: 0.1 }}
          className="col-span-1 md:col-span-2 p-8 rounded-2xl border-2 border-border bg-background/0 backdrop-blur-md hover:bg-card/80 transition-colors"
        >
          <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-5">
            <Code2 className="h-5 w-5 text-blue-500" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{"LeetCode Engine"}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {
              "A built-in dashboard that bypasses LeetCode's lack of API endpoints to provide your LeetCode achievements, featuring category charts and quick access to your LeetCode solution via a direct link to the LeetCode problem."
            }
          </p>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ delay: 0.2 }}
          className="col-span-1 md:col-span-2 p-8 rounded-2xl border-2 border-border bg-background/0 backdrop-blur-md hover:bg-card/80 transition-colors"
        >
          <div className="h-10 w-10 rounded-lg bg-yellow-600/10 flex items-center justify-center mb-5">
            <TowerControl className="h-5 w-5 text-yellow-500" />
          </div>
          <h3 className="text-xl font-semibold mb-2">
            {"Lighthouse Performance"}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {
              "Built with a modern, high-efficiency engine that minimizes main-thread blocking. eFOLiO ensures lightning-fast initial load speeds and layout stability straight out of the box."
            }
          </p>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ delay: 0.3 }}
          className="col-span-1 p-8 rounded-2xl border-2 border-border bg-background/0 backdrop-blur-md hover:bg-card/80 transition-colors"
        >
          <div className="h-10 w-10 rounded-lg bg-green-700/10 flex items-center justify-center mb-5">
            <Zap className="h-5 w-5 text-green-500" />
          </div>
          <h3 className="text-xl font-semibold mb-2">
            {"Motion Orchestration"}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {
              "Utilizes Framer Motion's animation library and its most capable feature "
            }
            <code className="relative rounded bg-muted px-[0.2rem] font-mono text-sm font-semibold">
              {"motion.<element>"}
            </code>
            {
              ", which handles the animation of already pre-built elements and components."
            }
          </p>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ delay: 0.3 }}
          className="col-span-1 md:col-span p-8 rounded-2xl border-2 border-border bg-background/0 backdrop-blur-md hover:bg-card/80 transition-colors"
        >
          <div className="h-10 w-10 rounded-lg bg-gray-500/10 flex items-center justify-center mb-5">
            <Moon className="h-5 w-5 text-black-300" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{"Dark Theme Toggle"}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {
              "Handles global page theme based on what the user toggles. The entire site's themes of both light & dark modes are within a single "
            }
            <code className="relative rounded bg-muted px-[0.2rem] font-mono text-sm font-semibold">
              {"globals.css"}
            </code>
            {
              ", allowing the color themes to be easily changed via the backend without unnecessary complexity."
            }
          </p>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ delay: 0.3 }}
          className="col-span-1 md:col-span-2 p-8 rounded-2xl border-2 border-border bg-background/0 backdrop-blur-md hover:bg-card/80 transition-colors"
        >
          <div className="h-10 w-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-5">
            <Network className="h-5 w-5 text-purple-300" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{"SPA Compatibility"}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {
              "Host complex, standalone single-page applications as dedicated internal sub-routes rather than just basic presentation cards. Built on a Data-to-UI architecture that decouples layout presentation from application logic."
            }
          </p>
        </motion.div>
      </div>
    </section>
  );
};
