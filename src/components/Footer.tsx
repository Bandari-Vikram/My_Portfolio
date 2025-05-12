
import { Github, Mail, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const Footer = () => {
  return (
    <footer className="bg-dark-lighter py-8 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-gradient">BV</h2>
            <p className="text-sm text-muted-foreground mt-2">
              &copy; {new Date().getFullYear()} Bandari Vikram. All rights reserved.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center",
                  "border border-white/10 bg-dark/50 hover:bg-neon-purple/10",
                  "transition-all duration-300 ease-in-out",
                  "hover:border-neon-purple/50 hover:scale-105"
                )}
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:Bandarivikram2007@gmail.com"
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center",
                  "border border-white/10 bg-dark/50 hover:bg-neon-purple/10",
                  "transition-all duration-300 ease-in-out",
                  "hover:border-neon-purple/50 hover:scale-105"
                )}
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="tel:+919652192538"
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center",
                  "border border-white/10 bg-dark/50 hover:bg-neon-purple/10",
                  "transition-all duration-300 ease-in-out",
                  "hover:border-neon-purple/50 hover:scale-105"
                )}
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground">
              Designed & Built with 💜
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
