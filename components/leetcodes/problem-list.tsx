import { leetcodes } from "@/data/leetcodes";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface ProblemListProps {
  selectedId: number | null;
  onSelect: (id: number) => void;
}

export const ProblemList = ({ selectedId, onSelect }: ProblemListProps) => {
  return (
    <motion.div
      className="lg:col-span-1 space-y-3 flex flex-col"
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.1,
      }}
    >
      <Card className="min-h-181 max-h-181 bg-background/30">
        <CardHeader>
          <CardTitle className="text-xl">Problems' List</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 grow min-h-0 overflow-y-auto">
          {leetcodes.map((problem) => (
            <button
              key={problem.id}
              onClick={() => onSelect(problem.id)}
              className={`rounded-lg border overflow-hidden hover:border-primary/50 transition-all cursor-pointer w-full ${
                selectedId === problem.id ? "border-primary" : "border-border"
              }`}
            >
              <div className="bg-background/50 p-4 flex-2 flex items-center min-h-15">
                <h2 className="text-lg font-medium text-foreground">
                  {problem.title}
                </h2>
              </div>

              <div className="h-px w-full bg-border"></div>

              <div className="bg-background p-4 flex-1 grid grid-cols-3 gap-3 text-sm">
                <div className="rounded-lg border border-border bg-muted/30 flex flex-col items-center justify-center gap-0.5 p-2 sm:flex-row sm:gap-1">
                  <span className="text-muted-foreground text-xs">
                    Difficulty
                  </span>
                  <span
                    className={`text-xs sm:text-sm text-center ${
                      problem.difficulty === "Simple"
                        ? "text-[#3599fc] font-medium"
                        : "text-[#f25500] font-medium"
                    }`}
                  >
                    {problem.difficulty}
                  </span>
                </div>

                <div className="rounded-lg border border-border bg-muted/30 flex flex-col items-center justify-center gap-0.5 p-2 sm:flex-row sm:gap-1">
                  <span className="text-muted-foreground text-xs">
                    Category
                  </span>
                  <span className="text-xs sm:text-sm text-center text-foreground font-medium">
                    {problem.category}
                  </span>
                </div>

                <div className="rounded-lg border border-border bg-muted/30 flex flex-col items-center justify-center gap-0.5 p-2 sm:flex-row sm:gap-1">
                  <span className="text-muted-foreground text-xs">Status</span>
                  <span
                    className={`text-xs sm:text-sm text-center font-medium ${
                      problem.status === "Solved"
                        ? "text-green-600 dark:text-green-400"
                        : "text-yellow-600 dark:text-yellow-400"
                    }`}
                  >
                    {problem.status}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </CardContent>
        <CardFooter className="text-center text-sm text-muted-foreground pointer-events-none">
          Click on a problem to view details
        </CardFooter>
      </Card>
    </motion.div>
  );
};
