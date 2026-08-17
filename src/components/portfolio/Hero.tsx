import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Download, FolderGit2, Mail, ChevronDown } from "lucide-react";
import { roles, floatingIcons } from "./data";
import profileAsset from "@/assets/pritam-photo.jpg.asset.json";
import resumeAsset from "@/assets/resume.pdf.asset.json";

const profileImg = "/pritam-photo.jpg";
const resumeUrl = "/Pritam-Ghosh-Resume.pdf";

function useTyping() {
  const [text, setText] = useState("");
  const idx = useRef(0);
  const char = useRef(0);
  const deleting = useRef(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const tick = () => {
      const full = roles[idx.current];
      if (!deleting.current) {
        char.current++;
        setText(full.slice(0, char.current));
        if (char.current === full.length) {
          deleting.current = true;
          timeout = setTimeout(tick, 1600);
          return;
        }
      } else {
        char.current--;
        setText(full.slice(0, char.current));
        if (char.current === 0) {
          deleting.current = false;
          idx.current = (idx.current + 1) % roles.length;
        }
      }
      timeout = setTimeout(tick, deleting.current ? 45 : 90);
    };
    timeout = setTimeout(tick, 400);
    return () => clearTimeout(timeout);
  }, []);

  return text;
}

function Particles() {
  const dots = Array.from({ length: 26 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((_, i) => {
        const size = 2 + (i % 4);
        return (
          <motion.span
            key={i}
            className="absolute rounded-full bg-primary/40"
            style={{
              width: size, height: size,
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
            }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 4 + (i % 5), repeat: Infinity, delay: i * 0.2 }}
          />
        );
      })}
    </div>
  );
}

export function Hero() {
  const typed = useTyping();

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-5 pt-28 pb-16 sm:px-8">
      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-primary/20 blur-[120px] animate-glow-pulse" />
      <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-primary/10 blur-[120px] animate-glow-pulse" />
      <Particles />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-primary">
            <span className="h-2 w-2 rounded-full bg-primary animate-glow-pulse" /> Available for opportunities
          </span>

          <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            Pritam <span className="text-gradient-gold">Ghosh</span>
          </h1>

          <p className="mt-4 flex h-8 items-center text-lg font-semibold text-primary sm:text-2xl">
            {typed}
            <span className="ml-1 inline-block h-6 w-0.5 animate-pulse bg-primary sm:h-7" />
          </p>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Recent B.Tech CSE (Data Science) graduate passionate about building scalable web
            applications using modern technologies. Skilled in developing responsive, user-friendly,
            and high-performance full-stack applications using the MERN stack.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={resumeAsset.url}
              download="Pritam-Ghosh-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-gold inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-primary-foreground shadow-gold transition-transform hover:scale-[1.03]"
            >
              <Download size={17} /> Download Resume
            </a>
            <a
              href="#projects"
              className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-colors hover:text-primary"
            >
              <FolderGit2 size={17} /> View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
            >
              <Mail size={17} /> Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-fit"
        >
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-gold opacity-30 blur-2xl" />
          <div className="glass relative overflow-hidden rounded-[2rem] p-2 shadow-gold">
            <img
              src={profileImg}
              alt="Pritam Ghosh"
              width={768}
              height={896}
              className="h-[360px] w-[300px] rounded-[1.6rem] object-cover sm:h-[440px] sm:w-[360px]"
            />
          </div>

          {floatingIcons.map((Icon, i) => {
            const positions = [
              "left-[-18px] top-10", "right-[-18px] top-24", "left-[-22px] bottom-24",
              "right-[-22px] bottom-12", "left-1/2 top-[-20px]", "right-8 bottom-[-18px]",
            ];
            return (
              <div
                key={i}
                className={`glass absolute grid h-12 w-12 place-items-center rounded-2xl text-primary animate-float-slow ${positions[i]}`}
                style={{ animationDelay: `${i * 0.6}s` }}
              >
                <Icon size={22} />
              </div>
            );
          })}
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-primary"
        aria-label="Scroll down"
      >
        <ChevronDown className="animate-bounce" />
      </a>
    </section>
  );
}
