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
  currentIndex = 0,
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

  // Cache DOM elements once
  const arrayBars = document.getElementsByClassName('array-bar');
  const primaryColor = '#6366F1';
  const compareColor = 'red';

  // Start from currentIndex to support pause/resume
  for (let i = currentIndex; i < animations.length; i++) {
    const [barOneIdx, barTwoIdx, swap] = animations[i];
    const animationDelay = (i - currentIndex) * speed;

    const timeoutId = setTimeout(() => {
      // Use requestAnimationFrame for smoother DOM updates
      requestAnimationFrame(() => {
        if (barOneIdx < arrayBars.length && barTwoIdx < arrayBars.length) {
          const barOne = arrayBars[barOneIdx];
          const barTwo = arrayBars[barTwoIdx];

          barOne.style.backgroundColor = compareColor;
          barTwo.style.backgroundColor = compareColor;

          if (swap) {
            const tempHeight = barOne.style.height;
            barOne.style.height = barTwo.style.height;
            barTwo.style.height = tempHeight;
          }

          // Reset colors after brief delay
          setTimeout(() => {
            requestAnimationFrame(() => {
              barOne.style.backgroundColor = primaryColor;
              barTwo.style.backgroundColor = primaryColor;
            });
          }, speed * 0.5);

          setCurrentIndex(i + 1);

          if (i === animations.length - 1) {
            onAnimationComplete(true);
          }
        }
      });
    }, animationDelay);

    timeouts.push(timeoutId);
  }

  return timeouts;
};
