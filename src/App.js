import './App.css';
import Image from './components/Image';

const App = () => {
  return (
    <div className="App">
      <h2>Dynamic & Customizable Image component Demo</h2>

      <Image 
        src="https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="Product Name"
        width='240px'
        height='240px'
        borderRadius={'10px'}
        hoverEffect={true}
        lazy={true}
      />

      <Image 
        src="https://images.pexels.com/photos/2204539/pexels-photo-2204539.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="User Avatar"
        width='150px'
        height='150px'
        borderRadius={'50%'}
        boxShadow='0 4px 8px rgba(0, 0, 0, 0.1)'
        hoverEffect={false}
        lazy={false}
        onClick={() => alert('Profile picture clicked')}
      />
    </div>
  );
};

export default App;
