import './App.css';
import Card from './components/Card';

const App = () => {
  return (
    <div className="App">
      <h2>Dynamic & Customizable Card Component</h2>
      <div className="container">
        <Card 
          title={'Dynamic Card with Badge'}
          description={'This card has a customizable badge'}
          imageSrc={'https://via.placeholder.com/300'}
          badge='New!'
        />

        <Card 
          title={'Card with Multiple Buttons'}
          description={'This card has multiple customizable buttons'}
          imageSrc={'https://via.placeholder.com/300'}
          buttons={[
            {
              label: 'Save',
              onClick: () => alert('Saved'),
              style: { backgroundColor: '#4CAF50' }
            },
            {
              label: 'Delete',
              onClick: () => alert('Deleted'),
              style: { backgroundColor: '#f44336' }
            }
          ]}
        />

        <Card 
          title={'Horizontal Layout Card'}
          description={'This card has a horizontal layout'}
          imageSrc={'https://via.placeholder.com/150'}
          layout='horizontal'
        />
      </div>
    </div>
  );
};

export default App;
