import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { type GalleryItem } from "@shared/schema";
import img1 from "@assets/stock_images/professional_footbal_8330acfb.jpg";
import img2 from "@assets/stock_images/football_soccer_stad_b4441bad.jpg";
import img3 from "@assets/stock_images/professional_athlete_0722b2d0.jpg";
import img4 from "@assets/stock_images/sports_team_celebrat_6d04626a.jpg";
import img5 from "@assets/stock_images/football_soccer_play_9f2cb734.jpg";
import img6 from "@assets/stock_images/sports_event_stadium_44e1d884.jpg";
import img7 from "@assets/stock_images/professional_athlete_0c2129b2.jpg";
import img8 from "@assets/stock_images/football_player_acti_2a5c938d.jpg";
import img9 from "@assets/stock_images/sports_team_celebrat_94184f32.jpg";
import img10 from "@assets/stock_images/football_player_acti_49be5598.jpg";
import img11 from "@assets/stock_images/sports_event_stadium_b779bb8b.jpg";
import img12 from "@assets/stock_images/football_player_acti_f3901694.jpg";

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: "1",
      image: img1,
      caption: "Professional athlete in action",
      category: "Action",
    },
    {
      id: "2",
      image: img2,
      caption: "Stadium atmosphere",
      category: "Venue",
    },
    {
      id: "3",
      image: img3,
      caption: "Training excellence",
      category: "Training",
    },
    {
      id: "4",
      image: img4,
      caption: "Team celebration",
      category: "Events",
    },
    {
      id: "5",
      image: img5,
      caption: "Player portrait",
      category: "Athletes",
    },
    {
      id: "6",
      image: img6,
      caption: "Night match atmosphere",
      category: "Events",
    },
    {
      id: "7",
      image: img7,
      caption: "Athletic training",
      category: "Training",
    },
    {
      id: "8",
      image: img8,
      caption: "Dynamic movement",
      category: "Action",
    },
    {
      id: "9",
      image: img9,
      caption: "Victory celebration",
      category: "Events",
    },
    {
      id: "10",
      image: img10,
      caption: "Football action",
      category: "Action",
    },
    {
      id: "11",
      image: img11,
      caption: "Stadium lights",
      category: "Venue",
    },
    {
      id: "12",
      image: img12,
      caption: "Player in motion",
      category: "Action",
    },
  ];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryItems.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? galleryItems.length - 1 : selectedImage - 1
      );
    }
  };

  return (
    <section id="gallery" className="py-20 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-primary/10 rounded-full mb-4">
            <span className="text-sm font-semibold text-primary">Gallery</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Moments of <span className="text-primary">Excellence</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A visual journey through our athletes' achievements, events, and
            memorable moments.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setSelectedImage(index)}
              className="relative aspect-square rounded-md group hover-elevate active-elevate-2 transition-all duration-300 overflow-visible"
              data-testid={`image-gallery-${index}`}
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover rounded-md"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium text-sm">
                  View Image
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Lightbox Modal */}
        <Dialog
          open={selectedImage !== null}
          onOpenChange={() => setSelectedImage(null)}
        >
          <DialogContent className="max-w-7xl w-full h-[90vh] p-0 bg-black/95 border-none" aria-describedby="lightbox-description">
            {selectedImage !== null && (
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Close Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-50 text-white hover:bg-white/10 rounded-full"
                  data-testid="button-close-lightbox"
                >
                  <X className="w-6 h-6" />
                </Button>

                {/* Navigation Buttons */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={prevImage}
                  className="absolute left-4 z-50 text-white hover:bg-white/10 rounded-full"
                  data-testid="button-lightbox-prev"
                >
                  <ChevronLeft className="w-8 h-8" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={nextImage}
                  className="absolute right-4 z-50 text-white hover:bg-white/10 rounded-full"
                  data-testid="button-lightbox-next"
                >
                  <ChevronRight className="w-8 h-8" />
                </Button>

                {/* Image */}
                <div className="relative w-full h-full flex items-center justify-center p-12">
                  <img
                    src={galleryItems[selectedImage].image}
                    alt={galleryItems[selectedImage].caption}
                    className="max-w-full max-h-full object-contain"
                  />
                  <div className="absolute bottom-8 left-0 right-0 text-center">
                    <p 
                      className="text-white text-lg font-medium"
                      id="lightbox-description"
                      data-testid="text-lightbox-caption"
                    >
                      {galleryItems[selectedImage].caption}
                    </p>
                    <p 
                      className="text-white/60 text-sm mt-1"
                      data-testid="text-lightbox-counter"
                    >
                      {selectedImage + 1} / {galleryItems.length}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
