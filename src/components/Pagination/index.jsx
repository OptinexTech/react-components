import './pagination.css';

const Pagination = ({
  totalPages,
  currentPage,
  onPageChange
}) => {
  const pageNumbers = [];

  const maxPageDisplay = 5;
  const halfMaxPageDisplay = Math.floor(maxPageDisplay / 2);
  let startPage = Math.max(1, currentPage - halfMaxPageDisplay);
  let endPage = Math.min(totalPages, currentPage + halfMaxPageDisplay);

  if(currentPage - halfMaxPageDisplay <= 0) {
    endPage = Math.min(totalPages, endPage + (halfMaxPageDisplay - currentPage + 1));
  }

  if(totalPages - currentPage < halfMaxPageDisplay) {
    startPage = Math.max(1, startPage - (halfMaxPageDisplay - (totalPages - currentPage)));
  }

  for(let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination-container">
      <button
        className="pagination-button"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        &laquo; Prev
      </button>
      {startPage > 1 && (
        <>
          <button 
            className="pagination-number"
            onClick={() => onPageChange(1)}
          >1</button>
          {startPage > 2 && <span className="pagination-dots">...</span>}
        </>
      )}
      {pageNumbers.map((number) => (
        <button
          key={number}
          className={`pagination-number ${currentPage === number ? 'active' : ''}`}
          onClick={() => onPageChange(number)}
        >
          {number}
        </button>
      ))}
      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <span className="pagination-dots">...</span>}
          <button
            className="pagination-number"
            onClick={() => onPageChange(totalPages)}
          >
            {totalPages}
          </button>
        </>
      )}
      <button
        className="pagination-button"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next &raquo;
      </button>
    </div>
  )
};

export default Pagination;