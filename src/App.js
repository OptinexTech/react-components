import './App.css';
import Spinner from './components/Spinner';
import { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [btnLoading, setBtnLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setData({
        title: 'Demo',
        body: 'this is sample data'
      });
      setLoading(false);
    }, 5000);
  }, []);

  const handleClick = () => {
    setBtnLoading(true);
    setTimeout(() => {
      setBtnLoading(false);
      alert('Button clicked');
    }, 2000);
  };

  return (
    <div className="App">
      {loading ? (
        <Spinner size={40} color="#3171DE" />
      ) : (
        <div>
          <h2>Data Loaded</h2>
          <p><strong>Title:</strong> {data.title}</p>
          <p><strong>Body:</strong> {data.body}</p>
          <button className="loading-button" onClick={handleClick} disabled={btnLoading}>
            {btnLoading ? <Spinner size={16} color="#fff" /> : 'Submit'}
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
