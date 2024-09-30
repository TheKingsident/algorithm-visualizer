import Counter from './components/Counter';
import Timer from './components/Timer';
import './App.css';
import Visualizer from './components/Visualizer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Algorithm Visualizer</h1>
      </header>
      <Visualizer />
      <br></br>
      <Counter />
    </div>
  );
}

export default App;
