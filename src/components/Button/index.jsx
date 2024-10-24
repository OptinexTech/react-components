import './button.css';

const Button = ({
  label,
  type = 'button',
  onClick,
  variant,
  customStyles,
  customClass,
  icon,
  loading
}) => {
  return (
    <>
      <button
        type={type} 
        className={`btn ${variant} ${customClass}`}
        style={customStyles}
        onClick={onClick}
        disabled={loading}
      >
        {loading ? (
          <span className="spinner"></span>
        ) : (
          icon && <span className="icon">{icon}</span>
        )}
        {label}
      </button>
    </>
  )
};

export default Button;