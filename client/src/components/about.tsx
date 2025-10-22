import { Card } from "@/components/ui/card";
import { Target, Users, Award, TrendingUp } from "lucide-react";
import teamImage from "@assets/stock_images/business_professiona_f5bdd99a.jpg";

export function About() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To empower athletes through professional representation and strategic career development.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Led by Siphelele and Seymour, our team brings decades of experience in athlete management.",
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description:
        "Successfully managing careers of top athletes across multiple sports disciplines.",
    },
    {
      icon: TrendingUp,
      title: "Growth Focused",
      description:
        "We don't just manage athletes—we build champions and create lasting legacies.",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-md overflow-hidden shadow-lg">
              <img
                src={teamImage}
                alt="Cello Sports Management team"
                className="w-full h-full object-cover"
                data-testid="image-about-team"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2">
            <div className="mb-8">
              <div className="inline-block px-4 py-1 bg-primary/10 rounded-full mb-4">
                <span className="text-sm font-semibold text-primary">
                  About Us
                </span>
              </div>
              <h2 
                className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6"
                data-testid="text-about-headline"
              >
                Your Trusted Partner in{" "}
                <span className="text-primary">Sports Management</span>
              </h2>
              <p 
                className="text-lg text-muted-foreground leading-relaxed mb-6"
                data-testid="text-about-description-1"
              >
                Cello Sports Management is a premier sports management agency
                based in Durban, South Africa. We specialize in athlete
                representation, talent development, and strategic career
                planning for professional athletes.
              </p>
              <p 
                className="text-lg text-muted-foreground leading-relaxed"
                data-testid="text-about-description-2"
              >
                Our experienced leadership team, led by industry veterans
                Siphelele and Seymour, is dedicated to maximizing opportunities
                for our athletes through personalized representation, lucrative
                sponsorship deals, and comprehensive career support.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="p-4 hover-elevate transition-all duration-300"
                  data-testid={`card-value-${index}`}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                      <value.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 
                        className="font-semibold text-foreground mb-1"
                        data-testid={`text-value-title-${index}`}
                      >
                        {value.title}
                      </h3>
                      <p 
                        className="text-sm text-muted-foreground"
                        data-testid={`text-value-description-${index}`}
                      >
                        {value.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
