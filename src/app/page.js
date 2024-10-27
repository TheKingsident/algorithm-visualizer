import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Visualizer from '@/components/Visualizer';

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
