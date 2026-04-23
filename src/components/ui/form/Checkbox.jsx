export default function Checkbox({ label, checked, onChange }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-5 w-5 rounded border-gray-300 text-txtligth-primary dark:text-txtdark-primary focus:text-brand-accent-hover cursor-pointer hover:text-txtligth-primary/90 dark:hover:text-txtdark-primary/90"
      />
      <span className="group-hover:text-primary transition-colors">
        {label}
      </span>
    </label>
  );
}
