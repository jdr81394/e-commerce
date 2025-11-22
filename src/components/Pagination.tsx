"use client";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
      {/* Page Info */}
      <div className="text-sm text-gray-600">
        Page {currentPage} of {totalPages}
      </div>

      {/* Pagination Controls */}
      <div className="flex gap-2">
        {/* First Page */}
        <button
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          className="px-3 py-2 rounded border border-gray-300 hover:border-gray-900 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer text-sm"
          title="First Page"
        >
          <i className="fa fa-angle-double-left"></i>
        </button>

        {/* Previous Page */}
        <button
          onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-2 rounded border border-gray-300 hover:border-gray-900 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          title="Previous Page"
        >
          <i className="fa fa-angle-left"></i>
        </button>

        {/* Page Numbers (limited display) */}
        {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
          let pageNum;
          if (totalPages <= 5) {
            pageNum = i + 1;
          } else if (currentPage <= 3) {
            pageNum = i + 1;
          } else if (currentPage >= totalPages - 2) {
            pageNum = totalPages - 4 + i;
          } else {
            pageNum = currentPage - 2 + i;
          }
          return (
            <button
              key={pageNum}
              onClick={() => onPageChange(pageNum)}
              className={`cursor-pointer px-3 py-2 rounded border transition ${
                currentPage === pageNum
                  ? "bg-gray-900 text-white border-gray-900"
                  : "border-gray-300 hover:border-gray-900"
              }`}
            >
              {pageNum}
            </button>
          );
        })}

        {/* Next Page */}
        <button
          onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-2 rounded border border-gray-300 hover:border-gray-900 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          title="Next Page"
        >
          <i className="fa fa-angle-right"></i>
        </button>

        {/* Last Page */}
        <button
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
          className="px-3 py-2 rounded border border-gray-300 hover:border-gray-900 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer text-sm"
          title="Last Page"
        >
          <i className="fa fa-angle-double-right"></i>
        </button>
      </div>
    </div>
  );
}
