import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  onNavigate: (section: string) => void;
}

const Hero = ({ onNavigate }: HeroProps) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-float">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient">Full-Stack Web Developer</span>
            <br />
            <span className="text-foreground">Building Scalable Web Applications</span>
          </h1>
        </div>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Transforming ideas into elegant, high-performance web experiences with modern technologies
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={() => onNavigate("portfolio")}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-xl transition-all hover:scale-105 glow-cyan"
          >
            View Portfolio
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          
          <Button
            onClick={() => onNavigate("contact")}
            size="lg"
            variant="outline"
            className="border-primary/50 hover:border-primary text-foreground px-8 py-6 text-lg font-semibold rounded-xl transition-all hover:scale-105"
          >
            Contact Me
            <Download className="ml-2 w-5 h-5" />
          </Button>
        </div>

        {/* Floating tech keywords */}
        <div className="mt-16 flex flex-wrap justify-center gap-3">
          {["React", "Node.js", "TypeScript", "PostgreSQL", "Docker", "AI/ML"].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full bg-card border border-primary/30 text-sm font-medium text-primary hover:border-primary transition-all hover:glow-cyan cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
