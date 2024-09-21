import './App.css';
import Tooltip from './components/Tooltip';

const App = () => {
  return (
    <div className="App">
      <h1>Dynamic Tooltip Demo</h1>
      <Tooltip
        content={'This is a tooltip'}
        position='top'
        backgroundColor='black'
        color='white'
        fontSize='16px'
        padding='10px'
        borderRadius='8px'
      >
        <button>Hover me</button>
      </Tooltip>
      <Tooltip
        content={'Another tooltip on right'}
        position='right'
      >
        <span>Hover over this</span>
      </Tooltip>
    </div>
  );
};

export default App;
