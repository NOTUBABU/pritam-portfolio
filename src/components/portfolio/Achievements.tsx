import { motion } from "framer-motion";
import { Section } from "./Section";
import { achievements } from "./data";
import { Trophy } from "lucide-react";

export function Achievements() {
  return (
    <Section id="achievements" eyebrow="Recognition" title="Achievements">
      <div className="grid gap-6 md:grid-cols-3">
        {achievements.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass rounded-2xl p-6 text-center transition-transform hover:-translate-y-2"
          >
            <span className="bg-gradient-gold mx-auto grid h-14 w-14 place-items-center rounded-full text-primary-foreground shadow-gold">
              <Trophy size={24} />
            </span>
            <h3 className="mt-4 text-base font-bold">{a.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{a.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
