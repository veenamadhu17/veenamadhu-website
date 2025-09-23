import { Button } from '@/components/ui/button';
import cyberpunkBg from '@/assets/cyberpunk-bg.jpg';
import profilePicture from '@/assets/profile-picture.jpg';
const HeroSection = () => {
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0" style={{
      backgroundImage: `url(${cyberpunkBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
        <div className="absolute inset-0 bg-background/80"></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 cyber-grid opacity-30"></div>

      {/* Content */}
      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-cyber p-1 pulse-glow">
                <div className="w-full h-full rounded-full bg-muted flex items-center justify-center overflow-hidden">
                  <img src={profilePicture} alt="Veena Madhu - Computer Science Engineer" className="w-full h-full object-cover" />
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 border border-cyber-blue rounded-full glow-blue animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-12 h-12 border border-cyber-green rounded-full glow-green animate-pulse delay-1000"></div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-orbitron font-bold">
                <span className="text-neon-blue glitch">Veena</span>
                <br />
                <span className="gradient-text">Madhu</span>
              </h1>
              
              <p className="text-xl lg:text-2xl font-medium text-muted-foreground">
                Computer Science Engineer
              </p>
              
              <p className="text-lg text-cyber-blue font-medium">
                Data & Application Development
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl">
              Passionate about building innovative solutions with cutting-edge technologies. 
              Transforming data into insights and ideas into applications.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-cyber hover:shadow-glow-blue text-background font-semibold"
              onClick={() => {
                const el = document.getElementById("projects");
                el?.scrollIntoView({ behavior: "smooth" });
              }}>
                View Projects
              </Button>
              <Button variant="outline" size="lg" className="border-cyber-purple text-cyber-purple hover:bg-cyber-purple hover:text-background glow-purple"
              onClick={() => window.location.href = "mailto:veenz.2001@gmail.com"}>
                Contact Me
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-orbitron font-bold text-neon-green">5+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-orbitron font-bold text-neon-blue">3+</div>
                <div className="text-sm text-muted-foreground">Languages</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-orbitron font-bold text-neon-purple">2025</div>
                <div className="text-sm text-muted-foreground">Graduate</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-cyber-blue rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyber-blue rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>;
};
export default HeroSection;