import AlgorithmPicker from "./AlgorithmPicker";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";


const ControlPanel = ({
  speed,
  onSpeedChange,
  onAlgorithmChange,
  onResetArray,
  onPause,
  onContinue,
  onStop,
  sortingState,
  selectedAlgorithm,
  onStartSorting,
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
          <div className="w-full max-w-md mx-auto pt-5">
            <Slider
              max={100} // Maximum value
              step={1} // Step value
              value={[speed]} // Controlled input
              onValueChange={(value) => onSpeedChange(value[0])} // Update speed when slider changes	
              disabled={sortingState === 'running'} // Update speed when slider changes
            />
          </div>
        </div>
      </CardContent>
      <CardContent>
        <Button className="m-1" onClick={() => onResetArray(50)} disabled={sortingState === 'running'}>Generate New Array</Button>
        <AlgorithmPicker className="m-1"
          onAlgorithmChange={onAlgorithmChange}
          selectedAlgorithm={selectedAlgorithm}
          sortingState={sortingState}
          disabled={sortingState === 'running' || sortingState === 'paused'} />
        <Button className="m-1" onClick={onStartSorting}
          disabled={!selectedAlgorithm || sortingState === 'running' || sortingState === 'paused'}>
          Start Sorting
        </Button>
      </CardContent>
      <CardContent>
        <Button className="m-1" onClick={onPause} disabled={sortingState !== 'running'}>Pause</Button>
        <Button className="m-1" onClick={onContinue} disabled={sortingState !== 'paused'}>Continue</Button>
        <Button className="m-1" onClick={onStop} disabled={sortingState !== 'running' && sortingState !== 'paused'}>Stop</Button>
        
      </CardContent>
      </center>
    </Card>


  );
};

export default ControlPanel;