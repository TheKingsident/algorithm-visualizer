const quickSort = (array) => {
    const animations = [];
    const arrCopy = [...array];
  
    const quickSortHelper = (arr, low, high) => {
      if (low < high) {
        const pivotIndex = partition(arr, low, high);
        quickSortHelper(arr, low, pivotIndex - 1);
        quickSortHelper(arr, pivotIndex + 1, high);
      }
    };
  
    const partition = (arr, low, high) => {
      const pivot = arr[high];
      let i = low - 1;
      for (let j = low; j < high; j++) {
        animations.push([j, high, false]); // Compare pivot with arr[j]
        if (arr[j] < pivot) {
          i++;
          animations.push([i, j, true]); // Swap arr[i] and arr[j]
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
      }
      animations.push([i + 1, high, true]); // Swap pivot to its final place
      [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
      return i + 1;
    };
  
    quickSortHelper(arrCopy, 0, arrCopy.length - 1);
    return animations;
  };
  
  export default quickSort;  