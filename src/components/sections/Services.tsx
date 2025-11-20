import { Code2, Rocket, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const Services = () => {
  const [flippedCards, setFlippedCards] = useState<string[]>([]);

  const toggleFlip = (title: string) => {
    setFlippedCards(prev => 
      prev.includes(title) 
        ? prev.filter(t => t !== title)
        : [...prev, title]
    );
  };

  const services = [
      {
        icon: Code2,
        title: "Full-Stack Development",
        description: "End-to-end web application development with modern frameworks and best practices.",
        details: "React • Next.js • Node.js • PostgreSQL • TypeScript • Tailwind CSS",
      },
      {
        icon: Rocket,
        title: "Performance Optimization",
        description: "Enhance your application's speed, efficiency, and user experience.",
        details: "Core Web Vitals • Code Splitting • Lazy Loading • Caching Strategies • CDN Setup",
      },
      {
        icon: Users,
        title: "Technical Consultation",
        description: "Expert guidance on architecture, tech stack, and scalability strategies.",
        details: "System Design • Code Review • Best Practices • Team Training • Architecture Planning",
      },
      {
        icon: Zap,
        title: "AI Integration",
        description: "Implement AI-powered features to make your applications smarter and more efficient.",
        details: "OpenAI • Gemini • Prompt Engineering • AI Agents • RAG • Vector Databases",
      },
  ];

  return (
    <section id="services" className="min-h-screen flex items-center py-20 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-serif font-black mb-2 uppercase border-b-4 border-primary inline-block">Services</h2>
        <p className="text-sm text-muted-foreground mb-12 max-w-2xl border-l-2 border-primary pl-4 mt-6">
          Helping teams and founders build and scale web platforms with optimal performance and modern tooling.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, idx) => {
            const isFlipped = flippedCards.includes(service.title);
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="perspective-1000 h-[200px]"
                onClick={() => toggleFlip(service.title)}
              >
                <motion.div
                  className="relative w-full h-full cursor-pointer"
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6, type: "spring" }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Front of card */}
                  <div 
                    className="absolute inset-0 p-6 bg-card border-2 border-foreground/20 hover:border-primary transition-all group"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <div className="mb-4">
                      <div className="w-12 h-12 border-2 border-primary flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-serif font-bold mb-2 uppercase tracking-tight">{service.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>

                  {/* Back of card */}
                  <div 
                    className="absolute inset-0 p-6 bg-card border-2 border-primary flex flex-col justify-center"
                    style={{ 
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)"
                    }}
                  >
                    <div className="mb-3">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-serif font-bold mb-3 uppercase tracking-tight text-primary">{service.title}</h3>
                    <p className="text-xs text-foreground leading-relaxed font-mono">{service.details}</p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 p-6 border-4 border-double border-primary bg-card text-center">
          <h3 className="text-xl font-serif font-bold mb-3 uppercase">Let's Build Something Great</h3>
          <p className="text-xs text-muted-foreground max-w-2xl mx-auto uppercase tracking-wide">
            Whether you're starting from scratch or scaling an existing platform
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
