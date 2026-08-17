import { motion } from "framer-motion";

export function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: {
  id: string;
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 ${className}`}>
      {(eyebrow || title) && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          {eyebrow && (
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.35em] text-primary">
              {eyebrow}
            </span>
          )}
          {title && (
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              <span className="text-gradient-gold">{title}</span>
            </h2>
          )}
          <div className="mx-auto mt-5 h-px w-24 bg-gradient-gold" />
        </motion.div>
      )}
      {children}
    </section>
  );
}
