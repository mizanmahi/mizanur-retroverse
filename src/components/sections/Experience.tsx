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
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gradient">Experience</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={exp.title}
                className="relative pl-8 md:pl-20"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-6 top-2 w-5 h-5 rounded-full bg-card border-2 border-primary glow-cyan" />

                <div className="p-6 rounded-xl bg-card border border-primary/20 hover:border-primary/50 transition-all hover:glow-cyan group">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-2xl font-semibold">{exp.title}</h3>
                    <span className="text-sm text-muted-foreground mt-1 md:mt-0">{exp.period}</span>
                  </div>
                  
                  <div className="mb-3">
                    <span className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${exp.color} text-sm font-medium`}>
                      {exp.company}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
