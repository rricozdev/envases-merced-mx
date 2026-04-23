export default function SearchFilter({ search, onSearchChange }) {
  return (
    <div>
      <label htmlFor="search" className="block mb-2 font-medium">
        Buscar
      </label>
      <input
        id="search"
        className="px-4 py-2 w-full border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent-hover focus:border-transparent"
        type="text"
        placeholder=" 🔎 Buscar nombres, volumen..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}
