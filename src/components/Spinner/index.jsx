import './spinner.css';

const Spinner = ({
  size,
  color
}) => {
  return (
    <div 
      className="spinner"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        border: `4px solid ${color}40`,
        borderTop: `4px solid ${color}`
      }}
    >
    </div>
  )
};

export default Spinner;