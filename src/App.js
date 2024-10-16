import './App.css';
import { useState } from 'react';
import DateInput from './components/DateInput';

const App = () => {
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <div className="App">
      <h2>Dynamic Date Input Component</h2>
      <DateInput 
        label='Select Date'
        value={selectedDate}
        onDateChange={setSelectedDate}
      />
      <p>Date: {selectedDate || 'No date selected'}</p>
    </div>
  );
};

export default App;
