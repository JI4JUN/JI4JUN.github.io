import { DefaultTheme } from 'vitepress';

enum DataStructures {
    HeapOrPriorityQueue = 'Heap-Or-Priority-Queue',
}
enum Algorithms {
    Backtracking = 'Backtracking',
}
enum Questions {
    FindKPairswithSmallestSums = '373-Find-K-Pairs-with-Smallest-Sums',
    PalindromePartitioning = '131-Palindrome-Partitioning',
}

export const leetcodeEveryDay = (subPath: string) =>
    '/projects/leetcode-every-day' + subPath;

export const introduction = (subPath: string) =>
    leetcodeEveryDay('/introduction/' + subPath);
export const dataStructure = (subPath: string) =>
    leetcodeEveryDay('/data-structures/' + subPath);
export const solutions = (tag: string, subPath: string) =>
    leetcodeEveryDay('/solutions/' + tag + '/' + subPath);

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
                {
                    text: 'Heap/Priority Queue',
                    items: [
                        {
                            text: '373 Find K Pairs with Smallest Sums',
                            link: solutions(
                                DataStructures.HeapOrPriorityQueue,
                                Questions.FindKPairswithSmallestSums
                            ),
                        },
                    ],
                    collapsed: true,
                },
                {
                    text: 'Backtracking',
                    items: [
                        {
                            text: '131 Palindrome Partitioning',
                            link: solutions(
                                Algorithms.Backtracking,
                                Questions.PalindromePartitioning
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
