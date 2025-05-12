
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Code, BookOpen, Layout, Users, Clock, Shuffle } from "lucide-react";

const About = () => {
  useEffect(() => {
    document.title = "Bandari Vikram | About";
    window.scrollTo(0, 0);
  }, []);

  const skills = [
    { name: "Java", level: 85 },
    { name: "DSA", level: 80 },
    { name: "Python", level: 75 },
    { name: "React.js", level: 70 },
    { name: "HTML/CSS", level: 80 },
    { name: "JavaScript", level: 75 },
    { name: "Node.js", level: 65 },
    { name: "Express.js", level: 65 },
    { name: "C/C++", level: 60 },
  ];

  const softSkills = [
    {
      icon: <Users className="w-6 h-6 text-neon-purple" />,
      name: "Team Collaboration",
      description: "Working effectively with diverse teams to achieve common goals",
    },
    {
      icon: <Layout className="w-6 h-6 text-neon-purple" />,
      name: "Leadership",
      description: "Guiding and motivating teams toward successful project completion",
    },
    {
      icon: <Clock className="w-6 h-6 text-neon-purple" />,
      name: "Time Management",
      description: "Efficiently organizing tasks and meeting deadlines consistently",
    },
    {
      icon: <Shuffle className="w-6 h-6 text-neon-purple" />,
      name: "Adaptability",
      description: "Quickly adjusting to new technologies and changing requirements",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-gradient mb-4">About Me</h1>
          <div className="h-1 w-20 mx-auto bg-gradient-to-r from-neon-purple to-neon-teal rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <div className="glass-card rounded-xl p-6 mb-8 animate-fade-in shadow-lg neon-shadow-sm">
            <p className="text-lg leading-relaxed text-balance">
              I'm a first-year engineering student at Dayananda Sagar College of Engineering (2024–2028), 
              passionate about building efficient AI models and mastering Java with DSA. I also have hands-on 
              experience in Python, HTML, CSS, JavaScript, React.js, Node.js, and Express.js, with basic 
              knowledge of C and C++. I believe in teamwork, time management, and adaptability.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-gradient">Technical Skills</h2>
            
            <div className="grid gap-4">
              {skills.map((skill) => (
                <div key={skill.name} className="animate-fade-in">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-xs text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-dark-lighter rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-neon-purple to-neon-teal"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6 text-gradient">Soft Skills</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {softSkills.map((skill) => (
                <Card key={skill.name} className="glass-card border-white/5 animate-fade-in hover:neon-shadow-sm transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      {skill.icon}
                      <h3 className="ml-3 font-semibold">{skill.name}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-gradient">Education</h2>
          
          <Card className="glass-card border-white/5 animate-fade-in hover:neon-shadow-sm transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <BookOpen className="w-6 h-6 text-neon-purple" />
                </div>
                <div>
                  <h3 className="font-semibold">Dayananda Sagar College of Engineering</h3>
                  <p className="text-sm text-muted-foreground">B.E in Computer Science & Engineering</p>
                  <p className="text-xs text-muted-foreground mt-1">2024 - 2028 (Expected)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
