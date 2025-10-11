import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePlaceholder from "@/assets/profile-placeholder.jpg";
import heroBg from "@/assets/hero-bg.jpg";

// TODO: Replace with your actual information
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
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background z-0" />

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="space-y-2">
              <h2 className="text-lg text-primary font-medium">Hello, I'm</h2>
              <h1 className="text-5xl md:text-6xl font-bold">
                <span className="gradient-text">{PLACEHOLDER_INFO.name}</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                {PLACEHOLDER_INFO.title}
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {PLACEHOLDER_INFO.bio}
            </p>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full hover:scale-110 transition-transform"
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
                className="rounded-full hover:scale-110 transition-transform"
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
                className="rounded-full hover:scale-110 transition-transform"
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
                className="rounded-full hover:scale-110 transition-transform"
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
            <div className="flex gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90"
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
          <div className="flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-3xl opacity-30" />
              <img
                src={profilePlaceholder}
                alt="Profile"
                className="relative rounded-full w-80 h-80 object-cover border-4 border-primary/20 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
