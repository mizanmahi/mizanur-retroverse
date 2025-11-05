import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: "Solruf",
      description: "A comprehensive solar marketplace platform connecting buyers and sellers in the renewable energy sector.",
      tech: ["React", "Node.js", "PostgreSQL", "AWS"],
      gradient: "from-primary/20 to-secondary/20",
      link: "#",
      github: "#",
    },
    {
      title: "Lyceum",
      description: "An AI-powered learning platform that personalizes education with intelligent course recommendations.",
      tech: ["Next.js", "OpenAI", "Prisma", "TypeScript"],
      gradient: "from-secondary/20 to-neon-pink/20",
      link: "#",
      github: "#",
    },
  ];

  return (
    <section id="portfolio" className="min-h-screen flex items-center py-20 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gradient">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="rounded-xl border border-primary/20 hover:border-primary/50 transition-all overflow-hidden group"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Project image placeholder */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                <div className="text-6xl font-bold text-primary/20 group-hover:scale-110 transition-transform">
                  {project.title.charAt(0)}
                </div>
              </div>

              <div className="p-6 bg-card">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-muted/50 border border-primary/30 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/50 hover:border-primary flex-1"
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/50 hover:border-primary"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
