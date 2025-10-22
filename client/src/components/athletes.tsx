import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { type Athlete } from "@shared/schema";
import athlete1 from "@assets/stock_images/football_soccer_play_9f2cb734.jpg";
import athlete2 from "@assets/stock_images/football_soccer_play_6d193a96.jpg";
import athlete3 from "@assets/stock_images/football_soccer_play_98186474.jpg";
import athlete4 from "@assets/stock_images/professional_athlete_0722b2d0.jpg";
import athlete5 from "@assets/stock_images/professional_athlete_0c2129b2.jpg";
import athlete6 from "@assets/stock_images/football_player_acti_2a5c938d.jpg";

export function Athletes() {
  const [selectedSport, setSelectedSport] = useState<string>("All");
  const [selectedAthlete, setSelectedAthlete] = useState<Athlete | null>(null);

  const athletes: Athlete[] = [
    {
      id: "1",
      name: "Thabo Mthembu",
      sport: "Football",
      team: "AmaZulu FC",
      position: "Midfielder",
      image: athlete1,
      description:
        "Rising star in South African football with exceptional playmaking abilities and vision on the field.",
      achievements: [
        "PSL Young Player of the Season 2023",
        "National U-23 Team Captain",
        "50+ Professional Appearances",
      ],
    },
    {
      id: "2",
      name: "Sipho Ndlovu",
      sport: "Football",
      team: "Kaizer Chiefs",
      position: "Striker",
      image: athlete2,
      description:
        "Prolific goal scorer known for speed, technique, and clutch performances in critical matches.",
      achievements: [
        "PSL Top Scorer 2024",
        "Hat-trick vs Orlando Pirates",
        "National Team Call-up",
      ],
    },
    {
      id: "3",
      name: "Mandla Zungu",
      sport: "Football",
      team: "Mamelodi Sundowns",
      position: "Defender",
      image: athlete3,
      description:
        "Solid defensive anchor with leadership qualities and exceptional tactical awareness.",
      achievements: [
        "CAF Champions League Winner",
        "3x PSL Champion",
        "National Team Regular",
      ],
    },
    {
      id: "4",
      name: "Khaya Mabaso",
      sport: "Athletics",
      team: "South African Athletics",
      position: "Sprinter",
      image: athlete4,
      description:
        "Elite sprinter representing South Africa on the international stage with record-breaking performances.",
      achievements: [
        "Commonwealth Games Medalist",
        "National 100m Record Holder",
        "Olympic Qualifier",
      ],
    },
    {
      id: "5",
      name: "Zanele Dlamini",
      sport: "Athletics",
      team: "South African Athletics",
      position: "Long Distance",
      image: athlete5,
      description:
        "Endurance specialist with remarkable stamina and mental fortitude in long-distance events.",
      achievements: [
        "World Championships Participant",
        "African Games Gold Medalist",
        "Marathon Sub-2:30 Runner",
      ],
    },
    {
      id: "6",
      name: "Bongani Cele",
      sport: "Football",
      team: "SuperSport United",
      position: "Goalkeeper",
      image: athlete6,
      description:
        "Commanding presence between the posts with reflexes and shot-stopping ability.",
      achievements: [
        "PSL Goalkeeper of the Year",
        "Clean Sheet Record Holder",
        "National Team Starter",
      ],
    },
  ];

  const sports = ["All", "Football", "Athletics"];

  const filteredAthletes =
    selectedSport === "All"
      ? athletes
      : athletes.filter((athlete) => athlete.sport === selectedSport);

  return (
    <section id="athletes" className="py-20 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 bg-primary/10 rounded-full mb-4">
            <span className="text-sm font-semibold text-primary">
              Our Athletes
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Meet Our <span className="text-primary">Champions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Representing elite athletes across multiple sports disciplines with
            dedication and expertise.
          </p>
        </div>

        {/* Sport Filter */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {sports.map((sport) => (
            <Button
              key={sport}
              variant={selectedSport === sport ? "default" : "outline"}
              onClick={() => setSelectedSport(sport)}
              className="rounded-full"
              data-testid={`button-filter-${sport.toLowerCase()}`}
            >
              {sport}
            </Button>
          ))}
        </div>

        {/* Athletes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAthletes.map((athlete) => (
            <Card
              key={athlete.id}
              className="overflow-hidden hover-elevate transition-all duration-300 cursor-pointer group"
              onClick={() => setSelectedAthlete(athlete)}
              data-testid={`card-athlete-${athlete.id}`}
            >
              <div className="relative aspect-[3/4]">
                <img
                  src={athlete.image}
                  alt={athlete.name}
                  className="w-full h-full object-cover"
                  data-testid={`image-athlete-${athlete.id}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <Badge 
                    className="mb-2 bg-primary text-primary-foreground"
                    data-testid={`badge-athlete-sport-${athlete.id}`}
                  >
                    {athlete.sport}
                  </Badge>
                  <h3 
                    className="font-display text-2xl font-bold mb-1"
                    data-testid={`text-athlete-name-${athlete.id}`}
                  >
                    {athlete.name}
                  </h3>
                  <p 
                    className="text-white/90 text-sm"
                    data-testid={`text-athlete-details-${athlete.id}`}
                  >
                    {athlete.position} • {athlete.team}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Athlete Detail Modal */}
        <Dialog open={!!selectedAthlete} onOpenChange={() => setSelectedAthlete(null)}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto" aria-describedby="athlete-description">
            {selectedAthlete && (
              <>
                <DialogHeader>
                  <DialogTitle className="font-display text-3xl" data-testid="text-athlete-modal-name">
                    {selectedAthlete.name}
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-6">
                  <div className="aspect-video rounded-md overflow-hidden">
                    <img
                      src={selectedAthlete.image}
                      alt={selectedAthlete.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">
                      {selectedAthlete.sport}
                    </Badge>
                    <Badge variant="secondary">
                      {selectedAthlete.position}
                    </Badge>
                    <Badge variant="secondary">
                      {selectedAthlete.team}
                    </Badge>
                  </div>
                  <p 
                    className="text-muted-foreground leading-relaxed"
                    id="athlete-description"
                    data-testid="text-athlete-modal-description"
                  >
                    {selectedAthlete.description}
                  </p>
                  <div>
                    <h4 className="font-semibold text-lg mb-3">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {selectedAthlete.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-muted-foreground"
                        >
                          <span className="text-primary mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
