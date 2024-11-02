import { DefaultTheme } from 'vitepress';
import { Question } from './question';

export const leetcodeEveryDay = (subPath: string) =>
    '/projects/leetcode-every-day' + subPath;

export const introduction = (subPath: string) =>
    leetcodeEveryDay('/introduction/' + subPath);
export const dataStructure = (subPath: string) =>
    leetcodeEveryDay('/data-structures/' + subPath);
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
            text: 'Data Structure',
            items: [
                {
                    text: 'Heap/Priority Queue',
                    link: dataStructure('HeapOrPriorityQueue'),
                },
            ],
            collapsed: true,
        },
        {
            text: 'Solutions',
            items: [
                // ************************** DataStructures **************************
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
                            text: '146 LRU Cache',
                            link: solutions(
                                Question.LRUCache.title,
                                Question.LRUCache.topic
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
            ],
            collapsed: true,
        },
    ],
};
