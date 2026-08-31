"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, CheckCircle2, ChevronRight, Compass, Phone } from "lucide-react";
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
    coords: { x: 260, y: 220 },
    color: "#E8871E", // Warm Gold/Orange
    bgGlow: "rgba(232, 135, 30, 0.25)",
    badge: "HQ & Regional Hub",
    cities: ["Delhi", "Gurugram", "Noida", "Faridabad", "Ghaziabad"],
    highlights: ["Over 500+ events served", "Full kitchen & fleet setup", "Same-day tasting available"],
    statePath: "M 250,210 L 272,210 L 272,230 L 250,230 Z",
  },
  {
    id: "jodhpur",
    name: "Jodhpur (Rajasthan)",
    state: "Rajasthan",
    shortTag: "Royal Palace Weddings",
    tagline: "Heritage & Royal Destination Catering",
    description: "Bringing high-energy fusion chaat and authentic street-food counters to palace weddings, heritage forts, and luxury resort events in Jodhpur, Jaipur, and Udaipur.",
    coords: { x: 175, y: 260 },
    color: "#A91D3A", // Royal Red
    bgGlow: "rgba(169, 29, 58, 0.25)",
    badge: "Destination Weddings",
    cities: ["Jodhpur", "Jaipur", "Udaipur", "Jaisalmer"],
    highlights: ["Palace & Fort Wedding Specialist", "Custom Royal fusion menu", "Full outstation team"],
    statePath: "M 130,225 L 220,195 L 235,280 L 160,310 L 120,260 Z",
  },
  {
    id: "dehradun",
    name: "Dehradun (Uttarakhand)",
    state: "Uttarakhand",
    shortTag: "Hill Station Outstations",
    tagline: "Scenic Mountain & Resort Celebrations",
    description: "Catering hill-station weddings, retreat parties, and outdoor celebrations in Dehradun, Mussoorie, and Rishikesh with fresh live counters.",
    coords: { x: 290, y: 170 },
    color: "#1B998B", // Emerald Teal
    bgGlow: "rgba(27, 153, 139, 0.25)",
    badge: "Outstation Hub",
    cities: ["Dehradun", "Mussoorie", "Rishikesh", "Haridwar"],
    highlights: ["Outstation logistics ready", "Fresh live counters in hills", "Custom wedding packages"],
    statePath: "M 265,150 L 315,160 L 305,190 L 265,180 Z",
  },
  {
    id: "hyderabad",
    name: "Hyderabad (Telangana)",
    state: "Telangana",
    shortTag: "Grand Celebrations & Tech Summits",
    tagline: "Luxury Weddings & Corporate Galas",
    description: "Delivering vibrant live food theater and fusion small plates for grand Nizam-style weddings, corporate tech summits, and private parties in Hyderabad.",
    coords: { x: 295, y: 440 },
    color: "#8B5CF6", // Purple
    bgGlow: "rgba(139, 92, 246, 0.25)",
    badge: "Southern Hub",
    cities: ["Hyderabad", "Secunderabad", "HITEC City", "Gachibowli"],
    highlights: ["Tech corporate summit specialist", "Fusion Golgappa & Mocktail bars", "Dedicated South team"],
    statePath: "M 260,410 L 330,400 L 340,460 L 270,475 Z",
  },
  {
    id: "goa",
    name: "Goa",
    state: "Goa",
    shortTag: "Beachside Sundowners",
    tagline: "Coastal Weddings & Beach Party Live Stalls",
    description: "Bringing sun-soaked vibes, live chat counters, and handcrafted fusion mocktails to beachside destination weddings and sundowner events in Goa.",
    coords: { x: 195, y: 482 },
    color: "#D97706", // Amber
    bgGlow: "rgba(217, 119, 6, 0.25)",
    badge: "Beach Celebrations",
    cities: ["North Goa", "South Goa", "Panaji", "Candolim", "Margao"],
    highlights: ["Sunset beach wedding setups", "Fusion snack bars", "Full resort coordination"],
    statePath: "M 188,472 L 205,472 L 205,494 L 188,494 Z",
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
          
          {/* Left Column: Geographically Accurate India Map */}
          <div className="lg:col-span-7 relative flex justify-center items-center bg-[#242424]/60 border border-[#383838] rounded-3xl p-4 sm:p-8 backdrop-blur-sm min-h-[520px]">
            
            {/* Legend / Info watermark */}
            <div className="absolute top-4 left-4 z-20 flex items-center space-x-2 text-xs text-[#FFF8EE]/60 bg-[#1B1B1B]/80 px-3 py-1.5 rounded-full border border-white/10">
              <MapPin className="w-3.5 h-3.5 text-[#E8871E]" />
              <span>Click pins or state regions to explore</span>
            </div>

            <div className="relative w-full max-w-[520px] aspect-[600/700]">
              <svg
                viewBox="0 0 600 700"
                className="w-full h-full drop-shadow-[0_12px_30px_rgba(0,0,0,0.6)]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Map Gradient Fill */}
                  <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2E2E2E" />
                    <stop offset="100%" stopColor="#1C1C1C" />
                  </linearGradient>

                  {/* Pin Glow Effect */}
                  <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="7" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Geographically Accurate Contour Map of India */}
                <g id="india-accurate-map">
                  {/* Main National Boundary Path */}
                  <path
                    d="
                      M 285,45 
                      C 280,35 270,30 260,35
                      C 245,45 235,60 230,80
                      C 225,95 210,110 200,125
                      C 190,140 175,160 160,185
                      C 150,205 135,225 125,245
                      C 115,265 95,280 115,290
                      C 125,295 90,305 75,320
                      C 65,330 75,345 105,345
                      C 135,345 160,360 170,375
                      C 180,390 190,420 195,445
                      C 200,470 215,510 235,550
                      C 255,590 270,630 280,660
                      C 285,665 290,665 295,655
                      C 310,615 330,560 355,505
                      C 375,460 395,410 415,365
                      C 435,320 445,295 440,285
                      C 430,270 460,255 490,245
                      C 515,240 545,220 565,195
                      C 575,180 550,170 525,175
                      C 500,180 480,165 470,160
                      C 460,155 445,170 435,175
                      C 415,180 390,165 370,150
                      C 350,135 335,120 320,95
                      C 305,70 295,55 285,45 Z
                    "
                    fill="url(#mapGradient)"
                    stroke="#555555"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  />

                  {/* Internal Region Lines representing Major Indian States */}
                  <g stroke="#444444" strokeWidth="1" strokeDasharray="3 3" opacity="0.4">
                    {/* Northern / Himalayan division */}
                    <path d="M 230,80 L 320,95 M 200,125 L 350,135 M 160,185 L 370,150" />
                    {/* Western / Central division */}
                    <path d="M 125,245 L 390,165 M 170,375 L 435,175 M 195,445 L 415,365" />
                    {/* Deccan / Southern division */}
                    <path d="M 235,550 L 355,505" />
                  </g>
                </g>

                {/* Highlighted State Regions */}
                {locations.map((loc) => {
                  const isSelected = loc.id === activeLocationId;
                  return (
                    <g key={`region-${loc.id}`} onClick={() => setActiveLocationId(loc.id)} className="cursor-pointer">
                      <path
                        d={loc.statePath}
                        fill={isSelected ? loc.color : "rgba(255,255,255,0.05)"}
                        fillOpacity={isSelected ? 0.4 : 0.1}
                        stroke={loc.color}
                        strokeWidth={isSelected ? "2.5" : "1"}
                        className="transition-all duration-300 hover:fill-opacity-50"
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
                        d={`M 260,220 Q ${(260 + loc.coords.x)/2 - 15},${(220 + loc.coords.y)/2 - 15} ${loc.coords.x},${loc.coords.y}`}
                        stroke={isSelected ? loc.color : "#E8871E"}
                        strokeWidth={isSelected ? "2.5" : "1.2"}
                        strokeDasharray={isSelected ? "none" : "3 3"}
                        opacity={isSelected ? 0.95 : 0.3}
                        fill="none"
                        className="transition-all duration-500"
                      />
                    </g>
                  );
                })}

                {/* Interactive Location Pins */}
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

                      {/* Inner White Core */}
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
