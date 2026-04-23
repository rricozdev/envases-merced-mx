import Checkbox from "@/components/ui/form/Checkbox";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function CategoryFilter({ title, options, selected, onToggle }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 dark:border-white/10 pb-4">
      {/* Header */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left cursor-pointer"
      >
        <h3 className="font-semibold text-text-light dark:text-text-dark">
          {title}
        </h3>

        {open ? (
          <ChevronUp className="text-gray-500" size={20} strokeWidth={3} />
        ) : (
          <ChevronDown className="text-gray-500" size={15} strokeWidth={3} />
        )}
      </button>

      {/* Content */}
      <div
        className={`
          mt-4 space-y-3 overflow-hidden transition-all duration-300
          ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        {options.map((opt) => (
          <Checkbox
            key={opt}
            label={opt}
            checked={selected.includes(opt)}
            onChange={() => onToggle(opt)}
          />
        ))}
      </div>
    </div>
  );
}
