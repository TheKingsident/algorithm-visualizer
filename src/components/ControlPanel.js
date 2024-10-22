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
        <Button onClick={() => onResetArray(50)} disabled={sortingState === 'running'}>Generate New Array</Button>
        <Button onClick={() => onAlgorithmChange('bubble')} disabled={sortingState === 'running' || sortingState === 'paused'}>Bubble Sort</Button>
        <Button onClick={() => onAlgorithmChange('selection')} disabled={sortingState === 'running' || sortingState === 'paused'}>Selection Sort</Button>
        <Button onClick={() => onAlgorithmChange('insertion')} disabled={sortingState === 'running' || sortingState === 'paused'}>Insertion Sort</Button>
        <Button onClick={() => onAlgorithmChange('merge')} disabled={sortingState === 'running' || sortingState === 'paused'}>Merge Sort</Button>
        <Button onClick={() => onAlgorithmChange('quick')} disabled={sortingState === 'running' || sortingState === 'paused'}>Quick Sort</Button>
        <Button onClick={() => onAlgorithmChange('heap')} disabled={sortingState === 'running' || sortingState === 'paused'}>Heap Sort</Button>
        <Button onClick={onPause} disabled={sortingState !== 'running'}>Pause</Button>
        <Button onClick={onContinue} disabled={sortingState !== 'paused'}>Continue</Button>
        <Button onClick={onStop} disabled={sortingState !== 'running' && sortingState !== 'paused'}>Stop</Button>
        <AlgorithmPicker onAlgorithmChange={onAlgorithmChange} disabled={sortingState === 'running' || sortingState === 'paused'} />
        <Button variant="destructive">Secondary</Button>
      </div>
    </div>
  );
};

export default ControlPanel;