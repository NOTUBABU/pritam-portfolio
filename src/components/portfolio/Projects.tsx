import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "./Section";
import { projects } from "./data";
import { Github, ExternalLink, X } from "lucide-react";

export function Projects() {
  const [active, setActive] = useState<(typeof projects)[number] | null>(null);

  return (
    <Section id="projects" eyebrow="Selected work" title="Projects">
      <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {projects.map((p) => (
            <motion.div
              key={p.name}
              layout
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.4 }}
              onClick={() => setActive(p)}
              className="group glass cursor-pointer overflow-hidden rounded-2xl transition-transform hover:-translate-y-2"
            >
              <div className="relative flex h-40 items-center justify-center overflow-hidden bg-gradient-gold/10">
                <span className="font-display text-5xl font-extrabold text-gradient-gold opacity-60 transition-transform group-hover:scale-110">
                  {p.name.split(" ")[1]?.[0] ?? p.name[0]}
                </span>
                <div className="absolute inset-0 bg-foreground/0 transition-colors group-hover:bg-foreground/5" />
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold">{p.name}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-md bg-secondary px-2 py-0.5 text-xs font-medium text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[90] grid place-items-center bg-foreground/40 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass w-full max-w-lg rounded-2xl p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-bold text-gradient-gold">{active.name}</h3>
                <button onClick={() => setActive(null)} aria-label="Close" className="text-muted-foreground hover:text-primary">
                  <X size={20} />
                </button>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{active.desc}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {active.tech.map((t) => (
                  <span key={t} className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium">{t}</span>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <a href={active.github} target="_blank" rel="noreferrer" className="glass inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold hover:text-primary">
                  <Github size={16} /> GitHub
                </a>
                <a href={active.demo} target="_blank" rel="noreferrer" className="bg-gradient-gold inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-gold">
                  <ExternalLink size={16} /> Live Demo
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
