import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { SiInstagram } from "react-icons/si";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Athletes", id: "athletes" },
    { label: "Events", id: "events" },
    { label: "Gallery", id: "gallery" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 hover-elevate active-elevate-2 rounded-md px-3 py-2 -ml-3"
            data-testid="link-home"
          >
            <div className="font-display text-2xl font-bold bg-gradient-to-r from-primary via-primary to-success bg-clip-text text-transparent">
              CELLO
            </div>
            <div className="hidden sm:block text-sm text-muted-foreground font-medium">
              Sports Management
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover-elevate active-elevate-2 rounded-md transition-colors"
                data-testid={`link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA & Social */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <a
              href="https://www.instagram.com/cellosportsmanagement/"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-instagram"
            >
              <Button variant="ghost" size="icon" className="rounded-md">
                <SiInstagram className="w-5 h-5" />
              </Button>
            </a>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="default"
              className="rounded-md"
              data-testid="button-get-representation"
            >
              Get Representation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-slide-down">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="px-4 py-3 text-left text-sm font-medium hover-elevate active-elevate-2 rounded-md"
                  data-testid={`mobile-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              ))}
              <div className="flex items-center gap-3 px-4 pt-3">
                <ThemeToggle />
                <a
                  href="https://www.instagram.com/cellosportsmanagement/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                  data-testid="mobile-link-instagram"
                >
                  <Button variant="outline" className="w-full rounded-md">
                    <SiInstagram className="w-5 h-5 mr-2" />
                    Instagram
                  </Button>
                </a>
              </div>
              <div className="px-4">
                <Button
                  onClick={() => scrollToSection("contact")}
                  variant="default"
                  className="w-full rounded-md"
                  data-testid="mobile-button-get-representation"
                >
                  Get Representation
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
