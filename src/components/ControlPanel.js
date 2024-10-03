const ControlPanel = ({ speed, onSpeedChange, onAlgorithmChange,  onResetArray }) => {
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
          onChange={(e) => onSpeedChange(e.target.value)} // Update speed when slider changes
        />
      </div>
      <div className="button-container">
        <button onClick={() => onResetArray(150)}>Generate New Array</button>
        <button onClick={() => onAlgorithmChange('bubble')}>Bubble Sort</button>
        <button onClick={() => onAlgorithmChange('selection')}>Selection Sort</button>
        <br></br>
      </div>
    </div>
  );
};

export default ControlPanel;