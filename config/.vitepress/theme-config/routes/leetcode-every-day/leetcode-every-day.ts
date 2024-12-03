import { DefaultTheme } from 'vitepress';
import { Question } from './question';
import { Algorithm } from './algorithms';

export const leetcodeEveryDay = (subPath: string) =>
    '/projects/leetcode-every-day' + subPath;

export const introduction = (subPath: string) =>
    leetcodeEveryDay('/introduction/' + subPath);
export const dataStructures = (subPath: string) =>
    leetcodeEveryDay('/data-structures/' + subPath);
export const algorithms = (subPath: string, type: string) =>
    leetcodeEveryDay('/algorithms/' + type + '/' + subPath);
export const solutions = (subPath: string, topic: string) =>
    leetcodeEveryDay('/solutions/' + topic + '/' + subPath);

export const leetcodeNav = {
    text: 'leetcode-every-day',
    link: introduction('Intro'),
};

export const leetcodeSidebar: DefaultTheme.Config['sidebar'] = {
    [leetcodeEveryDay('/')]: [
        {
            text: 'Introduction',
            items: [
                {
                    text: 'Introduction',
                    link: introduction('Intro'),
                },
            ],
            collapsed: true,
        },
        {
            text: 'Data Structures',
            items: [
                {
                    text: 'Heap/Priority Queue',
                    link: dataStructures('HeapOrPriorityQueue'),
                },
            ],
            collapsed: true,
        },
        {
            text: 'Algorithms',
            items: [
                {
                    text: 'Search',
                    items: [
                        {
                            text: 'Binary Search',
                            link: algorithms(
                                Algorithm.BinarySearch.name,
                                Algorithm.BinarySearch.type
                            ),
                        },
                    ],
                    collapsed: true,
                },
                {
                    text: 'Sort',
                    items: [
                        {
                            text: 'Bubble Sort',
                            link: algorithms(
                                Algorithm.BubbleSort.name,
                                Algorithm.BubbleSort.type
                            ),
                        },
                        {
                            text: 'Quick Sort',
                            link: algorithms(
                                Algorithm.QuickSort.name,
                                Algorithm.QuickSort.type
                            ),
                        },
                    ],
                    collapsed: true,
                },
            ],
            collapsed: true,
        },
        {
            text: 'Solutions',
            items: [
                // ************************** DataStructures **************************

                // ************************** Array **************************
                {
                    text: 'Array',
                    items: [
                        {
                            text: '15 3Sum',
                            link: solutions(
                                Question.ThreeSum.title,
                                Question.ThreeSum.topic
                            ),
                        },
                        {
                            text: '54 Spiral Matrix',
                            link: solutions(
                                Question.SpiralMatrix.title,
                                Question.SpiralMatrix.topic
                            ),
                        },
                        {
                            text: '57 Insert Interval',
                            link: solutions(
                                Question.InsertInterval.title,
                                Question.InsertInterval.topic
                            ),
                        },
                        {
                            text: '59 Spiral Matrix II',
                            link: solutions(
                                Question.SpiralMatrixII.title,
                                Question.SpiralMatrixII.topic
                            ),
                        },
                        {
                            text: '88 Merge Sorted Array',
                            link: solutions(
                                Question.MergeSortedArray.title,
                                Question.MergeSortedArray.topic
                            ),
                        },
                        {
                            text: '134 Gas Station',
                            link: solutions(
                                Question.GasStation.title,
                                Question.GasStation.topic
                            ),
                        },
                        {
                            text: '189 Rotate Array',
                            link: solutions(
                                Question.RotateArray.title,
                                Question.RotateArray.topic
                            ),
                        },
                        {
                            text: '200 Number of Islands',
                            link: solutions(
                                Question.NumberofIslands.title,
                                Question.NumberofIslands.topic
                            ),
                        },
                        {
                            text: '238 Product of Array Except Self',
                            link: solutions(
                                Question.ProductofArrayExceptSelf.title,
                                Question.ProductofArrayExceptSelf.topic
                            ),
                        },
                        {
                            text: '274 H-Index',
                            link: solutions(
                                Question.HIndex.title,
                                Question.HIndex.topic
                            ),
                        },
                        {
                            text: '289 Game of Life',
                            link: solutions(
                                Question.GameofLife.title,
                                Question.GameofLife.topic
                            ),
                        },
                    ],
                    collapsed: true,
                },

                // ************************** String **************************
                {
                    text: 'String',
                    items: [
                        {
                            text: '58-Length-of-Last-Word',
                            link: solutions(
                                Question.LengthofLastWord.title,
                                Question.LengthofLastWord.topic
                            ),
                        },
                    ],
                    collapsed: true,
                },

                // ************************** Hash Table **************************
                {
                    text: 'Hash Table',
                    items: [
                        {
                            text: '36 Valid Sudoku',
                            link: solutions(
                                Question.ValidSudoku.title,
                                Question.ValidSudoku.topic
                            ),
                        },
                        {
                            text: '349 Intersection of Two Arrays',
                            link: solutions(
                                Question.IntersectionofTwoArrays.title,
                                Question.IntersectionofTwoArrays.topic
                            ),
                        },
                        {
                            text: '380 Insert Delete GetRandom O(1)',
                            link: solutions(
                                Question.InsertDeleteGetRandomO1.title,
                                Question.InsertDeleteGetRandomO1.topic
                            ),
                        },
                    ],
                    collapsed: true,
                },

                // ************************** Linked List **************************
                {
                    text: 'Linked List',
                    items: [
                        {
                            text: '2 Add Two Numbers',
                            link: solutions(
                                Question.AddTwoNumbers.title,
                                Question.AddTwoNumbers.topic
                            ),
                        },
                        {
                            text: '19 Remove Nth Node From End of List',
                            link: solutions(
                                Question.RemoveNthNodeFromEndofList.title,
                                Question.RemoveNthNodeFromEndofList.topic
                            ),
                        },
                        {
                            text: '86 Partition List',
                            link: solutions(
                                Question.PartitionList.title,
                                Question.PartitionList.topic
                            ),
                        },
                        {
                            text: '138 Copy List with Random Pointer',
                            link: solutions(
                                Question.CopyListwithRandomPointer.title,
                                Question.CopyListwithRandomPointer.topic
                            ),
                        },
                        {
                            text: '146 LRU Cache',
                            link: solutions(
                                Question.LRUCache.title,
                                Question.LRUCache.topic
                            ),
                        },
                        {
                            text: '160 Intersection of Two Linked Lists',
                            link: solutions(
                                Question.IntersectionofTwoLinkedLists.title,
                                Question.IntersectionofTwoLinkedLists.topic
                            ),
                        },
                        {
                            text: '206 Reverse Linked List',
                            link: solutions(
                                Question.ReverseLinkedList.title,
                                Question.ReverseLinkedList.topic
                            ),
                        },
                    ],
                    collapsed: true,
                },

                // ************************** Tree **************************
                {
                    text: 'Tree',
                    items: [
                        {
                            text: '98 Validate Binary Search Tree',
                            link: solutions(
                                Question.ValidateBinarySearchTree.title,
                                Question.ValidateBinarySearchTree.topic
                            ),
                        },
                        {
                            text: '103 Binary Tree Zigzag Level Order Traversal',
                            link: solutions(
                                Question.BinaryTreeZigzagLevelOrderTraversal
                                    .title,
                                Question.BinaryTreeZigzagLevelOrderTraversal
                                    .topic
                            ),
                        },
                        {
                            text: '222 Count Complete Tree Nodes',
                            link: solutions(
                                Question.CountCompleteTreeNodes.title,
                                Question.CountCompleteTreeNodes.topic
                            ),
                        },
                        {
                            text: '530 Minimum Absolute Difference in BST',
                            link: solutions(
                                Question.MinimumAbsoluteDifferenceinBST.title,
                                Question.MinimumAbsoluteDifferenceinBST.topic
                            ),
                        },
                        {
                            text: '617 Merge Two Binary Trees',
                            link: solutions(
                                Question.MergeTwoBinaryTrees.title,
                                Question.MergeTwoBinaryTrees.topic
                            ),
                        },
                    ],
                    collapsed: true,
                },

                // ************************** Graph **************************
                {
                    text: 'Graph',
                    items: [
                        {
                            text: '133 Clone Graph',
                            link: solutions(
                                Question.CloneGraph.title,
                                Question.CloneGraph.topic
                            ),
                        },
                        {
                            text: '207 Course Schedule',
                            link: solutions(
                                Question.CourseSchedule.title,
                                Question.CourseSchedule.topic
                            ),
                        },
                        {
                            text: '210 Course Schedule II',
                            link: solutions(
                                Question.CourseScheduleII.title,
                                Question.CourseScheduleII.topic
                            ),
                        },
                        {
                            text: '399 Evaluate Division',
                            link: solutions(
                                Question.EvaluateDivision.title,
                                Question.EvaluateDivision.topic
                            ),
                        },
                    ],
                    collapsed: true,
                },

                // ************************** Heap/Priority Queue **************************
                {
                    text: 'Heap/Priority Queue',
                    items: [
                        {
                            text: '373 Find K Pairs with Smallest Sums',
                            link: solutions(
                                Question.FindKPairswithSmallestSums.title,
                                Question.FindKPairswithSmallestSums.topic
                            ),
                        },
                    ],
                    collapsed: true,
                },

                // ************************** Stack **************************
                {
                    text: 'Stack',
                    items: [
                        {
                            text: '155-Min-Stack',
                            link: solutions(
                                Question.MinStack.title,
                                Question.MinStack.topic
                            ),
                        },
                    ],
                    collapsed: true,
                },

                // ************************** Algorithms **************************

                // ************************** Sliding Window **************************
                {
                    text: 'Sliding Window',
                    items: [
                        {
                            text: '3 Longest Substring Without Repeating Characters',
                            link: solutions(
                                Question
                                    .LongestSubstringWithoutRepeatingCharacters
                                    .title,
                                Question
                                    .LongestSubstringWithoutRepeatingCharacters
                                    .topic
                            ),
                        },
                        {
                            text: '76 Minimum Window Substring',
                            link: solutions(
                                Question.MinimumWindowSubstring.title,
                                Question.MinimumWindowSubstring.topic
                            ),
                        },
                        {
                            text: '904 Fruit Into Baskets',
                            link: solutions(
                                Question.Searcha2DMatrix.title,
                                Question.Searcha2DMatrix.topic
                            ),
                        },
                    ],
                    collapsed: true,
                },
                // ************************** Binary Search **************************
                {
                    text: 'Binary Search',
                    items: [
                        {
                            text: '74 Search a 2D Matrix',
                            link: solutions(
                                Question.Searcha2DMatrix.title,
                                Question.Searcha2DMatrix.topic
                            ),
                        },
                        {
                            text: '209 Minimum Size Subarray Sum',
                            link: solutions(
                                Question.MinimumSizeSubarraySum.title,
                                Question.MinimumSizeSubarraySum.topic
                            ),
                        },
                    ],
                    collapsed: true,
                },

                // ************************** Backtracking **************************
                {
                    text: 'Backtracking',
                    items: [
                        {
                            text: '22 Generate Parentheses',
                            link: solutions(
                                Question.GenerateParentheses.title,
                                Question.GenerateParentheses.topic
                            ),
                        },
                        {
                            text: '37 Sudoku Solver',
                            link: solutions(
                                Question.SudokuSolver.title,
                                Question.SudokuSolver.topic
                            ),
                        },
                        {
                            text: '46 Permutations',
                            link: solutions(
                                Question.Permutations.title,
                                Question.Permutations.topic
                            ),
                        },
                        {
                            text: '47 Permutations II',
                            link: solutions(
                                Question.PermutationsII.title,
                                Question.PermutationsII.topic
                            ),
                        },
                        {
                            text: '51 N-Queens',
                            link: solutions(
                                Question.NQueens.title,
                                Question.NQueens.topic
                            ),
                        },
                        {
                            text: '131 Palindrome Partitioning',
                            link: solutions(
                                Question.PalindromePartitioning.title,
                                Question.PalindromePartitioning.topic
                            ),
                        },
                        {
                            text: '332 Reconstruct Itinerary',
                            link: solutions(
                                Question.ReconstructItinerary.title,
                                Question.ReconstructItinerary.topic
                            ),
                        },
                        {
                            text: '491 Non-decreasing Subsequences',
                            link: solutions(
                                Question.NondecreasingSubsequences.title,
                                Question.NondecreasingSubsequences.topic
                            ),
                        },
                    ],
                    collapsed: true,
                },

                // ************************** Greedy **************************
                {
                    text: 'Greedy',
                    items: [
                        {
                            text: '55 Jump Game',
                            link: solutions(
                                Question.JumpGame.title,
                                Question.JumpGame.topic
                            ),
                        },
                        {
                            text: '122 Best Time to Buy and Sell Stock II',
                            link: solutions(
                                Question.BestTimetoBuyandSellStockII.title,
                                Question.BestTimetoBuyandSellStockII.topic
                            ),
                        },
                    ],
                    collapsed: true,
                },
            ],
            collapsed: true,
        },
    ],
};
