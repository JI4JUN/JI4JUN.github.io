enum DataStructures {
    HashTable = 'Hash-Table',
    LinkedList = 'Linked-List',
    HeapOrPriorityQueue = 'Heap-Or-Priority-Queue',
    Stack = 'Stack',
}
enum Algorithms {
    BinarySearch = 'Binary-Search',
    Backtracking = 'Backtracking',
}

export class Question {
    // ************************** DataStructures **************************
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
    public static readonly LRUCache = new Question(
        '146-LRU-Cache',
        DataStructures.LinkedList
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
    // ************************** Binary Search **************************
    public static readonly Searcha2DMatrix = new Question(
        '74-Search-a-2D-Matrix',
        Algorithms.BinarySearch
    );
    public static readonly MinimumSizeSubarraySum = new Question(
        '209-Minimum-Size-Subarray-Sum',
        Algorithms.BinarySearch
    );
    // ************************** Backtracking **************************
    public static readonly PermutationsII = new Question(
        '47-Permutations-II',
        Algorithms.Backtracking
    );
    public static readonly PalindromePartitioning = new Question(
        '131-Palindrome-Partitioning',
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
