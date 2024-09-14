import './App.css';
import Button from './components/Button/Button';
import Toast from './components/Toast/Toast';
import { useState } from 'react';

function App() {
  const [toast, setToast] = useState(null);

  const showToast = (message, type) => {
    setToast({message, type});
  };

  const removeToast = () => {
    setToast(null);
  };

  return (
    <div className="App">
      <h1>React Components</h1>
      <div className="buttonFlex">
        <Button 
          label="info"
          variant="primary"
          onClick={() => showToast("info toast", "info")}
        />
        <Button 
          label="error"
          variant="secondary"
          onClick={() => showToast("error toast", "error")}
        />
      </div>
      {toast && (
        <Toast 
          message={toast.message}
          type={toast.type}
          duration={3000}
          onClose={removeToast}
        />
      )}
    </div>
  );
};

export default App;