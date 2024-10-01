const bubbleSort = (array) => {
    const animations = [];
    const arr = [...array];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        animations.push([j, j + 1]); // Compare
        if (arr[j] > arr[j + 1]) {
          animations.push([j, j + 1, true]); // Swap
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return animations;
  };

export default bubbleSort;