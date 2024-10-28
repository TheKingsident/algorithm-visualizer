import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Visualizer from '@/components/Visualizer';

export const metadata = {
  title: "Algorithm Visualizer",
  description: "Explore, learn, and master sorting algorithms with our interactive Sorting Algorithm Visualizer. From classic algorithms like Heap Sort and Quick Sort to beginner-friendly Bubble Sort and Selection Sort, this tool allows you to watch each algorithm in action as it sorts an array in real time.",
  openGraph: {
      title: "Algorithm Visualizer",
      description: "Explore, learn, and master sorting algorithms with our interactive Sorting Algorithm Visualizer. From classic algorithms like Heap Sort and Quick Sort to beginner-friendly Bubble Sort and Selection Sort, this tool allows you to watch each algorithm in action as it sorts an array in real time.",
      url: "https://algorithm-visualizer-five-pi.vercel.app/",
      images: [
          {
              url: "https://github.com/TheKingsident/algorithm-visualizer/blob/master/public/og-image.png",
              width: 1200,
              height: 630,
              alt: "Hero Image",
          },
      ],
  },
};

function App() {
  return (
    <div className='bg-gray-900 font-sans'>
      <Header />
      <div className='max-w-7xl mx-auto px-4 '>
        <Visualizer />
      </div>
      <Footer />
    </div>
  );
}

export default App;
