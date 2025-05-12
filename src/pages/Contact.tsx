
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Mail, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.title = "Bandari Vikram | Contact";
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Here you would normally send the form data to a backend API
    // For now, we'll simulate a successful submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactMethods = [
    {
      icon: <Mail className="h-10 w-10 text-neon-purple" />,
      title: "Email",
      value: "Bandarivikram2007@gmail.com",
      link: "mailto:Bandarivikram2007@gmail.com",
    },
    {
      icon: <Phone className="h-10 w-10 text-neon-purple" />,
      title: "Phone",
      value: "+91 9652192538",
      link: "tel:+919652192538",
    },
    {
      icon: <Github className="h-10 w-10 text-neon-purple" />,
      title: "GitHub",
      value: "github.com/username",
      link: "https://github.com/",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-gradient mb-4">Contact Me</h1>
          <div className="h-1 w-20 mx-auto bg-gradient-to-r from-neon-purple to-neon-teal rounded-full"></div>
          <p className="mt-4 text-muted-foreground max-w-md mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {contactMethods.map((method) => (
                <Card 
                  key={method.title} 
                  className={cn(
                    "glass-card border-white/5",
                    "hover:neon-shadow-sm transition-all duration-300",
                    "animate-fade-in"
                  )}
                >
                  <CardContent className="p-6 flex items-start">
                    <div className="mr-4">{method.icon}</div>
                    <div>
                      <h3 className="font-medium">{method.title}</h3>
                      <a 
                        href={method.link} 
                        className="text-sm text-muted-foreground hover:text-neon-purple transition-colors"
                      >
                        {method.value}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="lg:col-span-3">
              <Card className="glass-card border-white/5 animate-fade-in">
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                  <CardDescription>
                    I'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        placeholder="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-dark-lighter/70 border-white/10 focus:border-neon-purple/50"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-dark-lighter/70 border-white/10 focus:border-neon-purple/50"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Your Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="bg-dark-lighter/70 border-white/10 focus:border-neon-purple/50 resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-neon-purple to-neon-teal border-none text-white hover:opacity-90"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
