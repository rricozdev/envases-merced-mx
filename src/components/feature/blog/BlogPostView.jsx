"use client";

import { motion } from "framer-motion";
import TableOfContents from "@/components/ui/TableOfContents";
import ReadingProgress from "@/components/ui/ReadingProgress";
import { getRoute } from "@/utils/paths";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function BlogPostView({ post, children }) {
  const shareUrl = `https://envaseslamerced.mx/blog/${post.slug}.html`;

  return (
    <>
      <ReadingProgress />

      <main className="min-h-screen bg-bgligth-main dark:bg-bgdark-main">
        <article className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
          <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-12">
            <div>
              <motion.header
                initial="hidden"
                animate="visible"
                className="mb-10"
              >
                <motion.div
                  variants={fadeUp}
                  className="flex flex-wrap items-center gap-3 mb-4"
                >
                  <span className="rounded-full bg-brand-accent/10 px-3 py-1 text-xs font-semibold text-brand-accent">
                    {post.category}
                  </span>
                  <span className="text-sm text-txtligth-secondary dark:text-txtdark-secondary font-secondary">
                    {new Date(post.date).toLocaleDateString("es-MX", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span className="text-sm text-txtligth-secondary dark:text-txtdark-secondary font-secondary">
                    · {post.readingTime} de lectura
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeUp}
                  className="text-3xl font-black tracking-tight text-txtligth-primary dark:text-txtdark-primary font-primary sm:text-4xl lg:text-5xl"
                >
                  {post.title}
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  className="mt-5 text-lg leading-relaxed text-txtligth-secondary dark:text-txtdark-secondary font-secondary"
                >
                  {post.description}
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  className="mt-6 flex flex-wrap items-center gap-4 border-b border-light-border dark:border-dark-border pb-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-full bg-brand-accent text-sm font-bold text-white">
                      EM
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-txtligth-primary dark:text-txtdark-primary font-primary">
                        {post.author}
                      </p>
                      <p className="text-xs text-txtligth-secondary dark:text-txtdark-secondary font-secondary">
                        {post.authorRole}
                      </p>
                    </div>
                  </div>

                  <div className="ml-auto flex items-center gap-2">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex size-9 items-center justify-center rounded-lg border border-light-border dark:border-dark-border text-txtligth-secondary dark:text-txtdark-secondary transition-colors hover:bg-brand-accent hover:text-white hover:border-brand-accent"
                      aria-label="Compartir en Facebook"
                    >
                      <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex size-9 items-center justify-center rounded-lg border border-light-border dark:border-dark-border text-txtligth-secondary dark:text-txtdark-secondary transition-colors hover:bg-brand-accent hover:text-white hover:border-brand-accent"
                      aria-label="Compartir en X"
                    >
                      <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(shareUrl);
                      }}
                      className="flex size-9 items-center justify-center rounded-lg border border-light-border dark:border-dark-border text-txtligth-secondary dark:text-txtdark-secondary transition-colors hover:bg-brand-accent hover:text-white hover:border-brand-accent"
                      aria-label="Copiar enlace"
                    >
                      <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              </motion.header>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="prose prose-lg max-w-none
                  prose-headings:scroll-mt-20
                  prose-headings:font-primary prose-headings:font-bold
                  prose-p:text-txtligth-secondary dark:prose-p:text-txtdark-secondary
                  prose-p:font-secondary prose-p:leading-relaxed
                  prose-a:text-brand-accent prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-txtligth-primary dark:prose-strong:text-txtdark-primary
                  prose-li:text-txtligth-secondary dark:prose-li:text-txtdark-secondary
                  prose-li:font-secondary prose-li:leading-relaxed
                  prose-ul:my-6 prose-ol:my-6
                  prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-brand-primary
                  prose-h3:dark:text-brand-accent prose-h3:uppercase
                  prose-h3:tracking-wide prose-h3:text-sm prose-h3:font-semibold
                  [&>h2]:font-extrabold
                  [&>h2]:mt-10 [&>h2]:mb-5
                  [&>h2]:text-2xl [&>h2]:lg:text-3xl
                  [&>h2]:text-brand-accent [&>h2]:dark:text-brand-accent-hover
                  [&>h2]:border-l-4 [&>h2]:border-brand-accent [&>h2]:pl-4
                  [&>h2]:border-t [&>h2]:border-light-border
                  [&>h2]:dark:border-dark-border
                  [&>h2]:pt-7 [&>h2]:pb-1
                  [&>h2+*]:mt-0
                  [&>h2:first-of-type]:border-t-0 [&>h2:first-of-type]:pt-0
                  [&>ul>li]:pl-1 [&>ul]:list-disc [&>ul]:pl-5
                "
              >
                {children}
              </motion.div>

              <motion.footer
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mt-12 border-t border-light-border dark:border-dark-border pt-8"
              >
                <div className="flex flex-wrap gap-2 mb-8">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-bgligth-secondary dark:bg-bgdark-tertiary px-3 py-1.5 text-xs font-medium text-txtligth-secondary dark:text-txtdark-secondary font-secondary transition-colors hover:bg-brand-accent/10 hover:text-brand-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-brand-primary to-brand-accent p-6 md:p-8 text-center">
                  <h3 className="text-xl font-bold text-white font-primary">
                    ¿Necesitas asesoría sobre envases PET?
                  </h3>
                  <p className="mt-3 text-sm text-white/70 font-secondary max-w-xl mx-auto">
                    En Envases La Merced somos proveedores líderes en la
                    industria del packaging en México. Contáctanos para recibir
                    cotización personalizada.
                  </p>
                  <div className="mt-5 flex flex-wrap justify-center gap-3">
                    <a
                      href={getRoute("/catalogo")}
                      className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-brand-primary transition-all hover:bg-white/90 hover:scale-105 font-primary"
                    >
                      Ver catálogo
                      <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                    <a
                      href={getRoute("/contacto")}
                      className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:scale-105 font-primary"
                    >
                      Solicitar cotización
                      <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.footer>
            </div>

            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-6">
                <TableOfContents items={post.toc} />

                <div className="rounded-2xl border border-light-border dark:border-dark-border bg-bgligth-secondary dark:bg-bgdark-secondary p-5">
                  <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-txtligth-primary dark:text-txtdark-primary font-primary">
                    Compartir
                  </h4>
                  <div className="flex gap-2">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex size-10 items-center justify-center rounded-lg bg-bgligth-main dark:bg-bgdark-tertiary text-txtligth-secondary dark:text-txtdark-secondary transition-colors hover:bg-brand-accent hover:text-white"
                      aria-label="Compartir en Facebook"
                    >
                      <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex size-10 items-center justify-center rounded-lg bg-bgligth-main dark:bg-bgdark-tertiary text-txtligth-secondary dark:text-txtdark-secondary transition-colors hover:bg-brand-accent hover:text-white"
                      aria-label="Compartir en X"
                    >
                      <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(shareUrl);
                      }}
                      className="flex size-10 items-center justify-center rounded-lg bg-bgligth-main dark:bg-bgdark-tertiary text-txtligth-secondary dark:text-txtdark-secondary transition-colors hover:bg-brand-accent hover:text-white"
                      aria-label="Copiar enlace"
                    >
                      <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    </button>
                  </div>
                </div>

                <a
                  href={getRoute("/blog")}
                  className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-brand-accent transition-colors hover:bg-brand-accent/5 font-primary"
                >
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                  Volver al blog
                </a>
              </div>
            </aside>
          </div>
        </article>
      </main>
    </>
  );
}
