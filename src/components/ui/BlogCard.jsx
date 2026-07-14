"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { getRoute } from "@/utils/paths";
import { IconBottle, IconBuildingStore } from "@tabler/icons-react";

const CATEGORY_ICONS = {
  "Envases PET": IconBottle,
  Proveedores: IconBuildingStore,
};

const CATEGORY_GRADIENTS = {
  "Envases PET": "from-brand-primary via-brand-primary to-brand-accent",
  Proveedores: "from-brand-accent via-brand-accent to-brand-accent-hover",
};

export default function BlogCard({ post, index = 0 }) {
  const Icon = CATEGORY_ICONS[post.category] || IconBottle;
  const gradient =
    CATEGORY_GRADIENTS[post.category] ||
    "from-brand-primary to-brand-accent";

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-light-border dark:border-dark-border bg-bgligth-main dark:bg-bgdark-secondary shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:border-brand-accent/30"
    >
      <div
        className={`relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br ${gradient}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.15),transparent_70%)]" />
        {Icon && (
          <Icon
            className="relative z-10 size-20 text-white/25 transition-transform duration-500 group-hover:scale-110 group-hover:text-white/35"
            stroke={1.5}
          />
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-white">
            {post.category}
          </span>
        </div>
        <span className="absolute top-3 right-3 rounded-full bg-black/40 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white">
          {post.readingTime}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-lg font-bold leading-snug text-txtligth-primary dark:text-txtdark-primary font-primary transition-colors group-hover:text-brand-accent">
          <Link
            href={getRoute(`/blog/${post.slug}`)}
            className="after:absolute after:inset-0"
          >
            {post.title}
          </Link>
        </h3>

        <p className="text-sm leading-relaxed text-txtligth-secondary dark:text-txtdark-secondary font-secondary line-clamp-3">
          {post.description}
        </p>

        <div className="mt-auto flex items-center gap-2 pt-3 border-t border-light-border dark:border-dark-border">
          <span className="text-xs font-medium text-txtligth-secondary dark:text-txtdark-secondary font-secondary">
            {new Date(post.date).toLocaleDateString("es-MX", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <span className="ml-auto inline-flex items-center gap-1 text-xs font-semibold text-brand-accent font-secondary transition-transform group-hover:translate-x-1">
            Leer artículo
            <svg
              className="size-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </div>
      </div>
    </motion.article>
  );
}
