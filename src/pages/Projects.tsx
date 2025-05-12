
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  github: string;
  demo?: string;
  image?: string;
  featured: boolean;
}

const Projects = () => {
  useEffect(() => {
    document.title = "Bandari Vikram | Projects";
    window.scrollTo(0, 0);
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: "EcoAI",
      description: "Sustainable AI for a Greener Future",
      longDescription: "AI-powered solution that helps businesses and individuals reduce their carbon footprint through intelligent resource optimization and sustainable decision-making algorithms.",
      technologies: ["Python", "TensorFlow", "React", "Node.js"],
      github: "https://github.com/",
      demo: "https://example.com",
      featured: true,
    },
    {
      id: 2,
      title: "UniTech",
      description: "All-in-one college event booking platform",
      longDescription: "Developed for the Bytexync Hackathon at DSCE, UniTech simplifies the process of booking and managing college events, integrating scheduling, resource allocation, and attendee management.",
      technologies: ["React.js", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/",
      featured: true,
    },
    {
      id: 3,
      title: "CypherQuest",
      description: "DSATM Hackathon Project",
      longDescription: "An interactive encryption challenge platform developed during the CypherQuest Hackathon at DSATM. Implements various encryption algorithms with a gamified learning approach.",
      technologies: ["JavaScript", "Cryptography", "HTML/CSS"],
      github: "https://github.com/",
      featured: true,
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-gradient mb-4">Projects</h1>
          <div className="h-1 w-20 mx-auto bg-gradient-to-r from-neon-purple to-neon-teal rounded-full"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A collection of projects I've worked on, showcasing my skills and interests in various technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className={cn(
                "glass-card border-white/5 overflow-hidden",
                "hover:neon-shadow-sm transition-all duration-500",
                "animate-fade-in opacity-0"
              )}
              style={{ animationDelay: `${index * 0.1 + 0.2}s`, animationFillMode: "forwards" }}
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{project.longDescription}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      className="bg-neon-purple/20 text-neon-purple hover:bg-neon-purple/30 border border-neon-purple/30"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex justify-between pt-2">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="border-neon-purple/30 text-white hover:bg-neon-purple/10 transition-all"
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" /> GitHub
                  </a>
                </Button>
                {project.demo && (
                  <Button
                    asChild
                    size="sm"
                    className="bg-gradient-to-r from-neon-purple to-neon-teal border-none text-white hover:opacity-90"
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
