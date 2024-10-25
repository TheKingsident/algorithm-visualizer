"use client";

import React, { useEffect, useState } from 'react';
import { visualizeAlgorithm } from '../utils/visualizeAlgorithm';
import './Visualizer.css';
import ControlPanel from './ControlPanel';

function Visualizer() {
  const [array, setArray] = useState([]);
  const [speed, setSpeed] = useState(60);
  const [sortingState, setSortingState] = useState('stopped');
  const [timeouts, setTimeouts] = useState([]); 
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sortType, setSortType] = useState(null);

  const generateArray = (size = 100) => {
    const newArray = Array.from({ length: size }, () => Math.floor(Math.random() * 500) + 5);
    setArray(newArray);
    setSortingState('stopped');
    setCurrentIndex(0);
    clearAllTimeouts();  // Make sure to clear any running timeouts on new array generation
  };

  useEffect(() => {
    generateArray();
  }, []);

  const clearAllTimeouts = () => {
    timeouts.forEach(timeoutId => clearTimeout(timeoutId));
    setTimeouts([]);
  };

  const onAlgorithmChange = (selectedAlgorithm) => {
    setSortType(selectedAlgorithm);
    generateArray();
  };

  const onStartSorting = () => {
    if (sortType) {
      setSortingState('running');
      const newTimeouts = visualizeAlgorithm(
        sortType,
        array,
        100 - speed,
        currentIndex,
        setCurrentIndex, 
        (completed) => {
          if (completed) {
            setSortingState('stopped');
          }
        }
      );
      setTimeouts(newTimeouts);
    }
  };

  const onSpeedChange = (value) => {
    setSpeed(Number(value));
  };

  const onPause = () => {
    if (sortingState === 'running') {
      clearAllTimeouts();  // Pause by clearing timeouts
      setSortingState('paused');
    }
  };

  const onContinue = () => {
    if (sortingState === 'paused') {
      setSortingState('running');
      const newTimeouts = visualizeAlgorithm(
        sortType,
        array,
        100 - speed,
        currentIndex,
        setCurrentIndex, 
        (completed) => {
          if (completed) {
            setSortingState('stopped');
          }
        }
      );
      setTimeouts(newTimeouts);
    }
  };

  const onStop = () => {
    clearAllTimeouts();  // Stop by clearing all timeouts
    setSortingState('stopped');
    setCurrentIndex(0);
    setSortType(null);
    generateArray();  // Reset to a new array
  };

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
        onAlgorithmChange={onAlgorithmChange}
        onPause={onPause}
        onContinue={onContinue}
        onStop={onStop}
        sortingState={sortingState}
        selectedAlgorithm={sortType}
        onStartSorting={onStartSorting}
      />
    </div>
  );
}

export default Visualizer;