import React, { useEffect, useState } from 'react';
import { visualizeAlgorithm } from '../utils/visualizeAlgorithm';
import './Visualizer.css';

function Visualizer() {
  const [array, setArray] = useState([])

  const generateArray = (size = 50) => {
    const newArray = Array.from({ length: size }, () => Math.floor(Math.random() * 500) + 5);
    setArray(newArray);
  };

  useEffect(() => {
    generateArray();
  }, []);

  const handleSort = (sortType) => {
    visualizeAlgorithm(sortType, array);
  }

  return (
    <div className="visualizer">
      <div className="array-container">
        {array.map((value, idx) => (
          <div key={idx} className="array-bar" style={{ height: `${value}px` }}></div>
        ))}
      </div>
      <div className="button-container">
          <button onClick={() => handleSort('bubble')}>Bubble Sort</button>
          <button onClick={() => handleSort('selection')}>Selection Sort</button>
        </div>
    </div>
  );
};

export default Visualizer