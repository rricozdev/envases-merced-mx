export default function Hero({
  srcImg,
  title,
  description,
  type = "primary",
  overlay = true,
  alt = "Hero background",
  textPosition = "left",
  size = "full",
  children,
  className = "",
  imgClassName = "",
}) {
  const heroTypes = {
    primary: "min-h-[calc(100vh-5rem)]",
    secondary: "min-h-[330px] pt-20 pb-10",
    compact: "min-h-[220px] py-8",
  };

  const alignment = {
    left: "md:items-start md:text-left items-center text-center",
    center: "items-center text-center",
    right: "md:items-end md:text-right items-center text-center",
  };

  const width = {
    full: "w-full",
    half: "lg:w-1/2 w-full",
    third: "lg:w-1/3 w-full",
  };

  const desktopImage = typeof srcImg === "object" ? srcImg.desktop : srcImg;
  const mobileImage = typeof srcImg === "object" ? srcImg.mobile : srcImg;

  return (
    <section
      className={`relative overflow-hidden ${heroTypes[type]} ${className}`}
    >
      {/**
       * Imagen LCP:
       * - <picture> con art direction (una sola descarga por viewport)
       * - fetchPriority="high" + loading="eager" para descubrimiento temprano
       */}
      <picture>
        <source media="(min-width: 768px)" srcSet={desktopImage} />
        <img
          src={mobileImage}
          alt={alt}
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className={`absolute inset-0 h-full w-full ${imgClassName || "object-cover object-center"}`}
        />
      </picture>

      {/* Overlay */}
      {overlay && <div className="absolute inset-0 z-10 bg-black/50" />}

      {/* Contenido */}
      <div className="relative z-20 flex items-center h-full">
        <div
          className={`px-4 sm:px-6 ${type === "secondary" ? "w-full" : "container mx-auto"}`}
        >
          <div
            className={`
              flex flex-col gap-6
              ${alignment[textPosition]}
              ${type === "secondary" ? "w-full" : width[size]}
            `}
          >
            <h1
              className={`
                text-white font-black font-primary leading-tight

                ${
                  type === "primary"
                    ? "text-4xl lg:text-5xl"
                    : "text-2xl sm:text-3xl lg:text-4xl"
                }
              `}
            >
              {title}
            </h1>

            {description && (
              <p className="text-gray-200  text-base sm:text-lg md:text-xl max-w-xl leading-relaxed">
                {description}
              </p>
            )}
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
