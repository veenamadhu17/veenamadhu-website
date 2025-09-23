import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Linkedin, Github, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "veenz.2001@gmail.com",
      href: "mailto:veenz.2001@gmail.com",
      color: "cyber-blue"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/veena-madhu-4758a61a7",
      href: "https://www.linkedin.com/in/veena-madhu-4758a61a7/",
      color: "cyber-green"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/veenamadhu17",
      href: "https://github.com/veenamadhu17?tab=repositories",
      color: "cyber-purple"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Delft, Netherlands",
      href: "#",
      color: "cyber-magenta"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    emailjs.sendForm(
      'service_xvfn5ce', // Your Service ID
      'template_1gslxfl', // Your Template ID
      form, // The HTML form element
      'iCjOrBEkOKdxvKDeF' // Your Public Key
    )
    .then(
      (result) => {
        console.log('Email sent successfully:', result.text);
        alert('Message sent successfully!');
        form.reset(); // Clear the form
      },
      (error) => {
        console.error('Failed to send email:', error.text);
        alert('Failed to send message. Please try again later.');
      }
    );
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-orbitron font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on innovative projects? Let's build something amazing together.
          </p>
          <div className="w-24 h-1 bg-gradient-neon mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-orbitron font-semibold text-neon-blue mb-6">
                Let's Connect
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Whether you have a project in mind, want to discuss opportunities, 
                or just want to say hello, I'd love to hear from you.
              </p>
            </div>

            <div className="grid gap-6">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <Card 
                    key={index}
                    className="bg-card/50 border-border hover:border-primary/50 transition-all duration-300 hover:glow-blue group cursor-pointer"
                    onClick={() => window.open(method.href, '_blank')}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-full bg-${method.color}/20 border border-${method.color} group-hover:glow-${method.color.split('-')[1]} transition-all duration-300`}>
                          <IconComponent className={`w-6 h-6 text-${method.color}`} />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">
                            {method.label}
                          </p>
                          <p className="text-lg font-medium text-foreground">
                            {method.value}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              <Button 
                size="lg"
                className="bg-gradient-cyber hover:shadow-glow-blue text-background font-orbitron"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-background glow-green font-orbitron"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card/50 border-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-orbitron font-semibold text-neon-purple mb-6">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">Name</Label>
                    <Input 
                      id="name"
                      name="name"
                      placeholder="Your name"
                      className="bg-muted/50 border-border focus:border-cyber-blue"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email</Label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-muted/50 border-border focus:border-cyber-blue"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-foreground">Subject</Label>
                  <Input 
                    id="subject"
                    name="title"
                    placeholder="What's this about?"
                    className="bg-muted/50 border-border focus:border-cyber-blue"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Message</Label>
                  <Textarea 
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or idea..."
                    rows={6}
                    className="bg-muted/50 border-border focus:border-cyber-blue resize-none"
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-cyber hover:shadow-glow-blue text-background font-orbitron font-semibold"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;