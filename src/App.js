import './App.css';
import Tabs from './components/Tabs';

function App() {
  const tabsData = [
    {
      label: 'Home',
      content: <p>This is the home tab content.</p>,
      icon: '🏠'
    },
    {
      label: 'Profile',
      content: <p>This is your profile tab content.</p>,
      icon: '👤',
    },
    {
      label: 'Settings',
      content: <p>This is the settings tab content.</p>,
      icon: '⚙️'
    },
  ];

  return (
    <div className="App">
      <h1>React Components</h1>
      <Tabs 
        tabs={tabsData}
        defaultActiveIndex={0}
        onTabChange={(index) => console.log(`Active tab Index: ${index}`)}
        customStyles={{
          activeTab: { backgroundColor: '#3171DE', color: 'white' },
          header: { borderBottom: '2px solid #3171DE' }
        }}
      />
    </div>
  );
};

export default App;