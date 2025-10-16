import { useState, useRef } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";

export const Contact = () => {
  const { toast } = useToast();
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaVerified) {
      toast({
        title: "Verification Required",
        description: "Please verify that you're not a robot.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Message Sent!",
        description: "Your message has been delivered to my inbox.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
      setCaptchaVerified(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-background to-secondary/20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4 animate-fade-in-up delay-100">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-200">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="glass-card rounded-lg p-6 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 group">
              <h3 className="text-xl font-semibold mb-6 animate-fade-in-up delay-300">
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4 group">
                  <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <Mail className="h-5 w-5 text-primary group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">
                      aayushpandya334@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <Phone className="h-5 w-5 text-primary group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">
                      +91 70698 95751
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <MapPin className="h-5 w-5 text-primary group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">
                      Ahmedabad, Gujarat, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass-card rounded-lg p-6 space-y-6 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 group"
            >
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name *
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject *
                </label>
                <Input
                  id="subject"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message *
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me more about your project or inquiry..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />
              </div>

              <div className="flex justify-center">
                <ReCAPTCHA
                  sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                  onChange={() => setCaptchaVerified(true)}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 group"
                disabled={!captchaVerified || isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
