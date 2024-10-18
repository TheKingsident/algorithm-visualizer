const heapSort = (array) => {
  const animations = [];
  const arrCopy = [...array];

  const heapify = (arr, n, i) => {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }

    if (largest !== i) {
      animations.push([i, largest, true]);
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      heapify(arr, n, largest);
    }
  };

  const buildMaxHeap = (arr, n) => {
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(arr, n, i);
    }
  };

  const heapSortHelper = (arr) => {
    const n = arr.length;
    buildMaxHeap(arr, n);
    for (let i = n - 1; i > 0; i--) {
      animations.push([0, i, true]);
      [arr[0], arr[i]] = [arr[i], arr[0]];
      heapify(arr, i, 0);
    }
  };

  heapSortHelper(arrCopy);
  return animations;
};

export default heapSort;