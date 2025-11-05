import { Code2, Rocket, Users, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "End-to-end web application development with modern frameworks and best practices.",
    },
    {
      icon: Rocket,
      title: "Performance Optimization",
      description: "Enhance your application's speed, efficiency, and user experience.",
    },
    {
      icon: Users,
      title: "Technical Consultation",
      description: "Expert guidance on architecture, tech stack, and scalability strategies.",
    },
    {
      icon: Zap,
      title: "AI Integration",
      description: "Implement AI-powered features to make your applications smarter and more efficient.",
    },
  ];

  return (
    <section id="services" className="min-h-screen flex items-center py-20 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Services</h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl">
          Helping teams and founders build and scale web platforms with optimal performance and modern tooling.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className="p-8 rounded-xl bg-card border border-primary/20 hover:border-primary/50 transition-all hover:glow-cyan group"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-xl border-gradient text-center">
          <h3 className="text-2xl font-semibold mb-4">Let's Build Something Great</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether you're starting from scratch or scaling an existing platform, I'm here to help you succeed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
