import './App.css';
import { useState, useEffect } from 'react';
import ProgressBar from './components/ProgressBar';

const App = () => {
  const [progress, setProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const startUpload = () => {
    setProgress(0);
    setIsUploading(true); // Set to true to start uploading
  };

  useEffect(() => {
    if (isUploading && progress < 100) {
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(interval);
            setIsUploading(false);
            return 100;
          }
          return prevProgress + 10; // Increment progress by 10
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isUploading, progress]);

  return (
    <div className="App">
      <h1>File Upload Progress Simulation</h1>
      {progress < 100 ? (
        <>
          <ProgressBar 
            progress={progress}
            color='green'
            height='14px'
          />
          <p>Upload Progress: {progress}%</p> {/* Show progress as a percentage */}
        </>
      ) : (
        <p>Upload Complete!</p>
      )}
      <button onClick={startUpload} disabled={isUploading && progress < 100}>
        {isUploading ? progress < 100 ? 'Uploading...' : 'Reupload' : 'Start Upload'}
      </button>
    </div>
  );
};

export default App;
