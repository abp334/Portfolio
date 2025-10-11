import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

// TODO: Replace with your actual Google Drive resume link
const RESUME_LINK =
  "https://drive.google.com/file/d/1Cy7qjydwF7vMdzzmOCRsa6C8yDd62LFB/view?usp=share_link";

export const Resume = () => {
  const handleDownload = () => {
    // Convert Google Drive view link to download link
    const fileId = RESUME_LINK.match(/\/d\/(.+?)\//)?.[1];
    if (fileId) {
      const downloadLink = `https://drive.google.com/uc?export=download&id=${fileId}`;
      window.open(downloadLink, "_blank");
    } else {
      // Fallback to direct link if it's already a download link
      window.open(RESUME_LINK, "_blank");
    }
  };

  return (
    <section id="resume" className="py-20 ">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <div className="glass-card rounded-lg p-12 space-y-6">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-primary/10 border border-primary/20">
                <FileText className="h-12 w-12 text-primary" />
              </div>
            </div>

            <h2 className="text-4xl font-bold">
              Download My <span className="gradient-text">Resume</span>
            </h2>

            <p className="text-muted-foreground text-lg">
              Get a detailed overview of my education, skills, and projects. My
              resume showcases my technical expertise and passion for software
              development.
            </p>

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 group"
              onClick={handleDownload}
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download Resume
            </Button>

            <p className="text-sm text-muted-foreground">
              PDF Format • Last Updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
