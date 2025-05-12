
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
        "fixed bottom-8 right-8 z-40 p-2 rounded-full",
        "bg-neon-purple/20 border border-neon-purple/30",
        "transition-all duration-300 ease-in-out",
        "hover:bg-neon-purple/30 hover:border-neon-purple/50",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-purple",
        "animate-fade-in",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-5 h-5 text-neon-purple" />
    </button>
  );
};

export default ScrollToTop;
