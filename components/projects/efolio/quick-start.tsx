"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  Copy,
  Check,
  ExternalLink,
  Play,
  Sparkles,
} from "lucide-react";

export function QuickStart() {
  const [selectedOS, setSelectedOS] = useState<"mac" | "windows">("mac");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const commands = [
    {
      step: "01",
      title: "Clone & Initialize",
      desc: "Download the shell and reset the git history for your own project.",
      cmd: {
        macLinux:
          "git clone https://github.com/Momen-Suliman/eFOLiO.git && cd eFOLiO && rm -rf .git && git init",
        windowsPS:
          "git clone https://github.com/Momen-Suliman/eFOLiO.git; cd eFOLiO; Remove-Item -Recurse -Force .git; git init",
      },
    },
    {
      step: "02",
      title: "Install Dependencies",
      desc: "Install the required Next.js, Tailwind, and Framer Motion packages.",
      cmd: "npm install",
    },
    {
      step: "03",
      title: "Launch Dev Server",
      desc: "Start the local server and verify your live portfolio.",
      cmd: "npm run dev",
    },
  ];

  const handleCopy = (cmd: string, index: number) => {
    navigator.clipboard.writeText(cmd);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-24"
    >
      <div className="max-w-5xl mx-auto rounded-3xl border border-border bg-linear-to-b from-card to-background p-6 md:p-12 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-blob/10 blur-[90px] pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 relative z-10">
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-amber-400 mb-2">
              <Sparkles className="w-3.5 h-3.5" /> Quick Start
            </span>
            <h3 className="text-2xl md:text-4xl font-bold text-foreground tracking-tight">
              From terminal to{" "}
              <span className="text-primary/70 font-mono">localhost:3000</span>
            </h3>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            Get your local command center running in under two minutes with
            three simple commands.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10 items-start">
          <div className="lg:col-span-5 space-y-6 pt-2">
            {commands.map((item) => (
              <div key={item.step} className="flex gap-4 group">
                <div className="shrink-0 w-8 h-8 rounded-lg bg-logo/10 border border-logo/20 flex items-center justify-center font-mono text-xs font-bold text-logo group-hover:scale-105 transition-transform">
                  {item.step}
                </div>
                <div>
                  <h4 className="text-base font-semibold text-foreground mb-1 flex items-center gap-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-7 rounded-2xl border border-border mb-5 bg-muted/40 shadow-2xl overflow-hidden font-mono text-xs">
            <div className="bg-muted px-4 py-3 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="ml-4 flex bg-background/50 rounded-md border border-border p-0.5">
                  <button
                    onClick={() => setSelectedOS("mac")}
                    className={`px-3 py-1 text-[10px] font-semibold tracking-wide rounded-md transition-colors ${
                      selectedOS === "mac"
                        ? "bg-logo/10 text-logo border border-logo/20"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    macOS / Linux
                  </button>
                  <button
                    onClick={() => setSelectedOS("windows")}
                    className={`px-3 py-1 text-[10px] font-semibold tracking-wide rounded-md transition-colors ${
                      selectedOS === "windows"
                        ? "bg-logo/10 text-logo border border-logo/20"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Windows
                  </button>
                </div>
              </div>
              <span className="hidden sm:flex items-center gap-1.5 text-[10px] text-muted-foreground uppercase tracking-wider font-sans">
                <Terminal className="w-3 h-3 text-logo" />
                {selectedOS === "windows" ? "PowerShell" : "Bash"}
              </span>
            </div>

            <div className="p-5 space-y-4 divide-y divide-border">
              {commands.map((item, index) => {
                const activeCmd =
                  typeof item.cmd === "string"
                    ? item.cmd
                    : selectedOS === "windows"
                      ? item.cmd.windowsPS
                      : item.cmd.macLinux;

                return (
                  <div
                    key={item.step}
                    className={`${index > 0 ? "pt-4" : ""} group flex items-center justify-between gap-4`}
                  >
                    <div className="overflow-x-auto pb-1 flex items-center gap-2.5 text-muted-foreground w-full">
                      <span className="text-logo select-none font-bold">$</span>
                      <span className="whitespace-pre text-foreground/90 group-hover:text-foreground transition-colors">
                        {activeCmd}
                      </span>
                    </div>
                    <button
                      onClick={() => handleCopy(activeCmd, index)}
                      className="shrink-0 p-2 rounded-lg bg-background border border-border hover:border-muted-foreground/30 text-muted-foreground hover:text-foreground transition-all active:scale-95 shadow-sm"
                      title="Copy command"
                    >
                      {copiedIndex === index ? (
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="bg-muted/60 px-5 py-2.5 border-t border-border flex items-center justify-between text-[11px] text-muted-foreground">
              <span>
                Ready for data population in{" "}
                <code className="text-logo font-bold">/data/*.ts</code>
              </span>
              <span className="flex items-center gap-1 text-emerald-500 font-semibold">
                <Play className="w-3 h-3 fill-emerald-500 text-emerald-500" />{" "}
                Ready
              </span>
            </div>
          </div>
        </div>
        <div className="pt-4 border-t border-border">
          <a href="http://localhost:3000" target="_blank">
            <div className="rounded-xl bg-primary/15 border border-amber-500/20 p-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />

                <span className="text-xs font-mono text-muted-foreground">
                  Live at{" "}
                  <span className="text-foreground font-semibold">
                    http://localhost:3000
                  </span>
                </span>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground" />
            </div>
          </a>
        </div>
      </div>
    </motion.section>
  );
}
