import React, { useState } from 'react';
import ReactDOM from 'react-dom';

export const TrafficLight = () => {
  const [color, setColor] = useState('red');

  const handleClick = (newColor) => {
    setColor(newColor);
  };

  return (
    <div className="traffic-light">
      <div
        className={`light red ${color === 'red' ? 'glow' : ''}`}
        onClick={() => handleClick('red')}
      />
      <div
        className={`light yellow ${color === 'yellow' ? 'glow' : ''}`}
        onClick={() => handleClick('yellow')}
      />
      <div
        className={`light green ${color === 'green' ? 'glow' : ''}`}
        onClick={() => handleClick('green')}
      />
    </div>
  );
};
