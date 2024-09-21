import { useState } from "react";
import './tooltip.css';

const Tooltip = ({
  content,
  position = 'top',
  backgroundColor = '#333',
  color = '#fff',
  fontSize = '14px',
  padding = '10px',
  borderRadius = '4px',
  children
}) => {
  const [visible, setVisible] = useState(false);

  const showTooltip = () => setVisible(true);
  const hideTooltip = () => setVisible(false);

  const tooltipStyle = {
    backgroundColor,
    color,
    fontSize,
    padding,
    borderRadius
  };

  return (
    <div
      className="tooltip-wrapper"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      {visible && (
        <div className={`tooltip-box tooltip-${position}`} style={tooltipStyle}>
          {content}
        </div>
      )}
    </div>
  )
};

export default Tooltip;