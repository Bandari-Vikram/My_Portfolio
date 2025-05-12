
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Upload } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const Resume = () => {
  const [file, setFile] = useState<File | null>(null);
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  
  useEffect(() => {
    document.title = "Bandari Vikram | Resume";
    window.scrollTo(0, 0);
  }, []);

  // This is a placeholder URL - need to replace with actual resume URL
  const resumeUrl = "https://docdro.id/Zhtvmna";
  const downloadUrl = "https://docdro.id/Zhtvmna";

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.size > 5 * 1024 * 1024) {
        toast.error("File size should not exceed 5MB");
        return;
      }

      if (
        selectedFile.type !== "application/pdf" &&
        selectedFile.type !== "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ) {
        toast.error("Please upload a PDF or DOCX file");
        return;
      }

      setFile(selectedFile);
      // Create a temporary URL for the file to preview
      const url = URL.createObjectURL(selectedFile);
      setFileUrl(url);
      toast.success("Resume uploaded successfully!");
    }
  };

  const handleUpload = () => {
    // This would typically handle the actual file upload to a server
    // For now, we'll just simulate the success with a toast
    if (file) {
      toast.success(`Resume "${file.name}" has been uploaded!`);
    } else {
      toast.error("Please select a file first");
    }
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
              onClick={() => window.open(downloadUrl, '_blank')}
              className="bg-gradient-to-r from-neon-purple to-neon-teal border-none text-white hover:opacity-90 transition-all shadow-lg hover:shadow-neon-purple/20"
            >
              <Download className="w-5 h-5 mr-2" /> Download Resume
            </Button>
          </div>

          <div className="glass-card rounded-lg border border-white/10 overflow-hidden animate-fade-in shadow-lg neon-shadow-sm mb-10">
            <div className="bg-gradient-to-r from-neon-purple/30 to-neon-teal/30 h-2"></div>
            <div className="h-[70vh] md:h-[60vh]">
              <iframe 
                src={fileUrl || resumeUrl} 
                className="w-full h-full"
                title="Bandari Vikram's Resume"
              />
            </div>
          </div>

          <div className="mt-12 animate-fade-in">
            <div className="glass-card rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-6 text-center">Update Your Resume</h2>
              
              <div className="mb-6">
                <label htmlFor="resume-input" className="cursor-pointer block">
                  <div className="border-2 border-dashed border-neon-purple/40 rounded-lg p-10 flex flex-col items-center justify-center hover:border-neon-purple/70 transition-all">
                    <Upload className="w-12 h-12 text-neon-purple mb-4" />
                    <p className="text-muted-foreground mb-2">
                      {file ? file.name : "Upload PDF, DOCX (Max 5MB)"}
                    </p>
                    {file && (
                      <p className="text-xs text-neon-teal">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    )}
                  </div>
                </label>
                <input
                  type="file"
                  id="resume-input"
                  className="hidden"
                  accept=".pdf,.docx"
                  onChange={handleFileChange}
                />
              </div>
              
              <div className="flex justify-center">
                <Button
                  onClick={handleUpload}
                  disabled={!file}
                  className="bg-gradient-to-r from-neon-purple to-neon-teal border-none text-white hover:opacity-90 transition-all disabled:opacity-50"
                >
                  <Upload className="w-5 h-5 mr-2" /> Upload Resume
                </Button>
              </div>
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
