import './App.css';
import { useState } from 'react';
import Checkbox from './components/Checkbox';
import Button from './components/Button';

const App = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState('');

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!isChecked) {
      setError('You must agree to the terms before submitting.')
    } else {
      setIsChecked(!isChecked);
      alert('Form submitted successfully');
    }
  };

  return (
    <div className="App">
      <h1>Dynamic Checkbox Form</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <Checkbox 
          label="I agree to the terms and conditions"
          isChecked={isChecked}
          onChange={handleCheckboxChange}
          customStyles={{
            container: { marginBottom: '10px' },
            checkmark: { backgroundColor: isChecked ? '#3171DE' : '#ccc' },
            label: { color: isChecked ? '#3171DE' : '#333' }
          }}
        />
        {error && <p className='error-message'>{error}</p>}
        <Button label="Submit" variant="primary" type="submit" />
      </form>
    </div>
  );
};

export default App;
