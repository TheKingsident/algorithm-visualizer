import React, { useEffect, useState } from 'react';
import './Visualizer.css';

function Visualizer() {
  const [array, setArray] = useState([])

  function arrayGen(size) {
    const newArray = Array.from({ length: size}, () => Math.floor(Math.random() * 500) + 5);
    console.log(newArray);
    setArray = newArray;
  }

  useEffect(() => {
    arrayGen(50);
  }, [])

  return (

    <div className="array-container">
      {array.map((value, idx) => (
        <div key={idx} className="array-bar" style={{ height: `${value}px` }}></div>
      ))}
    </div>
  );
};

export default Visualizer