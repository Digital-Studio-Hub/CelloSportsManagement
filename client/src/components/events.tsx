import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import { type Event } from "@shared/schema";
import event1 from "@assets/stock_images/sports_event_stadium_44e1d884.jpg";
import event2 from "@assets/stock_images/sports_event_stadium_b779bb8b.jpg";
import event3 from "@assets/stock_images/sports_team_celebrat_6d04626a.jpg";
import event4 from "@assets/stock_images/sports_team_celebrat_94184f32.jpg";
import event5 from "@assets/stock_images/football_player_acti_49be5598.jpg";
import event6 from "@assets/stock_images/football_player_acti_f3901694.jpg";

export function Events() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const events: Event[] = [
    {
      id: "1",
      title: "PSL Youth Development Showcase",
      date: "March 15, 2025",
      description:
        "Annual talent showcase featuring the brightest young prospects in South African football.",
      image: event1,
      category: "Football",
    },
    {
      id: "2",
      title: "KZN Sports Excellence Awards",
      date: "April 22, 2025",
      description:
        "Celebrating outstanding achievements in sports across KwaZulu-Natal province.",
      image: event2,
      category: "Awards",
    },
    {
      id: "3",
      title: "Champions League Viewing Party",
      date: "May 8, 2025",
      description:
        "Exclusive event for athletes and partners to celebrate football's biggest night.",
      image: event3,
      category: "Social",
    },
    {
      id: "4",
      title: "Athlete Career Development Workshop",
      date: "June 12, 2025",
      description:
        "Educational workshop focused on financial planning and post-career transitions.",
      image: event4,
      category: "Workshop",
    },
    {
      id: "5",
      title: "Summer Training Camp",
      date: "July 20-27, 2025",
      description:
        "Intensive week-long training program for emerging talent with professional coaches.",
      image: event5,
      category: "Training",
    },
    {
      id: "6",
      title: "Sponsor Meet & Greet Gala",
      date: "August 10, 2025",
      description:
        "Networking event connecting athletes with potential sponsors and brand partners.",
      image: event6,
      category: "Networking",
    },
  ];

  return (
    <section id="events" className="py-20 sm:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-primary/10 rounded-full mb-4">
            <span className="text-sm font-semibold text-primary">
              Events & Highlights
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Upcoming <span className="text-primary">Events</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join us at exclusive events designed to elevate athletes and foster
            meaningful connections.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {events.map((event) => (
            <Card
              key={event.id}
              className="overflow-hidden hover-elevate transition-all duration-300 group"
              data-testid={`card-event-${event.id}`}
            >
              <div className="relative aspect-video">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                  data-testid={`image-event-${event.id}`}
                />
                <div className="absolute top-4 right-4">
                  <Badge 
                    className="bg-primary text-primary-foreground"
                    data-testid={`badge-event-category-${event.id}`}
                  >
                    {event.category}
                  </Badge>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  <span data-testid={`text-event-date-${event.id}`}>{event.date}</span>
                </div>
                <h3 
                  className="font-display text-xl font-bold text-foreground mb-2"
                  data-testid={`text-event-title-${event.id}`}
                >
                  {event.title}
                </h3>
                <p 
                  className="text-muted-foreground text-sm leading-relaxed"
                  data-testid={`text-event-description-${event.id}`}
                >
                  {event.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            onClick={scrollToContact}
            className="rounded-md"
            data-testid="button-inquire-events"
          >
            Inquire About Events
          </Button>
        </div>
      </div>
    </section>
  );
}
