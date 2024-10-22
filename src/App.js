import './App.css';
import FAB from './components/FAB';
import { AiOutlineFile, AiOutlineMessage } from 'react-icons/ai';

const App = () => {
  const actions = [
    { 
      label: 'New Task', 
      icon: <AiOutlineFile />, 
      onClick: () => alert('New Task Created'), 
      color: '#FF5722' 
    },
    { 
      label: 'New Chat', 
      icon: <AiOutlineMessage />, 
      onClick: () => alert('Starting New Chat'), 
      color: '#4CAF50' 
    }
  ];

  return (
    <div className="App">
      <h1>Floating Action Button (FAB)</h1>
      <FAB 
        icon="+"
        actions={actions}
        position={'bottom-right'}
        color={'#3171DE'}
        size={'60px'}
      />      
    </div>
  );
};

export default App;
