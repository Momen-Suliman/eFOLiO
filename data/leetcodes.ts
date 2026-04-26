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

// Populate the data objects below.
export const leetcodes: Leetcode[] = [
  {
    id: 274,
    title: "H-Index",
    difficulty: "Complex",
    category: "Arrays",
    status: "Solved",
    description:
      "Given an array of citations, calculate the researcher's h-index. This is the maximum value 'h' such that the researcher has published at least 'h' papers that have each been cited at least 'h' times.",
    solution:
      "The solution sorts citations in descending order to easily compare the number of papers against their citation counts. It iterates through the sorted list, checking if the current paper count (index + 1) is less than or equal to the citations received for that paper. If it is, the h-index is incremented. The loop stops once a paper's citations can no longer support the h-count.",
    leetcodeUrl: "https://leetcode.com/problems/h-index/",
    code: `class Solution:
    def hIndex(self, citations: List[int]) -> int:
        sortedCitations = sorted(citations, reverse=True)
        hIndex = 0
        for i in range(len(sortedCitations)):
            if i + 1 <= sortedCitations[i]:
                hIndex += 1
        return hIndex`,
  },
  {
    id: 1338,
    title: "Reduce Array Size to The Half",
    difficulty: "Complex",
    category: "Arrays",
    status: "Solved",
    description:
      "Given an integer array, choose a set of integers to remove such that at least half of the array's elements are gone. Return the minimum possible size of this set.",
    solution:
      "This approach uses a greedy strategy with a hash map. It counts the frequency of each element and iterates through them in descending order (most common first). By removing the elements with the highest frequencies first, the algorithm minimizes the number of unique integers required to reduce the array size to at least half of its original length.",
    leetcodeUrl: "https://leetcode.com/problems/reduce-array-size-to-the-half/",
    code: `from collections import Counter

class Solution:
    def minSetSize(self, arr: List[int]) -> int:
        og_len = len(arr)
        curr_len = len(arr)
        counter = Counter(arr)
        output = 0

        for key, value in counter.most_common():
            if curr_len > (og_len // 2):
                curr_len = curr_len - value
                output = output + 1
            else:
                break

        return output`,
  },
  {
    id: 983,
    title: "Minimum Cost For Tickets",
    difficulty: "Complex",
    category: "Arrays",
    status: "Solved",
    description:
      "Find the minimum cost to travel on specific days given 1-day, 7-day, and 30-day passes. You must cover every day listed in the input array.",
    solution:
      "The approach uses bottom-up Dynamic Programming to track the minimum cost up to each day. For any day not in the travel schedule, the cost remains the same as the previous day. For travel days, the algorithm calculates the minimum of three potential costs: a 1-day pass from the previous day, a 7-day pass from a week ago, or a 30-day pass from a month ago, ensuring the cheapest option is always selected.",
    leetcodeUrl: "https://leetcode.com/problems/minimum-cost-for-tickets/",
    code: `class Solution:
    def mincostTickets(self, days: List[int], costs: List[int]) -> int:
        last_day = days[-1]
        days = set(days)
        dp = [0] * (last_day + 1)
        dp[0] = 0

        for i in range(last_day + 1):
            if i not in days:
                dp[i] = dp [i-1]
            if i in days:
                day_pass = dp[i - 1] + costs[0]
                week_pass = dp[max(0, i - 7)] + costs[1]
                month_pass = dp[max(0, i - 30)] + costs[2]
                dp[i] = min(day_pass, week_pass, month_pass)

        return dp[-1]`,
  },
  {
    id: 290,
    title: "Word Pattern",
    difficulty: "Simple",
    category: "Hash Tables",
    status: "Solved",
    description:
      "Determine if a string 's' follows the same distributive pattern as a given 'pattern' string. A match exists if there is a bijective mapping between every character in the pattern and every non-empty word in the string.",
    solution:
      "The solution uses two hash maps to establish a two-way (bijective) relationship between pattern characters and words. It first splits the string into words and ensures the lengths match. Then, it iterates through both sequences simultaneously, validating that each character consistently maps to the same word and that each word consistently maps back to the same character.",
    leetcodeUrl: "https://leetcode.com/problems/word-pattern/",
    code: `from collections import Counter
class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
        mapper = {}
        worder = {}
        words = s.split()
        letters = list(pattern)
        if len(words) == len(letters):
            for j, char in enumerate(pattern):
                if char in pattern and char not in mapper:
                    mapper[char] = words[j]
                elif char in mapper and mapper[char] != words[j]:
                    return False
            for i, word in enumerate(words):
                if word in words and word not in worder:
                    worder[word] = letters[i]
                elif word in worder and worder[word] != letters[i]:
                    return False
            return True
        else:
            return False`,
  },
  {
    id: 518,
    title: "Coin Change II",
    difficulty: "Complex",
    category: "Hash Tables",
    status: "Solved",
    description:
      "Given an integer array of coins and an integer amount, return the number of combinations that make up that amount. You may assume you have an infinite number of each kind of coin.",
    solution:
      "The solution uses a bottom-up dynamic programming approach with a dictionary to store the number of ways to reach each total. It initializes the base case (0 amount) to 1. For each coin, it iterates through all possible amounts, adding the number of ways to reach the 'current amount minus the coin value' to the current state, effectively building up the total combinations.",
    leetcodeUrl: "https://leetcode.com/problems/coin-change-ii/",
    code: `class Solution:
    def change(self, amount: int, coins: List[int]) -> int:
        value = 0
        combo = dict.fromkeys(range(0, amount + 1), value)
        combo[0] = 1

        for coin in coins:
            for portion in combo:
                if portion >= coin:
                    combo[portion] = combo[portion] + combo[portion - coin]
        return combo[amount]`,
  },
  {
    id: 383,
    title: "Ransom Note",
    difficulty: "Simple",
    category: "Hash Tables",
    status: "Solved",
    description:
      "Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise. Each letter in magazine can only be used once in ransomNote.",
    solution:
      "The solution uses frequency counting to verify character availability. By creating a character count for both the magazine and the ransom note, the algorithm iterates through the required letters and ensures that the magazine contains a sufficient quantity of each character to satisfy the note's requirements.",
    leetcodeUrl: "https://leetcode.com/problems/ransom-note/",
    code: `from collections import Counter
class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        magCount = Counter(magazine)
        ranCount = Counter(ransomNote)

        for key in ranCount:
            if key in ranCount and ranCount[key] > magCount[key]:
                return False
        return True`,
  },
  {
    id: 56,
    title: "Merge Intervals",
    difficulty: "Complex",
    category: "Arrays",
    status: "Solved",
    description:
      "Given an array of intervals where intervals[i] = [start_i, end_i], merge all overlapping intervals and return an array of the non-overlapping intervals that cover all the intervals in the input.",
    solution:
      "Sort intervals by start time so potentially overlapping intervals are adjacent. Iterate through the list, comparing the current interval's end with the next's start. If they overlap (current end next start), merge them by taking the minimum start and maximum end. Otherwise, add the current interval to the result. This linear scan effectively merges all qualifying ranges in time due to the initial sort.",
    leetcodeUrl: "https://leetcode.com/problems/merge-intervals/",
    code: `class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        if not intervals or len(intervals) <= 1:
            return intervals
        
        result = []
        i = 0
        intervals.sort()
        
        while i < len(intervals) - 1:
            current = intervals[i]
            next_interval = intervals[i + 1]
            
            if current[1] >= next_interval[0]:
                merged = [min(current[0], next_interval[0]), 
                         max(current[1], next_interval[1])]
                intervals[i + 1] = merged
            else:
                result.append(current)
            
            i += 1
        
        result.append(intervals[-1])
        return result`,
  },
  {
    id: 841,
    title: "Keys and Rooms",
    difficulty: "Complex",
    category: "Graphs",
    status: "Attempted",
    description:
      "There are n rooms labeled from 0 to n - 1 and all the rooms are locked except for room 0. Each room has a list of keys to other rooms. Determine if you can eventually unlock and visit every room.",
    solution:
      "The solution implements a traversal strategy by maintaining a dynamic list of collected keys. Starting from room 0, it iteratively uses each key to unlock new rooms and add their contents to the key collection. The process continues until all collected keys have been processed. Finally, it validates if the total number of keys acquired matches the total number of rooms in the building.",
    leetcodeUrl: "https://leetcode.com/problems/keys-and-rooms/",
    code: `class Solution:
    def canVisitAllRooms(self, rooms: List[List[int]]) -> bool:
        num = 0
        keys = [0]
        key = keys[num]

        while key in keys:
            num += 1
            keys = keys + rooms[key]
            if num < len(rooms):
                key = keys[num]
            else:
                if len(keys) == len(rooms):
                    return True
                else:
                    return False`,
  },
  {
    id: 112,
    title: "Path Sum",
    difficulty: "Simple",
    category: "Trees",
    status: "Solved",
    description:
      "Given the root of a binary tree and a target sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the target sum.",
    solution:
      "This solution implements a depth-first traversal using a helper function to track the running sum from the root. It explores each branch of the tree, checking if the current total matches the target once it reaches a leaf node (a node with no children). If a valid path is found, the sum is returned through the recursive stack to confirm a match exists.",
    leetcodeUrl: "https://leetcode.com/problems/path-sum/",
    code: `class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        def inOrder(node, summer, target):
            if node is not None:
                summer = summer + node.val
                leftFinder = inOrder(node.left, summer, target)
                if leftFinder is not None:
                    return leftFinder

                if node.left is None and node.right is None:
                    if summer == target:
                        return summer
                        
                rightFinder = inOrder(node.right, summer, target)
                if rightFinder is not None:
                    return rightFinder

        summing = 0
        save = inOrder(root, summing, targetSum)
        if save == targetSum:
            return True
        else:
            return False`,
  },
  {
    id: 501,
    title: "Find Mode in Binary Search Tree",
    difficulty: "Simple",
    category: "Trees",
    status: "Solved",
    description:
      "Given the root of a binary search tree (BST) with duplicates, return all the mode(s) (i.e., the most frequently occurred element) in it.",
    solution:
      "The approach performs an in-order traversal of the BST to visit every node and record its frequency in a hash map. After the traversal, the algorithm identifies the maximum frequency value and iterates through the map to collect all node values that appear with that maximum frequency, allowing for multiple modes in the result.",
    leetcodeUrl:
      "https://leetcode.com/problems/find-mode-in-binary-search-tree/",
    code: `class Solution:
    def findMode(self, root: Optional[TreeNode]) -> List[int]:
        def inOrder(node, counter):
            if node is not None:
                inOrder(node.left, counter)
                if node.val not in counter:
                    counter[node.val] = 1
                else:
                    counter[node.val] += 1
                inOrder(node.right, counter)

        kvd = {}
        inOrder(root, kvd)
        modes = []
        high = max(kvd.values())
        for values, freq in kvd.items():
            if freq == high:
                modes.append(values)
        return modes`,
  },
  {
    id: 540,
    title: "Single Element in a Sorted Array",
    difficulty: "Complex",
    category: "Arrays",
    status: "Solved",
    description:
      "Find the single element that appears only once in a sorted array where every other element appears exactly twice. Your solution must ideally run in O(log n) time and O(1) space.",
    solution:
      "This solution employs a hybrid approach. It first performs constant-time checks on the middle element and the array boundaries to see if the unique number is positioned there. If not found, it performs a linear scan with a step of two, comparing adjacent pairs. Since the array is sorted and pairs should match, the first index where a mismatch occurs identifies the single element.",
    leetcodeUrl:
      "https://leetcode.com/problems/single-element-in-a-sorted-array/",
    code: `class Solution:
    def singleNonDuplicate(self, nums: List[int]) -> int:
        midex = len(nums) // 2
        if len(nums) == 1:
            return nums[0]
        
        # Check middle and boundaries
        if nums[midex] != nums[midex - 1] and nums[midex] != nums[midex + 1]:
            return nums[midex]
        elif nums[len(nums) - 1] != nums[len(nums) - 2]:
            return nums[len(nums) - 1]
        else:
            # Linear scan as fallback
            for i in range(0, len(nums) - 1, 2):
                if nums[i] != nums[i+1]:
                    return nums[i]
            return nums[-1]`,
  },
  {
    id: 1122,
    title: "Relative Sort Array",
    difficulty: "Complex",
    category: "Arrays",
    status: "Solved",
    description:
      "Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2. Elements that do not appear in arr2 should be placed at the end of arr1 in ascending order.",
    solution:
      "The solution uses a multi-pass approach. First, it iterates through arr2 to collect all matching elements from arr1 in the specified relative order. Next, it filters out these elements from arr1 to isolate the values not present in arr2. Finally, it implements a manual bubble sort to arrange the remaining elements in ascending order before concatenating them to the result.",
    leetcodeUrl: "https://leetcode.com/problems/relative-sort-array/",
    code: `class Solution:
    def relativeSortArray(self, arr1: List[int], arr2: List[int]) -> List[int]:
        sortedArr = []
        tmp = arr1[0]
        for i in range(len(arr2)):
            for j in range(len(arr1)):
                if arr2[i] == arr1[j]:
                    sortedArr.append(arr1[j])
        
        for value in arr2:
            while value in arr1:
                arr1.remove(value)
        
        # Manual Bubble Sort for remaining elements
        for k in range(len(arr1)):
            for i in range(len(arr1)):
                if i != len(arr1) - 1 and arr1[i] > arr1[i+1]:
                    tmp = arr1[i]
                    arr1[i] = arr1[i+1]
                    arr1[i+1] = tmp
                    
        return sortedArr + arr1`,
  },
  {
    id: 1051,
    title: "Height Checker",
    difficulty: "Simple",
    category: "Arrays",
    status: "Solved",
    description:
      "A school is trying to take a class photo. You are given an array 'heights' representing the current order of students. Return the number of indices where the current height does not match the height of the student in a non-decreasing sorted order.",
    solution:
      "The solution creates an 'expected' version of the array by sorting a copy of the original heights. It then performs a single pass through both arrays simultaneously, comparing the elements at each index. Every time a mismatch is detected between the current order and the sorted order, a counter is incremented to track the total number of students out of position.",
    leetcodeUrl: "https://leetcode.com/problems/height-checker/",
    code: `class Solution:
    def heightChecker(self, heights: List[int]) -> int:
        expected = sorted(heights)
        outOdOrder = 0
        for i in range(len(heights)):
            if heights[i] != expected[i]:
                outOdOrder += 1
        return outOdOrder`,
  },
  {
    id: 2971,
    title: "Find Polygon with the Largest Perimeter",
    difficulty: "Complex",
    category: "Arrays",
    status: "Solved",
    description:
      "Given an array of positive integers, return the largest possible perimeter of a polygon whose sides can be formed from these integers. A polygon must have at least 3 sides, and the longest side must be smaller than the sum of the other sides.",
    solution:
      "The approach sorts the side lengths in descending order to greedily find the largest possible perimeter. For each side, it treats it as the potential longest side and calculates the sum of all remaining smaller sides. The first time the longest side is found to be strictly less than the sum of the others, a valid polygon is identified, and the total perimeter is returned.",
    leetcodeUrl:
      "https://leetcode.com/problems/find-polygon-with-the-largest-perimeter/",
    code: `class Solution:
    def largestPerimeter(self, nums: List[int]) -> int:
        nums.sort(reverse=True)
        for i in range(len(nums)):
            remain = sum(nums[i+1:])
            if nums[i] < remain:
                return nums[i] + remain
        return -1`,
  },
];
