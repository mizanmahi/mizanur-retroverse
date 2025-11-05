import { GraduationCap, Code, Users, Sparkles } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Web Development",
      description: "Expert in building modern, responsive web applications",
    },
    {
      icon: Users,
      title: "Mentorship",
      description: "Guiding developers to excel in web technologies",
    },
    {
      icon: Sparkles,
      title: "Full-Stack Engineering",
      description: "End-to-end application development expertise",
    },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gradient">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="flex items-start gap-4 mb-6 p-6 rounded-xl bg-card border border-primary/20">
              <GraduationCap className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <p className="text-muted-foreground">
                  BSc in Computer Science & Engineering
                  <br />
                  Fareast International University
                </p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              With over <span className="text-primary font-semibold">4+ years of experience</span> in web development,
              I've worked across various roles from{" "}
              <span className="text-foreground font-medium">Web Developer</span> to{" "}
              <span className="text-foreground font-medium">Senior Mentor</span> and{" "}
              <span className="text-foreground font-medium">Lead React Developer</span>.
            </p>
          </div>

          <div className="space-y-4">
            {highlights.map((highlight) => (
              <div
                key={highlight.title}
                className="p-6 rounded-xl bg-card border border-primary/20 hover:border-primary/50 transition-all hover:glow-cyan group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <highlight.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30">
          <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto">
            I specialize in building{" "}
            <span className="text-primary font-semibold">scalable web platforms</span> with optimal
            performance and modern tooling. My experience spans across full-stack development,{" "}
            <span className="text-secondary font-semibold">AI-powered applications</span>, and
            mentoring the next generation of developers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
