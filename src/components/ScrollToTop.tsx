
import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-8 right-8 z-40 p-3 rounded-full",
        "bg-gradient-to-r from-neon-purple/20 to-neon-teal/20 backdrop-blur-md",
        "border border-white/10",
        "transition-all duration-300 ease-in-out",
        "hover:from-neon-purple/40 hover:to-neon-teal/40",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-purple",
        "animate-fade-in",
        "shadow-lg hover:shadow-neon-purple/30",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      )}
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-6 h-6 text-white" />
    </button>
  );
};

export default ScrollToTop;
