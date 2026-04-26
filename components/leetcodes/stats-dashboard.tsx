import { motion } from "framer-motion";
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
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { leetcodes } from "@/data/leetcodes";

export const StatsDashboard = () => {
  const totalProblems = leetcodes.length;
  const solvedCount = leetcodes.filter((lc) => lc.status === "Solved").length;

  const difficultyData = [
    {
      name: "Simple",
      value: leetcodes.filter((lc) => lc.difficulty === "Simple").length,
      color: "#3599fc",
    },
    {
      name: "Complex",
      value: leetcodes.filter((lc) => lc.difficulty === "Complex").length,
      color: "#f25500",
    },
  ];

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

  return (
    <>
      <motion.div
        className="lg:col-span-1 space-y-3 flex flex-col"
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.3,
        }}
      >
        <Card className="min-h-87.5 max-h-87.5 bg-background/30 pointer-events-none">
          <CardHeader>
            <CardTitle>Difficulty Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="flex-2 rounded-lg border border-border bg-background/30">
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart tabIndex={-1}>
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

              <div className="flex-1 flex flex-col gap-4">
                <div className="flex-1 flex flex-col rounded-lg border border-border bg-background/30 py-5 justify-center items-center space-y-7">
                  {difficultyData.map((item) => (
                    <div key={item.name} className="flex items-center gap-2">
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

                <div className="flex-1 flex flex-col rounded-lg border border-border bg-background/30 py-5 justify-center items-center space-y-7">
                  <p className="text-2xl font-semibold text-foreground">
                    {solvedCount} / {totalProblems}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Problems Solved
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        className="lg:col-span-1 space-y-3 flex flex-col"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.5,
        }}
      >
        <Card className="min-h-87.5 max-h-87.5 bg-background/30 pointer-events-none">
          <CardHeader>
            <CardTitle>Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart tabIndex={-1} data={categoryData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
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
      </motion.div>
    </>
  );
};
