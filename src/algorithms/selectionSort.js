const selectionSort = (array) => {
  const animations = [];
  const arrCopy = [...array];

  for (let i = 0; i < arrCopy.length - 1; i++) {
    let minIndex = i;
    
    for (let j = i + 1; j < arrCopy.length; j++) {
      animations.push([j, minIndex, false]);

      if (arrCopy[j] < arrCopy[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      animations.push([i, minIndex, true]);

      const temp = arrCopy[i];
      arrCopy[i] = arrCopy[minIndex];
      arrCopy[minIndex] = temp;
    }
  }

  return animations;
};

export default selectionSort;