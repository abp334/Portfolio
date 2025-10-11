import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

// TODO: Replace with your actual projects
const projects = [
  {
    title: "StyleSync | Full-Stack E-commerce & AI Stylist Platform",
    description:
      "Architected a full-stack e-commerce application using React.js for the client-side and Node.js/Express.js for the server-side, complete with user authentication and order management. Implemented a secure RESTful API with JWT for distinct user and admin roles, managing data persistence in MongoDB. Integrated a Python/Django AI stylist that generates personalized fashion recommendations from a user's image via the FashionCLIP model.",
    image: project1,
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Python",
      "Django",
      "FashionCLIP",
    ],
    github: "https://github.com/abp334/StyleSync",
    live: "https://project1.demo.com",
  },
  {
    title: "HealthTrack | Desktop Health Management System",
    description:
      "Built a desktop GUI application with Java Swing for comprehensive health and appointment tracking. Developed features for users to log health metrics and schedule medical appointments, with data stored in a PostgreSQL database. Utilized a Binary Search Tree (BST) algorithm to efficiently retrieve and display maximum recorded health values for a user.",
    image: project2,
    techStack: ["Java", "Java Swing", "PostgreSQL", "Supabase"],
    github: "https://github.com/abp334/Projects",
    live: "https://project2.demo.com",
  },
  {
    title: "SpaceExploration | Informational Web Portal",
    description:
      "Created a dynamic website about space missions using HTML, CSS, and JavaScript for an interactive frontend. Constructed a PHP backend to manage a Careers page form, capturing and processing applicant data into a MySQL database.",
    image: project3,
    techStack: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/abp334/SpaceExploration",
    live: "https://project3.demo.com",
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-background to-secondary/20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            passion for development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card rounded-lg overflow-hidden hover:glow-border transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-2 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  {/* <Button size="sm" className="flex-1" asChild>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
