"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, FileText, CheckCircle2, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import confetti from "canvas-confetti";

type Dish = {
  name: string;
  description: string;
  image: string;
  isVeg: boolean;
  spiceLevel: number;
  isFusion?: boolean;
  isCustomSpice?: boolean;
  category: "chaat" | "fusion" | "live" | "beverages";
};

const menuItems: Dish[] = [
  // Chaat Counters
  {
    name: "Golgappa (Pani Puri) Station",
    description: "Traditional hollow semolina puris served live with three kinds of tangy, minty, and sweet waters.",
    image: "/assets/PHOTO-2026-06-25-15-11-18.jpg",
    isVeg: true,
    spiceLevel: 2,
    isCustomSpice: true,
    category: "chaat",
  },
  {
    name: "Crisp Papdi Chaat",
    description: "Crunchy flour crackers layered with boiled potatoes, chickpeas, whipped sweet curd, and chutneys.",
    image: "/assets/PHOTO-2026-06-25-15-11-04(1).jpg",
    isVeg: true,
    spiceLevel: 1,
    category: "chaat",
  },
  {
    name: "Kesari Dahi Bhalla",
    description: "Soft, melt-in-the-mouth lentil dumplings soaked in chilled saffron-infused yogurt and sweet chutneys.",
    image: "/assets/PHOTO-2026-06-25-15-11-04.jpg",
    isVeg: true,
    spiceLevel: 1,
    category: "chaat",
  },
  {
    name: "Aloo Tikki Chaat",
    description: "Shallow-fried crispy potato patties crushed and topped with hot chana masala, yogurt, and spices.",
    image: "/assets/PHOTO-2026-06-25-15-11-06.jpg",
    isVeg: true,
    spiceLevel: 2,
    category: "chaat",
  },
  {
    name: "Ram Laddoo with Mirchi",
    description: "Traditional yellow lentil fritters topped with grated radish, fresh mint, and deep-fried green chili.",
    image: "/assets/PHOTO-2026-06-25-15-11-15.jpg",
    isVeg: true,
    spiceLevel: 3,
    category: "chaat",
  },

  // Fusion Bites
  {
    name: "Mexican-Style Bhel",
    description: "Classic puffed rice and sev tossed with a smoky chipotle reduction, sweet corn, cilantro, and lemon.",
    image: "/assets/PHOTO-2026-06-25-15-11-12.jpg",
    isVeg: true,
    spiceLevel: 2,
    isFusion: true,
    category: "fusion",
  },
  {
    name: "Schezwan Aloo Tikki",
    description: "Crispy potato cutlet tossed with red peppers in a fiery Indo-Chinese Schezwan glaze.",
    image: "/assets/PHOTO-2026-06-25-15-11-13.jpg",
    isVeg: true,
    spiceLevel: 3,
    isFusion: true,
    category: "fusion",
  },
  {
    name: "Continental Dahi Bhalla",
    description: "Classic soft bhallas dressed in a creamy garlic-herb yogurt blend with toasted pomegranate seeds.",
    image: "/assets/PHOTO-2026-06-25-15-11-12(1).jpg",
    isVeg: true,
    spiceLevel: 1,
    isFusion: true,
    category: "fusion",
  },
  {
    name: "Thai Basil Tikki",
    description: "Herbaceous green potato tikki flavored with Thai basil, lemongrass, and a sweet chili-lime drizzle.",
    image: "/assets/PHOTO-2026-06-25-15-11-12(2).jpg",
    isVeg: true,
    spiceLevel: 2,
    isFusion: true,
    category: "fusion",
  },
  {
    name: "Cheese Corn Golgappa Shots",
    description: "Hollow puris filled with a warm cheese-and-corn cream sauce, served with a spiced tomato water shooter.",
    image: "/assets/PHOTO-2026-06-25-15-11-12(3).jpg",
    isVeg: true,
    spiceLevel: 1,
    isFusion: true,
    category: "fusion",
  },

  // Live Counters
  {
    name: "Matra Kulcha / Kachori Station",
    description: "Chefs serving piping hot, spiced dry white peas with warm fluffy kulchas or crispy flaky kachori pastries.",
    image: "/assets/PHOTO-2026-06-25-15-11-05.jpg",
    isVeg: true,
    spiceLevel: 2,
    category: "live",
  },
  {
    name: "Moong Pakora Live Fry",
    description: "Live frying counter for yellow split-pea pakoras, served piping hot in paper cones with radish chutney.",
    image: "/assets/PHOTO-2026-06-25-15-11-23.jpg",
    isVeg: true,
    spiceLevel: 2,
    category: "live",
  },
  {
    name: "Dosa & Chaat Fusion Roll Station",
    description: "Wafer-thin butter crepes rolled with signature tikki mash, chopped onions, chutneys, and fine sev.",
    image: "/assets/PHOTO-2026-06-25-15-11-23(1).jpg",
    isVeg: true,
    spiceLevel: 2,
    isFusion: true,
    category: "live",
  },

  // Beverages & Mocktails
  {
    name: "Jal-Jeera Shots",
    description: "Tangy, digestive cumin and mint water shooters served cold in traditional clay kulhads.",
    image: "/assets/PHOTO-2026-06-25-15-11-13(1).jpg",
    isVeg: true,
    spiceLevel: 1,
    category: "beverages",
  },
  {
    name: "Masala Lemonade",
    description: "Fizzy club soda with freshly squeezed lime juice, rock salt, roasted cumin powder, and mint.",
    image: "/assets/PHOTO-2026-06-25-15-11-13(2).jpg",
    isVeg: true,
    spiceLevel: 1,
    category: "beverages",
  },
  {
    name: "Fusion Mocktail Bar",
    description: "Custom beverage counter blending fruit purees, spices, and soda. Built custom by event request.",
    image: "/assets/PHOTO-2026-06-25-15-11-11.jpg",
    isVeg: true,
    spiceLevel: 0,
    category: "beverages",
  },
];

const tabFilters = [
  { key: "chaat", label: "Chaat Counters" },
  { key: "fusion", label: "Fusion Bites" },
  { key: "live", label: "Live Counters" },
  { key: "beverages", label: "Beverages & Mocktails" },
];

export default function Menu() {
  const [activeTab, setActiveTab] = useState<"chaat" | "fusion" | "live" | "beverages">("chaat");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [leadForm, setLeadForm] = useState({ name: "", phone: "", email: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const filteredItems = menuItems.filter((item) => item.category === activeTab);

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadForm.name || !leadForm.phone || !leadForm.email) return;

    setFormSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#E8871E", "#A91D3A", "#1B998B"],
    });

    // Simulate PDF download triggers
    setTimeout(() => {
      setIsDialogOpen(false);
      setFormSubmitted(false);
      setLeadForm({ name: "", phone: "", email: "" });
      alert("Download Started! In a live environment, this downloads our complete 2026 Catering Menu catalogue.");
    }, 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FFF8EE] font-sans">
      {/* Hero Intro */}
      <section className="bg-[#EDE6DA]/40 py-16 lg:py-24 border-b border-[#EDE6DA]/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-[#A91D3A] font-bold text-xs uppercase tracking-widest bg-[#A91D3A]/10 px-3 py-1 rounded-full inline-block">
            CRAFTED COUNTERS
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-[#1B1B1B]">
            Our Catering Menu
          </h1>
          <p className="font-sans text-[#1B1B1B]/70 mt-2 text-md max-w-xl mx-auto leading-relaxed">
            Mix and match across counters to curate a list that fits your party perfectly. Minimum order configurations depend on guest counts.
          </p>

          {/* Lead Capture PDF Trigger */}
          <div className="pt-4">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger render={
                <Button className="rounded-full bg-[#E8871E] hover:bg-[#A91D3A] text-white px-8 py-6 font-bold shadow-md transition-colors" />
              }>
                <FileText className="h-5 w-5 mr-2" />
                Request Full Menu PDF
              </DialogTrigger>
              <DialogContent className="bg-[#FFF8EE] border-[#EDE6DA] rounded-3xl max-w-md w-[95%]">
                <DialogHeader className="text-left">
                  <DialogTitle className="font-heading text-2xl font-bold text-[#1B1B1B]">
                    Get Our Complete Catalogue
                  </DialogTitle>
                  <DialogDescription className="font-sans text-[#1B1B1B]/70 text-sm">
                    Enter your details below to instantly download our 2026 pricing, counter options, and portion guidelines.
                  </DialogDescription>
                </DialogHeader>

                <AnimatePresence mode="wait">
                  {!formSubmitted ? (
                    <motion.form
                      key="lead-form"
                      onSubmit={handleLeadSubmit}
                      className="space-y-4 pt-2 text-left"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-[#1B1B1B]/70">Full Name</label>
                        <input
                          type="text"
                          required
                          value={leadForm.name}
                          onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                          className="w-full border border-[#EDE6DA] rounded-xl px-4 py-3 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#E8871E]"
                          placeholder="Chef Dinesh"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-[#1B1B1B]/70">Phone Number</label>
                        <input
                          type="tel"
                          required
                          value={leadForm.phone}
                          onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                          className="w-full border border-[#EDE6DA] rounded-xl px-4 py-3 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#E8871E]"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-[#1B1B1B]/70">Email Address</label>
                        <input
                          type="email"
                          required
                          value={leadForm.email}
                          onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                          className="w-full border border-[#EDE6DA] rounded-xl px-4 py-3 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#E8871E]"
                          placeholder="dinesh@gmail.com"
                        />
                      </div>
                      <Button type="submit" className="w-full rounded-xl bg-[#E8871E] hover:bg-[#A91D3A] text-white py-3.5 font-bold mt-2">
                        Download PDF Menu
                      </Button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success-screen"
                      className="py-12 flex flex-col items-center justify-center text-center space-y-4"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      <CheckCircle2 className="h-16 w-16 text-green-500 animate-bounce" />
                      <h3 className="font-heading text-xl font-bold text-[#1B1B1B]">Thank You!</h3>
                      <p className="font-sans text-sm text-[#1B1B1B]/70 max-w-xs">
                        Your download is starting now. A catering team member will also reach out to assist you.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Tabs & Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Tab buttons */}
          <div className="flex overflow-x-auto pb-4 mb-12 scrollbar-none justify-start lg:justify-center border-b border-[#EDE6DA]">
            <div className="flex space-x-2 md:space-x-4">
              {tabFilters.map((tab) => {
                const isActive = activeTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key as any)}
                    className={`whitespace-nowrap px-6 py-3 rounded-full font-sans text-sm font-semibold transition-all relative ${
                      isActive
                        ? "bg-[#A91D3A] text-white shadow-md"
                        : "bg-white text-[#1B1B1B]/80 hover:bg-[#EDE6DA]/50"
                    }`}
                  >
                    {tab.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeMenuTab"
                        className="absolute inset-0 bg-[#A91D3A] rounded-full -z-10"
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dishes grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((dish, idx) => (
                <motion.div
                  key={dish.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="bg-[#FFF8EE] border-[#EDE6DA] rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between">
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={dish.image}
                        alt={dish.name}
                        fill
                        className="object-cover"
                      />
                      {dish.isFusion && (
                        <div className="absolute top-4 left-4 bg-[#1B998B] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                          Fusion Special
                        </div>
                      )}
                    </div>
                    <CardContent className="p-6 text-left flex-grow flex flex-col justify-between">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          {dish.isVeg && (
                            <span className="flex items-center justify-center h-4 w-4 border border-green-600 p-0.5 rounded-sm shrink-0">
                              <span className="h-1.5 w-1.5 bg-green-600 rounded-full" />
                            </span>
                          )}
                          <span className="text-xs font-semibold text-[#1B1B1B]/60 uppercase tracking-wide">
                            {dish.isVeg ? "Veg" : "Non-Veg"}
                          </span>
                          <span className="text-xs text-[#1B1B1B]/40">•</span>
                          <div className="flex items-center space-x-0.5">
                            {dish.isCustomSpice ? (
                              <span className="text-[10px] font-bold text-[#E8871E]">Customizable Spice</span>
                            ) : (
                              dish.spiceLevel > 0 && Array.from({ length: dish.spiceLevel }).map((_, sIdx) => (
                                <Flame key={sIdx} className="h-3.5 w-3.5 fill-[#A91D3A] text-[#A91D3A]" />
                              ))
                            )}
                          </div>
                        </div>
                        <h3 className="font-heading text-xl font-bold text-[#1B1B1B] leading-tight mb-2">
                          {dish.name}
                        </h3>
                        <p className="font-sans text-[#1B1B1B]/80 text-sm leading-relaxed">
                          {dish.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Build Your Own Counter Section */}
      <section className="bg-[#EDE6DA]/40 py-20 border-t border-[#EDE6DA]/60">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-[#1B998B] font-bold text-xs uppercase tracking-widest bg-[#1B998B]/10 px-3 py-1 rounded-full inline-block">
            TAILORED EXPERIENCES
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1B1B1B]">
            Build Your Own Counter
          </h2>
          <p className="font-sans text-[#1B1B1B]/80 text-md max-w-2xl mx-auto leading-relaxed">
            Don't see exactly what you want? Every menu here is a starting point — tell us your guest list, your budget, and your event type, and we'll build counters specific to you.
          </p>
          <div className="pt-2">
            <Link href="/contact">
              <Button className="rounded-full bg-[#A91D3A] hover:bg-[#E8871E] text-white px-8 py-6 font-bold shadow-md transition-all duration-300">
                Discuss Custom Counters
                <ChevronRight className="h-5 w-5 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
