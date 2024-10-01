import React, { useEffect, useState } from 'react';
import { visualizeAlgorithm } from '../utils/visualizeAlgorithm';
import './Visualizer.css';

function Visualizer() {
  const [array, setArray] = useState([])
  const [speed, setSpeed] = useState(50);

  const generateArray = (size = 50) => {
    const newArray = Array.from({ length: size }, () => Math.floor(Math.random() * 500) + 5);
    console.log(newArray);
    setArray(newArray);
  };

  useEffect(() => {
    generateArray();
  }, []);

  const handleSort = (sortType) => {
    visualizeAlgorithm(sortType, array, 100 - speed);
  }

  const onSpeedChange = (value) => {
    setSpeed(Number(value));
  }

  return (
    <div className="visualizer">
      <div className="array-container">
        {array.map((value, idx) => (
          <div key={idx} className="array-bar" style={{ height: `${value}px` }}></div>
        ))}
      </div>
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
        <button onClick={() => generateArray()}>Generate New Array</button>
        <button onClick={() => handleSort('bubble')}>Bubble Sort</button>
        <button onClick={() => handleSort('selection')}>Selection Sort</button>
        <br></br>
      </div>
    </div>
  );
};

export default Visualizer