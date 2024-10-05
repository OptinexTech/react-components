import './placeholder.css';

const Placeholder = ({
  type = 'text',
  width = '100%',
  height = '20px',
  backgroundColor = '#e0e0e0',
  borderRadius = '4px',
  customStyles = {},
  text = '',
  imageSrc = '',
  isLoading = true
}) => {
  if(!isLoading) return null;

  return (
    <div
      className={`placeholder-container placeholder-${type}`}
      style={{
        width,
        height,
        backgroundColor,
        borderRadius,
        ...customStyles
      }}
    >
      {type === 'text' && text && 
        <span className='placeholder-text'>{text}</span>
      }
      {type === 'image' && imageSrc &&
        <img src={imageSrc} alt="Placeholder" className='placeholder-image' />
      }
    </div>
  )
};

export default Placeholder;