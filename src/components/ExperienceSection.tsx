import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building, Users } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Research Project",
      company: "TU Delft",
      period: "Apr - Jun 2025",
      location: "Delft, Netherlands",
      type: "Academic Research",
      description: "Improved a bicycle travel-time model using advanced feature engineering techniques and data analysis methodologies.",
      technologies: ["Python", "Data Analysis", "Machine Learning", "Feature Engineering"],
      icon: Building,
      color: "cyber-blue"
    },
    {
      title: "Cloud Security Intern",
      company: "Paramount Computer Systems",
      period: "Aug 2024",
      location: "Remote",
      type: "Internship",
      description: "Worked with the cloud security team to implement robust cybersecurity measures for cloud-based applications.",
      technologies: ["Cloud Security", "Cybersecurity", "Cloud Platforms"],
      icon: Building,
      color: "cyber-green"
    },
    {
      title: "Software Developer",
      company: "Software Project - Kindertelefoon",
      period: "Apr - Jun 2024",
      location: "Delft, Netherlands",
      type: "Academic Project",
      description: "Created an intelligent chatbot solution to train counselors in child mental health conversations, improving training efficiency.",
      technologies: ["JavaScript", "Chatbot Development", "Mental Health Tech"],
      icon: Users,
      color: "cyber-purple"
    },
    {
      title: "Vice President PR",
      company: "BEST Delft",
      period: "Sep 2022 - Sep 2023",
      location: "Delft, Netherlands",
      type: "Leadership",
      description: "Led public relations initiatives for a European engineering student network, managing communications and events.",
      technologies: ["Leadership", "Public Relations", "Event Management"],
      icon: Users,
      color: "cyber-magenta"
    },
    {
      title: "Market Research Analyst",
      company: "Headstart Global FZ LLC",
      period: "Aug 2020",
      location: "Dubai, UAE",
      type: "Internship",
      description: "Conducted comprehensive market research to identify emerging trends and customer needs in technology sectors.",
      technologies: ["Market Research", "Data Analysis", "Business Intelligence"],
      icon: Building,
      color: "cyber-orange"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-orbitron font-bold mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A journey through diverse roles in technology, research, and leadership
          </p>
          <div className="w-24 h-1 bg-gradient-neon mx-auto mt-6"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            return (
              <Card 
                key={index}
                className="bg-card/50 border-border hover:border-primary/50 transition-all duration-500 hover:glow-blue group"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    
                    {/* Icon and Timeline */}
                    <div className="flex lg:flex-col items-center lg:items-start gap-4">
                      <div className={`p-4 rounded-full bg-${exp.color}/20 border border-${exp.color} group-hover:glow-${exp.color.split('-')[1]} transition-all duration-300`}>
                        <IconComponent className={`w-8 h-8 text-${exp.color}`} />
                      </div>
                      <Badge 
                        variant="outline" 
                        className={`border-${exp.color} text-${exp.color} bg-${exp.color}/10 font-orbitron`}
                      >
                        {exp.type}
                      </Badge>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        <div>
                          <h3 className="text-2xl font-orbitron font-bold text-foreground mb-2">
                            {exp.title}
                          </h3>
                          <p className="text-xl font-semibold text-cyber-blue">
                            {exp.company}
                          </p>
                        </div>
                        
                        <div className="flex flex-col lg:text-right space-y-2">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span className="font-orbitron text-sm">{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex}
                            variant="secondary"
                            className="bg-secondary/50 text-secondary-foreground hover:bg-cyber-blue/20 hover:text-cyber-blue transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;