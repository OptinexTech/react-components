import './App.css';
import Badge from './components/Badge';

const App = () => {
  return (
    <div className="App">
      <Badge text="new" />

      {/* Badge with custom styles */}
      <Badge
        text="Success"
        color='#fff'
        background='green'
        size='large'
        borderRadius='20px'
        customStyles={{
          fontWeight: 'bold',
          letterSpacing: '1px'
        }}
      />

      {/* Small badge with custom color and background */}
      <Badge
        text={"Info"}
        color='#000'
        background='#f0ad4e'
        size='small'
      />
    </div>
  );
};

export default App;
