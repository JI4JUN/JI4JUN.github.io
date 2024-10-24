enum DataStructures {
    HeapOrPriorityQueue = 'Heap-Or-Priority-Queue',
}
enum Algorithms {
    Backtracking = 'Backtracking',
}

export class Question {
    public static readonly FindKPairswithSmallestSums = new Question(
        '373-Find-K-Pairs-with-Smallest-Sums',
        DataStructures.HeapOrPriorityQueue
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
