import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/veenamadhu17?tab=repositories",
      label: "GitHub",
      color: "cyber-blue"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/veena-madhu-4758a61a7/",
      label: "LinkedIn", 
      color: "cyber-green"
    },
    {
      icon: Mail,
      href: "mailto:veenz.2001@gmail.com",
      label: "Email",
      color: "cyber-purple"
    }
  ];

  return (
    <footer className="border-t border-border bg-card/30">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="font-orbitron font-bold text-2xl gradient-text mb-2">
              Veena Madhu
            </div>
            <p className="text-muted-foreground">
              Computer Science Engineer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full bg-${link.color}/20 border border-${link.color} text-${link.color} hover:glow-${link.color.split('-')[1]} transition-all duration-300 group`}
                  aria-label={link.label}
                >
                  <IconComponent className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right text-muted-foreground">
            <p className="flex items-center justify-center md:justify-end gap-2">
              {currentYear} Made by Veena Madhu
            </p>
          </div>
        </div>

        {/* Bottom border */}
        <div className="mt-8 pt-8 border-t border-border/50">
          <div className="text-center text-sm text-muted-foreground">
            <p>Built with React, TypeScript & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;