enum Types {
    Search = 'Search',
    Sort = 'Sort',
}

export class Algorithm {
    public static readonly BinarySearch = new Algorithm(
        'Binary-Search',
        Types.Sort
    );
    public static readonly BubbleSort = new Algorithm(
        'Bubble-Sort',
        Types.Sort
    );

    public readonly name: string;
    public readonly type: string;

    private constructor(name: string, type: string) {
        this.name = name;
        this.type = type;
    }
}
