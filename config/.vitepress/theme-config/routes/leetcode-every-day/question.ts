enum DataStructures {
    Array = 'Array',
    String = 'String',
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
    Greedy = 'Greedy',
}

export class Question {
    // ************************** DataStructures **************************

    // ************************** Array **************************
    public static readonly ThreeSum = new Question(
        '15-3Sum',
        DataStructures.Array
    );
    public static readonly SpiralMatrix = new Question(
        '54-Spiral-Matrix',
        DataStructures.Array
    );
    public static readonly InsertInterval = new Question(
        '57-Insert-Interval',
        DataStructures.Array
    );
    public static readonly SpiralMatrixII = new Question(
        '59-Spiral-Matrix-II',
        DataStructures.Array
    );
    public static readonly MergeSortedArray = new Question(
        '88-Merge-Sorted-Array',
        DataStructures.Array
    );
    public static readonly GasStation = new Question(
        '134-Gas-Station',
        DataStructures.Array
    );
    public static readonly RotateArray = new Question(
        '189-Rotate-Array',
        DataStructures.Array
    );
    public static readonly ProductofArrayExceptSelf = new Question(
        '238-Product-of-Array-Except-Self',
        DataStructures.Array
    );
    public static readonly HIndex = new Question(
        '274-H-Index',
        DataStructures.Array
    );
    public static readonly GameofLife = new Question(
        '289-Game-of-Life',
        DataStructures.Array
    );

    // ************************** String **************************
    public static readonly LengthofLastWord = new Question(
        '58-Length-of-Last-Word',
        DataStructures.String
    );

    // ************************** Hash Table **************************
    public static readonly ValidSudoku = new Question(
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
    public static readonly AddTwoNumbers = new Question(
        '2-Add-Two-Numbers',
        DataStructures.LinkedList
    );
    public static readonly RemoveNthNodeFromEndofList = new Question(
        '19-Remove-Nth-Node-From-End-of-List',
        DataStructures.LinkedList
    );
    public static readonly PartitionList = new Question(
        '86-Partition-List',
        DataStructures.LinkedList
    );
    public static readonly CopyListwithRandomPointer = new Question(
        '138-Copy-List-with-Random-Pointer',
        DataStructures.LinkedList
    );
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
    public static readonly CountCompleteTreeNodes = new Question(
        '222-Count-Complete-Tree-Nodes',
        DataStructures.Tree
    );
    public static readonly MinimumAbsoluteDifferenceinBST = new Question(
        '530-Minimum-Absolute-Difference-in-BST',
        DataStructures.Tree
    );
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
    public static readonly LongestSubstringWithoutRepeatingCharacters =
        new Question(
            '3-Longest-Substring-Without-Repeating-Characters',
            Algorithms.SlidingWindow
        );
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

    // ************************** Greedy **************************
    public static readonly JumpGame = new Question(
        '55-Jump-Game',
        Algorithms.Greedy
    );
    public static readonly BestTimetoBuyandSellStockII = new Question(
        '122-Best-Time-to-Buy-and-Sell-Stock-II',
        Algorithms.Greedy
    );

    public readonly title: string;
    public readonly topic: string;

    private constructor(title: string, topic: string) {
        this.title = title;
        this.topic = topic;
    }
}
