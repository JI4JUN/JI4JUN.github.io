enum DataStructures {
    Array = 'Array',
    HashTable = 'Hash-Table',
    LinkedList = 'Linked-List',
    Tree = 'Tree',
    HeapOrPriorityQueue = 'Heap-Or-Priority-Queue',
    Stack = 'Stack',
}
enum Algorithms {
    SlidingWindow = 'Sliding-Window',
    BinarySearch = 'Binary-Search',
    Backtracking = 'Backtracking',
}

export class Question {
    // ************************** DataStructures **************************

    // ************************** Array **************************
    public static readonly ValidSudoku = new Question(
        '54-Spiral-Matrix',
        DataStructures.Array
    );

    // ************************** Hash Table **************************
    public static readonly SpiralMatrix = new Question(
        '36-Valid-Sudoku',
        DataStructures.HashTable
    );
    public static readonly IntersectionofTwoArrays = new Question(
        '349-Intersection-of-Two-Arrays',
        DataStructures.HashTable
    );
    public static readonly InsertDeleteGetRandomO1 = new Question(
        '380-Insert-Delete-GetRandom-O(1)',
        DataStructures.HashTable
    );

    // ************************** Linked List **************************
    public static readonly LRUCache = new Question(
        '146-LRU-Cache',
        DataStructures.LinkedList
    );
    public static readonly IntersectionofTwoLinkedLists = new Question(
        '160-Intersection-of-Two-Linked-Lists',
        DataStructures.LinkedList
    );
    public static readonly ReverseLinkedList = new Question(
        '206-Reverse-Linked-List',
        DataStructures.LinkedList
    );

    // ************************** Tree **************************
    public static readonly MergeTwoBinaryTrees = new Question(
        '617-Merge-Two-Binary-Trees',
        DataStructures.Tree
    );

    // ************************** Heap/Priority Queue **************************
    public static readonly FindKPairswithSmallestSums = new Question(
        '373-Find-K-Pairs-with-Smallest-Sums',
        DataStructures.HeapOrPriorityQueue
    );

    // ************************** Stack **************************
    public static readonly MinStack = new Question(
        '155-Min-Stack',
        DataStructures.Stack
    );

    // ************************** Algorithms **************************

    // ************************** Sliding Window **************************
    public static readonly MinimumWindowSubstring = new Question(
        '76-Minimum-Window-Substring',
        Algorithms.SlidingWindow
    );
    public static readonly Searcha2DMatrix = new Question(
        '904-Fruit-Into-Baskets',
        Algorithms.SlidingWindow
    );

    // ************************** Binary Search **************************
    public static readonly FruitIntoBaskets = new Question(
        '74-Search-a-2D-Matrix',
        Algorithms.BinarySearch
    );
    public static readonly MinimumSizeSubarraySum = new Question(
        '209-Minimum-Size-Subarray-Sum',
        Algorithms.BinarySearch
    );

    // ************************** Backtracking **************************
    public static readonly GenerateParentheses = new Question(
        '22-Generate-Parentheses',
        Algorithms.Backtracking
    );
    public static readonly SudokuSolver = new Question(
        '37-Sudoku-Solver',
        Algorithms.Backtracking
    );
    public static readonly Permutations = new Question(
        '46-Permutations',
        Algorithms.Backtracking
    );
    public static readonly PermutationsII = new Question(
        '47-Permutations-II',
        Algorithms.Backtracking
    );
    public static readonly NQueens = new Question(
        '51-N-Queens',
        Algorithms.Backtracking
    );
    public static readonly PalindromePartitioning = new Question(
        '131-Palindrome-Partitioning',
        Algorithms.Backtracking
    );
    public static readonly ReconstructItinerary = new Question(
        '332-Reconstruct-Itinerary',
        Algorithms.Backtracking
    );
    public static readonly NondecreasingSubsequences = new Question(
        '491-Non-decreasing-Subsequences',
        Algorithms.Backtracking
    );

    public readonly title: string;
    public readonly topic: string;

    private constructor(title: string, topic: string) {
        this.title = title;
        this.topic = topic;
    }
}
