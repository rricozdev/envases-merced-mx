export default function IndustryFilter({ industry, onChange }) {
  const valuesOptions = [
    { value: "all", label: "Todas las industrias" },
    { value: "food", label: "Alimentos y Bebidas" },
    { value: "cosmetics", label: "Cosmética y Cuidado Personal" },
    { value: "pharma", label: "Farmacéutica" },
    { value: "chemical", label: "Química e Industrial" },
    { value: "home", label: "Hogar y Limpieza" },
  ];

  return (
    <div>
      <h3 className="font-semibold text-text-light dark:text-text-dark mb-4">
        Industria
      </h3>
      <select
        value={industry}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md outline-0 border dark:bg-bgdark-secondary border-gray-300 dark:border-dark-border shadow-sm  focus:ring-brand-accent py-3 px-2 cursor-pointer"
        aria-label="Selector de industria"
      >
        {valuesOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
