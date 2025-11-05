const Skills = () => {
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
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gradient">Skills & Technologies</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={category.category}
              className="p-6 rounded-xl bg-card border border-primary/20 hover:border-primary/50 transition-all group"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-2 flex items-center gap-3">
                  <span className={`w-2 h-8 rounded-full bg-gradient-to-b ${category.color}`} />
                  {category.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-muted/50 border border-primary/30 text-sm font-medium hover:border-primary hover:glow-cyan transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-xl bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border border-primary/30 text-center">
          <p className="text-lg text-muted-foreground">
            Continuously learning and adapting to new technologies to deliver cutting-edge solutions
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
