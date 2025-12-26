import mergeSort from "@/algorithms/mergeSort";

export const visualizeMergeSort = (
  array,
  speed,
  setCurrentIndex,
  onAnimationComplete,
  currentIndex = 0
) => {
  const animations = mergeSort(array);
  const arrayBars = document.getElementsByClassName('array-bar');
  const timeouts = [];
  
  const primaryColor = '#6366F1';
  const compareColor = 'red';
  const overwriteColor = 'green';

  // Start from currentIndex to support pause/resume
  for (let i = currentIndex; i < animations.length; i++) {
    const [indexOne, indexTwoOrValue, isOverwrite] = animations[i];
    const animationDelay = (i - currentIndex) * speed;

    if (indexOne < arrayBars.length && (!isOverwrite ? indexTwoOrValue < arrayBars.length : true)) {
      const timeoutId = setTimeout(() => {
        // Use requestAnimationFrame for smoother DOM updates
        requestAnimationFrame(() => {
          const barOne = arrayBars[indexOne];
          
          if (!isOverwrite) {
            // Comparison step
            const barTwo = arrayBars[indexTwoOrValue];
            barOne.style.backgroundColor = compareColor;
            barTwo.style.backgroundColor = compareColor;

            // Revert color after a short delay
            setTimeout(() => {
              requestAnimationFrame(() => {
                barOne.style.backgroundColor = primaryColor;
                barTwo.style.backgroundColor = primaryColor;
              });
            }, speed * 0.5);
          } else {
            // Overwrite step: Set the height of `indexOne` bar to `indexTwoOrValue`
            barOne.style.height = `${indexTwoOrValue}px`;
            barOne.style.backgroundColor = overwriteColor;

            // Revert color after a short delay
            setTimeout(() => {
              requestAnimationFrame(() => {
                barOne.style.backgroundColor = primaryColor;
              });
            }, speed * 0.5);
          }

          // Update the current index for tracking purposes
          setCurrentIndex(i + 1);

          // Check if it's the last animation
          if (i === animations.length - 1) {
            onAnimationComplete(true);
          }
        });
      }, animationDelay);

      timeouts.push(timeoutId);
    }
  }

  return timeouts;
};
