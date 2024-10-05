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
      <div className="button-container">
        <button onClick={() => onResetArray(50)} disabled={sortingState === 'running'}>Generate New Array</button>
        <button onClick={() => onAlgorithmChange('bubble')} disabled={sortingState === 'running' || sortingState === 'paused'}>Bubble Sort</button>
        <button onClick={() => onAlgorithmChange('selection')} disabled={sortingState === 'running' || sortingState === 'paused'}>Selection Sort</button>
        <button onClick={onPause} disabled={sortingState !== 'running'}>Pause</button>
        <button onClick={onContinue} disabled={sortingState !== 'paused'}>Continue</button>
        <button onClick={onStop} disabled={sortingState !== 'running' && sortingState !== 'paused'}>Stop</button>
      </div>
    </div>
  );
};

export default ControlPanel;