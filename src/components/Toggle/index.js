import { useState } from "react";
import './toggle.css';

const Toggle = ({
  label,
  initial = false,
  onToggle,
  onColor = '#28a745',
  offColor = '#ccc',
  size,
  disabled = false
}) => {
  const [isToggled, setIsToggled] = useState(initial);

  const handleToggle = () => {
    if(!disabled) {
      setIsToggled(!isToggled);
      if(onToggle) {
        onToggle(!isToggled);
      }
    }
  };

  const sizeClasses = {
    small: 'toggle-small',
    medium: 'toggle-medium',
    large: 'toggle-large'
  };

  return (
    <div className={`toggle-container ${sizeClasses[size]} ${disabled ? 'toggle-disabled' : ''}`}>
      {label && <label className="toggle-label">{label}</label>}
      <div className={`toggle-switch ${isToggled ? 'toggled' : ''}`}
        onClick={handleToggle}
        style={{
          backgroundColor: isToggled ? onColor : offColor,
          opacity: disabled ? 0.6 : 1,
          cursor: disabled ? 'not-allowed' : 'pointer'
        }}
      >
        <div className="toggle-thumb"></div>
      </div>
    </div>
  )
};

export default Toggle;