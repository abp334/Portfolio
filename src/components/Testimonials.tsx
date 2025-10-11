import { Quote } from "lucide-react";
import review1 from "@/assets/review1.jpg";
import review2 from "@/assets/review2.jpg";
import review3 from "@/assets/review3.jpg";
// TODO: Replace with actual testimonials from professors, peers, or mentors
const testimonials = [
  {
    name: "Swapnil Patel",
    role: "Hackathon Partner and Classmate",
    content:
      "I've had the pleasure of working with Aayush Pandya as a teammate during our B.Tech in Computer Science, and I can confidently say he's one of the most dedicated and talented people I've met. Whether it’s coding, problem-solving, or leading discussions during projects, Aayush always brings a positive attitude and innovative ideas to the table.",
    avatar: review1,
  },
  {
    name: "Het Shah",
    role: "Two Time Hackathon partner and Classmate",
    content:
      "Working with them on various projects has been a pleasure. Their ability to grasp complex concepts quickly and implement elegant solutions is impressive.",
    avatar: review2,
  },
  {
    name: "Shloak Ranja",
    role: "Fellow Developer and Classmate",
    content:
      "Thank you for being the most reliable teammate.. You're talent in problem solving has literally helped team to a great extent, and the efforts you have put during the project was really appreciable. Your core knowledge was the key strength of our team which helped us in many ways… Looking forward to work on more projects together!!",
    avatar: review3,
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-b from-background to-secondary/20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">
            What People <span className="gradient-text">Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feedback from professors, peers, and collaborators I've had the
            privilege to work with.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card rounded-lg p-6 space-y-4 hover:glow-border transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="h-8 w-8 text-primary opacity-50" />

              <p className="text-muted-foreground italic">
                {testimonial.content}
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
