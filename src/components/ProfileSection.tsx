
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Code, BookOpen, Layout, Users, Clock, Shuffle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ProfileSection = () => {
  // Technical skills with multi-colored ratings
  const skills = [
    { name: "Java", level: 85, color: "from-neon-purple to-neon-teal" },
    { name: "DSA", level: 80, color: "from-neon-purple to-pink-500" },
    { name: "Python", level: 75, color: "from-blue-500 to-neon-teal" },
    { name: "React.js", level: 70, color: "from-cyan-500 to-blue-500" },
    { name: "HTML/CSS", level: 80, color: "from-orange-500 to-pink-500" },
    { name: "JavaScript", level: 75, color: "from-yellow-500 to-orange-500" },
  ];

  const softSkills = [
    {
      icon: <Users className="w-6 h-6 text-neon-purple" />,
      name: "Team Collaboration",
      description: "Working effectively with diverse teams to achieve common goals",
      gradientClass: "from-neon-purple to-pink-500",
    },
    {
      icon: <Layout className="w-6 h-6 text-blue-400" />,
      name: "Leadership",
      description: "Guiding and motivating teams toward successful project completion",
      gradientClass: "from-blue-500 to-neon-teal",
    },
    {
      icon: <Clock className="w-6 h-6 text-neon-teal" />,
      name: "Time Management",
      description: "Efficiently organizing tasks and meeting deadlines consistently",
      gradientClass: "from-neon-teal to-green-400",
    },
    {
      icon: <Shuffle className="w-6 h-6 text-purple-400" />,
      name: "Adaptability",
      description: "Quickly adjusting to new technologies and changing requirements",
      gradientClass: "from-purple-500 to-neon-purple",
    },
  ];

  return (
    <div className="container mx-auto max-w-4xl">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gradient mb-4">About Me</h2>
        <div className="h-1 w-24 mx-auto bg-gradient-to-r from-neon-purple to-neon-teal rounded-full"></div>
      </div>
      
      <div className="glass-card rounded-xl p-8 mb-12 animate-fade-in shadow-lg neon-shadow-md backdrop-blur-sm border border-white/10">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-neon-purple/30 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-neon-teal/20"></div>
              <div className="absolute w-full h-full flex items-center justify-center text-5xl font-bold text-white">BV</div>
            </div>
          </div>
          
          <div className="w-full lg:w-2/3">
            <p className="text-lg leading-relaxed text-balance">
              I'm a first-year engineering student at <span className="text-neon-purple font-medium">Dayananda Sagar College of Engineering (2024–2028)</span>, 
              passionate about building efficient AI models and mastering Java with DSA. I also have hands-on 
              experience in Python, HTML, CSS, JavaScript, React.js, Node.js, and Express.js, with basic 
              knowledge of C and C++. I believe in teamwork, time management, and adaptability.
            </p>
            
            <div className="mt-6 flex justify-center lg:justify-start">
              <Button asChild className="bg-gradient-to-r from-neon-purple to-neon-teal border-none text-white hover:opacity-90 transition-all">
                <Link to="/about">Full Details</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-8 text-gradient text-center">Technical Skills</h3>
        
        <div className="grid gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="animate-fade-in">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">{skill.name}</span>
                <span className="text-xs text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-3 bg-dark-lighter rounded-full overflow-hidden p-0.5">
                <div 
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-8 text-gradient text-center">Soft Skills</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {softSkills.map((skill) => (
            <Card key={skill.name} className="glass-card border-white/5 animate-fade-in hover:neon-shadow-sm transition-all duration-300 overflow-hidden group">
              <div className={`h-1 w-full bg-gradient-to-r ${skill.gradientClass}`}></div>
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  {skill.icon}
                  <h3 className="ml-3 font-semibold group-hover:text-gradient transition-all">{skill.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-8 text-gradient text-center">Education</h3>
        
        <Card className="glass-card border-white/5 animate-fade-in hover:neon-shadow-sm transition-all duration-300 overflow-hidden">
          <div className="h-1 w-full bg-gradient-to-r from-neon-purple to-neon-teal"></div>
          <CardContent className="p-6">
            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <BookOpen className="w-6 h-6 text-neon-purple" />
              </div>
              <div>
                <h3 className="font-semibold">Dayananda Sagar College of Engineering</h3>
                <p className="text-sm text-neon-teal">B.E in Computer Science & Engineering</p>
                <p className="text-xs text-muted-foreground mt-1">2024 - 2028 (Expected)</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfileSection;
