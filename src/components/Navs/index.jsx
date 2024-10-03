import './navs.css';

const Navs = ({
  items = [],
  orientation = 'horizontal',
  backgroundColor = '#fff',
  textColor = '#000',
  activeColor = '#3171DE',
  hoverEffect = false,
  borderRadius = 0,
  boxShadow = 'none',
  onClick,
  activeItem = '',
  style = {},
  className = ''
}) => {
  return (
    <nav
      className={`nav-container ${orientation} ${className}`}
      style={{
        backgroundColor,
        borderRadius,
        boxShadow,
        ...style
      }}
    >
      <ul className="nav-list">
        {items.map((item, index) => (
          <li
            key={index}
            className={`nav-item ${activeItem === item.name ? 'active' : ''}`}
            onClick={() => onClick && onClick(item)}
            style={{
              color: activeItem === item.name ? activeColor : textColor,
              transition: hoverEffect ? 'background-color 0.3s, transform 0.3s' : ''
            }}
            onMouseEnter={hoverEffect ? (e) => e.target.style.transform = 'scale(1.05)' : null}
            onMouseLeave={hoverEffect ? (e) => e.target.style.transform = 'scale(1)' : null}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </nav>
  )
};

export default Navs;