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
    <Card className='bg-gray-900 text-white border-gray-700 pt-10'>
      <center>
      <CardContent>
        <div className="controls">
          <label className="text-gray-400">Animation Speed</label>
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
        <AlgorithmPicker className="m-1"
          onAlgorithmChange={onAlgorithmChange}
          selectedAlgorithm={selectedAlgorithm}
          sortingState={sortingState}
          disabled={sortingState === 'running' || sortingState === 'paused'} />
        <Button className="m-1 bg-indigo-400 text-gray-900 hover:bg-indigo-300" onClick={onStartSorting}
          disabled={!selectedAlgorithm || sortingState === 'running' || sortingState === 'paused'}>
          Start Sorting
        </Button>
        <Button className="m-1 bg-indigo-400 text-gray-900 hover:bg-indigo-300" onClick={onStop} disabled={sortingState !== 'running' && sortingState !== 'paused'}>Stop</Button>
      </CardContent>
      <CardContent>
        {/*<Button className="m-1 bg-indigo-400 text-gray-900 hover:bg-indigo-300" onClick={onPause} disabled={sortingState !== 'running'}>Pause</Button>*/}
        {/*<Button className="m-1 bg-indigo-400 text-gray-900 hover:bg-indigo-300" onClick={onContinue} disabled={sortingState !== 'paused'}>Continue</Button>*/}
      </CardContent>
      </center>
    </Card>
  );
};

export default ControlPanel;