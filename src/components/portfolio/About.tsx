import { motion } from "framer-motion";
import { Section } from "./Section";
import { aboutCards } from "./data";
import { GraduationCap, Lightbulb, Users, Rocket } from "lucide-react";

const highlights = [
  { icon: Lightbulb, text: "Passion for web development" },
  { icon: Rocket, text: "Continuous learning mindset" },
  { icon: GraduationCap, text: "Strong problem-solving abilities" },
  { icon: Users, text: "Team collaboration skills" },
];

export function About() {
  return (
    <Section id="about" eyebrow="Get to know me" title="About Me">
      <div className="grid items-start gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            I'm a motivated and enthusiastic software developer who recently completed a B.Tech in
            Computer Science & Engineering (Data Science) from Brainware University. I love turning
            ideas into scalable, elegant web applications and I'm always exploring new technologies
            to sharpen my craft.
          </p>

          <div className="mt-6 glass rounded-xl p-5">
            <h4 className="text-sm font-bold text-gradient-gold">Career Objective</h4>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              To secure a challenging role as a MERN Stack Developer where I can contribute to impactful
              projects, grow my technical expertise, and help build user-centric digital solutions.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {highlights.map((h) => (
              <div key={h.text} className="glass flex items-center gap-3 rounded-xl px-4 py-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-gold text-primary-foreground">
                  <h.icon size={17} />
                </span>
                <span className="text-sm font-medium">{h.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-3">
          {aboutCards.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="glass rounded-xl p-4 transition-transform hover:-translate-y-1"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">{c.label}</p>
              <p className="mt-1.5 break-words text-sm font-medium">{c.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
