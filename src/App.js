import './App.css';
import { useState } from 'react';
import Button from './components/Button';
import Menu from './components/Menu';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Profile', onClick: () => alert('Profile clicked'), icon: '👤' },
    { label: 'Settings', onClick: () => alert('Settings clicked'), icon: '⚙️' },
    { label: 'Logout', onClick: () => alert('Logout clicked'), icon: '🚪' },
  ];
 
  return (
    <div className="App">
      <h2>Dynamic Menu Component</h2>
      <Button
        label="Open Menu"
        variant={'primary'}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
      <Menu 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        menuItems={menuItems}
      />
    </div>
  );
};

export default App;
