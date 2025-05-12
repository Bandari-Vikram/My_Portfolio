
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProfileSection from "@/components/ProfileSection";
import PhotoGallery from "@/components/PhotoGallery";

const Index = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = "Bandari Vikram | Home";
  }, []);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(155,135,245,0.2),transparent_50%),radial-gradient(circle_at_top_right,rgba(65,224,201,0.2),transparent_50%)]"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-neon-purple/5 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-1/3 right-1/5 w-96 h-96 bg-neon-teal/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }}></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-neon-purple/20 to-neon-teal/20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="mb-6 inline-block relative">
            <Sparkles className="absolute -top-8 -left-8 w-8 h-8 text-neon-purple opacity-70 animate-pulse-glow" />
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 animate-fade-in opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
              <span className="text-white">Bandari</span>{" "}
              <span className="text-gradient">Vikram</span>
            </h1>
            <Star className="absolute -bottom-4 -right-8 w-8 h-8 text-neon-teal opacity-70 animate-pulse-glow" style={{ animationDelay: "0.5s" }} />
          </div>
          
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in opacity-0 tracking-wider" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            <span className="inline-block px-2 py-1 bg-neon-purple/10 rounded-full mx-1">AI Enthusiast</span>
            <span className="inline-block px-2 py-1 bg-neon-teal/10 rounded-full mx-1">Java with DSA</span>
            <span className="inline-block px-2 py-1 bg-gradient-to-r from-neon-purple/10 to-neon-teal/10 rounded-full mx-1">Engineering Student</span>
          </h2>
          
          <p className="text-muted-foreground/80 mb-12 max-w-xl mx-auto animate-fade-in opacity-0 text-lg" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
            Building intelligent solutions and exploring the frontiers of technology as a passionate first-year engineering student.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in opacity-0" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
            <Button asChild className="bg-gradient-to-r from-neon-purple to-neon-teal border-none text-white hover:opacity-90 transition-all shadow-lg hover:shadow-neon-purple/20 px-8 py-6 text-lg">
              <Link to="/projects">View My Work</Link>
            </Button>
            
            <Button asChild variant="outline" className="border-neon-purple/30 text-white hover:bg-neon-purple/10 transition-all px-8 py-6 text-lg">
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow opacity-75">
          <button onClick={scrollToAbout} className="flex flex-col items-center text-muted-foreground hover:text-white transition-colors">
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </section>
      
      {/* About Section Integrated into Homepage */}
      <section ref={aboutRef} id="about" className="py-20 px-4 relative z-10">
        <ProfileSection />
        
        {/* Photo Gallery */}
        <PhotoGallery />
      </section>
    </div>
  );
};

export default Index;
