import { useState, useEffect } from "react";
import './tabs.css';

const Tabs = ({
  tabs,
  defaultActiveIndex = 0,
  onTabChange,
  customStyles
}) => {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
  const [loadedTabs, setLoadedTabs] = useState([defaultActiveIndex]);

  useEffect(() => {
    if(!loadedTabs.includes(activeIndex)) {
      setLoadedTabs([...loadedTabs, activeIndex]);
    }
  }, [activeIndex]);

  const handleTabClick = (index) => {
    setActiveIndex(index);
    if(onTabChange) {
      onTabChange(index);
    }
  }

  return (
    <div className="tabs-container" style={customStyles?.container}>
      <div className="tabs-header" style={customStyles?.header}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab-item ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
            style={index === activeIndex ? customStyles?.activeTab : {}}
          >
            {tab.icon && <span className="tab-icon">{tab.icon}</span>}
            {tab.label}
          </div>
        ))}
      </div>
      <div className="tabs-content">
        {loadedTabs.includes(activeIndex) && tabs[activeIndex].content}
      </div>
    </div>
  )
};

export default Tabs;