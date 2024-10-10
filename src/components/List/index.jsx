import { useState } from "react";
import './list.css';

const List = ({
  items = [],
  type = 'unordered',
  searchable = false,
  filterable = false,
  customStyles = {},
  emptyMessage = 'No items found'
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="list-container" style={customStyles}>
      {searchable && (
        <input 
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      )}
      {filterable && (
        <select
          onChange={(e) => setSearchTerm(e.target.value)}
          className="list-filter-select"
        >
          <option value={''}>All</option>
          <option value={'A'}>Contains A</option>
          <option value={'B'}>Contains B</option>
        </select>
      )}
      {filteredItems.length > 0 ? (
        <ul className={`list ${type}`}>
          {filteredItems.map((item, index) => (
            <li key={index} className="list-item">{item}</li>
          ))}
        </ul>
      ) : (
        <p>{emptyMessage}</p>
      )}
    </div>
  )
};

export default List;