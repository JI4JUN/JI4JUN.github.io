enum DataStructures {
    HeapOrPriorityQueue = 'Heap-Or-Priority-Queue',
}
enum Algorithms {
    BinarySearch = 'Binary-Search',
    Backtracking = 'Backtracking',
}

export class Question {
    public static readonly FindKPairswithSmallestSums = new Question(
        '373-Find-K-Pairs-with-Smallest-Sums',
        DataStructures.HeapOrPriorityQueue
    );
    public static readonly Searcha2DMatrix = new Question(
        '74-Search-a-2D-Matrix',
        Algorithms.BinarySearch
    );
    public static readonly MinimumSizeSubarraySum = new Question(
        '209-Minimum-Size-Subarray-Sum',
        Algorithms.BinarySearch
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
