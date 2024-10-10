import './App.css';
import List from './components/List';

const App = () => {
  const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape'];

  return (
    <div className="App">
      <h2>Dynamic & Customizable List Component</h2>
      <div className="main-container">
        <div className="container">
          <h3>Unordered List with Search</h3>
          <List items={items} type='unordered' searchable={true} />
        </div>

        <div className="container">
          <h3>Ordered List with filter</h3>
          <List items={items} type='ordered' filterable={true} />
        </div>
      </div>
    </div>
  );
};

export default App;
