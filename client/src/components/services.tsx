import { Card } from "@/components/ui/card";
import {
  Users,
  TrendingUp,
  Calendar,
  Search,
  Dumbbell,
  Trophy,
} from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Users,
      title: "Athlete Representation",
      description:
        "Professional contract negotiation, career guidance, and personal brand development for athletes at all levels.",
    },
    {
      icon: TrendingUp,
      title: "Sports Marketing & Sponsorships",
      description:
        "Secure lucrative sponsorship deals and endorsements to maximize your earning potential and market presence.",
    },
    {
      icon: Calendar,
      title: "Event Management",
      description:
        "Full-service event planning and execution for sports tournaments, showcases, and promotional activities.",
    },
    {
      icon: Search,
      title: "Talent Scouting & Recruitment",
      description:
        "Identifying and developing emerging talent across various sports disciplines with our expert scouting network.",
    },
    {
      icon: Dumbbell,
      title: "Training & Development",
      description:
        "Comprehensive training programs designed to enhance athletic performance and professional skills.",
    },
    {
      icon: Trophy,
      title: "Career Planning",
      description:
        "Strategic long-term career planning and post-athletic career transition support for sustained success.",
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-primary/10 rounded-full mb-4">
            <span className="text-sm font-semibold text-primary">
              Our Services
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Comprehensive Sports{" "}
            <span className="text-primary">Management Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From representation to recognition, we provide end-to-end support
            for athletes seeking to reach their full potential.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 hover-elevate transition-all duration-300 group"
              data-testid={`card-service-${index}`}
            >
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 
                  className="font-display text-xl font-bold text-foreground mb-3"
                  data-testid={`text-service-title-${index}`}
                >
                  {service.title}
                </h3>
                <p 
                  className="text-muted-foreground leading-relaxed flex-grow"
                  data-testid={`text-service-description-${index}`}
                >
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
