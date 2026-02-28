"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { leetcodes } from "@/data/leetcodes";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { Copy, ExternalLink } from "lucide-react";

export default function LeetcodesPage() {
  const [selectedProblem, setSelectedProblem] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Calculate stats
  const totalProblems = leetcodes.length;
  const solvedCount = leetcodes.filter(
    (lc) => lc.status === "Solved" || lc.status === "Reviewed",
  ).length;

  // Difficulty distribution
  const difficultyData = [
    {
      name: "Simple",
      value: leetcodes.filter((lc) => lc.difficulty === "Simple").length,
      color: "#22c55e",
    },
    {
      name: "Complex",
      value: leetcodes.filter((lc) => lc.difficulty === "Complex").length,
      color: "#f25500",
    },
  ];

  // Category distribution
  const categoryData = [
    {
      name: "Arrays",
      count: leetcodes.filter((lc) => lc.category === "Arrays").length,
    },
    {
      name: "Linked Lists",
      count: leetcodes.filter((lc) => lc.category === "Linked Lists").length,
    },
    {
      name: "Stacks",
      count: leetcodes.filter((lc) => lc.category === "Stacks").length,
    },
    {
      name: "Queue",
      count: leetcodes.filter((lc) => lc.category === "Queues").length,
    },
    {
      name: "Hash Tables",
      count: leetcodes.filter((lc) => lc.category === "Hash Tables").length,
    },
    {
      name: "Trees",
      count: leetcodes.filter((lc) => lc.category === "Trees").length,
    },
    {
      name: "Graphs",
      count: leetcodes.filter((lc) => lc.category === "Graphs").length,
    },
  ].filter((cat) => cat.count > 0);

  const selectedProblemData = leetcodes.find((p) => p.id === selectedProblem);

  const copyCode = () => {
    if (selectedProblemData?.code) {
      navigator.clipboard.writeText(selectedProblemData.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const openLeetCode = () => {
    if (selectedProblemData?.leetcodeUrl) {
      window.open(selectedProblemData.leetcodeUrl, "_blank");
    }
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pointer-events-none"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeIn" }}
      >
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2 group-hover:text-logo transition-colors">
            LeetCode Problems
          </h1>
          <p className="text-sm text-muted-foreground">
            My collection of solved algorithmic problems
          </p>
        </div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-[50%_50%] gap-6"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Left Column - Problems List */}
        <div className="lg:col-span-1 space-y-3 flex flex-col">
          <Card className="min-h-181 max-h-181 bg-background/50">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl pointer-events-none">
                  Problems' List ({solvedCount}/{totalProblems})
                </CardTitle>
                {selectedProblem && (
                  <button
                    onClick={() => setSelectedProblem(null)}
                    className="text-sm text-primary hover:text-primary/80 transition-colors cursor-pointer"
                  >
                    ← Back to Overview
                  </button>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-3 grow min-h-0 overflow-y-auto">
              {leetcodes.map((problem) => (
                <div
                  key={problem.id}
                  onClick={() => setSelectedProblem(problem.id)}
                  className={`rounded-lg border overflow-hidden hover:border-primary/50 transition-all cursor-pointer ${
                    selectedProblem === problem.id
                      ? "border-primary"
                      : "border-border"
                  }`}
                >
                  <div className="bg-background/50 p-4 flex-2 flex items-center min-h-15">
                    <h3 className="text-lg font-medium text-foreground">
                      {problem.title}
                    </h3>
                  </div>

                  <div className="h-px w-full bg-border"></div>

                  <div className="bg-background p-4 flex-1 grid grid-cols-3 gap-3 text-sm">
                    <div className="rounded-lg border border-border bg-muted/30 flex flex-row items-center justify-center gap-1 p-2">
                      <span className="text-muted-foreground text-xs">
                        Difficulty
                      </span>
                      <span
                        className={
                          problem.difficulty === "Simple"
                            ? "text-green-600 dark:text-green-400 font-medium"
                            : "text-[#f25500] dark:text-[#f25500] font-medium"
                        }
                      >
                        {problem.difficulty}
                      </span>
                    </div>
                    <div className="rounded-lg border border-border bg-muted/30 flex flex-row items-center justify-center gap-1 p-2">
                      <span className="text-muted-foreground text-xs">
                        Category
                      </span>
                      <span className="text-foreground font-medium">
                        {problem.category}
                      </span>
                    </div>
                    <div className="rounded-lg border border-border bg-muted/30 flex flex-row items-center justify-center gap-1 p-2">
                      <span className="text-muted-foreground text-xs">
                        Status
                      </span>
                      <span
                        className={
                          problem.status === "Solved"
                            ? "text-blue-600 dark:text-blue-400 font-medium"
                            : problem.status === "Attempted"
                              ? "text-yellow-600 dark:text-yellow-400 font-medium"
                              : "text-purple-600 dark:text-purple-400 font-medium"
                        }
                      >
                        {problem.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
            <CardFooter className="text-center text-sm text-muted-foreground pointer-events-none">
              Click on a problem to view details
            </CardFooter>
          </Card>
        </div>

        {/* Right Column - Conditional Content */}
        <div className="space-y-6">
          {selectedProblem ? (
            // Detail View - Show selected problem details
            <>
              {/* Problem Description */}
              <Card className="min-h-56.25 max-h-56.25 bg-background/50 pointer-events-none">
                <CardHeader>
                  <CardTitle>Problem Description</CardTitle>
                </CardHeader>
                <CardContent className="overflow-y-auto max-h-37.5">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {selectedProblemData?.description}
                  </p>
                </CardContent>
              </Card>

              {/* My Solution (Approach) */}
              <Card className="min-h-56.25 max-h-56.25 bg-background/50 pointer-events-none">
                <CardHeader>
                  <CardTitle>My Solution</CardTitle>
                </CardHeader>
                <CardContent className="overflow-y-auto max-h-37.5">
                  <p className="text-sm text-foreground leading-relaxed">
                    {selectedProblemData?.solution}
                  </p>
                </CardContent>
              </Card>

              {/* Code Implementation */}
              <Card className="min-h-56.25 max-h-56.25 bg-background/50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="pointer-events-none">
                      Implementation
                    </CardTitle>
                    <div className="flex gap-2">
                      <button className="flex items-center gap-2 px-3 py-1.5 text-xs rounded-md border border-border bg-background text-foreground transition-colors pointer-events-none">
                        Python3
                      </button>
                      <button
                        onClick={copyCode}
                        className="flex items-center gap-2 px-3 py-1.5 text-xs rounded-md border border-border bg-accent hover:bg-sidebar-ring transition-colors cursor-pointer"
                      >
                        {copied ? (
                          <>✓ Copied</>
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
                <CardContent className="overflow-y-auto max-h-37.5">
                  <pre className="p-4 rounded-lg bg-muted/50 overflow-x-auto text-xs">
                    <code className="text-sm font-mono">
                      {selectedProblemData?.code}
                    </code>
                  </pre>
                </CardContent>
              </Card>
            </>
          ) : (
            // Overview - Show stats
            <>
              {/* Difficulty Distribution */}
              <Card className="min-h-87.5 max-h-87.5 bg-background/50 pointer-events-none">
                <CardHeader>
                  <CardTitle>Difficulty Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    {/* Left 66% - Pie Chart */}
                    <div className="flex-2 rounded-lg border border-border bg-background/50">
                      <ResponsiveContainer width="100%" height={250}>
                        <PieChart>
                          <Pie
                            data={difficultyData}
                            cx="50%"
                            cy="50%"
                            labelLine={true}
                            label={(props: any) => {
                              const { percent } = props;
                              return `${(percent * 100).toFixed(0)}%`;
                            }}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {difficultyData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                        </PieChart>
                      </ResponsiveContainer>
                    </div>

                    {/* Right 33% - Legend and Total */}
                    <div className="flex-1 flex flex-col gap-4">
                      {/* Legend */}
                      <div className="flex-1 flex flex-col rounded-lg border border-border bg-background/50 py-5 justify-center items-center space-y-7">
                        {difficultyData.map((item) => (
                          <div
                            key={item.name}
                            className="flex items-center gap-2"
                          >
                            <div
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: item.color }}
                            />
                            <span className="text-md text-foreground font-medium">
                              {item.name}
                            </span>
                            <span className="text-sm text-muted-foreground">
                              ({item.value})
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Total Problems */}
                      <div className="flex-1 flex flex-col rounded-lg border border-border bg-background/50 py-5 justify-center items-center space-y-7">
                        <p className="text-2xl font-bold text-foreground">
                          {totalProblems}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Total Problems
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Category Distribution */}
              <Card className="min-h-87.5 max-h-87.5 bg-background/50 pointer-events-none">
                <CardHeader>
                  <CardTitle>Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={categoryData}>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="var(--border)"
                      />
                      <XAxis
                        dataKey="name"
                        angle={-45}
                        textAnchor="end"
                        height={100}
                        tick={{ fill: "var(--primary)", fontSize: 14 }}
                      />
                      <YAxis tick={{ fill: "var(--primary)" }} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "var(--card)",
                          border: "1px solid var(--border)",
                          borderRadius: "8px",
                        }}
                      />
                      <Bar
                        dataKey="count"
                        fill="var(--input)"
                        radius={[8, 8, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
}
