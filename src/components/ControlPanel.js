import AlgorithmPicker from "./AlgorithmPicker";
import { Button } from "./ui/button";
import { Slider } from "@/components/ui/slider";
import AlgorithmInfoSheet from "./AlgorithmInfoSheet";
import { useState } from "react";
import algorithmInfo from "@/utils/algorithmInfo";


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
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const algorithmDetails = algorithmInfo[selectedAlgorithm];
  

  const handleAboutClick = () => {
    setIsSheetOpen(true);
    console.log(selectedAlgorithm);
    console.log(algorithmDetails);
  };

  return (
    <div className="flex items-end justify-center m-5 p-2 pb-5 rounded-lg border border-gray-700 bg-gray-900">
      <center>
        <div className="controls pt-5">
          <label className="text-gray-400">Animation Speed</label>
          <div className="w-full max-w-md mx-auto p-5">
            <Slider
              max={100}
              step={1}
              value={[speed]}
              onValueChange={(value) => onSpeedChange(value[0])}
              disabled={sortingState === 'running'}
            />
          </div>
        </div>
        <div >
          <AlgorithmPicker
            onAlgorithmChange={onAlgorithmChange}
            selectedAlgorithm={selectedAlgorithm}
            sortingState={sortingState}
            disabled={sortingState === 'running' || sortingState === 'paused'} />
          <Button className="m-1 bg-indigo-400 text-gray-900 hover:bg-indigo-300" onClick={onStartSorting}
            disabled={!selectedAlgorithm || sortingState === 'running' || sortingState === 'paused' || sortingState === "finished"}>
            Start Sorting
          </Button>
          <Button className="m-1 bg-indigo-400 text-gray-900 hover:bg-indigo-300" onClick={onStop} disabled={sortingState !== 'running' && sortingState !== 'paused'}>Stop</Button>
          {/*<Button className="m-1 bg-indigo-400 text-gray-900 hover:bg-indigo-300" onClick={onPause} disabled={sortingState !== 'running'}>Pause</Button>*/}
          {/*<Button className="m-1 bg-indigo-400 text-gray-900 hover:bg-indigo-300" onClick={onContinue} disabled={sortingState !== 'paused'}>Continue</Button>*/}
        </div>
        <div>
          <Button className="m-1 bg-indigo-400 text-gray-900 hover:bg-indigo-300" onClick={handleAboutClick} disabled={!selectedAlgorithm}>About Algorithm</Button>
        </div>
      </center>
      {/* Show the AlgorithmInfoSheet with the selected algorithm information */}
      {selectedAlgorithm && (
        <AlgorithmInfoSheet
          isOpen={isSheetOpen}
          onClose={() => setIsSheetOpen(false)}
          algorithmDetails={algorithmInfo[selectedAlgorithm]}
        />
      )}
    </div>
  );
};

export default ControlPanel;