import React from "react";
import LogoLoop from "./ui/LogoLoop";
import {
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiBootstrap,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiDjango,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const skills = [
  { node: <SiPython />, title: "Python", href: "https://python.org" },
  { node: <FaJava />, title: "Java", href: "https://java.com" },
  {
    node: <SiJavascript />,
    title: "JavaScript",
    href: "https://javascript.info",
  },
  {
    node: <SiHtml5 />,
    title: "HTML5",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    node: <SiCss3 />,
    title: "CSS3",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  {
    node: <SiBootstrap />,
    title: "Bootstrap",
    href: "https://getbootstrap.com",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiExpress />, title: "Express", href: "https://expressjs.com" },
  { node: <SiMongodb />, title: "MongoDB", href: "https://mongodb.com" },
  {
    node: <SiPostgresql />,
    title: "PostgreSQL",
    href: "https://postgresql.org",
  },
  { node: <SiDjango />, title: "Django", href: "https://djangoproject.com" },
  { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
  { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up delay-100">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-200">
            Here are the technologies and tools I work with to bring ideas to
            life
          </p>
        </div>

        <div className="relative animate-fade-in-up delay-300">
          <LogoLoop
            logos={skills}
            speed={80}
            direction="left"
            logoHeight={48}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="hsl(var(--muted))"
            ariaLabel="Technologies and skills"
            className="py-8"
          />
        </div>
      </div>
    </section>
  );
};
