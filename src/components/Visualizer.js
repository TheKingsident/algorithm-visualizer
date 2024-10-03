import React, { useEffect, useState } from 'react';
import { visualizeAlgorithm } from '../utils/visualizeAlgorithm';
import './Visualizer.css';
import ControlPanel from './ControlPanel';

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

  const onAlgorithmChange = (sortType) => {
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
      <ControlPanel
        speed={speed}
        onSpeedChange={onSpeedChange} 
        onResetArray={generateArray} 
        onAlgorithmChange={onAlgorithmChange} />
    </div>
  );
};

export default Visualizer