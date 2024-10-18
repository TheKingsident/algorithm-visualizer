const mergeSort = (array) => {
    const animations = [];
    if (array.length <= 1) return array;
    const arrCopy = [...array];
  
    const mergeHelper = (arr, aux, start, end) => {
      if (start >= end) return;
      const mid = Math.floor((start + end) / 2);
      mergeHelper(aux, arr, start, mid);
      mergeHelper(aux, arr, mid + 1, end);
      merge(arr, aux, start, mid, end);
    };
  
    const merge = (arr, aux, start, mid, end) => {
      let k = start, i = start, j = mid + 1;
      while (i <= mid && j <= end) {
        // Compare the elements at i and j
        animations.push([i, j, false]); // Comparing i and j
        if (aux[i] <= aux[j]) {
          // Set the value at k to aux[i]
          animations.push([k, aux[i], true]);
          arr[k++] = aux[i++];
        } else {
          // Set the value at k to aux[j]
          animations.push([k, aux[j], true]);
          arr[k++] = aux[j++];
        }
      }
  
      // Copy remaining elements from the left half
      while (i <= mid) {
        animations.push([i, i, false]);  // Visualizing the rest
        animations.push([k, aux[i], true]);  // Visualizing the overwrite
        arr[k++] = aux[i++];
      }
  
      // Copy remaining elements from the right half
      while (j <= end) {
        animations.push([j, j, false]);  // Visualizing the rest
        animations.push([k, aux[j], true]);  // Visualizing the overwrite
        arr[k++] = aux[j++];
      }
    };
  
    const auxArray = [...arrCopy];
    mergeHelper(arrCopy, auxArray, 0, arrCopy.length - 1);
    return animations;
  };
  
  export default mergeSort;  