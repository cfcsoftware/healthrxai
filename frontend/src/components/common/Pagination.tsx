import React from "react";

type PaginationProps = {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-between items-center mt-8">
      <div className="text-sm text-gray-600">
        Showing{" "}
        <span className="font-semibold">
          {totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1}
        </span>{" "}
        to{" "}
        <span className="font-semibold">
          {Math.min(currentPage * itemsPerPage, totalItems)}
        </span>{" "}
        of <span className="font-semibold">{totalItems}</span> items
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded-md text-sm font-medium border ${
            currentPage === 1
              ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
          } transition`}
        >
          Previous
        </button>

        <span className="text-gray-700 text-sm font-medium">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded-md text-sm font-medium border ${
            currentPage === totalPages
              ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
          } transition`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
