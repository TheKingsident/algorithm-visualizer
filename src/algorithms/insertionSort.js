const insertionSort = (array) => {
    const animations = [];
    const arrCopy = [...array];
  
    for (let i = 1; i < arrCopy.length; i++) {
      let key = arrCopy[i];
      let j = i - 1;
  
      // Visualize the comparison
      while (j >= 0 && arrCopy[j] > key) {
        animations.push([j + 1, j, true]);  // Swap elements
        arrCopy[j + 1] = arrCopy[j];
        j = j - 1;
      }
      animations.push([j + 1, i, false]); // Place key in the right spot
      arrCopy[j + 1] = key;
    }
  
    return animations;
  };
  
  export default insertionSort;  