import './App.css';
import Dropdown from './components/Dropdown';
import { useState } from 'react';

function App() {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = ['React', 'Vue', 'Angular', 'Nextjs', 'Nuxtjs', 'Nestjs'];

  return (
    <div className="App">
      <h1>React Components</h1>
      <div className="container">
        <Dropdown 
          options={options}
          selected={selectedOption}
          onChange={setSelectedOption}
          placeholder='Choose a framework'
        />
        {selectedOption && <p>You selected: {selectedOption}</p>}
      </div>
    </div>
  );
};

export default App;