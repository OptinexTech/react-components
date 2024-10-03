import './App.css';
import { useState } from 'react';
import Navs from './components/Navs';

const App = () => {
  const horizontalNavItems = [
    { name: 'Home', link: '/' },
    { name: 'About Us', link: '/about' },
    { name: 'Services', link: '/services' },
    { name: 'Contact Us', link: '/contact' },
  ];
  
  const verticalNavItems = [
    { name: 'Dashboard', link: '/dashboard' },
    { name: 'Profile', link: '/profile' },
    { name: 'Settings', link: '/settings' },
    { name: 'Logout', link: '/logout' },
  ];

  const [activeHorNav, setActiveHorNav] = useState('Home');
  const [activeVerNav, setActiveVerNav] = useState('Dashboard');
  
  return (
    <div className="App">
      <h2>Dynamic & Customizable Navigation Demo with Active State</h2>

      <Navs 
        items={horizontalNavItems}
        orientation='horizontal'
        backgroundColor='#f8f8f8'
        textColor='#333'
        activeColor='white'
        hoverEffect={true}
        borderRadius={'10px'}
        onClick={(item) => setActiveHorNav(item.name)}
        activeItem={activeHorNav}
      />

      <Navs 
        items={verticalNavItems}
        orientation='vertical'
        backgroundColor='#fff'
        textColor='#3171DE'
        activeColor='white'
        hoverEffect={true}
        borderRadius={'10px'}
        onClick={(item) => setActiveVerNav(item.name)}
        activeItem={activeVerNav}
      />
    </div>
  );
};

export default App;
