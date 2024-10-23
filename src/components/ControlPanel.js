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
          <label>Animation Speed</label>
          <div className="w-full max-w-md mx-auto pt-5">
            <Slider
              max={100}
              step={1}
              value={[speed]}
              onValueChange={(value) => onSpeedChange(value[0])}
              disabled={sortingState === 'running'}
            />
          </div>
        </div>
      </CardContent>
      <CardContent>
        <Button className="m-1 bg-teal-700 text-white hover:bg-teal-600" onClick={() => onResetArray(50)} disabled={sortingState === 'running'}>Generate New Array</Button>
        <AlgorithmPicker className="m-1"
          onAlgorithmChange={onAlgorithmChange}
          selectedAlgorithm={selectedAlgorithm}
          sortingState={sortingState}
          disabled={sortingState === 'running' || sortingState === 'paused'} />
        <Button className="m-1 bg-teal-700 text-white hover:bg-teal-600" onClick={onStartSorting}
          disabled={!selectedAlgorithm || sortingState === 'running' || sortingState === 'paused'}>
          Start Sorting
        </Button>
      </CardContent>
      <CardContent>
        <Button className="m-1 bg-teal-700 text-white hover:bg-teal-600" onClick={onPause} disabled={sortingState !== 'running'}>Pause</Button>
        <Button className="m-1 bg-teal-700 text-white hover:bg-teal-600" onClick={onContinue} disabled={sortingState !== 'paused'}>Continue</Button>
        <Button className="m-1 bg-teal-700 text-white hover:bg-teal-600" onClick={onStop} disabled={sortingState !== 'running' && sortingState !== 'paused'}>Stop</Button>
        
      </CardContent>
      </center>
    </Card>
  );
};

export default ControlPanel;