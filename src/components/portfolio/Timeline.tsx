import { motion } from "framer-motion";
import { Section } from "./Section";
import { education, experience } from "./data";
import { GraduationCap, Briefcase, CheckCircle2 } from "lucide-react";

function Timeline({
  items,
}: {
  items: { title: string; sub: string; period: string; body: React.ReactNode; icon: typeof GraduationCap }[];
}) {
  return (
    <div className="relative ml-3 border-l border-border pl-8">
      {items.map((it, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className="relative mb-9 last:mb-0"
        >
          <span className="absolute -left-[42px] grid h-7 w-7 place-items-center rounded-full bg-gradient-gold text-primary-foreground shadow-gold">
            <it.icon size={14} />
          </span>
          <div className="glass rounded-2xl p-5 transition-transform hover:-translate-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">{it.period}</span>
            <h3 className="mt-1 text-base font-bold sm:text-lg">{it.title}</h3>
            <p className="text-sm font-medium text-muted-foreground">{it.sub}</p>
            <div className="mt-3 text-sm text-muted-foreground">{it.body}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export function Education() {
  return (
    <Section id="education" eyebrow="My journey" title="Education">
      <Timeline
        items={education.map((e) => ({
          title: e.degree,
          sub: e.place,
          period: e.year,
          icon: GraduationCap,
          body: e.detail,
        }))}
      />
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience" eyebrow="Where I've worked" title="Experience">
      <Timeline
        items={experience.map((e) => ({
          title: e.role,
          sub: e.company,
          period: e.period,
          icon: Briefcase,
          body: (
            <ul className="space-y-1.5">
              {e.points.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-primary" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          ),
        }))}
      />
    </Section>
  );
}
