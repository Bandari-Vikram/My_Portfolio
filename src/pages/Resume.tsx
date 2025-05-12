
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { toast } from "sonner";

const Resume = () => {
  useEffect(() => {
    document.title = "Bandari Vikram | Resume";
    window.scrollTo(0, 0);
  }, []);

  // This is a placeholder URL - need to replace with actual resume URL
  const resumeUrl = "https://docdro.id/Zhtvmna";
  const downloadUrl = "https://docdro.id/Zhtvmna";

  const handleDownload = () => {
    toast.success("Resume downloading...");
    window.open(downloadUrl, '_blank');
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-gradient mb-4">Resume</h1>
          <div className="h-1 w-20 mx-auto bg-gradient-to-r from-neon-purple to-neon-teal rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center mb-8 animate-fade-in">
            <Button 
              onClick={handleDownload}
              className="bg-gradient-to-r from-neon-purple to-neon-teal border-none text-white hover:opacity-90 transition-all shadow-lg hover:shadow-neon-purple/20"
            >
              <Download className="w-5 h-5 mr-2" /> Download Resume
            </Button>
          </div>

          <div className="glass-card rounded-lg border border-white/10 overflow-hidden animate-fade-in shadow-lg neon-shadow-sm mb-10">
            <div className="bg-gradient-to-r from-neon-purple/30 to-neon-teal/30 h-2"></div>
            <div className="h-[70vh] md:h-[60vh]">
              <iframe 
                src={resumeUrl} 
                className="w-full h-full"
                title="Bandari Vikram's Resume"
              />
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-muted-foreground animate-fade-in">
            <p>Having trouble viewing the resume? <a href={downloadUrl} className="text-neon-purple hover:underline" target="_blank" rel="noopener noreferrer">Download it</a> or <a href="mailto:Bandarivikram2007@gmail.com" className="text-neon-purple hover:underline">contact me</a>.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
