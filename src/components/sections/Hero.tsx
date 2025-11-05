import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  onNavigate: (section: string) => void;
}

const Hero = ({ onNavigate }: HeroProps) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 border-4 border-double border-foreground p-8 bg-card">
          <div className="text-center border-b-2 border-primary pb-6 mb-6">
            <p className="text-xs uppercase tracking-widest mb-2 text-muted-foreground">Est. 2019</p>
            <h1 className="text-5xl md:text-7xl font-serif font-black mb-4 leading-none uppercase">
              Full-Stack<br />Web Developer
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </div>

          <p className="text-center text-sm md:text-base text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Transforming ideas into elegant, high-performance web experiences with modern technologies and scalable architectures
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button
              onClick={() => onNavigate("portfolio")}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-background px-8 py-5 text-sm font-bold uppercase tracking-wider transition-all"
            >
              View Portfolio
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            
            <Button
              onClick={() => onNavigate("contact")}
              size="lg"
              variant="outline"
              className="border-2 border-foreground hover:bg-foreground hover:text-background px-8 py-5 text-sm font-bold uppercase tracking-wider transition-all"
            >
              Contact Me
              <Download className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Tech stack tags */}
        <div className="flex flex-wrap justify-center gap-2">
          {["React", "Node.js", "TypeScript", "PostgreSQL", "Docker", "AI/ML"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-background border border-foreground/30 text-xs uppercase tracking-wider hover:bg-primary hover:text-background hover:border-primary transition-all cursor-default"
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
