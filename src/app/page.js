import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Visualizer from '@/components/Visualizer';

export const metadata = {
  title: "Algorithm Visualizer",
  description: "Master sorting algorithms with our interactive Sorting Algorithm Visualizer. This tool allows you to watch each algorithm in action as it sorts an array in real time.",
  openGraph: {
      title: "Algorithm Visualizer",
      description: "Master sorting algorithms with our interactive Sorting Algorithm Visualizer. This tool allows you to watch each algorithm in action as it sorts an array in real time.",
      url: "https://algorithm-visualizer-five-pi.vercel.app/",
      images: [
          {
              url: "https://algorithm-visualizer-five-pi.vercel.app/og-image.png",
              width: 1200,
              height: 630,
              alt: "Hero Image",
          },
      ],
  },
  twitter: {
      title: "Algorithm Visualizer",
      description: "Master sorting algorithms with our interactive Sorting Algorithm Visualizer. This tool allows you to watch each algorithm in action as it sorts an array in real time.",
      images: ["https://algorithm-visualizer-five-pi.vercel.app/og-image.png"],
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
