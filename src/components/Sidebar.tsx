import { useState } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

interface SidebarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Sidebar = ({ activeSection, onNavigate }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/mizanurrahman", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/mizanurrahman", label: "LinkedIn" },
    { icon: Mail, href: "mailto:mizan@example.com", label: "Email" },
  ];

  const handleNavigate = (sectionId: string) => {
    onNavigate(sectionId);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 left-6 z-50 lg:hidden p-2 rounded-lg bg-card border border-primary/30 hover:border-primary transition-colors glow-cyan"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-primary" />
        ) : (
          <Menu className="w-6 h-6 text-primary" />
        )}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-80 bg-sidebar border-r border-primary/20 z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 overflow-y-auto`}
      >
        <div className="p-8 flex flex-col h-full">
          {/* Profile Section */}
          <div className="mb-8">
            <div className="relative w-32 h-32 mx-auto mb-6 group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary opacity-75 blur-md group-hover:opacity-100 transition-opacity" />
              <img
                src={profileImage}
                alt="Mizanur Rahman"
                className="relative w-full h-full rounded-full object-cover border-2 border-primary/50"
              />
            </div>
            
            <h2 className="text-2xl font-bold text-center mb-2 text-gradient">
              Mizanur Rahman
            </h2>
            
            <p className="text-sm text-muted-foreground text-center leading-relaxed">
              Full-Stack Web Developer passionate about building scalable and modern web apps.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card border border-primary/30 hover:border-primary transition-all hover:glow-cyan"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-primary" />
              </a>
            ))}
          </div>

          {/* Navigation */}
          <nav className="flex-1">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavigate(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all relative group ${
                      activeSection === item.id
                        ? "bg-primary/10 text-primary border border-primary/50 glow-cyan"
                        : "text-muted-foreground hover:text-foreground hover:bg-card"
                    }`}
                  >
                    {activeSection === item.id && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-full glow-cyan" />
                    )}
                    <span className="ml-2 font-medium">{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-primary/20">
            <p className="text-xs text-muted-foreground text-center">
              © 2025 Mizanur Rahman
            </p>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
