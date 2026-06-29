"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";

type MediaItem = {
  src: string;
  type: "image" | "video";
  category: "counters" | "events" | "bts";
  caption: string;
};

const galleryItems: MediaItem[] = [
  // Counters
  { src: "/assets/PHOTO-2026-06-25-15-11-04(1).jpg", type: "image", category: "counters", caption: "Crisp Papdi Chaat Prep" },
  { src: "/assets/PHOTO-2026-06-25-15-11-04.jpg", type: "image", category: "counters", caption: "Kesari Dahi Bhalla Platter" },
  { src: "/assets/PHOTO-2026-06-25-15-11-05(1).jpg", type: "image", category: "counters", caption: "Live Matra Stations" },
  { src: "/assets/PHOTO-2026-06-25-15-11-05(2).jpg", type: "image", category: "counters", caption: "Kachoris and Matra pea mash" },
  { src: "/assets/PHOTO-2026-06-25-15-11-05.jpg", type: "image", category: "counters", caption: "Moong fritters and pakoras" },
  { src: "/assets/PHOTO-2026-06-25-15-11-06(1).jpg", type: "image", category: "counters", caption: "Traditional Tikki Counter Setup" },
  { src: "/assets/PHOTO-2026-06-25-15-11-06.jpg", type: "image", category: "counters", caption: "Aloo Tikki Chaat Preparation" },
  { src: "/assets/PHOTO-2026-06-25-15-11-12(1).jpg", type: "image", category: "counters", caption: "Savory Continental Yogurt Cups" },
  { src: "/assets/PHOTO-2026-06-25-15-11-12(2).jpg", type: "image", category: "counters", caption: "Thai Herb Basil Tikkis" },
  { src: "/assets/PHOTO-2026-06-25-15-11-12(3).jpg", type: "image", category: "counters", caption: "Cheese Corn Golgappa Shots" },
  { src: "/assets/PHOTO-2026-06-25-15-11-12.jpg", type: "image", category: "counters", caption: "Mexican Chipotle Bhel Puri" },
  { src: "/assets/PHOTO-2026-06-25-15-11-13(1).jpg", type: "image", category: "counters", caption: "Clay Kulhad Jal-Jeera Shots" },
  { src: "/assets/PHOTO-2026-06-25-15-11-13(2).jpg", type: "image", category: "counters", caption: "Spiced Masala Soda Station" },
  { src: "/assets/PHOTO-2026-06-25-15-11-13.jpg", type: "image", category: "counters", caption: "Schezwan Tikki Frying" },
  { src: "/assets/PHOTO-2026-06-25-15-11-15(1).jpg", type: "image", category: "counters", caption: "Savory Moong Laddoo Plating" },
  { src: "/assets/PHOTO-2026-06-25-15-11-15(2).jpg", type: "image", category: "counters", caption: "Radish and Mint toppings" },
  { src: "/assets/PHOTO-2026-06-25-15-11-15.jpg", type: "image", category: "counters", caption: "Laddoo Fritters with Chillies" },
  { src: "/assets/PHOTO-2026-06-25-15-11-18.jpg", type: "image", category: "counters", caption: "Mint & Tamarind Golgappa Waters" },
  { src: "/assets/PHOTO-2026-06-25-15-11-23.jpg", type: "image", category: "counters", caption: "Moong Pakora Live Frying" },

  // Events
  { src: "/assets/PHOTO-2026-06-25-15-11-11.jpg", type: "image", category: "events", caption: "Wedding Cocktail Gathering" },
  { src: "/assets/PHOTO-2026-06-25-15-11-19(1).jpg", type: "image", category: "events", caption: "Corporate Outdoor Dining" },
  { src: "/assets/PHOTO-2026-06-25-15-11-19.jpg", type: "image", category: "events", caption: "Corporate Product Launch Buffet" },
  { src: "/assets/PHOTO-2026-06-25-15-11-24(1).jpg", type: "image", category: "events", caption: "Outdoor Lawn Counter Setup" },
  { src: "/assets/PHOTO-2026-06-25-15-11-24(2).jpg", type: "image", category: "events", caption: "Evening Sangeet Lighting & Stalls" },
  { src: "/assets/PHOTO-2026-06-25-15-11-24.jpg", type: "image", category: "events", caption: "Luxury Wedding Lawn Counter" },
  { src: "/assets/PHOTO-2026-06-25-15-11-25(1).jpg", type: "image", category: "events", caption: "Guests lined up at Golgappa Station" },
  { src: "/assets/PHOTO-2026-06-25-15-11-25(2).jpg", type: "image", category: "events", caption: "Live interaction at fusion counter" },
  { src: "/assets/PHOTO-2026-06-25-15-11-25.jpg", type: "image", category: "events", caption: "Wedding Reception Buffet Area" },
  { src: "/assets/PHOTO-2026-06-25-15-11-28(1).jpg", type: "image", category: "events", caption: "Close-up of spices and garnishing" },
  { src: "/assets/PHOTO-2026-06-25-15-11-28.jpg", type: "image", category: "events", caption: "Live Plating and Serving to Guests" },

  // Behind the Scenes
  { src: "/assets/PHOTO-2026-06-25-15-11-14(1).jpg", type: "image", category: "bts", caption: "Prep kitchen dicing fresh herbs" },
  { src: "/assets/PHOTO-2026-06-25-15-11-14(2).jpg", type: "image", category: "bts", caption: "Pre-event briefing with our staff" },
  { src: "/assets/PHOTO-2026-06-25-15-11-14(3).jpg", type: "image", category: "bts", caption: "Founder reviewing daily spice balances" },
  { src: "/assets/PHOTO-2026-06-25-15-11-14.jpg", type: "image", category: "bts", caption: "Chef Dinesh arranging presentation platters" },
  { src: "/assets/PHOTO-2026-06-25-15-11-16.jpg", type: "image", category: "bts", caption: "Cleaned and sanitized griddles" },
  { src: "/assets/PHOTO-2026-06-25-15-11-17.jpg", type: "image", category: "bts", caption: "Tasting room menu review" },
  { src: "/assets/PHOTO-2026-06-25-15-11-18(1).jpg", type: "image", category: "bts", caption: "Golgappa waters temperature check" },
  { src: "/assets/PHOTO-2026-06-25-15-11-22.jpg", type: "image", category: "bts", caption: "Chefs preparing custom bhel blends" },
  { src: "/assets/PHOTO-2026-06-25-15-11-23(1).jpg", type: "image", category: "bts", caption: "Frying fresh hot moong pakoras" },
  { src: "/assets/PHOTO-2026-06-25-15-11-23(2).jpg", type: "image", category: "bts", caption: "Radish grading and washing" },
  { src: "/assets/PHOTO-2026-06-25-15-11-26(1).jpg", type: "image", category: "bts", caption: "Polishing copper service bowls" },
  { src: "/assets/PHOTO-2026-06-25-15-11-26(2).jpg", type: "image", category: "bts", caption: "Arranging dry flower table motifs" },
  { src: "/assets/PHOTO-2026-06-25-15-11-26.jpg", type: "image", category: "bts", caption: "Live tawa presentation cleanup" },
  { src: "/assets/PHOTO-2026-06-25-15-11-27(1).jpg", type: "image", category: "bts", caption: "Grating fresh spices over papdi" },
  { src: "/assets/PHOTO-2026-06-25-15-11-27(2).jpg", type: "image", category: "bts", caption: "Yogurt piping and dressing" },
  { src: "/assets/PHOTO-2026-06-25-15-11-27.jpg", type: "image", category: "bts", caption: "Saucing and finishing of chaat plate" },
  { src: "/assets/VIDEO-2026-06-25-15-11-22.mp4", type: "video", category: "bts", caption: "Live Counter Action Video Loop" },
];

export default function Gallery() {
  const [filter, setFilter] = useState<"all" | "counters" | "events" | "bts">("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = galleryItems.filter(
    (item) => filter === "all" || item.category === filter
  );

  const openLightbox = (src: string) => {
    // Find index in the currently filtered list
    const index = filteredItems.findIndex((item) => item.src === src);
    if (index !== -1) {
      setLightboxIndex(index);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : (prev as number) - 1));
    }
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : (prev as number) + 1));
    }
  };

  const activeItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <div className="flex flex-col min-h-screen bg-[#FFF8EE] font-sans">
      {/* Header Intro */}
      <section className="bg-[#EDE6DA]/40 py-16 lg:py-24 border-b border-[#EDE6DA]/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-[#1B998B] font-bold text-xs uppercase tracking-widest bg-[#1B998B]/10 px-3 py-1 rounded-full inline-block">
            STREET FOOD THEATRE
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-[#1B1B1B]">
            From Our Counters
          </h1>
          <p className="font-sans text-[#1B1B1B]/70 mt-2 text-md max-w-xl mx-auto leading-relaxed">
            Real snaps of live frying, copper platter layouts, wedding guests, and backstage hygiene prep. No stock photos.
          </p>
        </div>
      </section>

      {/* Filter Options */}
      <section className="py-8 border-b border-[#EDE6DA]/40 bg-white/30 backdrop-blur-sm sticky top-[60px] z-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex overflow-x-auto justify-start md:justify-center space-x-3 scrollbar-none">
          {(["all", "counters", "events", "bts"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                setLightboxIndex(null);
              }}
              className={`px-5 py-2.5 rounded-full font-sans text-xs font-bold uppercase tracking-wider transition-all border ${
                filter === cat
                  ? "bg-[#1B998B] text-white border-[#1B998B] shadow-sm"
                  : "bg-white text-[#1B1B1B]/80 border-[#EDE6DA] hover:bg-[#EDE6DA]/30"
              }`}
            >
              {cat === "all"
                ? "All snaps"
                : cat === "counters"
                ? "Dishes & Counters"
                : cat === "events"
                ? "Events & Gatherings"
                : "Behind-the-Scenes"}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => openLightbox(item.src)}
                  className="break-inside-avoid relative rounded-3xl overflow-hidden border border-[#EDE6DA] shadow-sm hover:shadow-md transition-shadow group cursor-zoom-in"
                >
                  {item.type === "image" ? (
                    <div className="relative w-full h-auto">
                      <img
                        src={item.src}
                        alt={item.caption}
                        className="w-full h-auto object-cover max-h-[500px] min-h-[150px] group-hover:scale-[1.02] transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="relative w-full aspect-video bg-black flex items-center justify-center">
                      <video
                        src={item.src}
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover group-hover:opacity-90"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <span className="h-14 w-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white">
                          <Play className="h-6 w-6 fill-current ml-1" />
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Caption Overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent p-5 text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <p className="font-heading text-white text-md font-semibold">{item.caption}</p>
                    <span className="font-sans text-[10px] text-white/60 uppercase tracking-widest font-bold mt-1 inline-block">
                      {item.category === "counters"
                        ? "Counter"
                        : item.category === "events"
                        ? "Event Day"
                        : "Behind-the-Scenes"}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4"
          >
            {/* Header Toolbar */}
            <div className="flex items-center justify-between text-white py-2 px-4">
              <span className="font-sans text-xs uppercase tracking-wider text-white/60">
                {lightboxIndex! + 1} of {filteredItems.length} • {activeItem.caption}
              </span>
              <button
                onClick={() => setLightboxIndex(null)}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors focus:outline-none"
                aria-label="Close Lightbox"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Media Container */}
            <div className="flex-grow flex items-center justify-between gap-4 max-w-6xl mx-auto w-full">
              {/* Previous Button */}
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white focus:outline-none shrink-0"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              {/* Central Asset */}
              <div className="relative flex-grow flex items-center justify-center max-h-[75vh] w-full max-w-4xl aspect-[4/5] sm:aspect-auto">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeItem.src}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="relative w-full h-full flex items-center justify-center"
                  >
                    {activeItem.type === "image" ? (
                      <img
                        src={activeItem.src}
                        alt={activeItem.caption}
                        className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl"
                      />
                    ) : (
                      <video
                        src={activeItem.src}
                        controls
                        autoPlay
                        loop
                        className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl"
                      />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white focus:outline-none shrink-0"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Footer Caption */}
            <div className="text-center text-white/80 font-sans text-sm py-4 max-w-xl mx-auto">
              <p className="font-heading text-lg font-bold text-white">{activeItem.caption}</p>
              <p className="text-xs text-white/50 uppercase tracking-widest mt-1">
                Category: {activeItem.category}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
