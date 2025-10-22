import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Mail, MapPin, Clock, Briefcase, Trophy, TrendingUp, Globe } from "lucide-react";

interface JobPosting {
  id: string;
  title: string;
  location: string;
  type: string;
  category: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

const jobListings: JobPosting[] = [
  {
    id: "sports-agent",
    title: "Sports Agent",
    location: "Durban, South Africa",
    type: "Full-time",
    category: "Representation",
    description:
      "Join our dynamic team as a Sports Agent representing elite athletes across multiple sports disciplines. You'll be responsible for contract negotiations, sponsorship deals, and career development.",
    responsibilities: [
      "Negotiate contracts and endorsement deals for professional athletes",
      "Build and maintain relationships with sports clubs, sponsors, and media",
      "Develop comprehensive career strategies for athletes",
      "Manage day-to-day athlete requirements and schedules",
      "Scout and recruit emerging talent",
    ],
    requirements: [
      "Bachelor's degree in Sports Management, Business, or related field",
      "3+ years of experience in sports representation or talent management",
      "Strong negotiation and communication skills",
      "Established network in the sports industry",
      "Valid driver's license and willingness to travel",
    ],
  },
  {
    id: "marketing-coordinator",
    title: "Marketing & Brand Coordinator",
    location: "Durban, South Africa",
    type: "Full-time",
    category: "Marketing",
    description:
      "We're seeking a creative Marketing & Brand Coordinator to develop and execute marketing campaigns for our athletes and events. You'll work closely with brands, media partners, and our athlete roster.",
    responsibilities: [
      "Create and implement marketing strategies for athletes and events",
      "Manage social media presence and digital content creation",
      "Coordinate with brands and sponsors for partnership activations",
      "Develop promotional materials and media kits",
      "Analyze marketing performance and provide insights",
    ],
    requirements: [
      "Bachelor's degree in Marketing, Communications, or related field",
      "2+ years of experience in sports marketing or brand management",
      "Proficiency in social media platforms and marketing tools",
      "Strong creative and copywriting skills",
      "Experience with Adobe Creative Suite is a plus",
    ],
  },
  {
    id: "event-manager",
    title: "Event Manager",
    location: "Durban, South Africa",
    type: "Full-time",
    category: "Events",
    description:
      "Lead the planning and execution of sports events, athlete appearances, and promotional activities. This role requires exceptional organizational skills and attention to detail.",
    responsibilities: [
      "Plan and execute sports events from concept to completion",
      "Coordinate athlete appearances and promotional events",
      "Manage event budgets and vendor relationships",
      "Ensure all logistical requirements are met for successful events",
      "Oversee event staff and coordinate with internal teams",
    ],
    requirements: [
      "Bachelor's degree in Event Management, Hospitality, or related field",
      "3+ years of experience in event planning and management",
      "Strong project management and organizational skills",
      "Ability to work under pressure and meet tight deadlines",
      "Experience with sports events is highly advantageous",
    ],
  },
  {
    id: "talent-scout",
    title: "Talent Scout",
    location: "Durban, South Africa",
    type: "Full-time",
    category: "Scouting",
    description:
      "Identify and recruit the next generation of sports stars. As a Talent Scout, you'll attend sporting events, evaluate athletes, and build relationships with promising talent.",
    responsibilities: [
      "Identify and evaluate emerging athletic talent",
      "Attend sporting events and competitions to scout athletes",
      "Build relationships with coaches, clubs, and sports academies",
      "Prepare detailed scouting reports and recommendations",
      "Coordinate tryouts and athlete assessments",
    ],
    requirements: [
      "Strong background in sports (competitive experience preferred)",
      "Excellent eye for athletic talent and potential",
      "Strong networking and relationship-building skills",
      "Willingness to travel extensively",
      "Knowledge of multiple sports disciplines is advantageous",
    ],
  },
];

export default function Careers() {
  const handleApply = (jobTitle: string) => {
    const subject = encodeURIComponent(`Application for ${jobTitle} Position`);
    const body = encodeURIComponent(
      `Dear Hiring Manager,\n\nI am writing to express my interest in the ${jobTitle} position at Cello Sports Management.\n\n[Please introduce yourself and explain why you're a great fit for this role]\n\nBest regards,\n[Your Name]`
    );
    window.location.href = `mailto:hr@cellosports.co.za?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-20">
        {/* Header */}
        <section className="py-16 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block px-4 py-1 bg-primary/10 rounded-full mb-4">
              <span className="text-sm font-semibold text-primary">Careers</span>
            </div>
            <h1
              className="font-display text-5xl sm:text-6xl font-bold text-foreground mb-6"
              data-testid="text-careers-headline"
            >
              Join Our <span className="text-primary">Team</span>
            </h1>
            <p
              className="text-lg text-muted-foreground max-w-3xl mx-auto"
              data-testid="text-careers-subtitle"
            >
              Shape the future of sports management. Work with elite athletes,
              build championship careers, and make your mark in the industry.
            </p>
          </div>
        </section>

        {/* Job Listings */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {jobListings.map((job) => (
                <Card
                  key={job.id}
                  className="p-8 hover-elevate transition-all duration-300"
                  data-testid={`card-job-${job.id}`}
                >
                  {/* Job Header */}
                  <div className="mb-6">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h3
                          className="font-display text-2xl font-bold text-foreground mb-2"
                          data-testid={`text-job-title-${job.id}`}
                        >
                          {job.title}
                        </h3>
                        <Badge
                          className="bg-primary/10 text-primary"
                          data-testid={`badge-job-category-${job.id}`}
                        >
                          {job.category}
                        </Badge>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span data-testid={`text-job-location-${job.id}`}>
                          {job.location}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span data-testid={`text-job-type-${job.id}`}>
                          {job.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Job Description */}
                  <p
                    className="text-muted-foreground leading-relaxed mb-6"
                    data-testid={`text-job-description-${job.id}`}
                  >
                    {job.description}
                  </p>

                  {/* Responsibilities */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-2">
                      {job.responsibilities.map((item, index) => (
                        <li
                          key={index}
                          className="text-sm text-muted-foreground flex gap-2"
                          data-testid={`text-job-responsibility-${job.id}-${index}`}
                        >
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Requirements */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">
                      Requirements
                    </h4>
                    <ul className="space-y-2">
                      {job.requirements.map((item, index) => (
                        <li
                          key={index}
                          className="text-sm text-muted-foreground flex gap-2"
                          data-testid={`text-job-requirement-${job.id}-${index}`}
                        >
                          <span className="text-success mt-1">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Apply Button */}
                  <Button
                    onClick={() => handleApply(job.title)}
                    variant="default"
                    className="w-full rounded-md"
                    data-testid={`button-apply-${job.id}`}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Apply Now
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-16 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 
              className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6"
              data-testid="text-culture-headline"
            >
              Why Work With Us?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div data-testid="card-culture-athletes">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Trophy className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 
                  className="font-semibold text-foreground mb-2"
                  data-testid="text-culture-title-athletes"
                >
                  Elite Athletes
                </h3>
                <p 
                  className="text-sm text-muted-foreground"
                  data-testid="text-culture-desc-athletes"
                >
                  Work with top-tier athletes and help shape championship
                  careers
                </p>
              </div>
              <div data-testid="card-culture-growth">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-success" />
                  </div>
                </div>
                <h3 
                  className="font-semibold text-foreground mb-2"
                  data-testid="text-culture-title-growth"
                >
                  Career Growth
                </h3>
                <p 
                  className="text-sm text-muted-foreground"
                  data-testid="text-culture-desc-growth"
                >
                  Advance your career in a dynamic, fast-growing industry
                </p>
              </div>
              <div data-testid="card-culture-impact">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Globe className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 
                  className="font-semibold text-foreground mb-2"
                  data-testid="text-culture-title-impact"
                >
                  Global Impact
                </h3>
                <p 
                  className="text-sm text-muted-foreground"
                  data-testid="text-culture-desc-impact"
                >
                  Make a difference in sports on a national and international
                  scale
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
