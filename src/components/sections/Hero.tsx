import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import FloatingGeometry from "@/components/FloatingGeometry";

interface HeroProps {
  onNavigate: (section: string) => void;
  onOpenChat: () => void;
}

const Hero = ({ onNavigate, onOpenChat }: HeroProps) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <FloatingGeometry />
      <motion.div 
        className="max-w-4xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="mb-12 border-4 border-double border-foreground p-8 bg-card"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
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
              onClick={onOpenChat}
              size="lg"
              variant="outline"
              className="border-2 border-primary hover:bg-primary hover:text-background px-8 py-5 text-sm font-bold uppercase tracking-wider transition-all"
            >
              Talk With Me
              <Download className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </motion.div>

        {/* Tech stack tags */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {["React", "Node.js", "TypeScript", "PostgreSQL", "Docker", "AI/ML"].map((tech, index) => (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              key={tech}
              className="px-3 py-1 bg-background border border-foreground/30 text-xs uppercase tracking-wider hover:bg-primary hover:text-background hover:border-primary transition-all cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
