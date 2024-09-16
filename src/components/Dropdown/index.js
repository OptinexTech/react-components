import { useState, useRef, useEffect } from "react";
import './dropdown.css';

const Dropdown = ({
  options,
  selected,
  onChange,
  placeholder = "select an option"
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchItem, setSearchItem] = useState('');
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if(dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, []);

  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchItem.toLowerCase())
  );

  const handleOptionClick = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
        {selected || placeholder}
        <span className={`dropdown-icon ${isOpen ? 'open' : ''}`}>&#x25BC;</span>
      </div>
      {isOpen && (
        <div className="dropdown-body">
          <input 
            type="text"
            className="dropdown-search"
            placeholder="Search..."
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
          />
          <div className="dropdown-options">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => (
                <div
                  key={index}
                  className={`dropdown-option ${option === selected ? 'selected' : ''}`}
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </div>
              ))
            ): (
              <div className="dropdown-no-options">No options found</div>
            )}
          </div>
        </div>
      )}
    </div>
  )
};

export default Dropdown;