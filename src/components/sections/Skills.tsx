import { motion } from "framer-motion";
import { useState } from "react";

const Skills = () => {
  const [flippedCards, setFlippedCards] = useState<string[]>([]);

  const toggleFlip = (category: string) => {
    setFlippedCards(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const skillCategories = [
    {
      category: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
      color: "from-primary to-primary/60",
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "Prisma", "PostgreSQL", "Redis", "REST APIs"],
      color: "from-secondary to-secondary/60",
    },
    {
      category: "DevOps & Tools",
      skills: ["Docker", "CI/CD", "Git", "GitHub Actions", "Vercel", "AWS"],
      color: "from-neon-pink to-neon-pink/60",
    },
    {
      category: "Other",
      skills: ["Python", "AI Agents", "Prompt Engineering", "System Design", "Mentorship"],
      color: "from-primary to-secondary",
    },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center py-20 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-black mb-2 uppercase border-b-4 border-primary inline-block">Skills</h2>
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-12">Technical Expertise</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => {
            const isFlipped = flippedCards.includes(category.category);
            
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="perspective-1000 h-[280px]"
                onClick={() => toggleFlip(category.category)}
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
                    <div className="mb-4 pb-3 border-b-2 border-primary">
                      <h3 className="text-xl font-serif font-bold uppercase tracking-tight">
                        {category.category}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {category.skills.slice(0, 5).map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-background border border-foreground/30 text-xs uppercase tracking-wide"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    <p className="text-xs text-primary uppercase tracking-wide mt-auto">Click to see all</p>
                  </div>

                  {/* Back of card */}
                  <div 
                    className="absolute inset-0 p-6 bg-card border-2 border-primary flex flex-col"
                    style={{ 
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)"
                    }}
                  >
                    <div className="mb-4 pb-3 border-b-2 border-primary">
                      <h3 className="text-xl font-serif font-bold uppercase tracking-tight text-primary">
                        {category.category}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2 overflow-y-auto flex-1">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-primary text-background border border-primary text-xs uppercase tracking-wide h-fit"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          className="mt-12 p-6 border-4 border-double border-foreground/30 bg-card text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-sm text-muted-foreground uppercase tracking-wide">
            Continuously learning and adapting to new technologies
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
