const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const MAX_PAGES = 3;

  let startPage = Math.max(
    1,
    currentPage - Math.floor(MAX_PAGES / 2)
  );
  let endPage = startPage + MAX_PAGES - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - MAX_PAGES + 1);
  }

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className="flex justify-center items-center gap-3 mt-14">
      {/* PREVIOUS */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-5 py-2 rounded-lg border font-semibold transition
          ${
            currentPage === 1
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-white text-gray-700 hover:bg-green-100"
          }`}
      >
        Previous
      </button>

      {/* PAGE NUMBERS */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-10 h-10 rounded-lg font-semibold transition
            ${
              currentPage === page
                ? "bg-green-700 text-white"
                : "bg-white text-gray-700 hover:bg-green-100 border"
            }`}
        >
          {page}
        </button>
      ))}

      {/* NEXT */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-5 py-2 rounded-lg border font-semibold transition
          ${
            currentPage === totalPages
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-white text-gray-700 hover:bg-green-100"
          }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
