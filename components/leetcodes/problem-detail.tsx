import { Check, Copy, ExternalLink } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { useState } from "react";
import { leetcodes } from "@/data/leetcodes";
import { motion } from "framer-motion";

interface ProblemDetailProps {
  problemId: number;
  onBack: () => void;
}

export const ProblemDetail = ({ problemId, onBack }: ProblemDetailProps) => {
  const [copied, setCopied] = useState(false);
  const selectedProblemData = leetcodes.find((p) => p.id === problemId);

  const copyCode = async () => {
    const codeToCopy = selectedProblemData?.code;
    if (!codeToCopy) return;

    try {
      await navigator.clipboard.writeText(codeToCopy);
      handleSuccess();
    } catch {
      fallbackCopy(codeToCopy);
    }
  };

  const fallbackCopy = (text: string) => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    try {
      document.execCommand("copy");
      handleSuccess();
    } catch (err) {
      console.error("Fallback copy failed", err);
    }
    document.body.removeChild(textarea);
  };

  const handleSuccess = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const openLeetCode = () => {
    if (selectedProblemData?.leetcodeUrl) {
      window.open(selectedProblemData.leetcodeUrl, "_blank");
    }
  };

  return (
    <>
      <motion.div
        className="lg:col-span-1 flex flex-col gap-3 h-full"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.1,
        }}
      >
        <Card className="flex-1 bg-background/30 overflow-hidden cursor-default">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-semibold">
              Problem Description
            </CardTitle>
            <button
              onClick={onBack}
              className="text-sm text-primary flex items-center gap-2 cursor-pointer"
            >
              ← Back to Dashboard
            </button>
          </CardHeader>
          <CardContent className="overflow-y-auto max-h-37.5">
            <p className="text-sm text-muted-foreground leading-relaxed">
              {selectedProblemData?.description}
            </p>
          </CardContent>
        </Card>

        <Card className="flex-1 bg-background/30 overflow-hidden cursor-default">
          <CardHeader className="pb-0">
            <CardTitle>My Solution</CardTitle>
          </CardHeader>
          <CardContent className="overflow-y-auto max-h-37.5">
            <p className="text-sm text-foreground leading-relaxed">
              {selectedProblemData?.solution}
            </p>
          </CardContent>
        </Card>

        <Card className="flex-1 bg-background/30 overflow-hidden">
          <CardHeader>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-1">
              <CardTitle className="pointer-events-none">
                Implementation
              </CardTitle>
              <div className="flex flex-wrap gap-2">
                <button
                  aria-hidden="true"
                  tabIndex={-1}
                  className="flex items-center gap-2 px-3 py-1.5 text-xs rounded-md border border-border bg-background text-foreground transition-colors pointer-events-none"
                >
                  Python3
                </button>
                <button
                  onClick={copyCode}
                  className="flex items-center gap-2 px-3 py-1.5 text-xs rounded-md border border-border bg-accent hover:bg-sidebar-ring transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-green-500" />
                      Code Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" />
                      Copy Code
                    </>
                  )}
                </button>
                <button
                  onClick={openLeetCode}
                  className="flex items-center gap-2 px-3 py-1.5 text-xs rounded-md border border-border bg-accent hover:bg-sidebar-ring transition-colors cursor-pointer"
                >
                  <ExternalLink className="h-3 w-3" />
                  Try on LeetCode
                </button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="overflow-y-auto max-h-64 sm:max-h-37.5">
            <pre className="p-4 rounded-lg bg-muted/50 overflow-x-auto text-xs">
              <code className="text-sm font-mono">
                {selectedProblemData?.code}
              </code>
            </pre>
          </CardContent>
        </Card>
      </motion.div>
    </>
  );
};
