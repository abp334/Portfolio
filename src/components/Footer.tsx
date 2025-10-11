import { Github, Linkedin, Mail, Twitter, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold gradient-text">Aayush Pandya</h3>
            <p className="text-sm text-muted-foreground">
              Building innovative solutions and constantly learning new
              technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <a
                href="#about"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Projects
              </a>
              <a
                href="#testimonials"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Connect With Me</h4>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                asChild
              >
                <a
                  href="https://github.com/abp334"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                asChild
              >
                <a
                  href="https://linkedin.com/in/aayushpandya334"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                asChild
              >
                <a
                  href="https://twitter.com/aayushpandya5"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                asChild
              >
                <a href="mailto:aayushpandya334@gmail.com" aria-label="Email">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Aayush Pandya. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              Made with <Heart className="h-4 w-4 text-primary fill-primary" />{" "}
              using React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
