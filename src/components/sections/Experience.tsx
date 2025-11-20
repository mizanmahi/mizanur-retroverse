import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "Web Developer",
      company: "Programming Hero",
      period: "Mar 2025 - Present",
      description: "Leading web development initiatives and creating educational content for aspiring developers.",
      color: "from-primary to-primary/60",
    },
    {
      title: "Senior Mentor, Advance Web Course",
      company: "Programming Hero",
      period: "Jan 2024 - Mar 2025",
      description: "Mentored 100+ students in advanced web development, React, and full-stack technologies.",
      color: "from-secondary to-secondary/60",
    },
    {
      title: "Lead React Developer",
      company: "SOLRUF",
      period: "Mar 2022 - Jun 2022",
      description: "Led frontend development for solar marketplace platform, implementing scalable architecture.",
      color: "from-neon-pink to-neon-pink/60",
    },
    {
      title: "Web Developer Intern",
      company: "eSoftArena",
      period: "Feb 2019 - Apr 2019",
      description: "Gained hands-on experience in web development fundamentals and collaborative coding.",
      color: "from-primary to-secondary",
    },
  ];

  return (
    <section id="experience" className="min-h-screen flex items-center py-20 px-6">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-serif font-black mb-2 uppercase border-b-4 border-primary inline-block">Experience</h2>
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-12">Career Timeline</p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-primary" />

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.title}
                className="relative pl-8 md:pl-20"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                {/* Timeline dot */}
                <motion.div 
                  className="absolute left-0 md:left-6 top-2 w-5 h-5 bg-primary border-2 border-background"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.1 + 0.2 }}
                />

                <motion.div 
                  className="p-6 bg-card border-2 border-foreground/20 hover:border-primary transition-all group"
                  whileHover={{ scale: 1.02, x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 pb-2 border-b border-foreground/20">
                    <h3 className="text-lg font-serif font-bold uppercase">{exp.title}</h3>
                    <span className="text-xs text-muted-foreground mt-1 md:mt-0 uppercase tracking-wider">{exp.period}</span>
                  </div>
                  
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-primary text-background text-xs font-bold uppercase tracking-wider">
                      {exp.company}
                    </span>
                  </div>
                  
                  <p className="text-xs text-muted-foreground leading-relaxed">{exp.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
