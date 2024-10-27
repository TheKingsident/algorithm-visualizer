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
  // Add more algorithms as needed
};

export default algorithmInfo;
