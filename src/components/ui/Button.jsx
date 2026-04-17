export default function Button({
  className = "",
  type = "primary",
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
  HtmlType = "button",
}) {
  const isOnlyIcon = iconOnly || (!children && icon);

  const colors = {
    primary: {
      solid: "bg-brand-accent hover:bg-brand-accent-hover text-white",
      outline:
        "border-2 border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white",
      ghost:
        "text-brand-accent hover:bg-brand-accent/10 dark:hover:bg-white-300/10 dark:hover:text-white/90",
    },
    secondary: {
      solid: "bg-brand-primary hover:opacity-90 text-white",
      outline:
        "border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white dark:text-white dark:border-white/80 dark:hover:border-brand-primary",
      ghost:
        "text-brand-primary hover:bg-brand-primary/10 dark:text-white dark:hover:bg-white/10 dark:hover:text-white/90",
    },
  };

  const sizes = {
    sm: isOnlyIcon
      ? "h-8 w-8 sm:h-9 sm:w-9 text-xs sm:text-sm"
      : "h-8 px-3 text-xs sm:h-9 sm:px-4 sm:text-sm",
    md: isOnlyIcon
      ? "h-9 w-9 sm:h-11 sm:w-11 text-sm sm:text-base"
      : "h-9 px-4 text-sm sm:h-11 sm:px-6 sm:text-base",
    lg: isOnlyIcon
      ? "h-11 w-11 sm:h-13 sm:w-13 text-base sm:text-lg"
      : "h-11 px-5 text-base sm:h-13 sm:px-8 sm:text-lg",
  };

  const shapes = {
    rounded: "rounded-lg",
    square: "rounded-none",
    circle: "rounded-full",
  };

  const baseStyles =
    "flex items-center justify-center gap-2 cursor-pointer overflow-hidden font-bold transition-all active:scale-95";

  let widthClass = "";

  if (fullWidth) {
    widthClass = "w-full";
  } else if (isOnlyIcon) {
    widthClass = ""; // 🔥 evita w-full
  } else {
    widthClass = "w-full sm:w-auto sm:min-w-[120px] sm:max-w-[480px]";
  }

  const disabledStyles = disabled
    ? "opacity-50 cursor-not-allowed pointer-events-none"
    : "";

  return (
    <button
      type={HtmlType}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${colors[type][variant]}
        ${sizes[size]}
        ${shapes[shape]}
        ${widthClass}
        ${disabledStyles}
        ${className}
      `}
      aria-label={
        isOnlyIcon
          ? typeof children === "string"
            ? children
            : "Button"
          : undefined
      }
    >
      {isOnlyIcon ? (
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
