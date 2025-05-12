
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Index = () => {
  useEffect(() => {
    document.title = "Bandari Vikram | Home";
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(155,135,245,0.15),transparent_50%),radial-gradient(circle_at_top_right,rgba(65,224,201,0.15),transparent_50%)]"></div>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            <span className="text-white">Bandari</span>{" "}
            <span className="text-gradient">Vikram</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            <span className="inline-block px-2">AI Enthusiast</span>
            <span className="inline-block">|</span>
            <span className="inline-block px-2">Java with DSA</span> 
            <span className="inline-block">|</span>
            <span className="inline-block px-2">Engineering Student</span>
          </h2>
          
          <p className="text-muted-foreground/80 mb-12 max-w-xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
            Building intelligent solutions and exploring the frontiers of technology as a passionate first-year engineering student.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in opacity-0" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
            <Button asChild className="bg-gradient-to-r from-neon-purple to-neon-teal border-none text-white hover:opacity-90 transition-all shadow-lg hover:shadow-neon-purple/20">
              <Link to="/projects">View My Work</Link>
            </Button>
            
            <Button asChild variant="outline" className="border-neon-purple/30 text-white hover:bg-neon-purple/10 transition-all">
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow opacity-75">
          <Link to="#about" className="flex flex-col items-center text-muted-foreground hover:text-white transition-colors">
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown className="w-5 h-5" />
          </Link>
        </div>
      </section>
      
      {/* Brief About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gradient mb-4">About Me</h2>
            <div className="h-1 w-20 mx-auto bg-gradient-to-r from-neon-purple to-neon-teal rounded-full"></div>
          </div>
          
          <p className="text-lg text-center mb-8 leading-relaxed">
            I'm a first-year engineering student passionate about technology and innovation. 
            Exploring the intersection of artificial intelligence and software development.
          </p>
          
          <div className="flex justify-center">
            <Button asChild className="bg-dark-lighter hover:bg-dark-lighter/80 text-white border border-white/10 hover:border-neon-purple/30 transition-all">
              <Link to="/about">Learn More About Me</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
