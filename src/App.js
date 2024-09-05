import './App.css';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import { useState } from 'react';

function App() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleSubmitButton = () => {
    alert(`Email is ${email}`);
  };

  const handleCancelButton = () => {
    setEmail('');
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(validateEmail(e.target.value) ? '' : 'Invalid email address');
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  return (
    <div className="App">
      <h1>React Components</h1>
      <div className="inputFlex">
        <Input 
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          errorMessage={emailError}
          customStyles={{ width: '300px' }}
        />
      </div>
      <div className="buttonFlex">
        <Button 
          label="submit"
          variant="primary"
          onClick={handleSubmitButton}
          loading={loading}
        />
        <Button 
          label="cancel"
          variant="secondary"
          onClick={handleCancelButton}
        />
      </div>
    </div>
  );
};

export default App;
