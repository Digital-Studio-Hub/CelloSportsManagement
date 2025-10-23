import { SiInstagram } from "react-icons/si";
import { Link, useLocation } from "wouter";
import celloLogo from "@assets/CSM_Logo-removebg-preview_1761225796793.png";
import lekkerBadge from "@assets/Level 1_1761224942353.png";

export function Footer() {
  const [, navigate] = useLocation();
  
  const scrollToSection = (id: string) => {
    // If not on home page, go home first
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Column */}
          <div>
            <img 
              src={celloLogo} 
              alt="Cello Sports Management" 
              className="h-16 w-auto mb-4"
              data-testid="footer-logo"
            />
            <p className="text-background/70 text-sm leading-relaxed">
              Empowering athletes and building futures through professional
              sports management and representation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-background mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-background/70 hover:text-background transition-colors text-sm"
                  data-testid="footer-link-home"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-background/70 hover:text-background transition-colors text-sm"
                  data-testid="footer-link-about"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("athletes")}
                  className="text-background/70 hover:text-background transition-colors text-sm"
                  data-testid="footer-link-athletes"
                >
                  Athletes
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("events")}
                  className="text-background/70 hover:text-background transition-colors text-sm"
                  data-testid="footer-link-events"
                >
                  Events
                </button>
              </li>
              <li>
                <Link href="/blog">
                  <button
                    className="text-background/70 hover:text-background transition-colors text-sm"
                    data-testid="footer-link-blog"
                  >
                    Blog
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/careers">
                  <button
                    className="text-background/70 hover:text-background transition-colors text-sm"
                    data-testid="footer-link-careers"
                  >
                    Careers
                  </button>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-background mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-background/70 text-sm">
                Athlete Representation
              </li>
              <li className="text-background/70 text-sm">
                Sports Marketing
              </li>
              <li className="text-background/70 text-sm">Event Management</li>
              <li className="text-background/70 text-sm">Talent Scouting</li>
              <li className="text-background/70 text-sm">
                Training & Development
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-background mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li>Office 404, 4th Floor</li>
              <li>DOONE HOUSE</li>
              <li>Durban Central, 4031</li>
              <li className="pt-2">
                <a
                  href="tel:+27718726236"
                  className="hover:text-background transition-colors"
                >
                  +27 71 872 6236
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@cellosports.co.za"
                  className="hover:text-background transition-colors"
                >
                  info@cellosports.co.za
                </a>
              </li>
            </ul>
          </div>

          {/* Verified Badge */}
          <div>
            <h3 className="font-semibold text-background mb-4">Verified Badge</h3>
            <a
              href="https://lekker.network/the-lekker-network-verified"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:opacity-80 transition-opacity"
              data-testid="footer-lekker-badge"
            >
              <img 
                src={lekkerBadge} 
                alt="Lekker Network Verified Level 1" 
                className="w-32 h-auto mb-2"
              />
              <p className="text-background/70 text-xs text-center">
                Lekker Network Verified
              </p>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-background/70 text-sm">
            © {currentYear} Cello Sports Management. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/cellosportsmanagement/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/70 hover:text-background transition-colors"
              data-testid="footer-link-instagram"
            >
              <SiInstagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
