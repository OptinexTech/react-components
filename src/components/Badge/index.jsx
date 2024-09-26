import PropTypes from 'prop-types';

const Badge = ({
  text,
  color = '#fff',
  background = '#3171DE',
  size = 'medium',
  borderRadius = '12px',
  padding,
  customStyles = {}
}) => {
  const sizeStyles = {
    small: { fontSize: '12px', padding: '3px 7px' },
    medium: { fontSize: '14px', padding: '5px 10px' },
    large: { fontSize: '16px', padding: '7px 15px' },
  };

  const badgeStyle = {
    display: 'inline-block',
    color,
    backgroundColor: background,
    borderRadius,
    padding: padding || sizeStyles[size].padding,
    fontSize: sizeStyles[size].fontSize,
    ...customStyles
  };

  return (
    <span style={badgeStyle}>{text}</span>
  )
};

Badge.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  background: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  borderRadius: PropTypes.string,
  padding: PropTypes.string,
  customStyles: PropTypes.object
};

export default Badge;