const ControlPanel = ({ onAlgorithmChange, onSpeedChange, onResetArray }) => {
  return (
    <div className="control-panel">
      <button onClick={() => onAlgorithmChange('bubbleSort')}>Bubble Sort</button>
      <button onClick={onResetArray}>Reset Array</button>
      <input
        type="range"
        min="10"
        max="100"
        onChange={(e) => onSpeedChange(e.target.value)}
      />
    </div>
  );
};

export default ControlPanel;