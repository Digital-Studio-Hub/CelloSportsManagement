import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@assets/stock_images/professional_footbal_8330acfb.jpg";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional athlete in action"
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            data-testid="text-hero-headline"
          >
            Empowering Athletes.
            <br />
            <span className="bg-gradient-to-r from-primary via-primary to-success bg-clip-text text-transparent">
              Building Futures.
            </span>
          </h1>
          <p 
            className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-medium"
            data-testid="text-hero-subtitle"
          >
            Professional sports management, representation, and performance
            development.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="text-base px-8 rounded-md min-h-12"
              data-testid="button-hero-get-representation"
            >
              Get Representation
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToAbout}
              className="text-base px-8 rounded-md min-h-12 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
              data-testid="button-hero-learn-more"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce"
        data-testid="button-scroll-indicator"
      >
        <ChevronDown className="w-8 h-8 text-white/80" />
      </button>
    </section>
  );
}
