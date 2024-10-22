import { useState } from "react";
import './fab.css';

const FAB = ({ icon, actions, position, color, size }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toogleFAB = () => setIsOpen(!isOpen);

  return (
    <div className={`fab-container ${position}`}>
      <button
        className="fab-button"
        style={{
          backgroundColor: color || '#3171DE',
          width: size || '56px',
          height: size || '56px'
        }}
        onClick={toogleFAB}
      >
        {icon || '+'}
      </button>
      <div className={`fab-actions ${isOpen ? 'open' : ''}`}>
        {actions.map((action, index) => (
          <button
            key={index}
            className="fab-action"
            style={{
              backgroundColor: action.color || '#fff',
              color: action.textColor || '#000'
            }}
            onClick={() => {
              action.onClick();
              setIsOpen(false);
            }}
          >
            {action.icon && <span className="fab-action-icon">{action.icon}</span>}
            <span>{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
};

export default FAB;