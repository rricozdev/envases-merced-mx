function getVisiblePages(currentPage, totalPages, maxVisible = 5) {
  const half = Math.floor(maxVisible / 2);

  let start = Math.max(currentPage - half, 1);
  let end = start + maxVisible - 1;

  if (end > totalPages) {
    end = totalPages;
    start = Math.max(end - maxVisible + 1, 1);
  }

  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const visiblePages = getVisiblePages(currentPage, totalPages);

  return (
    <nav
      className="mt-16 flex justify-center"
      aria-label="Paginación de productos"
    >
      <ul className="inline-flex items-center rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden text-sm">
        {/* ← Anterior */}
        <li>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Página anterior"
            className=" cursor-pointerpx-3 sm:px-4 h-10 font-medium text-gray-500 bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-bgdark-secondary dark:text-gray-400 dark:hover:bg-gray-700 cursor-pointer"
          >
            ‹
          </button>
        </li>

        {/* Primera página + … */}
        {visiblePages[0] > 1 && (
          <>
            <li className="hidden sm:block">
              <button
                onClick={() => onPageChange(1)}
                className="px-4 h-10 font-medium text-gray-500 bg-white hover:bg-gray-100 dark:bg-bgdark-secondary dark:text-gray-400 dark:hover:bg-gray-700
                cursor-pointer"
              >
                1
              </button>
            </li>
            <li className="hidden sm:flex items-center px-3 text-gray-400">
              …
            </li>
          </>
        )}

        {/* Páginas visibles */}
        {visiblePages.map((page) => (
          <li key={page}>
            <button
              onClick={() => onPageChange(page)}
              aria-current={currentPage === page ? "page" : undefined}
              className={`px-3 sm:px-4 h-10 font-medium transition-colors ${
                currentPage === page
                  ? "bg-txtligth-primary text-white dark:bg-brand-primary"
                  : "text-gray-500 bg-white hover:bg-gray-100 dark:bg-bgdark-secondary dark:text-gray-400 dark:hover:bg-gray-700 cursor-pointer"
              }`}
            >
              {page}
            </button>
          </li>
        ))}

        {/* … + última página */}
        {visiblePages.at(-1) < totalPages && (
          <>
            <li className="hidden sm:flex items-center px-3 text-gray-400">
              …
            </li>
            <li className="hidden sm:block">
              <button
                onClick={() => onPageChange(totalPages)}
                className="px-4 h-10 font-medium text-gray-500 bg-white hover:bg-gray-100 dark:bg-bgdark-secondary dark:text-gray-400 dark:hover:bg-gray-700 cursor-pointer"
              >
                {totalPages}
              </button>
            </li>
          </>
        )}

        {/* Siguiente → */}
        <li>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Página siguiente"
            className="px-3 sm:px-4 h-10 font-medium text-gray-500 bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-bgdark-secondary dark:text-gray-400 dark:hover:bg-gray-700 cursor-pointer"
          >
            ›
          </button>
        </li>
      </ul>
    </nav>
  );
}
