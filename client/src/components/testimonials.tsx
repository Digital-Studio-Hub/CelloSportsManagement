import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { type Testimonial } from "@shared/schema";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Thabo Mthembu",
      role: "Professional Footballer",
      company: "AmaZulu FC",
      quote:
        "Cello Sports Management transformed my career. Their expertise in contract negotiation secured me a deal that exceeded my expectations, and their guidance has been invaluable.",
    },
    {
      id: "2",
      name: "Zanele Dlamini",
      role: "Elite Athlete",
      company: "South African Athletics",
      quote:
        "The team at Cello truly understands what athletes need. They've opened doors I never knew existed and helped me build a sustainable career beyond competition.",
    },
    {
      id: "3",
      name: "David Mokoena",
      role: "Club Manager",
      company: "Kaizer Chiefs",
      quote:
        "Working with Cello Sports Management is always professional and seamless. They represent quality athletes and maintain the highest standards of integrity.",
    },
    {
      id: "4",
      name: "Sarah Nkosi",
      role: "Brand Director",
      company: "Nike South Africa",
      quote:
        "Cello consistently brings us exceptional talent for partnerships. Their athletes are not just skilled—they're professional, marketable, and represent our brand values perfectly.",
    },
    {
      id: "5",
      name: "Mandla Zungu",
      role: "Defender",
      company: "Mamelodi Sundowns",
      quote:
        "From my first professional contract to now, Cello has been with me every step. They're more than agents—they're family who genuinely care about my success.",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-primary/10 rounded-full mb-4">
            <span className="text-sm font-semibold text-primary">
              Testimonials
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Trusted by athletes, clubs, and brands across South Africa.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 sm:p-12 relative">
            <Quote className="w-12 h-12 text-primary/20 absolute top-8 left-8" />
            <div className="relative z-10">
              <blockquote 
                className="text-xl sm:text-2xl text-foreground font-medium leading-relaxed mb-8 text-center"
                data-testid="text-testimonial-quote"
              >
                "{testimonials[currentIndex].quote}"
              </blockquote>
              <div className="text-center">
                <div 
                  className="font-display font-bold text-lg text-foreground"
                  data-testid="text-testimonial-name"
                >
                  {testimonials[currentIndex].name}
                </div>
                <div 
                  className="text-muted-foreground"
                  data-testid="text-testimonial-role"
                >
                  {testimonials[currentIndex].role} •{" "}
                  {testimonials[currentIndex].company}
                </div>
              </div>
            </div>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
              data-testid="button-testimonial-prev"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-border hover-elevate"
                  }`}
                  data-testid={`button-testimonial-dot-${index}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
              data-testid="button-testimonial-next"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
