"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Award,
  Sparkles,
  ArrowRight,
  UtensilsCrossed,
  Flame,
  Globe,
  HeartHandshake,
  Phone,
  MapPin,
  Compass,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const signatures = [
  {
    icon: UtensilsCrossed,
    title: "Authentic Indian Chaat",
    description: "Classic golgappa, crisp papdi, soft dahi bhalla, and regional street specialties crafted with time-honored recipes.",
    color: "#E8871E",
  },
  {
    icon: Flame,
    title: "Fusion Creations",
    description: "Innovative small plates where traditional Indian spices seamlessly meet global culinary formats and modern flair.",
    color: "#A91D3A",
  },
  {
    icon: Compass,
    title: "Street Food of India",
    description: "Vibrant live counters bringing the high-energy theater, sizzle, and aroma of India's iconic food lanes right to your event.",
    color: "#1B998B",
  },
  {
    icon: Globe,
    title: "International Cuisine",
    description: "Curated global flavors and modern continental live stalls designed to elevate luxury banquets and corporate galas.",
    color: "#8B5CF6",
  },
];

const hubs = [
  { city: "New Delhi", label: "Capital Hub & Main Ops" },
  { city: "Dehradun", label: "Hill Retreats & North Hub" },
  { city: "Hyderabad", label: "South Region & Tech Summits" },
];

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFF8EE] font-sans">
      {/* Hero Header */}
      <section className="relative bg-[#EDE6DA]/40 py-16 lg:py-24 border-b border-[#EDE6DA]/60 overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#1B1B1B_1px,transparent_1px)] [background-size:20px_20px]" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <span className="text-[#A91D3A] font-bold text-xs uppercase tracking-widest bg-[#A91D3A]/10 border border-[#A91D3A]/20 px-4 py-1.5 rounded-full inline-flex items-center space-x-2">
              <Sparkles className="w-3.5 h-3.5 text-[#A91D3A]" />
              <span>DESI VIDESHI CHAAT</span>
            </span>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#1B1B1B]">
              Swad Desi <span className="text-[#E8871E]">•</span> Andaz Videshi ✨
            </h1>

            <p className="font-heading text-lg sm:text-2xl italic text-[#A91D3A] max-w-2xl mx-auto font-medium">
              “Ghat Ghat Ke Chaat – Swad Desi, Andaz Videshi.”
            </p>

            <div className="flex flex-wrap justify-center items-center gap-3 pt-2 text-xs font-semibold text-[#1B1B1B]/70">
              <span className="flex items-center space-x-1 bg-white/80 px-3 py-1.5 rounded-full border border-[#EDE6DA]">
                <MapPin className="w-3.5 h-3.5 text-[#1B998B]" />
                <span>NEW DELHI | DEHRADUN | HYDERABAD</span>
              </span>
              <span className="flex items-center space-x-1 bg-white/80 px-3 py-1.5 rounded-full border border-[#EDE6DA]">
                <Globe className="w-3.5 h-3.5 text-[#E8871E]" />
                <span>www.desivideshichaat.in</span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Narrative Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Story Text */}
            <div className="lg:col-span-7 flex flex-col space-y-6 text-left order-2 lg:order-1">
              <div className="space-y-2">
                <span className="text-[#1B998B] font-bold text-xs uppercase tracking-widest bg-[#1B998B]/10 px-3 py-1 rounded-full inline-block">
                  OUR CULINARY MISSION
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1B1B1B] leading-tight">
                  Redefining the Art of Premium Catering
                </h2>
              </div>

              <div className="space-y-5 text-base sm:text-lg text-[#1B1B1B]/80 leading-relaxed font-sans">
                <p>
                  At <strong>Desi Videshi Chaat</strong>, we redefine the art of catering by blending the soul of Authentic Indian street food with the elegance of global culinary experiences. Our passion lies in transforming traditional flavors into extraordinary gastronomic journeys that leave a lasting impression on every guest.
                </p>

                <p>
                  From iconic Indian chaats and regional street-food delicacies to innovative fusion creations and curated international cuisine, every offering is thoughtfully crafted to celebrate authenticity, creativity, and excellence. We honor the rich heritage of Indian flavors while embracing modern techniques and global influences, creating a unique balance of tradition and innovation.
                </p>

                <p>
                  Our philosophy is simple — <em>exceptional food deserves exceptional presentation and impeccable service</em>. Every menu is carefully customized to reflect the vision, preferences, and style of our clients, ensuring a personalized experience for weddings, luxury celebrations, corporate events, private gatherings, and grand social occasions.
                </p>

                <p>
                  Driven by uncompromising quality, hygiene, and attention to detail, we take pride in delivering experiences that are as visually captivating as they are flavorful. Our team combines culinary expertise, innovative concepts, and flawless execution to create moments that guests remember long after the event concludes.
                </p>

                <p className="font-semibold text-[#1B1B1B] pt-2 border-l-4 border-[#E8871E] pl-4 italic">
                  Today, Desi Videshi Chaat stands as a trusted name in premium catering, recognized for its exceptional taste, contemporary presentation, innovative menus, and world-class hospitality. Every event we serve is a reflection of our commitment to perfection, passion, and the pursuit of culinary excellence.
                </p>
              </div>
            </div>

            {/* Side Visual Frame */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="relative aspect-[4/5] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-[#EDE6DA]">
                <Image
                  src="/assets/PHOTO-2026-06-25-15-11-27.jpg"
                  alt="Desi Videshi Live Culinary Setup"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                  <p className="font-heading text-xl font-bold text-[#E8871E]">Swad Desi • Andaz Videshi</p>
                  <p className="font-sans text-xs text-white/80 mt-1">Live Street Food Theatre & Fusion Plating</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Our Signature Offerings */}
      <section className="bg-[#EDE6DA]/40 py-20 lg:py-28 border-y border-[#EDE6DA]/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-[#A91D3A] font-bold text-xs uppercase tracking-widest bg-[#A91D3A]/10 px-3.5 py-1.5 rounded-full inline-block">
              OUR CULINARY SPECTRUM
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1B1B1B]">
              Our Signature Categories
            </h2>
            <p className="font-sans text-[#1B1B1B]/70 text-md max-w-xl mx-auto">
              Four distinct culinary pillars carefully curated to delight guests of all ages and palates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {signatures.map((sig, idx) => {
              const Icon = sig.icon;
              return (
                <motion.div
                  key={idx}
                  className="bg-[#FFF8EE] p-8 rounded-3xl border border-[#EDE6DA] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between text-left"
                  whileHover={{ y: -5 }}
                >
                  <div>
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-white shadow-md"
                      style={{ backgroundColor: sig.color }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-[#1B1B1B] mb-3">
                      {sig.title}
                    </h3>
                    <p className="font-sans text-sm text-[#1B1B1B]/75 leading-relaxed">
                      {sig.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Promise Banner */}
      <section className="bg-[#1B1B1B] text-[#FFF8EE] py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8871E]/10 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1B998B]/10 rounded-full filter blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="text-[#E8871E] font-bold text-xs uppercase tracking-widest bg-[#E8871E]/15 border border-[#E8871E]/30 px-4 py-1.5 rounded-full inline-flex items-center space-x-2">
            <HeartHandshake className="w-4 h-4 text-[#E8871E]" />
            <span>OUR UNWAVERING COMMITMENT</span>
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Our Promise
          </h2>

          <blockquote className="font-heading text-xl sm:text-2xl md:text-3xl italic text-[#FFF8EE]/90 max-w-3xl mx-auto leading-relaxed border-y border-white/10 py-8 my-4">
            “To create spectacular culinary experiences where every bite tells a story, every presentation inspires admiration, and every event becomes truly unforgettable.”
          </blockquote>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-[#E8871E]" />
              <a href="tel:+919718525601" className="hover:text-[#E8871E] font-bold transition-colors">
                +91-9718525601
              </a>
              <span className="text-white/40">|</span>
              <a href="tel:+919971894444" className="hover:text-[#E8871E] font-bold transition-colors">
                +91-9971894444
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Hubs & Coverage */}
      <section className="py-20 bg-[#FFF8EE]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#1B998B] font-bold text-xs uppercase tracking-widest bg-[#1B998B]/10 px-3.5 py-1.5 rounded-full inline-block mb-4">
            OPERATIONAL HUBS
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1B1B1B] mb-12">
            Serving Premier Events Across India
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {hubs.map((h, idx) => (
              <div key={idx} className="bg-white border border-[#EDE6DA] rounded-3xl p-6 shadow-sm flex flex-col items-center justify-center space-y-2">
                <MapPin className="w-8 h-8 text-[#E8871E]" />
                <h3 className="font-heading text-2xl font-bold text-[#1B1B1B]">{h.city}</h3>
                <p className="font-sans text-xs font-semibold text-[#1B1B1B]/60 uppercase tracking-wider">{h.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <Link href="/contact">
              <Button className="rounded-full bg-[#E8871E] hover:bg-[#A91D3A] text-white px-8 py-6 font-bold text-md shadow-lg transition-all duration-300">
                <span>Plan Your Event With Us</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
