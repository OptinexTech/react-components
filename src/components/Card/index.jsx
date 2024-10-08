import './card.css';

const Card = ({
  title,
  description,
  imageSrc,
  backgroundColor = '#fff',
  textColor = '#000',
  borderRadius = '10px',
  boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)',
  customStyles = {},
  buttons = [],
  badge = '',
  layout = 'vertical',
  theme = 'light'
}) => {
  return (
    <div
      className={`card-container card-layout-${layout} card-theme-${theme}`}
      style={{
        backgroundColor,
        color: textColor,
        borderRadius,
        boxShadow,
        ...customStyles
      }}
    >
      {badge && (
        <div className="card-badge">
          {typeof badge === 'string' ? badge : <img src={badge} alt="badge" />}
        </div>
      )}
      <img src={imageSrc} alt={title} className='card-image' />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="button-group">
          {buttons.map((button, index) => (
            <button
              key={index}
              className='card-button'
              onClick={button.onClick}
              style={button.style}
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
};

export default Card;