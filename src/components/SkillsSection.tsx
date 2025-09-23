import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Code, Database, Shield, Globe } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "cyber-blue",
      skills: [
        { name: "Java", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Python", level: 88 },
        { name: "C#", level: 75 }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: Globe,
      color: "cyber-green",
      skills: [
        { name: "React", level: 85 },
        { name: "Vue.js", level: 80 },
        { name: "Spring Boot", level: 82 },
        { name: "Node.js", level: 78 }
      ]
    },
    {
      title: "Data & Databases",
      icon: Database,
      color: "cyber-purple",
      skills: [
        { name: "Data Engineering", level: 88 },
        { name: "Machine Learning", level: 75 },
        { name: "SQL", level: 85 },
        { name: "Data Analysis", level: 90 }
      ]
    }
  ];

  const getProgressColor = (level: number) => {
    if (level >= 85) return 'bg-cyber-green';
    if (level >= 75) return 'bg-cyber-blue';
    if (level >= 65) return 'bg-cyber-purple';
    return 'bg-cyber-magenta';
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-orbitron font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expertise across full-stack development, data engineering, and emerging technologies
          </p>
          <div className="w-24 h-1 bg-gradient-neon mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={categoryIndex}
                className="bg-card/50 border-border hover:border-primary/50 transition-all duration-500 hover:glow-blue group"
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`p-4 rounded-full bg-${category.color}/20 border border-${category.color} group-hover:glow-${category.color.split('-')[1]} transition-all duration-300`}>
                      <IconComponent className={`w-8 h-8 text-${category.color}`} />
                    </div>
                    <h3 className="text-2xl font-orbitron font-bold text-foreground">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-medium text-foreground">
                            {skill.name}
                          </span>
                          <span className={`text-sm font-orbitron font-bold text-${category.color}`}>
                            {skill.level}%
                          </span>
                        </div>
                        
                        <div className="relative">
                          <div className="w-full bg-muted/50 rounded-full h-3 overflow-hidden">
                            <div 
                              className={`h-full rounded-full ${getProgressColor(skill.level)} transition-all duration-1000 ease-out glow-${category.color.split('-')[1]}`}
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Core Competencies */}
        <div className="mt-16">
          <h3 className="text-3xl font-orbitron font-bold text-center mb-8">
            Core <span className="text-neon-blue">Competencies</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { skill: "Full Stack Development", color: "cyber-blue" },
              { skill: "Data Engineering", color: "cyber-green" },
              { skill: "Problem Solving", color: "cyber-purple" },
              { skill: "Team Leadership", color: "cyber-magenta" }
            ].map((item, index) => (
              <div 
                key={index}
                className={`text-center p-6 rounded-lg border border-${item.color} bg-${item.color}/10 hover:glow-${item.color.split('-')[1]} transition-all duration-300`}
              >
                <div className={`text-2xl font-orbitron font-bold text-${item.color} mb-2`}>
                  {(index + 1) * 25}%
                </div>
                <div className="text-sm text-muted-foreground">
                  {item.skill}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;