"use client";

export default function Button({
  className = "",
  type = "primary", // 🔥 antes "type"
  variant = "solid",
  size = "md",
  shape = "rounded",
  fullWidth = false,
  iconOnly = false,
  onClick,
  children,
  disabled = false,
  icon,
  iconPosition = "left",
  htmlType = "button", // 🔥 estándar
  loading = false,
  ariaLabel,
}) {
  const isOnlyIcon = iconOnly || (!children && icon);

  // 🎨 COLORS
  const colors = {
    primary: {
      solid: "bg-brand-accent hover:bg-brand-accent-hover text-white",
      outline:
        "border-2 border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white",
      ghost:
        "text-brand-accent hover:bg-brand-accent/10 dark:hover:bg-white/10",
    },
    secondary: {
      solid: "bg-brand-primary hover:opacity-90 text-white",
      outline:
        "border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white dark:text-white dark:border-white/80",
      ghost:
        "text-brand-primary hover:bg-brand-primary/10 dark:text-white dark:hover:bg-white/10",
    },
    danger: {
      solid: "bg-red-500 hover:bg-red-600 text-white",
      outline:
        "border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white",
      ghost: "text-red-500 hover:bg-red-500/10",
    },
  };

  // 📏 SIZES
  const sizes = {
    sm: isOnlyIcon ? "h-8 w-8 text-xs" : "h-8 px-3 text-xs",
    md: isOnlyIcon ? "h-10 w-10 text-sm" : "h-10 px-4 text-sm",
    lg: isOnlyIcon ? "h-12 w-12 text-base" : "h-12 px-6 text-base",
  };

  // 🔲 SHAPES
  const shapes = {
    rounded: "rounded-lg",
    square: "rounded-none",
    circle: "rounded-full",
  };

  // 🧱 BASE
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 " +
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 " +
    "disabled:opacity-50 disabled:pointer-events-none";

  // 📐 WIDTH
  let widthClass = "";
  if (fullWidth) widthClass = "w-full";
  else if (!isOnlyIcon) widthClass = "w-full sm:w-auto";

  // ⏳ LOADING STATE
  const loadingStyles = loading ? "pointer-events-none opacity-70" : "";

  return (
    <button
      type={htmlType}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        ${baseStyles}
        ${colors[type][variant]}
        ${sizes[size]}
        ${shapes[shape]}
        ${widthClass}
        ${loadingStyles}
        ${className}
      `}
      aria-label={isOnlyIcon ? ariaLabel || "Botón" : undefined}
    >
      {loading ? (
        <span className="animate-spin">⏳</span>
      ) : isOnlyIcon ? (
        icon || children
      ) : (
        <>
          {icon && iconPosition === "left" && <span>{icon}</span>}
          <span className="truncate">{children}</span>
          {icon && iconPosition === "right" && <span>{icon}</span>}
        </>
      )}
    </button>
  );
}
