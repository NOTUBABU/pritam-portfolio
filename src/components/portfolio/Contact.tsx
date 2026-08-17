import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "./Section";
import { socials } from "./data";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaXTwitter, FaInstagram } from "react-icons/fa6";

const socialLinks = [
  { icon: FaGithub, href: socials.github, label: "GitHub" },
  { icon: FaLinkedinIn, href: socials.linkedin, label: "LinkedIn" },
  { icon: FaXTwitter, href: socials.twitter, label: "Twitter" },
  { icon: FaInstagram, href: socials.instagram, label: "Instagram" },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.open(`mailto:${socials.email}?subject=${subject}&body=${body}`, "_blank");
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <Section id="contact" eyebrow="Let's talk" title="Get In Touch">
      <div className="grid gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <p className="text-sm leading-relaxed text-muted-foreground">
            Have a project in mind or just want to say hello? I'd love to hear from you. Drop a
            message and I'll get back to you as soon as possible.
          </p>

          <a href={`mailto:${socials.email}`} className="glass flex items-center gap-4 rounded-xl p-4 transition-transform hover:-translate-y-1">
            <span className="bg-gradient-gold grid h-11 w-11 place-items-center rounded-xl text-primary-foreground"><Mail size={18} /></span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">Email</p>
              <p className="text-sm font-medium break-all">{socials.email}</p>
            </div>
          </a>

          <div className="glass flex items-center gap-4 rounded-xl p-4">
            <span className="bg-gradient-gold grid h-11 w-11 place-items-center rounded-xl text-primary-foreground"><MapPin size={18} /></span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">Location</p>
              <p className="text-sm font-medium">Kolkata, West Bengal, India</p>
            </div>
          </div>

          <div className="glass overflow-hidden rounded-xl">
            <iframe
              title="Kolkata map"
              className="h-44 w-full grayscale-[0.3]"
              loading="lazy"
              src="https://www.openstreetmap.org/export/embed.html?bbox=88.2,22.45,88.45,22.65&layer=mapnik&marker=22.5726,88.3639"
            />
          </div>

          <div className="flex gap-3 pt-1">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="glass grid h-11 w-11 place-items-center rounded-xl text-foreground transition-colors hover:text-primary"
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={submit}
          className="glass space-y-4 rounded-2xl p-6"
        >
          {[
            { key: "name", label: "Name", type: "text", placeholder: "Your name" },
            { key: "email", label: "Email", type: "email", placeholder: "you@example.com" },
          ].map((f) => (
            <div key={f.key}>
              <label className="mb-1.5 block text-sm font-medium">{f.label}</label>
              <input
                type={f.type}
                required
                maxLength={120}
                value={form[f.key as "name" | "email"]}
                onChange={(e) => setForm((p) => ({ ...p, [f.key]: e.target.value }))}
                placeholder={f.placeholder}
                className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              />
            </div>
          ))}
          <div>
            <label className="mb-1.5 block text-sm font-medium">Message</label>
            <textarea
              required
              rows={5}
              maxLength={1000}
              value={form.message}
              onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
              placeholder="Tell me about your project..."
              className="w-full resize-none rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-gold inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-primary-foreground shadow-gold transition-transform hover:scale-[1.02]"
          >
            <Send size={16} /> Send Message
          </button>

          <AnimatePresence>
            {sent && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center gap-2 text-sm font-medium text-primary"
              >
                <CheckCircle2 size={16} /> Thanks! Your mail client is opening.
              </motion.p>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </Section>
  );
}
