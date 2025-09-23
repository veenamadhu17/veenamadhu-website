import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, BookOpen, Award } from 'lucide-react';

const AboutSection = () => {
  const education = [
    {
      institution: "TU Delft",
      period: "2020 - 2025",
      degree: "Bachelor of Computer Science and Engineering",
      description: "Specialization in data and application development",
      icon: GraduationCap,
      color: "cyber-blue"
    },
    {
      institution: "Al Diyafah High School", 
      period: "2015 - 2020",
      degree: "A Levels",
      description: "1 A*, 2 As - Excellence in STEM subjects",
      icon: Award,
      color: "cyber-green"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-orbitron font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-neon mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-cyber"></div>
              <div className="pl-8">
                <h3 className="text-2xl font-orbitron font-semibold text-neon-blue mb-6">
                  My Journey
                </h3>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    A <span className="text-cyber-blue font-semibold">Computer Science Engineer</span> with 
                    specialization in data and application development. My passion lies in transforming 
                    complex problems into elegant, efficient solutions.
                  </p>
                  <p>
                    Skilled in <span className="text-cyber-green font-semibold">Java, JavaScript, Python,</span> and 
                    modern web technologies, I bring a comprehensive approach to full-stack development 
                    and data engineering.
                  </p>
                  <p>
                    Currently developing expertise in <span className="text-cyber-purple font-semibold">cybersecurity</span> while 
                    maintaining strong foundations in software engineering principles and best practices.
                  </p>
                  <p className="text-cyber-blue font-medium">
                    Eager to apply my technical and organizational skills to innovative, impactful projects 
                    that push the boundaries of what's possible.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-orbitron font-semibold text-neon-purple mb-8">
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => {
                const IconComponent = edu.icon;
                return (
                  <Card 
                    key={index} 
                    className="bg-card/50 border-border hover:border-primary/50 transition-all duration-300 hover:glow-blue"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-full bg-${edu.color}/20 border border-${edu.color}`}>
                          <IconComponent className={`w-6 h-6 text-${edu.color}`} />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="text-xl font-semibold text-foreground">
                              {edu.institution}
                            </h4>
                            <span className={`text-sm font-orbitron text-${edu.color} bg-${edu.color}/10 px-3 py-1 rounded-full`}>
                              {edu.period}
                            </span>
                          </div>
                          
                          <p className="text-lg font-medium text-cyber-blue mb-2">
                            {edu.degree}
                          </p>
                          
                          <p className="text-muted-foreground">
                            {edu.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;