export default function Input({ label, error, ...props }) {
  return (
    <label className="flex flex-col">
      <span className="pb-2 text-base font-medium text-secondary dark:text-dark-text">
        {label}
      </span>

      <input
        {...props}
        className={`form-input h-14 rounded-lg border px-[15px] outline-none transition-colors
    ${
      error
        ? "border-red-500 focus:border-red-500/50"
        : "border-[#dbe0e6] dark:border-[#364554] focus:border-brand-accent-hover"
    }
    bg-white dark:bg-neutral-900/50`}
      />

      {error && <span className="mt-1 text-sm text-red-600">{error}</span>}
    </label>
  );
}
