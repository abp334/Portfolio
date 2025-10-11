import { Trophy, Users, ExternalLink, Github, Computer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import hackathonmember1 from "@/assets/hackathonmember.jpg";
import review1 from "@/assets/review1.jpg";
import review2 from "@/assets/review2.jpg";
// TODO: Replace with your actual hackathon projects and achievements
const hackathons = [
  {
    name: "Hackovate 2025",
    award:
      "Built and deployed a complete AI-driven cattle monitoring solution in 36 hours.",
    date: "September 13-14,2025",
    projectName: "Cattle Analytics Platform",
    description:
      "An AI/ML-powered Cattle Analytics Platform built in 36 hours. It predicts milk yield, detects cattle diseases, and provides multilingual veterinary guidance. The solution integrates XGBoost regression and classification models, explainability with SHAP, PDF report generation, and an AI chatbot specialized in cattle health.",
    techStack: [
      "Python",
      "Streamlit",
      "XGBoost",
      "scikit-learn",
      "pandas",
      "NumPy",
      "Matplotlib",
      "SHAP",
      "ReportLab",
      "LangChain",
      "Gemini API",
    ],
    teamSize: 3,
    // TODO: Add actual team photos - for now using placeholder avatars
    teamPhotos: [review2, hackathonmember1],
    github: "https://github.com/ShahHet2812/Hackovate",
    demo: "https://codeblooded.streamlit.app",
  },
  {
    name: "HackNUthon 2025",
    award: "Built an AI-powered Smart Kitchen prototype in 3 days.",
    date: "March 29-31, 2025",
    projectName: "Smart Kitchen System",
    description:
      "We built a Smart Kitchen System for Petpooja that identifies food objects using Computer Vision, links to an inventory dashboard for real-time stock tracking, implements a waste management system powered by Machine Learning, and suggests recipes using the MealDB API by prioritizing ingredients nearing expiry. The project aimed to reduce food waste and optimize kitchen management with AI-driven solutions.",
    techStack: [
      "Computer Vision",
      "Machine Learning",
      "MealDB API",
      "Dashboard Development",
      "AI-driven Systems",
    ],
    teamSize: 4,
    teamPhotos: [review1, review2, hackathonmember1],
    github: "https://github.com/swapnil05patel/TechGPT",
    demo: "https://www.youtube.com/watch?v=jBrCSYz8kAE",
  },
];

export const Hackathons = () => {
  return (
    <section id="hackathons" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">
            Hackathon <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Competitive programming events where I've collaborated with talented
            teams to build innovative solutions under tight deadlines.
          </p>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {hackathons.map((hackathon, index) => (
            <div
              key={index}
              className="glass-card rounded-lg overflow-hidden hover:glow-border transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-8 space-y-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Trophy className="h-6 w-6 text-primary" />
                      <h3 className="text-2xl font-bold">{hackathon.name}</h3>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Badge
                        variant="secondary"
                        className="bg-primary/20 text-primary"
                      >
                        {hackathon.award}
                      </Badge>
                      <span>{hackathon.date}</span>
                    </div>
                  </div>

                  {/* Team Photos */}
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-muted-foreground" />
                    <div className="flex -space-x-2">
                      {hackathon.teamPhotos.map((photo, photoIndex) => (
                        <img
                          key={photoIndex}
                          src={photo}
                          alt={`Team member ${photoIndex + 1}`}
                          className="w-10 h-10 rounded-full border-2 border-background"
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground ml-2">
                      Team of {hackathon.teamSize}
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-3">
                  <h4 className="text-xl font-semibold text-primary">
                    {hackathon.projectName}
                  </h4>
                  <p className="text-muted-foreground">
                    {hackathon.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {hackathon.techStack.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4">
                  <Button variant="outline" asChild>
                    <a
                      href={hackathon.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                  <Button asChild>
                    <a
                      href={hackathon.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
