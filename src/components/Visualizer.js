import React, { useEffect, useState, useRef } from 'react';
import { visualizeAlgorithm } from '../utils/visualizeAlgorithm';
import './Visualizer.css';
import ControlPanel from './ControlPanel';

function Visualizer() {
  const [array, setArray] = useState([]);
  const [speed, setSpeed] = useState(50);
  const [sortingState, setSortingState] = useState('stopped');
  const animationRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0);

  const generateArray = (size = 50) => {
    const newArray = Array.from({ length: size }, () => Math.floor(Math.random() * 500) + 5);
    console.log(newArray);
    setArray(newArray);
    setSortingState('stopped');
    setCurrentIndex(0);
  };

  useEffect(() => {
    generateArray();
  }, []);

  const onAlgorithmChange = (sortType) => {
    setSortingState('running');
    visualizeAlgorithm(
      sortType,
      array,
      100 - speed,
      currentIndex,
      setCurrentIndex,
      animationRef,
      () => {
        setSortingState('stopped'); // Reset to 'stopped' when sorting is done
  });
  };

  const onSpeedChange = (value) => {
    setSpeed(Number(value));
  };

  const onPause = () => {
    if (sortingState === 'running') {
      clearTimeout(animationRef.current);
      setSortingState('paused');
    }
  };

  const onContinue = (sortType) => {
    if (sortingState === 'paused') {
      setSortingState('running');
      visualizeAlgorithm(
        sortType,       // Continue with the previously selected algorithm
        array,
        100 - speed,
        currentIndex,
        setCurrentIndex,
        animationRef,
        () => {
          setSortingState('stopped');
        }
      );
    }
  };

  const onStop = () => {
    clearTimeout(animationRef.current);
    setSortingState('stopped');
    setCurrentIndex(0);
    animationRef.current = null;
    generateArray();
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
      />
    </div>
  );
};

export default Visualizer