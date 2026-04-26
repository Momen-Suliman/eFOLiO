"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ProblemList } from "@/components/leetcodes/problem-list";
import { ProblemDetail } from "@/components/leetcodes/problem-detail";
import { StatsDashboard } from "@/components/leetcodes/stats-dashboard";

export function LeetcodesContent() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-[50%_50%] gap-6">
        <ProblemList
          selectedId={selectedId}
          onSelect={(id) => setSelectedId(id)}
        />

        <AnimatePresence mode="wait">
          <div className="space-y-6">
            {selectedId ? (
              <>
                <ProblemDetail
                  problemId={selectedId}
                  onBack={() => setSelectedId(null)}
                />
              </>
            ) : (
              <>
                <StatsDashboard />
              </>
            )}
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
}
