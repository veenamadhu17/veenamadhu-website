import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Play } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Hexify",
      description: "A strategic JavaScript/HTML game based on the classic board game Hex. Features intelligent AI opponents and an intuitive user interface.",
      technologies: ["JavaScript", "HTML5", "CSS3", "Game AI"],
      image: "game",
      color: "cyber-blue",
      status: "Completed",
      links: {
        github: "https://github.com/veenamadhu17/hexify",
        live: "#"
      }
    },
    {
      title: "COVID Tracker Website",
      description: "A comprehensive React/JavaScript web application for tracking COVID-19 cases with real-time data visualization and analytics.",
      technologies: ["React", "JavaScript", "Chart.js", "API Integration"],
      image: "dashboard", 
      color: "cyber-green",
      status: "Completed",
      links: {
        github: "https://github.com/veenamadhu17/covid-tracker",
        live: "#"
      }
    },
    {
      title: "Kindertelefoon Chatbot",
      description: "An intelligent training chatbot for counselors specializing in child mental health conversations, improving training effectiveness.",
      technologies: ["NLP", "Machine Learning", "Python", "Mental Health"],
      image: "chatbot",
      color: "cyber-purple", 
      status: "Academic Project",
      links: {}
    },
    {
      title: "Bicycle Travel-Time Model",
      description: "Research project improving travel-time prediction models using advanced feature engineering and data analysis techniques.",
      technologies: ["Python", "Machine Learning", "Data Science", "Research"],
      image: "research",
      color: "cyber-magenta",
      status: "Research",
      links: {}
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-orbitron font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of innovative solutions and technical achievements
          </p>
          <div className="w-24 h-1 bg-gradient-neon mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-card/50 border-border hover:border-primary/50 transition-all duration-500 hover:glow-blue group overflow-hidden"
            >
              <div className="relative h-48 bg-gradient-to-br from-muted to-card overflow-hidden">
                {/* Status badge */}
                <Badge 
                  className={`absolute top-4 right-4 bg-${project.color}/20 text-${project.color} border-${project.color}`}
                >
                  {project.status}
                </Badge>
              </div>

              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-orbitron font-bold text-foreground mb-3">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="secondary"
                        className="bg-secondary/50 text-secondary-foreground hover:bg-cyber-blue/20 hover:text-cyber-blue transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    {project.links.github && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        className={`border-${project.color} text-${project.color} hover:bg-${project.color} hover:text-background`}
                        onClick={() => window.open(project.links.github, "_blank")}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* More projects CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Want to see more of my work?
          </p>
          <Button 
            size="lg"
            variant="outline"
            className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-background glow-blue font-orbitron"
            onClick={() => window.open("https://github.com/veenamadhu17", "_blank")}
          >
            <Github className="w-5 h-5 mr-2" />
            View GitHub Profile
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;