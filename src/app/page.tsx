"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, ArrowRight, Flame, ShieldCheck, Award, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import IndiaMap from "@/components/IndiaMap";

// Register GSAP ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  { value: 10, label: "Years Catering Events", suffix: "+" },
  { value: 500, label: "Events Served", suffix: "+" },
  { value: 5, label: "Branches Across India", suffix: "+" },
];

const counters = [
  {
    title: "Chaat Counters",
    description: "The classics, done right: golgappa, papdi, bhalla, all live and made-to-order.",
    image: "/assets/PHOTO-2026-06-25-15-11-23.jpg",
    badge: "Traditional",
  },
  {
    title: "Fusion Bites",
    description: "Where desi meets videshi: Mexican-style bhel, Schezwan tikki, continental dahi twists.",
    image: "/assets/PHOTO-2026-06-25-15-11-12.jpg",
    badge: "Fusion",
    isFusion: true,
  },
  {
    title: "Live Counters",
    description: "Chefs cooking in front of your guests — because half the experience is watching it happen.",
    image: "/assets/PHOTO-2026-06-25-15-11-26.jpg",
    badge: "Theatre",
  },
  {
    title: "Beverages & Mocktails",
    description: "Jal-jeera shots to fusion mocktails, served as fast as the food.",
    image: "/assets/PHOTO-2026-06-25-15-11-11.jpg",
    badge: "Refreshing",
  },
];

const featuredDishes = [
  {
    name: "Kesari Dahi Bhalla & Papdi Chaat",
    description: "Soft lentil dumplings, saffron-laced yogurt, and crisp papdi with tangy chutney.",
    image: "/assets/PHOTO-2026-06-25-15-11-04.jpg",
    isVeg: true,
    spiceLevel: 1,
  },
  {
    name: "Matra with Kulcha or Kachori",
    description: "Spiced white peas station served with fluffy kulchas or flaky crisp kachoris.",
    image: "/assets/PHOTO-2026-06-25-15-11-05.jpg",
    isVeg: true,
    spiceLevel: 2,
  },
  {
    name: "Mexican-Style Bhel",
    description: "Classic puffed rice bhel puri reimagined with a smoky chipotle twist and corn salad.",
    image: "/assets/PHOTO-2026-06-25-15-11-12.jpg",
    isVeg: true,
    spiceLevel: 2,
    isFusion: true,
  },
  {
    name: "Schezwan Aloo Tikki",
    description: "Crisp potato patties tossed in Indo-Chinese Schezwan glaze, served steaming hot.",
    image: "/assets/PHOTO-2026-06-25-15-11-13.jpg",
    isVeg: true,
    spiceLevel: 3,
    isFusion: true,
  },
  {
    name: "Ram Laddoo with Mirchi",
    description: "Crisp moong dal fritters, topped with freshly grated radish and spicy green chutney.",
    image: "/assets/PHOTO-2026-06-25-15-11-15.jpg",
    isVeg: true,
    spiceLevel: 3,
  },
  {
    name: "Golgappa Shots",
    description: "Mini crisp semolina puris served shot-glass style with three distinct flavored waters.",
    image: "/assets/PHOTO-2026-06-25-15-11-18.jpg",
    isVeg: true,
    spiceLevel: 2,
    isCustomSpice: true,
  },
];

const steps = [
  { title: "Enquire", desc: "Tell us your event date, guest count, and theme." },
  { title: "Customize", desc: "We build a counter line-up around your menu and budget." },
  { title: "Tasting", desc: "Try the customized menu before you commit (for larger events)." },
  { title: "Event Day", desc: "We set up, cook live, and clean up. You just host." },
];

const events = [
  {
    title: "Weddings",
    description: "From the sangeet to the reception, live counters that keep every function buzzing.",
    image: "/assets/PHOTO-2026-06-25-15-11-24.jpg",
  },
  {
    title: "Corporate Events",
    description: "Product launches, conferences, and team celebrations that still feel like food, not catering.",
    image: "/assets/PHOTO-2026-06-25-15-11-19.jpg",
  },
  {
    title: "Private Parties",
    description: "Birthdays, anniversaries, and get-togethers that don't need an excuse.",
    image: "/assets/PHOTO-2026-06-25-15-11-11.jpg",
  },
];

const testimonials = [
  {
    quote: "The Mexican Bhel and Golgappa Shots were the absolute highlight of our wedding cocktail party! Guests are still talking about the live counter presentation.",
    author: "Rohan Sharma",
    event: "Wedding Sangeet, Gurugram",
  },
  {
    quote: "We hired them for a 300-guest corporate launch. Impeccable hygiene, fast service, and the food theater was incredible. FSSAI certified and highly professional.",
    author: "Meenakshi Gupta",
    event: "Corporate Annual Meet, Noida",
  },
  {
    quote: "Desi Videshi made my 50th birthday party unforgettable. The Schezwan Tikki and Ram Laddoo were crisp, fresh, and cooked to perfection in front of our eyes.",
    author: "Vikram Kapoor",
    event: "Private Anniversary, Delhi",
  },
];

const galleryPreview = [
  "/assets/PHOTO-2026-06-25-15-11-05(1).jpg",
  "/assets/PHOTO-2026-06-25-15-11-06.jpg",
  "/assets/PHOTO-2026-06-25-15-11-14.jpg",
  "/assets/PHOTO-2026-06-25-15-11-16.jpg",
  "/assets/PHOTO-2026-06-25-15-11-17.jpg",
  "/assets/PHOTO-2026-06-25-15-11-23.jpg",
];

export default function Home() {
  const statsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!statsContainerRef.current) return;

    const ctx = gsap.context(() => {
      // Animate stat numbers
      stats.forEach((_, idx) => {
        const targetObj = { val: 0 };
        const statEl = document.getElementById(`stat-num-${idx}`);
        if (!statEl) return;

        const targetValue = stats[idx].value;

        gsap.to(targetObj, {
          val: targetValue,
          duration: 2,
          scrollTrigger: {
            trigger: statsContainerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            statEl.innerText = Math.floor(targetObj.val).toString();
          },
        });
      });
    }, statsContainerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-[#FFF8EE] pt-10 pb-20 lg:pt-16 lg:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-6 flex flex-col space-y-6 text-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="mb-4 flex justify-center lg:justify-start">
                  <Image
                    src="/unnamed-Photoroom.png"
                    alt="Desi Videshi Chaat"
                    width={240}
                    height={180}
                    className="h-24 sm:h-32 md:h-36 w-auto object-contain drop-shadow-sm mx-auto lg:mx-0"
                    priority
                  />
                </div>
                <span className="text-[#A91D3A] font-sans font-bold text-xs uppercase tracking-widest px-3 py-1 bg-[#A91D3A]/10 rounded-full inline-block mb-3">
                  DELHI NCR'S PREMIUM FUSION CHAAT CATERING
                </span>
                <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-[#1B1B1B] leading-tight">
                  Where <span className="text-[#E8871E]">Desi</span> Meets{" "}
                  <span className="text-[#1B998B]">Videshi</span>
                </h1>
              </motion.div>

              <motion.p
                className="font-sans text-[#1B1B1B]/90 text-lg sm:text-xl font-medium leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                From Delhi’s Streets to Destination Weddings Across India….
                <br />
                <span className="text-[#A91D3A] font-semibold text-base sm:text-lg">
                  New Delhi | Goa | Dehradun | Hyderabad | Jodhpur
                </span>
              </motion.p>

              <motion.p
                className="font-sans text-[#1B1B1B]/80 text-base sm:text-lg leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Authentic Street Food of India | Traditional Indian Chaat | Fusion Chaat | International Cuisines | Live Culinary Experiences for Weddings, Luxury Celebrations & Corporate Events.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link href="/contact">
                  <Button className="w-full sm:w-auto rounded-full bg-[#E8871E] hover:bg-[#A91D3A] text-white py-6 px-8 font-bold text-md shadow-lg transition-all duration-300">
                    Get a Quote
                  </Button>
                </Link>
                <Link href="/menu">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto rounded-full border-[#A91D3A] text-[#A91D3A] hover:bg-[#A91D3A] hover:text-white py-6 px-8 font-bold text-md transition-all duration-300"
                  >
                    View Menu
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Hero Right Content: Asymmetric Image/Video Loop */}
            <div className="lg:col-span-6 relative flex justify-center">
              <motion.div
                className="relative w-full max-w-md md:max-w-lg aspect-[4/5] rounded-[2rem] overflow-hidden border-8 border-[#EDE6DA] shadow-2xl"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <video
                  src="/dc8bc925-d9ab-4ceb-a0ea-57bf80214052.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 text-white text-left max-w-xs">
                  <p className="font-heading text-xl font-bold shadow-sm">Street Food Theatre</p>
                  <p className="font-sans text-xs text-white/80">Our live counters are designed to entertain and delight.</p>
                </div>
              </motion.div>

              {/* Float Secondary Image */}
              <motion.div
                className="absolute -bottom-8 -left-8 hidden md:block w-40 h-40 rounded-3xl overflow-hidden border-4 border-[#FFF8EE] shadow-xl"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <Image
                  src="/assets/PHOTO-2026-06-25-15-11-26.jpg"
                  alt="Live Catering Setup"
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Pan-India Presence Map */}
      <IndiaMap />

      {/* Trust Strip */}
      <section
        ref={statsContainerRef}
        className="bg-[#1B1B1B] text-[#FFF8EE] py-12"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-[#EDE6DA]/15">
            {stats.map((stat, idx) => (
              <div key={idx} className="pt-6 md:pt-0 md:px-6 flex flex-col justify-center">
                <span className="font-heading text-4xl sm:text-5xl font-extrabold text-[#E8871E]">
                  <span id={`stat-num-${idx}`}>0</span>
                  {stat.suffix}
                </span>
                <span className="font-sans text-[#FFF8EE]/80 mt-2 text-sm uppercase tracking-wider font-semibold">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="bg-[#FFF8EE] py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image Block */}
            <div className="lg:col-span-5">
              <div className="relative aspect-square w-full rounded-[2rem] overflow-hidden shadow-xl border-4 border-[#EDE6DA]">
                <Image
                  src="/assets/PHOTO-2026-06-25-15-11-28.jpg"
                  alt="Chaat making close-up"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            {/* Text Block */}
            <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
              <span className="text-[#A91D3A] font-bold text-xs uppercase tracking-widest bg-[#A91D3A]/10 px-3 py-1 rounded-full inline-block self-start">
                SWAD DESI • ANDAZ VIDESHI
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B1B1B] leading-tight">
                Redefining the Art of Premium Catering
              </h2>
              <p className="font-sans text-[#1B1B1B]/80 text-lg leading-relaxed">
                At <strong>Desi Videshi Chaat</strong>, we blend the soul of authentic Indian street food with the elegance of global culinary experiences. Our passion lies in transforming traditional flavors into extraordinary gastronomic journeys that leave a lasting impression on every guest.
              </p>
              <blockquote className="font-heading text-base sm:text-lg italic text-[#A91D3A] border-l-4 border-[#E8871E] pl-4 font-semibold">
                “Ghat Ghat Ke Chaat – Swad Desi, Andaz Videshi.”
              </blockquote>
              <div className="flex flex-wrap gap-6 pt-2">
                <div className="flex items-center space-x-2 text-sm text-[#1B1B1B]">
                  <Award className="h-5 w-5 text-[#E8871E]" />
                  <span className="font-semibold">Bespoke Event Presentation</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-[#1B1B1B]">
                  <ShieldCheck className="h-5 w-5 text-[#1B998B]" />
                  <span className="font-semibold">Uncompromising Quality & Hygiene</span>
                </div>
              </div>
              <div className="pt-2">
                <Link href="/about" className="inline-flex items-center space-x-2 font-sans font-bold text-[#A91D3A] hover:text-[#E8871E] transition-colors group">
                  <span>Read Full Brand Story</span>
                  <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Counters */}
      <section className="bg-[#EDE6DA]/40 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#1B998B] font-bold text-xs uppercase tracking-widest bg-[#1B998B]/10 px-3 py-1 rounded-full inline-block mb-3">
              WHAT WE EXCEL AT
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B1B1B]">
              Our Signature Counters
            </h2>
            <p className="font-sans text-[#1B1B1B]/80 mt-4 text-lg">
              Explore our primary service lines designed to bring flavor, theater, and premium aesthetics to your Delhi NCR gatherings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {counters.map((counter, idx) => (
              <motion.div
                key={idx}
                className="bg-[#FFF8EE] rounded-3xl overflow-hidden border border-[#EDE6DA] shadow-sm hover:shadow-lg transition-shadow duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-12 h-full">
                  <div className="sm:col-span-5 relative h-48 sm:h-full min-h-[200px]">
                    <Image
                      src={counter.image}
                      alt={counter.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="sm:col-span-7 p-8 flex flex-col justify-between text-left">
                    <div>
                      <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full mb-3 ${
                        counter.isFusion
                          ? "bg-[#1B998B]/15 text-[#1B998B]"
                          : "bg-[#E8871E]/15 text-[#E8871E]"
                      }`}>
                        {counter.badge}
                      </span>
                      <h3 className="font-heading text-2xl font-bold text-[#1B1B1B] mb-2">
                        {counter.title}
                      </h3>
                      <p className="font-sans text-[#1B1B1B]/80 text-sm leading-relaxed">
                        {counter.description}
                      </p>
                    </div>
                    <div className="pt-6">
                      <Link href="/menu" className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#A91D3A] hover:text-[#E8871E] transition-colors">
                        <span>Explore Menu</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="bg-[#FFF8EE] py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#A91D3A] font-bold text-xs uppercase tracking-widest bg-[#A91D3A]/10 px-3 py-1 rounded-full inline-block mb-3">
              CRAFTED BY EXPERTS
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B1B1B]">
              Featured Dishes
            </h2>
            <p className="font-sans text-[#1B1B1B]/80 mt-4 text-lg">
              A sneak peek at our signature items that blend traditional Indian heritage with modern, global fusion elements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDishes.map((dish, idx) => (
              <Card key={idx} className="bg-[#FFF8EE] border-[#EDE6DA] rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover"
                  />
                  {dish.isFusion && (
                    <div className="absolute top-4 left-4 bg-[#1B998B] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                      Fusion Special
                    </div>
                  )}
                </div>
                <CardContent className="p-6 text-left flex flex-col justify-between h-48">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      {dish.isVeg && (
                        <span className="flex items-center justify-center h-4 w-4 border border-green-600 p-0.5 rounded-sm">
                          <span className="h-1.5 w-1.5 bg-green-600 rounded-full" />
                        </span>
                      )}
                      <span className="text-xs font-semibold text-[#1B1B1B]/60 uppercase tracking-wide">
                        {dish.isVeg ? "Veg" : "Non-Veg"}
                      </span>
                      <span className="text-xs text-[#1B1B1B]/40">•</span>
                      <div className="flex items-center space-x-0.5">
                        {dish.isCustomSpice ? (
                          <span className="text-[10px] font-bold text-[#E8871E]">Custom Spice</span>
                        ) : (
                          Array.from({ length: dish.spiceLevel }).map((_, sIdx) => (
                            <Flame key={sIdx} className="h-3.5 w-3.5 fill-[#A91D3A] text-[#A91D3A]" />
                          ))
                        )}
                      </div>
                    </div>
                    <h3 className="font-heading text-lg font-bold text-[#1B1B1B] leading-tight mb-2">
                      {dish.name}
                    </h3>
                    <p className="font-sans text-[#1B1B1B]/80 text-xs leading-relaxed line-clamp-2">
                      {dish.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/menu">
              <Button className="rounded-full bg-[#A91D3A] hover:bg-[#E8871E] text-white px-8 py-6 font-bold transition-all duration-300">
                See Full Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-[#1B1B1B] text-[#FFF8EE] py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#E8871E] font-bold text-xs uppercase tracking-widest bg-[#E8871E]/10 px-3 py-1 rounded-full inline-block mb-3">
              OUR PROCESS
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              How It Works
            </h2>
            <p className="font-sans text-[#FFF8EE]/80 mt-4 text-lg">
              We guide you step-by-step from the initial menu conception to the final theatrical culinary show on your event day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col text-center items-center space-y-4 p-4 relative z-10">
                <div className="h-16 w-16 rounded-full bg-[#E8871E] text-[#1B1B1B] flex items-center justify-center font-heading text-2xl font-bold border-4 border-[#1B1B1B]">
                  {idx + 1}
                </div>
                <h3 className="font-heading text-xl font-bold text-white">{step.title}</h3>
                <p className="font-sans text-[#FFF8EE]/70 text-sm leading-relaxed max-w-xs">{step.desc}</p>
              </div>
            ))}
            {/* Connecting line for desktop */}
            <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-[#E8871E]/20 via-[#E8871E] to-[#E8871E]/20 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Events Showcase */}
      <section className="bg-[#FFF8EE] py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#1B998B] font-bold text-xs uppercase tracking-widest bg-[#1B998B]/10 px-3 py-1 rounded-full inline-block mb-3">
              CATERING EXPERIENCE
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B1B1B]">
              Catering for Every Celebration
            </h2>
            <p className="font-sans text-[#1B1B1B]/80 mt-4 text-lg">
              Tailoring menus, counter setups, and service pacing to complement the theme of your event.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event, idx) => (
              <div key={idx} className="group relative rounded-[2rem] overflow-hidden aspect-[3/4] border border-[#EDE6DA] shadow-md hover:shadow-lg transition-all duration-300">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex flex-col justify-end p-8 text-left text-white">
                  <h3 className="font-heading text-2xl font-bold mb-2">{event.title}</h3>
                  <p className="font-sans text-sm text-white/80 leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/events">
              <Button className="rounded-full bg-[#1B998B] hover:bg-[#E8871E] text-white px-8 py-6 font-bold transition-all duration-300">
                Explore Events
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Banner */}
      <section className="bg-[#EDE6DA]/40 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#A91D3A] font-bold text-xs uppercase tracking-widest bg-[#A91D3A]/10 px-3 py-1 rounded-full inline-block mb-3">
            LOVED BY GUESTS
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1B1B1B] mb-12">
            What Our Clients Say
          </h2>

          <Carousel className="w-full max-w-3xl mx-auto">
            <CarouselContent>
              {testimonials.map((t, idx) => (
                <CarouselItem key={idx}>
                  <div className="p-2">
                    <blockquote className="font-heading text-lg sm:text-2xl italic text-[#1B1B1B] leading-relaxed mb-6">
                      "{t.quote}"
                    </blockquote>
                    <cite className="not-italic font-sans">
                      <span className="block font-bold text-[#A91D3A] text-lg">{t.author}</span>
                      <span className="block text-xs uppercase tracking-widest text-[#1B1B1B]/60 mt-1">{t.event}</span>
                    </cite>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex border-[#EDE6DA] hover:bg-[#EDE6DA]" />
            <CarouselNext className="hidden md:flex border-[#EDE6DA] hover:bg-[#EDE6DA]" />
          </Carousel>

          <div className="mt-8 text-center">
            <Link href="/testimonials" className="inline-flex items-center space-x-2 font-sans font-bold text-[#A91D3A] hover:text-[#E8871E] transition-colors group">
              <span>Read More Stories</span>
              <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Teaser Strip */}
      <section className="bg-[#FFF8EE] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12">
            <div className="text-left max-w-2xl">
              <span className="text-[#1B998B] font-bold text-xs uppercase tracking-widest bg-[#1B998B]/10 px-3 py-1 rounded-full inline-block mb-3">
                REAL EVENTS
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1B1B1B]">
                From Our Counters
              </h2>
            </div>
            <Link href="/gallery" className="mt-4 sm:mt-0">
              <Button variant="outline" className="rounded-full border-[#1B998B] text-[#1B998B] hover:bg-[#1B998B] hover:text-white px-6 py-5 font-bold transition-all duration-300">
                View Full Gallery
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {galleryPreview.map((src, idx) => (
              <div key={idx} className="relative aspect-square w-full rounded-2xl overflow-hidden border border-[#EDE6DA] hover:opacity-90 transition-opacity">
                <Image
                  src={src}
                  alt={`Live food counter detail ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA Banner */}
      <section className="bg-[#1B1B1B] text-[#FFF8EE] py-20 relative overflow-hidden">
        {/* Background lattice motif representation */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#EDE6DA_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center space-y-6">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-[#E8871E]">
            Planning an Event?
          </h2>
          <p className="font-sans text-[#FFF8EE]/80 text-lg leading-relaxed max-w-xl">
            Let's build a customized live-counter menu your guests will actually talk about afterward. Catering Delhi NCR since 2016.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto rounded-full bg-[#E8871E] hover:bg-[#A91D3A] text-white px-10 py-7 font-bold text-lg shadow-lg">
                Get a Quote
              </Button>
            </Link>
            <a href="tel:+919718525601" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full sm:w-auto rounded-full border-[#FFF8EE]/20 bg-transparent text-[#FFF8EE] hover:bg-[#FFF8EE] hover:text-[#1B1B1B] px-10 py-7 font-bold text-lg transition-colors">
                <Phone className="h-5 w-5 mr-2 text-[#E8871E]" />
                Call +91 9718525601
              </Button>
            </a>
          </div>
          <div className="flex items-center space-x-2 text-xs text-[#FFF8EE]/50 pt-2">
            <MapPin className="h-4 w-4 text-[#1B998B]" />
            <span>Serving Delhi, Gurugram, Noida, Faridabad & surrounding regions</span>
          </div>
        </div>
      </section>
    </div>
  );
}
