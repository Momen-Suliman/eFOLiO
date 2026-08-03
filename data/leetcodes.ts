//populate your LeetCodes & their solutions below. LeetCode doesn't have an API to fetch your problems' data, below is a manual input JSON list to provide that data.
export interface Leetcode {
  id: number;
  title: string;
  difficulty: "Simple" | "Complex";
  category:
    | "Arrays"
    | "Linked Lists"
    | "Stacks"
    | "Queues"
    | "Hash Tables"
    | "Trees"
    | "Graphs";
  status: "Attempted" | "Solved";
  description: string;
  solution: string;
  leetcodeUrl: string;
  code: string;
}

export const leetcodes: Leetcode[] = [
  {
    id: 1,
    title: "Example: Two Sum",
    difficulty: "Simple",
    category: "Arrays",
    status: "Solved",
    description:
      "A starter example of a classic array problem. Replace this with your own solved problems and explanations.",
    solution:
      "Use a hash map to remember values you have already seen and quickly find the matching complement.",
    leetcodeUrl: "https://leetcode.com/problems/two-sum/",
    code: `class Solution:
    def twoSum(self, nums, target):
        seen = {}
        for i, value in enumerate(nums):
            complement = target - value
            if complement in seen:
                return [seen[complement], i]
            seen[value] = i
        return []`,
  },
  {
    id: 2,
    title: "Example: Valid Parentheses",
    difficulty: "Simple",
    category: "Stacks",
    status: "Solved",
    description:
      "A compact sample that demonstrates how to show problem-solving progress and a clean solution in your portfolio.",
    solution:
      "Push opening characters onto a stack and pop them when the matching closing symbol appears.",
    leetcodeUrl: "https://leetcode.com/problems/valid-parentheses/",
    code: `class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        pairs = {')': '(', '}': '{', ']': '['}
        for char in s:
            if char in pairs.values():
                stack.append(char)
            elif not stack or stack.pop() != pairs[char]:
                return False
        return not stack`,
  },
  {
    id: 3,
    title: "Example: Binary Tree Traversal",
    difficulty: "Complex",
    category: "Trees",
    status: "Attempted",
    description:
      "This example helps you show ongoing learning, progress notes, and the way you explain your thought process.",
    solution:
      "Use depth-first traversal to visit each node and keep track of the path as you move through the tree.",
    leetcodeUrl: "https://leetcode.com/problems/binary-tree-inorder-traversal/",
    code: `class Solution:
    def inorderTraversal(self, root):
        result = []
        def visit(node):
            if node:
                visit(node.left)
                result.append(node.val)
                visit(node.right)
        visit(root)
        return result`,
  },
  {
    id: 4,
    title: "Example: Number of Islands",
    difficulty: "Complex",
    category: "Graphs",
    status: "Solved",
    description:
      "Use this sample to demonstrate graph traversal, problem decomposition, and a clear explanation of your approach.",
    solution:
      "Traverse each island using DFS or BFS and mark visited cells so each connected component is counted once.",
    leetcodeUrl: "https://leetcode.com/problems/number-of-islands/",
    code: `from collections import deque

class Solution:
    def numIslands(self, grid):
        if not grid:
            return 0
        rows, cols = len(grid), len(grid[0])
        visited = set()
        count = 0

        for r in range(rows):
            for c in range(cols):
                if grid[r][c] == '1' and (r, c) not in visited:
                    count += 1
                    queue = deque([(r, c)])
                    visited.add((r, c))
                    while queue:
                        x, y = queue.popleft()
                        for nx, ny in [(x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)]:
                            if 0 <= nx < rows and 0 <= ny < cols and grid[nx][ny] == '1' and (nx, ny) not in visited:
                                visited.add((nx, ny))
                                queue.append((nx, ny))
        return count`,
  },
];
