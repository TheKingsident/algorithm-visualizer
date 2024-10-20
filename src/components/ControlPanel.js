import AlgorithmPicker from "./AlgorithmPicker";
import { Button } from "./ui/button";

const ControlPanel = ({
  speed,
  onSpeedChange,
  onAlgorithmChange, 
  onResetArray,
  onPause,
  onContinue,
  onStop,
  sortingState
}) => {
  return (
    <div className="control-panel">
      <div className="controls">
        {/* Speed control using range input */}
        <label>Animation Speed</label>
        <br></br>
        <input
          type="range"
          min="10" // Minimum speed
          max="100" // Maximum speed
          value={speed} // Controlled input
          onChange={(e) => onSpeedChange(e.target.value)}
          disabled={sortingState === 'running'} // Update speed when slider changes
        />
      </div>
      <div className="container">
        <button type="button" onClick={() => onResetArray(50)} disabled={sortingState === 'running'}>Generate New Array</button>
        <button onClick={() => onAlgorithmChange('bubble')} disabled={sortingState === 'running' || sortingState === 'paused'}>Bubble Sort</button>
        <button onClick={() => onAlgorithmChange('selection')} disabled={sortingState === 'running' || sortingState === 'paused'}>Selection Sort</button>
        <button onClick={() => onAlgorithmChange('insertion')} disabled={sortingState === 'running' || sortingState === 'paused'}>Insertion Sort</button>
        <button onClick={() => onAlgorithmChange('merge')} disabled={sortingState === 'running' || sortingState === 'paused'}>Merge Sort</button>
        <button onClick={() => onAlgorithmChange('quick')} disabled={sortingState === 'running' || sortingState === 'paused'}>Quick Sort</button>
        <button onClick={() => onAlgorithmChange('heap')} disabled={sortingState === 'running' || sortingState === 'paused'}>Heap Sort</button>
        <button onClick={onPause} disabled={sortingState !== 'running'}>Pause</button>
        <button onClick={onContinue} disabled={sortingState !== 'paused'}>Continue</button>
        <button onClick={onStop} disabled={sortingState !== 'running' && sortingState !== 'paused'}>Stop</button>
        <AlgorithmPicker onAlgorithmChange={onAlgorithmChange} disabled={sortingState === 'running' || sortingState === 'paused'} />
        <Button variant="destructive">Secondary</Button>
      </div>
    </div>
  );
};

export default ControlPanel;