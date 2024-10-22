import AlgorithmPicker from "./AlgorithmPicker";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


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
    <Card>
      <center>
      <CardHeader>
        <CardTitle>Control Panel</CardTitle>
      </CardHeader>
      <CardContent>
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
      </CardContent>
      <CardContent>
        <Button className="m-1" onClick={() => onResetArray(50)} disabled={sortingState === 'running'}>Generate New Array</Button>
        <Button className="m-1" onClick={() => onAlgorithmChange('bubble')} disabled={sortingState === 'running' || sortingState === 'paused'}>Bubble Sort</Button>
        <Button className="m-1" onClick={() => onAlgorithmChange('selection')} disabled={sortingState === 'running' || sortingState === 'paused'}>Selection Sort</Button>
        <Button className="m-1" onClick={() => onAlgorithmChange('insertion')} disabled={sortingState === 'running' || sortingState === 'paused'}>Insertion Sort</Button>
      </CardContent>
      <CardContent>
        <Button className="m-1" onClick={() => onAlgorithmChange('merge')} disabled={sortingState === 'running' || sortingState === 'paused'}>Merge Sort</Button>
        <Button className="m-1" onClick={() => onAlgorithmChange('quick')} disabled={sortingState === 'running' || sortingState === 'paused'}>Quick Sort</Button>
        <Button className="m-1" onClick={() => onAlgorithmChange('heap')} disabled={sortingState === 'running' || sortingState === 'paused'}>Heap Sort</Button>
        <Button className="m-1" onClick={onPause} disabled={sortingState !== 'running'}>Pause</Button>
        <Button className="m-1" onClick={onContinue} disabled={sortingState !== 'paused'}>Continue</Button>
        <Button className="m-1" onClick={onStop} disabled={sortingState !== 'running' && sortingState !== 'paused'}>Stop</Button>
        <AlgorithmPicker className="m-1" onAlgorithmChange={onAlgorithmChange} disabled={sortingState === 'running' || sortingState === 'paused'} />
      </CardContent>
      </center>
    </Card>


  );
};

export default ControlPanel;