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
        animations.push([i, j, false]); // Comparing i and j
        if (aux[i] <= aux[j]) {
          animations.push([k, aux[i], true]); // Setting the value
          arr[k++] = aux[i++];
        } else {
          animations.push([k, aux[j], true]);
          arr[k++] = aux[j++];
        }
      }
      while (i <= mid) {
        animations.push([i, i, false]);
        animations.push([k, aux[i], true]);
        arr[k++] = aux[i++];
      }
      while (j <= end) {
        animations.push([j, j, false]);
        animations.push([k, aux[j], true]);
        arr[k++] = aux[j++];
      }
    };
  
    const auxArray = [...arrCopy];
    mergeHelper(arrCopy, auxArray, 0, arrCopy.length - 1);
    return animations;
  };
  
  export default mergeSort;  