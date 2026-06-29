"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  location: string;
  stars: number;
  category: "weddings" | "corporate" | "parties";
};

const testimonialsList: Testimonial[] = [
  {
    quote: "The Mexican Bhel and Golgappa Shots were the absolute highlight of our wedding cocktail party! Guests are still talking about the live counter presentation. Impeccable taste.",
    author: "Rohan Sharma",
    role: "Wedding Sangeet",
    location: "Gurugram",
    stars: 5,
    category: "weddings",
  },
  {
    quote: "We hired them for a 300-guest corporate launch. Impeccable hygiene, fast service, and the food theater was incredible. FSSAI certified and highly professional. Highly recommended.",
    author: "Meenakshi Gupta",
    role: "Corporate Annual Meet",
    location: "Noida",
    stars: 5,
    category: "corporate",
  },
  {
    quote: "Desi Videshi made my 50th birthday party unforgettable. The Schezwan Tikki and Ram Laddoo were crisp, fresh, and cooked to perfection in front of our eyes.",
    author: "Vikram Kapoor",
    role: "Private Anniversary",
    location: "Delhi",
    stars: 5,
    category: "parties",
  },
  {
    quote: "Exceptional service from menu planning to clean-up. The Thai Basil Tikki was a massive hit among our guests. They handled a crowd of 200 with complete ease.",
    author: "Ananya Sen",
    role: "Housewarming Party",
    location: "Faridabad",
    stars: 5,
    category: "parties",
  },
  {
    quote: "Our international clients loved the 'Golgappa Shots' and 'Cheese Corn Golgappas'. It was the perfect fusion touch for our product showcase event. Will hire again.",
    author: "Kabir Mehta",
    role: "Corporate Product Launch",
    location: "Gurugram",
    stars: 5,
    category: "corporate",
  },
  {
    quote: "From the traditional papdi chaat to the fusion mocktails, everything was flawless. The kitchen crew was courteous, hygienic, and extremely efficient.",
    author: "Priya Saxena",
    role: "Sangeet Ceremony",
    location: "Delhi",
    stars: 5,
    category: "weddings",
  },
  {
    quote: "They managed our multi-day corporate conference catering with flawless execution. Daily menu shifts, live hot stations, and great feedback from all delegates.",
    author: "Sandeep Bhasin",
    role: "Corporate Conference",
    location: "Noida",
    stars: 5,
    category: "corporate",
  },
  {
    quote: "Every guest was impressed by the live counters. Having hot pakoras and dosa rolls made on the spot beats stand-alone buffets by a mile. Thank you, Desi Videshi!",
    author: "Neha Kochhar",
    role: "Birthday Celebration",
    location: "Gurugram",
    stars: 5,
    category: "parties",
  },
];

export default function Testimonials() {
  const [filter, setFilter] = useState<"all" | "weddings" | "corporate" | "parties">("all");

  const filteredTestimonials = testimonialsList.filter(
    (t) => filter === "all" || t.category === filter
  );

  return (
    <div className="flex flex-col min-h-screen bg-[#FFF8EE] font-sans">
      {/* Hero Header */}
      <section className="relative bg-[#EDE6DA]/40 py-16 lg:py-24 border-b border-[#EDE6DA]/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-[#A91D3A] font-bold text-xs uppercase tracking-widest bg-[#A91D3A]/10 px-3 py-1 rounded-full inline-block">
            REVIEWS
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-[#1B1B1B]">
            What Our Clients Say
          </h1>
          <p className="font-sans text-[#1B1B1B]/70 mt-2 text-md max-w-xl mx-auto leading-relaxed">
            Discover real feedback from event organizers, wedding planners, and corporate administrators across the Delhi NCR region.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 border-b border-[#EDE6DA]/40 bg-white/30 backdrop-blur-sm sticky top-[60px] z-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex overflow-x-auto justify-start md:justify-center space-x-3 scrollbar-none">
          {(["all", "weddings", "corporate", "parties"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-full font-sans text-xs font-bold uppercase tracking-wider transition-all border ${
                filter === cat
                  ? "bg-[#A91D3A] text-white border-[#A91D3A] shadow-sm"
                  : "bg-white text-[#1B1B1B]/80 border-[#EDE6DA] hover:bg-[#EDE6DA]/30"
              }`}
            >
              {cat === "all"
                ? "All Reviews"
                : cat === "weddings"
                ? "Weddings & Sangeet"
                : cat === "corporate"
                ? "Corporate Affairs"
                : "Private Parties"}
            </button>
          ))}
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredTestimonials.map((t, idx) => (
                <motion.div
                  key={t.author}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="bg-[#FFF8EE] border-[#EDE6DA] rounded-3xl p-8 relative overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col justify-between text-left">
                    
                    {/* Jali/lattice SVG design accent inside the card background */}
                    <div className="absolute right-4 top-4 opacity-5 pointer-events-none">
                      <Quote className="h-20 w-20 text-[#A91D3A]" />
                    </div>

                    <div className="space-y-4 relative z-10">
                      {/* Stars */}
                      <div className="flex space-x-1">
                        {Array.from({ length: t.stars }).map((_, sIdx) => (
                          <Star key={sIdx} className="h-4.5 w-4.5 fill-[#E8871E] text-[#E8871E]" />
                        ))}
                      </div>
                      
                      {/* Quote */}
                      <blockquote className="font-heading text-lg text-[#1B1B1B]/90 leading-relaxed italic">
                        "{t.quote}"
                      </blockquote>
                    </div>

                    {/* Author Signature */}
                    <div className="pt-6 border-t border-[#EDE6DA] mt-6 flex items-center justify-between">
                      <div>
                        <cite className="not-italic font-sans">
                          <span className="block font-bold text-[#A91D3A] text-md">{t.author}</span>
                          <span className="block text-xs text-[#1B1B1B]/60 mt-0.5">{t.role}</span>
                        </cite>
                      </div>
                      <span className="font-sans text-[10px] uppercase tracking-wider font-semibold text-[#1B998B] bg-[#1B998B]/10 px-2.5 py-1 rounded-full">
                        {t.location}
                      </span>
                    </div>

                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-[#1B1B1B] text-[#FFF8EE] py-20 relative overflow-hidden border-t border-[#EDE6DA]/10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10 flex flex-col items-center">
          <span className="text-[#E8871E] font-bold text-xs uppercase tracking-widest bg-[#E8871E]/10 px-3 py-1 rounded-full inline-block">
            PLANNING
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#E8871E]">
            Ready to Add Your Own Story?
          </h2>
          <p className="font-sans text-[#FFF8EE]/80 text-md max-w-lg mx-auto leading-relaxed">
            Let's design a customized live counter layout and fusion menu items that your guests will praise for years.
          </p>
          <div className="pt-2">
            <Link href="/contact">
              <Button className="rounded-full bg-[#E8871E] hover:bg-[#A91D3A] text-white px-8 py-6 font-bold shadow-md transition-colors group">
                <span>Book Your Date</span>
                <ArrowRight className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
