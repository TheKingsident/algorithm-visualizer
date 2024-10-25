import bubbleSort from '../algorithms/bubbleSort';
import heapSort from '../algorithms/heapSort';
import insertionSort from '../algorithms/insertionSort';
import mergeSort from '../algorithms/mergeSort';
import quickSort from '../algorithms/quickSort';
import selectionSort from '../algorithms/selectionSort';

export const visualizeAlgorithm = (
  sortType,
  array,
  speed,
  currentIndex,
  setCurrentIndex,
  onAnimationComplete
) => {
  let animations = [];
  let timeouts = [];

  switch (sortType) {
    case 'bubble':
      animations = bubbleSort(array);
      break;
    case 'selection':
      animations = selectionSort(array);
      break;
    case 'insertion':
      animations = insertionSort(array);
      break;
      case 'merge':
        animations = mergeSort(array);
        break;
      case 'quick':
        animations = quickSort(array);
        break;
      case 'heap':
        animations = heapSort(array);
        break;

    default:
      console.error('Unknown sorting algorithm:', sortType);
      return [];
  }

  if (!animations.length) {
    onAnimationComplete(true);
    return [];
  }

  for (let i = 0; i < animations.length; i++) {
    const [barOneIdx, barTwoIdx, swap] = animations[i];
    const arrayBars = document.getElementsByClassName('array-bar');

    const timeoutId = setTimeout(() => {
      arrayBars[barOneIdx].style.backgroundColor = 'red';
      arrayBars[barTwoIdx].style.backgroundColor = 'red';

      if (swap) {
        const tempHeight = arrayBars[barOneIdx].style.height;
        arrayBars[barOneIdx].style.height = arrayBars[barTwoIdx].style.height;
        arrayBars[barTwoIdx].style.height = tempHeight;
      }

      setTimeout(() => {
        arrayBars[barOneIdx].style.backgroundColor = '#6366F1';
        arrayBars[barTwoIdx].style.backgroundColor = '#6366F1';
        setCurrentIndex(i);

        if (i === animations.length - 1) {
          onAnimationComplete(true);
        }
      }, speed);
    }, i * speed);

    timeouts.push(timeoutId);
  }

  return timeouts;
};
