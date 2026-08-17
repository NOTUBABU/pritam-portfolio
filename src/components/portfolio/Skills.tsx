import { motion } from "framer-motion";
import { Section } from "./Section";
import { skillGroups, otherSkills } from "./data";

export function Skills() {
  return (
    <Section id="skills" eyebrow="What I work with" title="Skills">
      <div className="grid gap-6 lg:grid-cols-3">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: gi * 0.1 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="mb-5 text-lg font-bold text-gradient-gold">{group.title}</h3>
            <div className="space-y-5">
              {group.skills.map((s) => (
                <div key={s.name}>
                  <div className="mb-1.5 flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm font-medium">
                      <s.icon className="text-primary" size={18} /> {s.name}
                    </span>
                    <span className="text-xs font-semibold text-muted-foreground">{s.level}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-secondary">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full rounded-full bg-gradient-gold"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {otherSkills.map((s) => (
          <span
            key={s}
            className="glass rounded-full px-5 py-2 text-sm font-medium transition-colors hover:text-primary"
          >
            {s}
          </span>
        ))}
      </div>
    </Section>
  );
}
