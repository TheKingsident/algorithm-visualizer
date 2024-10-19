import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Visualizer from './components/Visualizer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Header />
        <Visualizer />
      </ChakraProvider>
    </div>
  );
}

export default App;
