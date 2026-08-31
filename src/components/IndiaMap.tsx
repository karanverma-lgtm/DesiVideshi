"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Sparkles, Navigation, Phone, CheckCircle2, ChevronRight, Compass } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export interface LocationData {
  id: string;
  name: string;
  state: string;
  shortTag: string;
  tagline: string;
  description: string;
  coords: { x: number; y: number }; // SVG ViewBox coordinates (0..600, 0..700)
  color: string;
  bgGlow: string;
  badge: string;
  cities: string[];
  highlights: string[];
  statePath: string;
}

const locations: LocationData[] = [
  {
    id: "delhi-ncr",
    name: "Delhi NCR",
    state: "Delhi, Gurugram, Noida, Faridabad",
    shortTag: "Primary Hub & Live Operations",
    tagline: "Headquarters & Daily Live Counter Hub",
    description: "Our core operational hub serving weddings, corporate galas, and private celebrations across Delhi, Gurugram, Noida, and Faridabad with 10+ years of street food theater.",
    coords: { x: 275, y: 220 },
    color: "#E8871E", // Warm Gold/Orange
    bgGlow: "rgba(232, 135, 30, 0.25)",
    badge: "HQ & Regional Hub",
    cities: ["Delhi", "Gurugram", "Noida", "Faridabad", "Ghaziabad"],
    highlights: ["Over 500+ events served", "Full kitchen & fleet setup", "Same-day tasting available"],
    statePath: "M 265,210 L 290,210 L 290,230 L 265,230 Z",
  },
  {
    id: "jodhpur",
    name: "Jodhpur (Rajasthan)",
    state: "Rajasthan",
    shortTag: "Royal Palace Weddings",
    tagline: "Heritage & Royal Destination Catering",
    description: "Bringing high-energy fusion chaat and authentic street-food counters to palace weddings, heritage forts, and luxury resort events in Jodhpur, Jaipur, and Udaipur.",
    coords: { x: 185, y: 245 },
    color: "#A91D3A", // Royal Red
    bgGlow: "rgba(169, 29, 58, 0.25)",
    badge: "Destination Weddings",
    cities: ["Jodhpur", "Jaipur", "Udaipur", "Jaisalmer"],
    highlights: ["Palace & Fort Wedding Specialist", "Custom Royal fusion menu", "Full outstation team"],
    statePath: "M 135,210 L 235,195 L 245,265 L 175,305 L 135,255 Z",
  },
  {
    id: "dehradun",
    name: "Dehradun (Uttarakhand)",
    state: "Uttarakhand",
    shortTag: "Hill Station Outstations",
    tagline: "Scenic Mountain & Resort Celebrations",
    description: "Catering hill-station weddings, retreat parties, and outdoor celebrations in Dehradun, Mussoorie, and Rishikesh with fresh live counters.",
    coords: { x: 295, y: 175 },
    color: "#1B998B", // Emerald Teal
    bgGlow: "rgba(27, 153, 139, 0.25)",
    badge: "Outstation Hub",
    cities: ["Dehradun", "Mussoorie", "Rishikesh", "Haridwar"],
    highlights: ["Outstation logisitics ready", "Fresh live counters in hills", "Custom wedding packages"],
    statePath: "M 275,155 L 320,165 L 310,195 L 275,190 Z",
  },
  {
    id: "hyderabad",
    name: "Hyderabad (Telangana)",
    state: "Telangana",
    shortTag: "Grand Celebrations & Tech Summits",
    tagline: "Luxury Weddings & Corporate Galas",
    description: "Delivering vibrant live food theater and fusion small plates for grand Nizam-style weddings, corporate tech summits, and private parties in Hyderabad.",
    coords: { x: 305, y: 440 },
    color: "#8B5CF6", // Purple
    bgGlow: "rgba(139, 92, 246, 0.25)",
    badge: "Southern Hub",
    cities: ["Hyderabad", "Secunderabad", "HITEC City", "Gachibowli"],
    highlights: ["Tech corporate summit specialist", "Fusion Golgappa & Mocktail bars", "Dedicated South team"],
    statePath: "M 275,410 L 335,400 L 345,455 L 290,470 Z",
  },
  {
    id: "goa",
    name: "Goa",
    state: "Goa",
    shortTag: "Beachside Sundowners",
    tagline: "Coastal Weddings & Beach Party Live Stalls",
    description: "Bringing sun-soaked vibes, live chat counters, and handcrafted fusion mocktails to beachside destination weddings and sundowner events in Goa.",
    coords: { x: 215, y: 480 },
    color: "#D97706", // Amber
    bgGlow: "rgba(217, 119, 6, 0.25)",
    badge: "Beach Celebrations",
    cities: ["North Goa", "South Goa", "Panaji", "Candolim", "Margao"],
    highlights: ["Sunset beach wedding setups", "Fusion snack bars", "Full resort coordination"],
    statePath: "M 205,472 L 222,472 L 222,492 L 205,492 Z",
  },
];

export default function IndiaMap() {
  const [activeLocationId, setActiveLocationId] = useState<string>("delhi-ncr");

  const activeLocation = locations.find((l) => l.id === activeLocationId) || locations[0];

  return (
    <section className="bg-[#1B1B1B] text-[#FFF8EE] py-20 lg:py-28 relative overflow-hidden">
      {/* Subtle grid background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      {/* Decorative ambient glows */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#E8871E]/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#1B998B]/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#E8871E] font-bold text-xs uppercase tracking-widest bg-[#E8871E]/15 border border-[#E8871E]/30 px-3.5 py-1.5 rounded-full inline-flex items-center space-x-2 mb-4">
            <Compass className="w-3.5 h-3.5 text-[#E8871E]" />
            <span>NATIONWIDE PRESENCE</span>
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Where We Bring The <span className="text-[#E8871E]">Desi Videshi</span> Experience
          </h2>
          <p className="font-sans text-[#FFF8EE]/70 mt-4 text-base sm:text-lg leading-relaxed">
            From our core operational base in <strong className="text-white">Delhi NCR</strong> to royal destination weddings in <strong className="text-white">Jodhpur (Rajasthan)</strong>, scenic retreats in <strong className="text-white">Dehradun</strong>, tech summits in <strong className="text-white">Hyderabad (Telangana)</strong>, and coastal events in <strong className="text-white">Goa</strong>.
          </p>
        </div>

        {/* Location Selector Chips */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {locations.map((loc) => {
            const isActive = loc.id === activeLocationId;
            return (
              <button
                key={loc.id}
                onClick={() => setActiveLocationId(loc.id)}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 border ${
                  isActive
                    ? "bg-[#E8871E] text-white border-[#E8871E] shadow-lg shadow-[#E8871E]/30 scale-105"
                    : "bg-[#272727] text-[#FFF8EE]/80 border-[#383838] hover:border-[#E8871E]/60 hover:text-white"
                }`}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full inline-block"
                  style={{ backgroundColor: loc.color }}
                />
                <span>{loc.name}</span>
              </button>
            );
          })}
        </div>

        {/* Grid: Map + Interactive Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Interactive Vector India Map */}
          <div className="lg:col-span-7 relative flex justify-center items-center bg-[#242424]/60 border border-[#383838] rounded-3xl p-4 sm:p-8 backdrop-blur-sm min-h-[480px]">
            
            {/* Legend / Info watermark */}
            <div className="absolute top-4 left-4 z-20 flex items-center space-x-2 text-xs text-[#FFF8EE]/60 bg-[#1B1B1B]/80 px-3 py-1.5 rounded-full border border-white/10">
              <MapPin className="w-3.5 h-3.5 text-[#E8871E]" />
              <span>Click pins or state regions to explore</span>
            </div>

            <div className="relative w-full max-w-[500px] aspect-[600/700]">
              <svg
                viewBox="0 0 600 700"
                className="w-full h-full drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Subtle map gradient */}
                  <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2E2E2E" />
                    <stop offset="100%" stopColor="#1E1E1E" />
                  </linearGradient>

                  {/* Pulse animations */}
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Styled Subcontinent Silhouette of India */}
                <g id="india-silhouette">
                  <path
                    d="
                      M 240,55 
                      C 260,35 285,45 300,75
                      C 310,95 320,120 340,140
                      C 365,145 410,135 445,150
                      C 475,160 520,175 540,210
                      C 555,240 520,270 480,260
                      C 450,250 435,270 415,290
                      C 395,310 405,340 390,370
                      C 375,400 365,440 340,490
                      C 320,530 300,580 290,650
                      C 285,660 275,660 270,640
                      C 255,590 235,540 215,500
                      C 195,460 175,430 180,390
                      C 185,360 160,340 120,320
                      C 90,305 100,265 140,240
                      C 170,225 190,200 200,165
                      C 210,130 220,80 240,55 Z
                    "
                    fill="url(#mapGradient)"
                    stroke="#444444"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  />
                  {/* Decorative internal mesh lines */}
                  <path
                    d="M 275,220 L 295,175 M 275,220 L 185,245 M 275,220 L 305,440 M 215,480 L 305,440"
                    stroke="#E8871E"
                    strokeWidth="1.2"
                    strokeDasharray="4 4"
                    opacity="0.35"
                  />
                </g>

                {/* Highlighted State Regions */}
                {locations.map((loc) => {
                  const isSelected = loc.id === activeLocationId;
                  return (
                    <g key={`region-${loc.id}`} onClick={() => setActiveLocationId(loc.id)} className="cursor-pointer">
                      <path
                        d={loc.statePath}
                        fill={isSelected ? loc.color : "rgba(255,255,255,0.05)"}
                        fillOpacity={isSelected ? 0.35 : 0.1}
                        stroke={loc.color}
                        strokeWidth={isSelected ? "2.5" : "1"}
                        className="transition-all duration-300 hover:fill-opacity-40"
                      />
                    </g>
                  );
                })}

                {/* Flight/Mobility Trajectory Lines connecting from HQ (Delhi) */}
                {locations.filter(l => l.id !== 'delhi-ncr').map((loc) => {
                  const isSelected = loc.id === activeLocationId;
                  return (
                    <g key={`line-${loc.id}`}>
                      <path
                        d={`M 275,220 Q ${(275 + loc.coords.x)/2 - 15},${(220 + loc.coords.y)/2 - 15} ${loc.coords.x},${loc.coords.y}`}
                        stroke={isSelected ? loc.color : "#E8871E"}
                        strokeWidth={isSelected ? "2" : "1"}
                        strokeDasharray={isSelected ? "none" : "3 3"}
                        opacity={isSelected ? 0.9 : 0.25}
                        fill="none"
                        className="transition-all duration-500"
                      />
                    </g>
                  );
                })}

                {/* Interactive Location Markers / Pins */}
                {locations.map((loc) => {
                  const isSelected = loc.id === activeLocationId;

                  return (
                    <g
                      key={`pin-${loc.id}`}
                      transform={`translate(${loc.coords.x}, ${loc.coords.y})`}
                      onClick={() => setActiveLocationId(loc.id)}
                      className="cursor-pointer group"
                    >
                      {/* Pulsing Radar Ring */}
                      {isSelected && (
                        <>
                          <circle r="22" fill="none" stroke={loc.color} strokeWidth="1.5" opacity="0.4">
                            <animate attributeName="r" values="10;30;10" dur="2.5s" repeatCount="indefinite" />
                            <animate attributeName="opacity" values="0.8;0;0.8" dur="2.5s" repeatCount="indefinite" />
                          </circle>
                          <circle r="14" fill={loc.color} opacity="0.2" />
                        </>
                      )}

                      {/* Main Pin Circle */}
                      <circle
                        r={isSelected ? "11" : "8"}
                        fill={isSelected ? loc.color : "#2C2C2C"}
                        stroke={loc.color}
                        strokeWidth={isSelected ? "3" : "2"}
                        className="transition-all duration-300 group-hover:scale-125"
                        filter={isSelected ? "url(#glow)" : undefined}
                      />

                      {/* Inner Dot */}
                      <circle r="3.5" fill="#FFFFFF" />

                      {/* Text Label on Map */}
                      <text
                        y={loc.coords.y > 400 ? -18 : 24}
                        x="0"
                        textAnchor="middle"
                        fill={isSelected ? "#FFFFFF" : "#CCCCCC"}
                        fontSize={isSelected ? "13" : "11"}
                        fontWeight={isSelected ? "bold" : "600"}
                        className="pointer-events-none transition-all duration-300 font-sans tracking-wide"
                        style={{
                          textShadow: "0 2px 4px rgba(0,0,0,0.9)",
                        }}
                      >
                        {loc.name}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Right Column: Selected Location Detail Card */}
          <div className="lg:col-span-5 text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLocation.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="bg-[#242424] border border-[#383838] rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden"
              >
                {/* Top Colored Accent Strip */}
                <div
                  className="absolute top-0 left-0 right-0 h-1.5"
                  style={{ backgroundColor: activeLocation.color }}
                />

                {/* Badge & State */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white"
                    style={{ backgroundColor: activeLocation.color }}
                  >
                    {activeLocation.badge}
                  </span>
                  <span className="text-xs text-[#FFF8EE]/60 font-semibold flex items-center space-x-1">
                    <MapPin className="w-3.5 h-3.5 text-[#E8871E]" />
                    <span>{activeLocation.state}</span>
                  </span>
                </div>

                {/* Location Title & Tagline */}
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-2">
                  {activeLocation.name}
                </h3>
                <p className="font-sans text-sm font-semibold text-[#E8871E] mb-4">
                  {activeLocation.tagline}
                </p>

                {/* Description */}
                <p className="font-sans text-sm text-[#FFF8EE]/80 leading-relaxed mb-6">
                  {activeLocation.description}
                </p>

                {/* Key Highlights */}
                <div className="space-y-2 mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFF8EE]/50">
                    Service Highlights
                  </h4>
                  {activeLocation.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs sm:text-sm text-[#FFF8EE]/90">
                      <CheckCircle2 className="w-4 h-4 text-[#1B998B] flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Cities List */}
                <div className="mb-8">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFF8EE]/50 mb-2">
                    Key Areas & Cities Covered
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeLocation.cities.map((city, idx) => (
                      <span
                        key={idx}
                        className="bg-[#1B1B1B] text-[#FFF8EE]/90 border border-white/10 text-xs px-2.5 py-1 rounded-md"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Link href={`/contact?location=${encodeURIComponent(activeLocation.name)}`} className="w-full">
                    <Button
                      className="w-full rounded-full text-white font-bold py-6 px-6 shadow-lg transition-all duration-300 hover:opacity-90 flex items-center justify-center space-x-2"
                      style={{ backgroundColor: activeLocation.color }}
                    >
                      <span>Book Event in {activeLocation.name.split(" ")[0]}</span>
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </Link>
                  
                  <a href="tel:+919718525601" className="w-full sm:w-auto">
                    <Button
                      variant="outline"
                      className="w-full sm:w-auto rounded-full border-[#383838] bg-transparent text-[#FFF8EE] hover:bg-[#383838] py-6 px-5 font-bold text-sm transition-colors flex items-center justify-center"
                    >
                      <Phone className="w-4 h-4 mr-2 text-[#E8871E]" />
                      <span>Call Us</span>
                    </Button>
                  </a>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Bottom Banner Stats / Assurance */}
        <div className="mt-16 bg-[#242424]/80 border border-[#383838] rounded-2xl p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <span className="block font-heading text-2xl sm:text-3xl font-extrabold text-[#E8871E]">5+</span>
            <span className="text-xs text-[#FFF8EE]/70 font-semibold uppercase tracking-wider mt-1 block">Key Regions Covered</span>
          </div>
          <div>
            <span className="block font-heading text-2xl sm:text-3xl font-extrabold text-[#1B998B]">500+</span>
            <span className="text-xs text-[#FFF8EE]/70 font-semibold uppercase tracking-wider mt-1 block">Live Events Executed</span>
          </div>
          <div>
            <span className="block font-heading text-2xl sm:text-3xl font-extrabold text-[#A91D3A]">100%</span>
            <span className="text-xs text-[#FFF8EE]/70 font-semibold uppercase tracking-wider mt-1 block">Hygiene & Quality Standard</span>
          </div>
          <div>
            <span className="block font-heading text-2xl sm:text-3xl font-extrabold text-[#8B5CF6]">Full Team</span>
            <span className="text-xs text-[#FFF8EE]/70 font-semibold uppercase tracking-wider mt-1 block">Pan-India Logistics</span>
          </div>
        </div>

      </div>
    </section>
  );
}
