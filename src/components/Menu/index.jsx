import { useEffect, useRef, useCallback } from "react";
import './menu.css';

const Menu = ({ isMenuOpen, setIsMenuOpen, menuItems }) => {
  const menuRef = useRef(null);

  const handleClickOutside = useCallback((event) => {
    if(menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  },[setIsMenuOpen]);

  useEffect(() => {
    if(isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isMenuOpen, handleClickOutside]);

  return (
    <div className="menu-container" ref={menuRef}>
      {isMenuOpen && (
        <ul className={`menu-list ${isMenuOpen ? '' : 'hidden'}`}>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="menu-item"
              onClick={() => {
                setIsMenuOpen();
                item.onClick();
              }}
            >
              {item.icon && <span className="menu-item-icon">{item.icon}</span>}
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
};

export default Menu;