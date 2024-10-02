const Image = ({
  src,
  alt = '',
  width = '100%',
  height = 'auto',
  borderRadius = 0,
  boxShadow = 'none',
  hoverEffect = false,
  lazy = true,
  onClick,
  style = {},
  className = ''
}) => {
  return (
    <img 
      src={src}
      alt={alt}
      loading={lazy ? 'lazy' : 'auto'}
      onClick={onClick}
      className={className}
      style={{
        width,
        height,
        borderRadius,
        boxShadow,
        transition: hoverEffect ? 'transform 0.3s ease' : '',
        transform: hoverEffect ? 'scale(1.0' : '',
        ...style
      }}
      onMouseEnter={hoverEffect ? (e) => e.target.style.transform = 'scale(1.09)' : null}
      onMouseLeave={hoverEffect ? (e) => e.target.style.transform = 'scale(1.0)' : null}
    />
  )
};

export default Image;