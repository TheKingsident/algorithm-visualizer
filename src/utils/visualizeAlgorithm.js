import bubbleSort from '../algorithms/bubbleSort';
import selectionSort from '../algorithms/selectionSort';
// import other sorting algorithms here

export const visualizeAlgorithm = (sortType, array) => {
  let animations = [];
  switch (sortType) {
    case 'bubble':
      animations = bubbleSort(array);
      break;
    case 'selection':
      animations = selectionSort(array);
      break;
    // Add other cases for different algorithms
  default:
      console.error('Unknown sorting algorithm:', sortType);
      return;
  }

// Code for visualizing animations would go here
  for (let i = 0; i < animations.length; i++) {
    const [barOneIdx, barTwoIdx, swap] = animations[i];
    const arrayBars = document.getElementsByClassName('array-bar');
    setTimeout(() => {
      arrayBars[barOneIdx].style.backgroundColor = 'red';
      arrayBars[barTwoIdx].style.backgroundColor = 'red';
      if (swap) {
        const tempHeight = arrayBars[barOneIdx].style.height;
        arrayBars[barOneIdx].style.height = arrayBars[barTwoIdx].style.height;
        arrayBars[barTwoIdx].style.height = tempHeight;
      }
      setTimeout(() => {
        arrayBars[barOneIdx].style.backgroundColor = 'teal';
        arrayBars[barTwoIdx].style.backgroundColor = 'teal';
      }, 100);
    }, i * 100);
  }
};
