"use client";

import { motion } from "framer-motion";
import BlogCard from "@/components/ui/BlogCard";
import Container from "@/components/ui/Container";
import ContentSection from "@/components/ui/ContentSection";
import { blogPosts } from "@/utils/constants/blogPosts";
import { getRoute } from "@/utils/paths";

const heroFade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-primary via-brand-primary to-brand-accent py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_50%)]" />
        <div className="absolute top-0 right-0 size-96 rounded-full bg-brand-accent/20 blur-3xl" />

        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.15, delayChildren: 0.1 }}
          className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-3xl text-center">
            <motion.span
              variants={heroFade}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/80"
            >
              Blog
            </motion.span>

            <motion.h1
              variants={heroFade}
              transition={{ duration: 0.5 }}
              className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl font-primary"
            >
              Guías y artículos sobre{" "}
              <span className="text-brand-accent-hover">envases PET</span>
            </motion.h1>

            <motion.p
              variants={heroFade}
              transition={{ duration: 0.5 }}
              className="mt-5 text-base sm:text-lg leading-relaxed text-white/70 font-secondary max-w-2xl mx-auto"
            >
              Contenido especializado sobre envases PET, industria del packaging
              en México y soluciones de empaque para hacer crecer tu negocio.
            </motion.p>

            <motion.div
              variants={heroFade}
              transition={{ duration: 0.5 }}
              className="mt-8 flex flex-wrap justify-center gap-3"
            >
              {["Envases PET", "Proveedores", "Industria"].map((cat) => (
                <span
                  key={cat}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/60"
                >
                  {cat}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      <Container variant="secondary">
        <ContentSection
          eyebrow="Artículos recientes"
          title={
            <>
              Aprende todo sobre{" "}
              <span className="text-brand-accent">envases PET</span>
            </>
          }
          description="Información práctica y actualizada para que tomes las mejores decisiones de empaque para tu negocio."
        >
          {blogPosts.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post, index) => (
                <BlogCard key={post.slug} post={post} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-txtligth-secondary dark:text-txtdark-secondary font-secondary">
                Próximamente publicaremos artículos sobre envases PET. ¡Vuelve
                pronto!
              </p>
            </div>
          )}
        </ContentSection>
      </Container>

      <Container>
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl bg-gradient-to-br from-brand-primary to-brand-accent p-8 text-center md:p-12"
        >
          <h2 className="text-2xl font-bold text-white sm:text-3xl font-primary">
            ¿Buscas un proveedor de envases PET en México?
          </h2>
          <p className="mt-3 text-base text-white/70 font-secondary max-w-2xl mx-auto">
            Somos Envases La Merced, líderes en la industria del packaging en
            México. Explora nuestro catálogo o contáctanos para recibir asesoría
            personalizada.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href={getRoute("/catalogo")}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-brand-primary transition-all hover:bg-white/90 hover:scale-105 font-primary"
            >
              Ver catálogo
              <svg
                className="size-4"
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
            </a>
            <a
              href={getRoute("/contacto")}
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:scale-105 font-primary"
            >
              Contactar
              <svg
                className="size-4"
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
            </a>
          </div>
        </motion.section>
      </Container>
    </main>
  );
}
