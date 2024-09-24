import './App.css';
import { useState } from 'react';
import Pagination from './components/Pagination';

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 8;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <h1>Dynamic Pagination in React</h1>
      <div>
        <p>Displaying page {currentPage} content here</p>
      </div>
      <Pagination 
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;
