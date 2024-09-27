import './App.css';
import { useState } from 'react';
import OffCanvas from './components/OffCanvas';
import Button from './components/Button';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="App">
      <Button label="Open Menu" variant="primary" onClick={toggleMenu} />
      <OffCanvas isOpen={isMenuOpen} onClose={toggleMenu} position='left'>
        <nav>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </nav>
      </OffCanvas>
    </div>
  );
};

export default App;
