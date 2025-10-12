import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePlaceholder from "@/assets/profile-placeholder.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import DecryptedText from "./ui/DecryptedText";
import DarkVeil from "./ui/DarkVeil";

const PLACEHOLDER_INFO = {
  name: "Aayush Pandya",
  title: "Software Developer & Student",
  bio: "I'm a passionate software developer currently pursuing my degree in Computer Science. I love building innovative solutions and learning new technologies. My journey in tech has been driven by curiosity and a desire to create impactful applications that solve real-world problems.",
  socialLinks: {
    github: "https://github.com/abp334",
    linkedin: "https://linkedin.com/in/aayushpandya334",
    twitter: "https://twitter.com/aayushpandya5",
    email: "aayushpandya334@gmail.com",
  },
};

export const Hero = () => {
  return (
    <section
      id="about"
      className="relative py-20 md:py-32 flex items-center overflow-hidden pt-40 md:pt-24"
    >
      {/* DarkVeil Background */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <DarkVeil
          hueShift={0}
          noiseIntensity={0.02}
          scanlineIntensity={0.1}
          speed={0.3}
          scanlineFrequency={0.5}
          warpAmount={0.1}
          resolutionScale={1}
        />
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/70 z-0" />

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="space-y-2">
              <h2 className="text-lg text-primary font-medium animate-fade-in-up delay-100">
                Hello, I'm
              </h2>
              <h1 className="text-5xl md:text-6xl font-bold">
                <DecryptedText
                  text={PLACEHOLDER_INFO.name}
                  className="gradient-text"
                  speed={45}
                  maxIterations={11}
                />
              </h1>
              <p className="text-xl text-muted-foreground">
                <DecryptedText
                  text={PLACEHOLDER_INFO.title}
                  speed={30}
                  maxIterations={5}
                />
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in-up delay-300">
              {PLACEHOLDER_INFO.bio}
            </p>

            {/* Social Links */}
            <div className="flex gap-4 pt-4 animate-fade-in-up delay-500">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full hover:scale-110 hover:rotate-12 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                asChild
              >
                <a
                  href={PLACEHOLDER_INFO.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full hover:scale-110 hover:rotate-12 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                asChild
              >
                <a
                  href={PLACEHOLDER_INFO.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full hover:scale-110 hover:rotate-12 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                asChild
              >
                <a
                  href={PLACEHOLDER_INFO.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full hover:scale-110 hover:rotate-12 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                asChild
              >
                <a
                  href={`mailto:${PLACEHOLDER_INFO.socialLinks.email}`}
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 pt-4 animate-fade-in-up delay-700">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30"
                onClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get In Touch
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="hover:scale-105 transition-all duration-300 hover:shadow-lg hover:border-primary/50"
                onClick={() => {
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View Projects
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center animate-fade-in delay-500">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse" />
              <img
                src={profilePlaceholder}
                alt="Profile"
                className="relative rounded-full w-80 h-80 object-cover border-4 border-primary/20 shadow-2xl group-hover:scale-105 group-hover:shadow-primary/30 group-hover:shadow-3xl transition-all duration-500"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
