import PropTypes from "prop-types";
import './offcanvas.css';

const OffCanvas = ({
  isOpen,
  onClose,
  position = 'left',
  children,
  width = '160px',
  overlayColor = '#000000b3',
  transitionDuration = '0.4s',
  borderRadius = '8px',
  backgroundColor = '#fff',
  boxShadow = '0 4px 10px #0000001a'
}) => {
  return (
    <>
      {isOpen && (
        <div
          className="offcanvas-overlay"
          style={{ backgroundColor: overlayColor }}
          onClick={onClose}
        ></div>
      )}
      <div className={`offcanvas offcanvas-${position} ${isOpen ? 'open' : ''}`}
        style={{
          width,
          transitionDuration,
          backgroundColor,
          borderRadius,
          boxShadow
        }}
      >
        <button className="offcanvas-close-btn" onClick={onClose}>&times;</button>
        <div className="offcanvas-content">{children}</div>
      </div>
    </>
  )
};

OffCanvas.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  position: PropTypes.oneOf(['left', 'right']),
  width: PropTypes.string,
  overlayColor: PropTypes.string,
  transitionDuration: PropTypes.string,
  borderRadius: PropTypes.string,
  backgroundColor: PropTypes.string,
  boxShadow: PropTypes.string
};

export default OffCanvas;