import bubbleSort from '../algorithms/bubbleSort';
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
    // Add other cases for different algorithms
  default:
      console.error('Unknown sorting algorithm:', sortType);
      return;
  }

  if (!animations.length) {
    onAnimationComplete(true); // Immediately mark as complete
    return null;
  }

  for (let i = 0; i < animations.length; i++) {
    const [barOneIdx, barTwoIdx, swap] = animations[i];
    const arrayBars = document.getElementsByClassName('array-bar');

    const timeoutID = setTimeout(() => {
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

        setCurrentIndex(i);

        if (i === animations.length - 1) {
          onAnimationComplete(true);  // Notify completion of sorting
        }
      }, speed);
    }, i * speed);

    timeouts.push(timeoutID);
  }
  return timeouts;
};
