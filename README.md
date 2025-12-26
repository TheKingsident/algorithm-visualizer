
# Algorithm Visualizer

Welcome to the **Algorithm Visualizer** project! This app visually demonstrates various sorting algorithms, making it easier to understand how they work in action. It’s built with Next.js and deployed on Vercel for easy access online. You can check it out here: [Algorithm Visualizer on Vercel](https://algorithm-visualizer-five-pi.vercel.app/).

## Project Overview

This visualizer covers a selection of popular sorting algorithms, including Bubble Sort, Quick Sort, Merge Sort, and more. You can select an algorithm and see how it sorts an array of numbers step-by-step. Each algorithm has an info sheet explaining the sorting process and the complexity of each algorithm.

## Project Structure

Here’s a breakdown of the project files and folders, organized to keep everything clean and modular.

### Root Directory

- **next.config.js**: Configuration file for Next.js. This can include custom settings like environment variables or API routes.
- **package.json**: Lists the project dependencies and scripts. This is where we specify the packages needed for the app, like React and Next.js.
- **.gitignore**: Specifies files and folders Git should ignore when you commit your code. Keeps your repo clean from unnecessary files.

### `src/` Directory

The main source code for the project is in the `src` folder. Here’s a breakdown of the subfolders and files within it:

#### `algorithms/`

This folder contains individual JavaScript files, each representing a different sorting algorithm:

- **bubbleSort.js**: Implements Bubble Sort, where elements are repeatedly swapped until sorted.
- **heapSort.js**: Implements Heap Sort, where the array is treated like a binary heap to create a sorted array.
- **insertionSort.js**: Implements Insertion Sort, which builds a sorted section by inserting elements into their correct positions.
- **mergeSort.js**: Implements Merge Sort, a divide-and-conquer algorithm that splits the array into smaller subarrays, sorts them, and merges them back together.
- **quickSort.js**: Implements Quick Sort, another divide-and-conquer algorithm that sorts by selecting a pivot and partitioning the elements around it.
- **selectionSort.js**: Implements Selection Sort, where the smallest element is selected from the unsorted part and swapped with the first unsorted element.

#### `app/`

Contains general assets and global files for the app.

- **favicon.ico**: The app’s icon, displayed in the browser tab.
- **globals.css**: Contains global styles for the entire app, setting default colors, font sizes, etc.
- **layout.js**: Defines the layout for the app, controlling the structure and look across all pages.
- **page.js**: The main page component where the header, visualizer, and footer are assembled. This acts as the app’s homepage and primary layout.

#### `components/`

This folder contains the reusable UI components that make up the main parts of the app.

- **AlgorithmInfoSheet.js**: Displays an information sheet with details about the selected algorithm, including time complexity and a description. Users can toggle this sheet to learn more about each algorithm.
- **AlgorithmPicker.js**: A dropdown or selection component that allows users to pick an algorithm to visualize.
- **ControlPanel.js**: Contains control elements like start, pause, and reset buttons to interact with the visualizer.
- **Counter.js**: A component for displaying or managing counters, possibly to show the steps or comparisons made during sorting.
- **Footer.js**: The footer component, containing links to social media and credit information.
- **Header.js**: The header component, providing the app’s title and navigation elements.
- **Visualizer.js** and **Visualizer.css**: The main visualization component and its styling. This is where the sorting animations take place, showing how each algorithm processes the data.

#### `components/ui/`

UI components to manage pop-ups and other interface elements.

- **button.jsx/**: A customizable button component. It serves as the flexible button that's customised and reused throughout the app whenever and wherever a button is needed.
- **dropdown-menu.jsx/**: Adds a dropdown menu component that expands when clicked, showing the list of sorting algorithms. Offering users multiple sorting algorithm options without cluttering the interface.
- **sheet.jsx/**: The base component for sliding sheets, often used as a sidebar or a pop-up information pane. This component powers the AlgorithmInfoSheet, allowing information about algorithms to be displayed in an organized, off-canvas style.
- **slider.jsx/**: A slider component that allows users to select a value from a range. Used for settings or input that requires selecting speed within a bounded range.

#### `lib/`

This folder is typically used to store helper functions or external libraries.

- **utils/algorithmInfo.js**: Contains information about each algorithm (name, description, complexity), structured to make it easy to pass data to the information sheet.
- **utils/visualizeAlgorithm.js**: This file contains the logic for visualizing the algorithms, including functions to animate the steps of sorting.

### Additional Files

- **components.json** and **jsconfig.json**: Used for configuration and resolving imports. `components.json` might be related to custom components configuration, while `jsconfig.json` is used by Next.js to handle absolute imports.
- **postcss.config.mjs**: Configures PostCSS, a tool for processing CSS files, useful for things like autoprefixing and nesting.

## How to Run Locally

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Run the development server with `npm run dev`.
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## How to Use the App

1. Select an algorithm from the dropdown.
2. Click "Start" to visualize the algorithm sorting an array.
3. Pause or reset the visualization as needed.
4. Click on an algorithm’s info icon to view a description and its time complexity.

## Deployed Version

The app is deployed on Vercel and can be accessed here: [Algorithm Visualizer on Vercel](https://algorithm-visualizer-five-pi.vercel.app/).

## Future Enhancements

- Adding more algorithms for visualization.
- Adding complexity analysis for space as well as time.
- Customizing array size and values.

## License

View license information: [MIT License](https://github.com/TheKingsident/algorithm-visualizer/blob/master/LICENSE)
