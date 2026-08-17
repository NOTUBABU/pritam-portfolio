import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { navLinks, socials } from "./data";
import { FaGithub, FaLinkedinIn, FaXTwitter, FaInstagram } from "react-icons/fa6";

const socialLinks = [
  { icon: FaGithub, href: socials.github, label: "GitHub" },
  { icon: FaLinkedinIn, href: socials.linkedin, label: "LinkedIn" },
  { icon: FaXTwitter, href: socials.twitter, label: "Twitter" },
  { icon: FaInstagram, href: socials.instagram, label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="relative mx-auto w-full max-w-6xl px-5 py-12 sm:px-8">
      <div className="glass rounded-3xl px-6 py-10 text-center sm:px-10">
        <a href="#home" className="font-display text-2xl font-extrabold">
          Pritam <span className="text-gradient-gold">Ghosh</span>
        </a>
        <nav className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="mt-6 flex justify-center gap-3">
          {socialLinks.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
              className="grid h-10 w-10 place-items-center rounded-xl border border-border text-foreground transition-colors hover:border-primary hover:text-primary">
              <s.icon size={16} />
            </a>
          ))}
        </div>
        <div className="mx-auto mt-8 h-px w-full max-w-sm bg-border" />
        <p className="mt-6 text-sm text-muted-foreground">
          Pritam Ghosh © 2026. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="bg-gradient-gold fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full text-primary-foreground shadow-gold"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
