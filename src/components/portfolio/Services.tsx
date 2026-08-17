import { motion } from "framer-motion";
import { Section } from "./Section";
import { services } from "./data";
import { Layers, Server, Smartphone } from "lucide-react";

const icons = [Layers, Server, Smartphone];

export function Services() {
  return (
    <Section id="services" eyebrow="What I offer" title="Services">
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((s, i) => {
          const Icon = icons[i];
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass relative overflow-hidden rounded-2xl p-7 transition-transform hover:-translate-y-2"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:opacity-80" />
              <span className="bg-gradient-gold grid h-14 w-14 place-items-center rounded-2xl text-primary-foreground shadow-gold">
                <Icon size={26} />
              </span>
              <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
