import mergeSort from "@/algorithms/mergeSort";

export const visualizeMergeSort = (
  array,
  speed,
  setCurrentIndex,
  onAnimationComplete
) => {
  const animations = mergeSort(array);
  const arrayBars = document.getElementsByClassName('array-bar');
  const timeouts = [];

  for (let i = 0; i < animations.length; i++) {
    const [indexOne, indexTwoOrValue, isOverwrite] = animations[i];

    // Log the indices being used
    console.log(`Animation ${i}: indexOne=${indexOne}, indexTwoOrValue=${indexTwoOrValue}, arrayBars.length=${arrayBars.length}`);

    if (indexOne < arrayBars.length && indexTwoOrValue < arrayBars.length) {
      const timeoutId = setTimeout(() => {
        if (!isOverwrite) {
          // Comparison step, set both bars to red to indicate comparison
          arrayBars[indexOne].style.backgroundColor = 'red';
          arrayBars[indexTwoOrValue].style.backgroundColor = 'red';

          // Revert color after a short delay
          setTimeout(() => {
            arrayBars[indexOne].style.backgroundColor = '#6366F1';
            arrayBars[indexTwoOrValue].style.backgroundColor = '#6366F1';
          }, speed);
        } else {
          // Overwrite step: Set the height of `indexOne` bar to `indexTwoOrValue`
          arrayBars[indexOne].style.height = `${indexTwoOrValue}px`;
          arrayBars[indexOne].style.backgroundColor = 'green';

          // Revert color after a short delay
          setTimeout(() => {
            arrayBars[indexOne].style.backgroundColor = '#6366F1';
          }, speed);
        }

        // Update the current index for tracking purposes
        setCurrentIndex(i);

        // Check if it's the last animation
        if (i === animations.length - 1) {
          onAnimationComplete(true);
        }
      }, i * speed);

      timeouts.push(timeoutId);
    } else {
      console.error(`Invalid indices: indexOne=${indexOne}, indexTwoOrValue=${indexTwoOrValue}, arrayBars.length=${arrayBars.length}`);
    }
  }

  return timeouts;
};
