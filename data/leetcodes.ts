import { X } from "lucide-react";

export interface Leetcode {
  id: string;
  title: string;
  difficulty: "Simple" | "Complex";
  category: "Arrays" | "Linked Lists" | "Stacks" | "Queues" | "Hash Tables" | "Trees" | "Graphs";
  status: "Solved" | "Attempted" | "Reviewed";
  description: string;
  solution: string;
  leetcodeUrl: string;
  code: string;
}

export const leetcodes: Leetcode[] = [
    {
        id: "1",
        title: "H-Index",
        difficulty: "Complex",
        category: "Arrays",
        status: "Solved",
        description: "Given an array of integers representing the number of citations for each paper, compute the researcher's h-index. The h-index is defined as the maximum value 'h' such that the researcher has published 'h' papers that have each been cited at least 'h' times.",
        solution: "First, start by sorting the citations in descending order. Then, iterate through the sorted list and count how many papers have at least 'h' citations, where 'h' is the current index + 1. The maximum 'h' that satisfies this condition will be the h-index.",
        leetcodeUrl: "https://leetcode.com/problems/h-index/",
        code: `
class Solution:
    def hIndex(self, citations: List[int]) -> int:
        sortedCitations = sorted(citations, reverse=True)
        hIndex = 0
        for i in range(len(sortedCitations)):
            if i + 1 <= sortedCitations[i]:
                hIndex += 1
        return hIndex`,
    },
    {
        id: "2",
        title: "H-Index",
        difficulty: "Simple",
        category: "Linked Lists",
        status: "Solved",
        description: "Given an array of integers representing the number of citations for each paper, compute the researcher's h-index. The h-index is defined as the maximum value 'h' such that the researcher has published 'h' papers that have each been cited at least 'h' times.",
        solution: "",
        leetcodeUrl: "https://leetcode.com/problems/h-index/",
        code: `
class Solution:
    def hIndex(self, citations: List[int]) -> int:
        sortedCitations = sorted(citations, reverse=True)
        hIndex = 0
        for i in range(len(sortedCitations)):
            if i + 1 <= sortedCitations[i]:
                hIndex += 1
        return hIndex`,
    },
    {
        id: "3",
        title: "H-Index",
        difficulty: "Complex",
        category: "Stacks",
        status: "Reviewed",
        description: "Given an array of integers representing the number of citations for each paper, compute the researcher's h-index. The h-index is defined as the maximum value 'h' such that the researcher has published 'h' papers that have each been cited at least 'h' times.",
        solution: "",
        leetcodeUrl: "https://leetcode.com/problems/h-index/",
        code: `
class Solution:
    def hIndex(self, citations: List[int]) -> int:
        sortedCitations = sorted(citations, reverse=True)
        hIndex = 0
        for i in range(len(sortedCitations)):
            if i + 1 <= sortedCitations[i]:
                hIndex += 1
        return hIndex`,
    },
    {
        id: "4",
        title: "H-Index",
        difficulty: "Complex",
        category: "Queues",
        status: "Solved",
        description: "Given an array of integers representing the number of citations for each paper, compute the researcher's h-index. The h-index is defined as the maximum value 'h' such that the researcher has published 'h' papers that have each been cited at least 'h' times.",
        solution: "",
        leetcodeUrl: "https://leetcode.com/problems/h-index/",
        code: `
class Solution:
    def hIndex(self, citations: List[int]) -> int:
        sortedCitations = sorted(citations, reverse=True)
        hIndex = 0
        for i in range(len(sortedCitations)):
            if i + 1 <= sortedCitations[i]:
                hIndex += 1
        return hIndex`,
    },
    {
        id: "5",
        title: "H-Index",
        difficulty: "Simple",
        category: "Hash Tables",
        status: "Attempted",
        description: "Given an array of integers representing the number of citations for each paper, compute the researcher's h-index. The h-index is defined as the maximum value 'h' such that the researcher has published 'h' papers that have each been cited at least 'h' times.",
        solution: "",
        leetcodeUrl: "https://leetcode.com/problems/h-index/",
        code: `
class Solution:
    def hIndex(self, citations: List[int]) -> int:
        sortedCitations = sorted(citations, reverse=True)
        hIndex = 0
        for i in range(len(sortedCitations)):
            if i + 1 <= sortedCitations[i]:
                hIndex += 1
        return hIndex`,
    },
    {
        id: "6",
        title: "H-Index",
        difficulty: "Simple",
        category: "Trees",
        status: "Solved",
        description: "Given an array of integers representing the number of citations for each paper, compute the researcher's h-index. The h-index is defined as the maximum value 'h' such that the researcher has published 'h' papers that have each been cited at least 'h' times.",
        solution: "",
        leetcodeUrl: "https://leetcode.com/problems/h-index/",
        code: `
class Solution:
    def hIndex(self, citations: List[int]) -> int:
        sortedCitations = sorted(citations, reverse=True)
        hIndex = 0
        for i in range(len(sortedCitations)):
            if i + 1 <= sortedCitations[i]:
                hIndex += 1
        return hIndex`,
    },
    {
        id: "7",
        title: "H-Index",
        difficulty: "Complex",
        category: "Graphs",
        status: "Attempted",
        description: "Given an array of integers representing the number of citations for each paper, compute the researcher's h-index. The h-index is defined as the maximum value 'h' such that the researcher has published 'h' papers that have each been cited at least 'h' times.",
        solution: "",
        leetcodeUrl: "https://leetcode.com/problems/h-index/",
        code: `
class Solution:
    def hIndex(self, citations: List[int]) -> int:
        sortedCitations = sorted(citations, reverse=True)
        hIndex = 0
        for i in range(len(sortedCitations)):
            if i + 1 <= sortedCitations[i]:
                hIndex += 1
        return hIndex`,
    },
    {
        id: "8",
        title: "H-Index",
        difficulty: "Simple",
        category: "Linked Lists",
        status: "Solved",
        description: "Given an array of integers representing the number of citations for each paper, compute the researcher's h-index. The h-index is defined as the maximum value 'h' such that the researcher has published 'h' papers that have each been cited at least 'h' times.",
        solution: "",
        leetcodeUrl: "https://leetcode.com/problems/h-index/",
        code: `
class Solution:
    def hIndex(self, citations: List[int]) -> int:
        sortedCitations = sorted(citations, reverse=True)
        hIndex = 0
        for i in range(len(sortedCitations)):
            if i + 1 <= sortedCitations[i]:
                hIndex += 1
        return hIndex`,
    },
    {
        id: "9",
        title: "H-Index",
        difficulty: "Complex",
        category: "Hash Tables",
        status: "Reviewed",
        description: "Given an array of integers representing the number of citations for each paper, compute the researcher's h-index. The h-index is defined as the maximum value 'h' such that the researcher has published 'h' papers that have each been cited at least 'h' times.",
        solution: "",
        leetcodeUrl: "https://leetcode.com/problems/h-index/",
        code: `
class Solution:
    def hIndex(self, citations: List[int]) -> int:
        sortedCitations = sorted(citations, reverse=True)
        hIndex = 0
        for i in range(len(sortedCitations)):
            if i + 1 <= sortedCitations[i]:
                hIndex += 1
        return hIndex`,
    },
    {
        id: "10",
        title: "H-Index",
        difficulty: "Complex",
        category: "Trees",
        status: "Solved",
        description: "Given an array of integers representing the number of citations for each paper, compute the researcher's h-index. The h-index is defined as the maximum value 'h' such that the researcher has published 'h' papers that have each been cited at least 'h' times.",
        solution: "",
        leetcodeUrl: "https://leetcode.com/problems/h-index/",
        code: `
class Solution:
    def hIndex(self, citations: List[int]) -> int:
        sortedCitations = sorted(citations, reverse=True)
        hIndex = 0
        for i in range(len(sortedCitations)):
            if i + 1 <= sortedCitations[i]:
                hIndex += 1
        return hIndex`,
    },
    {
        id: "11",
        title: "H-Index",
        difficulty: "Simple",
        category: "Arrays",
        status: "Solved",
        description: "Given an array of integers representing the number of citations for each paper, compute the researcher's h-index. The h-index is defined as the maximum value 'h' such that the researcher has published 'h' papers that have each been cited at least 'h' times.",
        solution: "",
        leetcodeUrl: "https://leetcode.com/problems/h-index/",
        code: `
class Solution:
    def hIndex(self, citations: List[int]) -> int:
        sortedCitations = sorted(citations, reverse=True)
        hIndex = 0
        for i in range(len(sortedCitations)):
            if i + 1 <= sortedCitations[i]:
                hIndex += 1
        return hIndex`,
    },
    {
        id: "12",
        title: "H-Index",
        difficulty: "Complex",
        category: "Arrays",
        status: "Solved",
        description: "Given an array of integers representing the number of citations for each paper, compute the researcher's h-index. The h-index is defined as the maximum value 'h' such that the researcher has published 'h' papers that have each been cited at least 'h' times.",
        solution: "",
        leetcodeUrl: "https://leetcode.com/problems/h-index/",
        code: `
class Solution:
    def hIndex(self, citations: List[int]) -> int:
        sortedCitations = sorted(citations, reverse=True)
        hIndex = 0
        for i in range(len(sortedCitations)):
            if i + 1 <= sortedCitations[i]:
                hIndex += 1
        return hIndex`,
    },
];
