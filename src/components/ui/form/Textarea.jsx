import { useId } from "react";

export default function Textarea({ label, error, ...props }) {
  const errorId = useId();

  return (
    <label className="flex flex-col">
      <span className="pb-2 text-base font-medium text-secondary dark:text-dark-text">
        {label}
      </span>

      <textarea
        {...props}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={`form-textarea min-h-40 outline-none resize-y rounded-lg border p-[15px]
          ${
            error
              ? "border-red-500 focus:border-red-500/50"
              : "border-[#dbe0e6] dark:border-[#364554] focus:border-brand-accent-hover"
          }
          bg-white  dark:bg-neutral-900/50`}
      />

      {error && (
        <span id={errorId} role="alert" className="mt-1 text-sm text-red-600">
          {error}
        </span>
      )}
    </label>
  );
}
