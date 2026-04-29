import Image from "next/image";
import FadeIn from "./FadeIn";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => (
  <section className="pt-24 px-6 max-w-2xl mx-auto text-center">
    <FadeIn className="flex gap-10 items-center">
      <FadeIn delay={0.05}>
        <Image
          src="/dp-github-v2.png"
          alt="Profile Pic"
          width={120}
          height={120}
          className="rounded-xl -rotate-5 translate-y-2 translate-x-5"
        />
      </FadeIn>
      <FadeIn delay={0.1} className="flex flex-col text-left">
        <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4 tracking-wide translate-y-3">
          Hi, I&apos;m 👋
        </h1>
        <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-4 tracking-wide">
          Ahsan Uddin
        </h1>
      </FadeIn>
    </FadeIn>

    <FadeIn delay={0.1}>
      <p className="font-mono text-xs text-muted-foreground mb-10 tracking-wide">
        Karachi · 94 · GMT+5
      </p>
    </FadeIn>
    <FadeIn delay={0.2}>
      <p className="text-lg md:text-base leading-relaxed text-muted-foreground mb-6 text-left">
        I work across the software product lifecycle, combining hands-on expertise in manual, automation, load, security, and UI/UX validation to ensure product quality, reliability, and user experience.
      </p>
    </FadeIn>
    <FadeIn delay={0.3}>
      <p className="text-lg md:text-base leading-relaxed text-muted-foreground mb-6 text-left">
        I don&apos;t stop at test cases. I work across frontend behavior, backend logic, API contracts, database flows, and SRE-minded system behavior so products stay stable as they scale.
      </p>
    </FadeIn>
    <FadeIn delay={0.35}>
      <p className="text-lg md:text-base leading-relaxed text-muted-foreground mb-6 text-left">
        My day-to-day includes UI and API automation with tools like Playwright, performance and load validation, and security-oriented testing aligned with OWASP Top 10. I also work closely in Agile teams through Jira, Azure DevOps, Confluence, and Miro to keep delivery smooth and predictable.
      </p>
    </FadeIn>
    <FadeIn delay={0.4}>
      <p className="text-lg md:text-base leading-relaxed text-muted-foreground mb-6 text-left">
        Before AI workflows became mainstream, I had already built UI and API automation frameworks from scratch. Now I use AI to speed up execution and iteration, never to replace testing fundamentals, system understanding, or critical thinking.
      </p>
    </FadeIn>
    <FadeIn delay={0.45}>
      <p className="text-lg md:text-base leading-relaxed text-muted-foreground mb-6 text-left">
        One personal quirk: I still enjoy writing custom XPaths even when test IDs are available. It is not always necessary, but it keeps my debugging reflexes sharp. Overall, I focus on translating complex business requirements into software that is reliable, well-tested, and production-ready.
      </p>
    </FadeIn>
    <FadeIn delay={0.5}>
      <div className="flex items-center gap-2 mb-3">
        <div className="h-2 w-2 rounded-full bg-green-600"></div>
        <p className="text-sm text-muted-foreground">
          status: breaking flows before users can
        </p>
      </div>
    </FadeIn>
    <FadeIn delay={0.6}>
      <div className="flex items-center justify-center gap-5 pt-2">
        {[
          {
            icon: Github,
            href: "https://github.com/syedehsanuddin",
            label: "GitHub",
          },
          {
            icon: Linkedin,
            href: "https://www.linkedin.com/in/ahsanud/",
            label: "LinkedIn",
          },
          {
            icon: Mail,
            href: "mailto:syed.ahsan934@gmail.com",
            label: "Email",
          },
        ].map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors p-2"
            aria-label={label}
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
    </FadeIn>
  </section>
);

export default Hero;
