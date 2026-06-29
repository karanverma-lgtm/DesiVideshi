"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, Award, Users, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    icon: Heart,
    title: "Authenticity First",
    description: "Every single fusion dish starts from an authentic, traditional Indian base. We never skip the original roots to chase a temporary trend.",
    color: "#E8871E",
  },
  {
    icon: Award,
    title: "Genuine Innovation",
    description: "Our 'videshi' global twists are curated by chefs who have trained and worked across both cuisines, not just created as a menu gimmick.",
    color: "#1B998B",
  },
  {
    icon: Users,
    title: "Presentation That Performs",
    description: "Live-action counters, colorful setups, and custom plating are designed to become an interactive centerpiece for your gathering.",
    color: "#A91D3A",
  },
  {
    icon: ShieldCheck,
    title: "Service End to End",
    description: "From prompt custom menu planning to clean-up on the event day — we manage the logistics so you can focus entirely on hosting your guests.",
    color: "#1B1B1B",
  },
];

const team = [
  {
    name: "Chef Dinesh Kumar",
    role: "Founder & Head Chef",
    quote: "Indian street food is theatrical. When you see the steam rising from the tikki pan, hear the golgappa shell crack, and taste the chilly tamarind waters, that is not just dining — it is theater.",
    image: "/assets/PHOTO-2026-06-25-15-11-14.jpg",
  },
];

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFF8EE] font-sans">
      {/* Hero Header */}
      <section className="relative bg-[#EDE6DA]/40 py-16 lg:py-24 border-b border-[#EDE6DA]/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#1B998B] font-bold text-xs uppercase tracking-widest bg-[#1B998B]/10 px-3 py-1 rounded-full inline-block mb-3">
              OUR HISTORY
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-[#1B1B1B]">
              About Desi Videshi Chaat
            </h1>
            <p className="font-sans text-[#1B1B1B]/70 mt-4 text-md max-w-xl mx-auto">
              Redefining catering in Delhi NCR through high-end street food, fusion small plates, and live-cooking drama since 2016.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story text */}
            <div className="lg:col-span-7 flex flex-col space-y-6 text-left order-2 lg:order-1">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1B1B1B]">
                The Story Behind the Twists
              </h2>
              <div className="space-y-4 text-base text-[#1B1B1B]/80 leading-relaxed">
                <p>
                  For years, Indian event catering meant picking a lane — either purely traditional buffet tables where dishes went cold, or "fusion" setups that were only fusion in name. We founded <strong>Desi Videshi Chaat</strong> to bridge this gap and bring street food back to its roots: served hot, fresh, and cooked live in front of you.
                </p>
                <p>
                  We don't believe in standing buffet trays under heat lamps. We believe in live interactive stalls. Chefs working the tawa, guests assembling their own spice ranges, and the sizzle of the griddle setting the vibe for the party.
                </p>
                <p>
                  Every catering package we offer is completely custom-built. We don't ask you to pick from a rigid, compromise-laden checklist. Instead, we learn about your crowd size, event style, and budget preferences to create a counter experience that keeps people talking.
                </p>
              </div>
            </div>
            {/* Side Image */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="relative aspect-[4/5] w-full rounded-[2rem] overflow-hidden shadow-xl border-4 border-[#EDE6DA]">
                <Image
                  src="/assets/PHOTO-2026-06-25-15-11-27.jpg"
                  alt="Live counter preparation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="bg-[#EDE6DA]/40 py-20 lg:py-32 border-y border-[#EDE6DA]/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#A91D3A] font-bold text-xs uppercase tracking-widest bg-[#A91D3A]/10 px-3 py-1 rounded-full inline-block mb-3">
              WHAT SETS US APART
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1B1B1B]">
              Our Core Pillars
            </h2>
            <p className="font-sans text-[#1B1B1B]/70 mt-3 text-md">
              The four principles that guide our recipes, kitchen prep, and event day execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={idx}
                  className="bg-[#FFF8EE] p-8 rounded-3xl border border-[#EDE6DA] shadow-sm hover:shadow-md transition-shadow text-left flex items-start space-x-5"
                  whileHover={{ y: -4 }}
                >
                  <div className="p-3.5 rounded-2xl bg-[#EDE6DA] text-[#A91D3A] shrink-0">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-[#1B1B1B] mb-2">{p.title}</h3>
                    <p className="font-sans text-sm text-[#1B1B1B]/80 leading-relaxed">{p.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#E8871E] font-bold text-xs uppercase tracking-widest bg-[#E8871E]/10 px-3 py-1 rounded-full inline-block mb-3">
              THE TALENT
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1B1B1B]">
              Meet Our Founder
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {team.map((member, idx) => (
              <div key={idx} className="bg-[#FFF8EE] rounded-3xl border border-[#EDE6DA] p-8 md:p-12 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-4 relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-8 text-left space-y-4">
                  <h3 className="font-heading text-2xl font-bold text-[#1B1B1B]">{member.name}</h3>
                  <p className="font-sans text-xs uppercase tracking-wider font-bold text-[#E8871E]">{member.role}</p>
                  <blockquote className="font-heading text-md sm:text-lg italic text-[#1B1B1B]/90 leading-relaxed border-l-4 border-[#A91D3A] pl-4">
                    "{member.quote}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hygiene & Standards Section */}
      <section className="bg-[#1B1B1B] text-[#FFF8EE] py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex p-3 rounded-full bg-[#1B998B]/10 text-[#1B998B] mb-2">
            <ShieldCheck className="h-10 w-10" />
          </div>
          <h2 className="font-heading text-3xl font-bold text-white">Food Safety & Hygiene Standards</h2>
          <p className="font-sans text-sm text-[#FFF8EE]/80 max-w-2xl mx-auto leading-relaxed">
            For corporate buyers and large wedding planners, hygiene is a key metric. We maintain rigorous standards at our prep kitchens and live counter locations.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto pt-6 text-left">
            <div className="bg-[#FFF8EE]/5 p-5 rounded-2xl border border-[#FFF8EE]/10">
              <h3 className="font-heading font-bold text-[#E8871E] text-md mb-1.5">FSSAI Certified</h3>
              <p className="font-sans text-xs text-[#FFF8EE]/70">License No: 23321002000456. Fully accredited catering handlers.</p>
            </div>
            <div className="bg-[#FFF8EE]/5 p-5 rounded-2xl border border-[#FFF8EE]/10">
              <h3 className="font-heading font-bold text-[#1B998B] text-md mb-1.5">Daily Temp Checks</h3>
              <p className="font-sans text-xs text-[#FFF8EE]/70">All kitchen staff and service chefs undergo daily health checks.</p>
            </div>
            <div className="bg-[#FFF8EE]/5 p-5 rounded-2xl border border-[#FFF8EE]/10">
              <h3 className="font-heading font-bold text-[#A91D3A] text-md mb-1.5">Sanitized Setup</h3>
              <p className="font-sans text-xs text-[#FFF8EE]/70">Live counters are fully disinfected before cooking commences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-[#FFF8EE] py-20 text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-heading text-3xl font-bold text-[#1B1B1B]">
            Want to See What We'd Build for Your Event?
          </h2>
          <p className="font-sans text-[#1B1B1B]/70 max-w-lg mx-auto">
            Get in touch to receive a tailored menu design and pricing estimate tailored to your guests.
          </p>
          <div className="pt-2">
            <Link href="/contact">
              <Button className="rounded-full bg-[#E8871E] hover:bg-[#A91D3A] text-white px-8 py-6 font-bold shadow-md transition-colors group">
                <span>Get a Custom Quote</span>
                <ArrowRight className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
