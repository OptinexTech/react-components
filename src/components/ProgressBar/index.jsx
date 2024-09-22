import React from 'react';
import './progress.css';

const ProgressBar = ({ progress, color = 'blue', height = '20px' }) => {
  const progressStyle = {
    width: `${progress}%`,
    backgroundColor: color,
    height: height,
  };

  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={progressStyle}></div>
    </div>
  );
};

export default ProgressBar;
