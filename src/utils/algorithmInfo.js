const algorithmInfo = {
  bubble: {
    name: "Bubble Sort",
    description: "Bubble Sort repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. This process repeats until the list is sorted.",
    complexity: {
      best: "O(n)",
      average: "O(n^2)",
      worst: "O(n^2)"
    },
  },
  quick: {
    name: "Quick Sort",
    description: "Quick Sort uses divide-and-conquer to partition the list into smaller parts based on a pivot, then recursively sorts each part.",
    complexity: {
      best: "O(n log n)",
      average: "O(n log n)",
      worst: "O(n^2)"
    },
  },
  heap: {
    name: "Heap Sort",
    description: "Heap Sort turns the list into a special binary tree structure called a 'heap,' where each parent node is larger than or equal to its children. It repeatedly removes the largest element from the heap and rebuilds the heap until all elements are sorted. This allows it to efficiently keep track of the largest unsorted elements and place them in order one by one.",
    complexity: {
      best: "O(n log n)",
      average: "O(n log n)",
      worst: "O(n log n)"
    },
  },
  insertion: {
    name: "Insertion Sort",
    description: "Insertion Sort works by dividing the list into a sorted and an unsorted section. It starts with the first element as sorted, then takes the next unsorted item and places it into the correct position within the sorted section. This repeats until all items are in order. It's similar to the way people sort playing cards by holding them in one hand and inserting each new card into the correct position among the already sorted cards.",
    complexity: {
      best: "O(n)",
      average: "O(n^2)",
      worst: "O(n^2)"
    },
  },
  selection: {
    name: "Selection Sort",
    description: "Selection Sort repeatedly finds the smallest (or largest) element in the unsorted section of the list and moves it to the correct position in the sorted section. It goes through the list, selects the smallest unsorted item, swaps it with the current position, and repeats this for each position. This process ensures that with each pass, the list grows more sorted from one end.",
    complexity: {
      best: "O(n^2)",
      average: "O(n^2)",
      worst: "O(n^2)"
    },
  },
  merge: {
    name: "Merge Sort",
    description: "Merge Sort splits the list in half, sorts each half, and then merges the sorted halves together. This splitting continues until each part has only one element, which is naturally sorted. Then, the merging combines them in the correct order, producing a fully sorted list. By breaking the problem down and solving smaller parts, Merge Sort can quickly sort large lists.",
    complexity: {
      best: "O(n log n)",
      average: "O(n log n)",
      worst: "O(n log n)"
    },
  },
};

export default algorithmInfo;
