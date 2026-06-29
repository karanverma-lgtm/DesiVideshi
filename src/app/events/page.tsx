"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Users, MapPin, Sparkles, Check, CheckCircle2, ChevronRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import confetti from "canvas-confetti";
import { submitEnquiry } from "@/lib/enquiries";

const eventTypes = [
  {
    title: "Weddings",
    description: "From the sangeet to the grand reception, we cater all functions with matching themes — traditional chaats for the mehndi, and global fusion bites for the cocktail night.",
    image: "/assets/PHOTO-2026-06-25-15-11-24.jpg",
  },
  {
    title: "Corporate",
    description: "Conferences, product launches, and team-building dinners. Live cooking stations that keep guests engaged, interactive, and talking long after the meetings end.",
    image: "/assets/PHOTO-2026-06-25-15-11-19.jpg",
  },
  {
    title: "Private Parties",
    description: "Birthdays, anniversaries, housewarmings, and backyard get-togethers. Scaleable setups designed to fit beautifully in spaces from 20 guests up to 200+.",
    image: "/assets/PHOTO-2026-06-25-15-11-11.jpg",
  },
  {
    title: "Festivals & Pop-ups",
    description: "Food festivals, institutional stalls, and pop-up events. High-speed, high-output cooking configurations without compromising on our signature hygiene and flavor.",
    image: "/assets/PHOTO-2026-06-25-15-11-23.jpg",
  },
];

const packages = [
  {
    name: "Essential",
    price: "₹450",
    unit: "plate",
    features: [
      "2 Traditional Chaat Counters",
      "1 Live Beverage Counter",
      "Standard Buffet Presentation",
      "Uniformed Kitchen Staff",
      "Ideal for smaller private parties (30-80 guests)",
    ],
    cta: "Select Essential",
    accent: false,
  },
  {
    name: "Fusion",
    price: "₹650",
    unit: "plate",
    features: [
      "3 Counters (incl. 1 Fusion Bites Counter)",
      "2 Live Beverage Options",
      "Premium Themed Counter setups",
      "Live chef showmanship & preparation",
      "Complimentary tasting session (100+ guests)",
      "Ideal for Corporate & Mid-size celebrations",
    ],
    cta: "Select Fusion",
    accent: true,
  },
  {
    name: "Signature",
    price: "Custom",
    unit: "quote",
    features: [
      "Bespoke Multi-Counter Setup",
      "Unlimited Live Food Stations",
      "Full Fusion Mocktail Bar",
      "Custom culinary concepts & theater styling",
      "Exclusive tasting with Chef Dinesh",
      "Dedicated Event Manager & Service Staff",
    ],
    cta: "Request Custom Quote",
    accent: false,
  },
];

const timeline = [
  { title: "Enquiry & Event Details", desc: "Share your date, location, guest list, and preferred counter preferences via our form or WhatsApp." },
  { title: "Menu Proposal & Quote", desc: "We draft a custom proposal detailing counter items, portion guides, and flat rates within 4 hours." },
  { title: "Tasting Session", desc: "For bookings above 150 guests, join us for a kitchen tasting to finalize recipe options and spice levels." },
  { title: "Booking Confirmation", desc: "Lock in your event date with an advance deposit. We proceed with ingredient sourcing and staff booking." },
  { title: "Event Day", desc: "Our chefs arrive early, set up the theater, prepare fresh live items, and clean the space post-service." },
];

const faqs = [
  {
    question: "What is the minimum guest count required?",
    answer: "We cater private home gatherings starting at a minimum of 30 guests. For large weddings, festivals, and corporate functions, our setups easily scale to manage over 1,000+ attendees.",
  },
  {
    question: "How far in advance should we book?",
    answer: "We recommend booking at least 3 to 4 weeks in advance for weekends and peak wedding seasons (November to February). For corporate events, a lead time of 7 to 10 days is usually sufficient.",
  },
  {
    question: "Do you cater outside the Delhi NCR service area?",
    answer: "Yes, we travel for outstation wedding and corporate contracts across North India (including cities in Punjab, Haryana, Rajasthan, and Uttar Pradesh), subject to travel and lodging logistics.",
  },
  {
    question: "Can menus be fully customized?",
    answer: "Absolutely! Our packages are just templates. We specialize in designing bespoke menus where you can select specific traditional counters and mix in our signature global fusion creations.",
  },
  {
    question: "Do you offer pre-event tastings?",
    answer: "Yes. For events with a guaranteed guest count of 150 or more, we host a tasting session at our kitchen for up to 4 guests after the initial quote is approved.",
  },
];

export default function Events() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    eventDate: "",
    guestCount: "",
    location: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Validate required fields
    if (!formState.name || !formState.phone || !formState.email || !formState.eventType || !formState.eventDate || !formState.guestCount) {
      alert("Please fill out all required fields.");
      return;
    }

    setIsSubmitting(true);
    try {
      await submitEnquiry({
        ...formState,
        source: "events",
      });

      setIsSubmitted(true);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.75 },
        colors: ["#E8871E", "#A91D3A", "#1B998B"],
      });
    } catch (err) {
      console.error("Failed to submit enquiry:", err);
      alert("Something went wrong. Please try again or contact us via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectPackage = (packageName: string) => {
    setFormState((prev) => ({
      ...prev,
      message: `Hi, I am interested in the ${packageName} Catering Package. Please contact me.`,
    }));
    document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FFF8EE] font-sans">
      {/* Hero Banner */}
      <section className="relative bg-[#EDE6DA]/40 py-16 lg:py-24 border-b border-[#EDE6DA]/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-[#1B998B] font-bold text-xs uppercase tracking-widest bg-[#1B998B]/10 px-3 py-1 rounded-full inline-block">
            CATERING SOLUTIONS
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-[#1B1B1B]">
            Catering for Every Celebration
          </h1>
          <p className="font-sans text-[#1B1B1B]/70 mt-2 text-md max-w-xl mx-auto leading-relaxed">
            From intimate birthday gatherings to sprawling wedding lawns, we deliver live counter theater that matches the aesthetic of your event.
          </p>
        </div>
      </section>

      {/* Event Types Showcase */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {eventTypes.map((event, idx) => (
              <div key={idx} className="bg-[#FFF8EE] rounded-3xl overflow-hidden border border-[#EDE6DA] shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row h-full">
                <div className="relative w-full sm:w-[40%] h-48 sm:h-auto min-h-[180px]">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center text-left sm:w-[60%] space-y-3">
                  <h3 className="font-heading text-2xl font-bold text-[#1B1B1B]">{event.title}</h3>
                  <p className="font-sans text-sm text-[#1B1B1B]/80 leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Tiers */}
      <section className="bg-[#EDE6DA]/40 py-20 lg:py-32 border-y border-[#EDE6DA]/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#A91D3A] font-bold text-xs uppercase tracking-widest bg-[#A91D3A]/10 px-3 py-1 rounded-full inline-block mb-3">
              FLEXIBLE PACKAGES
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1B1B1B]">
              Catering Package Tiers
            </h2>
            <p className="font-sans text-sm text-[#1B1B1B]/70 mt-3">
              Select a package to populate the quote form below. Rates vary based on custom ingredient selections.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {packages.map((pkg, idx) => (
              <Card
                key={idx}
                className={`bg-[#FFF8EE] border-[#EDE6DA] rounded-3xl flex flex-col justify-between shadow-sm transition-all duration-300 relative ${
                  pkg.accent
                    ? "border-[#A91D3A] border-2 scale-100 lg:scale-[1.03] shadow-md z-10"
                    : ""
                }`}
              >
                {pkg.accent && (
                  <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-[#A91D3A] text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center pb-4 pt-8">
                  <span className="font-sans text-xs uppercase tracking-wider font-bold text-[#1B1B1B]/60">{pkg.name}</span>
                  <CardTitle className="font-heading text-4xl font-bold text-[#1B1B1B] mt-2">
                    {pkg.price}
                    {pkg.unit === "plate" && <span className="text-sm font-sans font-medium text-[#1B1B1B]/65"> / plate</span>}
                    {pkg.unit === "quote" && <span className="text-sm font-sans font-medium text-[#1B1B1B]/65"> basis</span>}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-8 py-4 text-left flex-grow">
                  <ul className="space-y-3.5 text-sm text-[#1B1B1B]/85">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start space-x-2">
                        <Check className="h-4 w-4 text-[#1B998B] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="p-8">
                  <Button
                    onClick={() => selectPackage(pkg.name)}
                    className={`w-full rounded-full py-6 font-bold transition-all ${
                      pkg.accent
                        ? "bg-[#A91D3A] hover:bg-[#E8871E] text-white"
                        : "bg-[#1B1B1B] hover:bg-[#A91D3A] text-white"
                    }`}
                  >
                    {pkg.cta}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#E8871E] font-bold text-xs uppercase tracking-widest bg-[#E8871E]/10 px-3 py-1 rounded-full inline-block mb-3">
              WHAT TO EXPECT
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1B1B1B]">
              Our Booking Process
            </h2>
          </div>

          <div className="relative border-l border-[#EDE6DA] ml-4 md:ml-8 space-y-12 pl-6 md:pl-10">
            {timeline.map((step, idx) => (
              <div key={idx} className="relative text-left">
                <span className="absolute -left-[38px] md:-left-[54px] top-1.5 h-6 w-6 md:h-8 md:w-8 rounded-full bg-[#E8871E] border-4 border-[#FFF8EE] flex items-center justify-center font-heading text-white text-xs md:text-sm font-bold shadow-sm">
                  {idx + 1}
                </span>
                <h3 className="font-heading text-xl font-bold text-[#1B1B1B]">{step.title}</h3>
                <p className="font-sans text-[#1B1B1B]/80 text-sm leading-relaxed mt-2 max-w-2xl">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#EDE6DA]/40 py-20 border-t border-[#EDE6DA]/60">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#1B998B] font-bold text-xs uppercase tracking-widest bg-[#1B998B]/10 px-3 py-1 rounded-full inline-block mb-3">
            QUESTIONS
          </span>
          <h2 className="font-heading text-3xl font-bold text-[#1B1B1B] mb-12">
            Frequently Asked Questions
          </h2>

          <Accordion className="w-full text-left space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`faq-${idx}`}
                className="bg-[#FFF8EE] border border-[#EDE6DA] rounded-2xl px-6 py-1 shadow-sm"
              >
                <AccordionTrigger className="font-heading text-md sm:text-lg font-bold text-[#1B1B1B] hover:text-[#A91D3A] py-4 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-sans text-sm text-[#1B1B1B]/80 leading-relaxed pb-4 pt-1">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Inline Quote Request Form */}
      <section id="quote-form" className="py-20 lg:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-[#EDE6DA] rounded-[2.5rem] p-8 md:p-12 shadow-md">
            <div className="text-center max-w-xl mx-auto mb-10 space-y-3">
              <h2 className="font-heading text-3xl font-bold text-[#1B1B1B]">Get Your Custom Quote</h2>
              <p className="font-sans text-sm text-[#1B1B1B]/70">
                Provide details about your wedding, corporate setup, or party, and our team will get back to you with menu options and pricing.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="events-inquiry"
                  onSubmit={handleFormSubmit}
                  className="space-y-6 text-left"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-[#1B1B1B]/80">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleInputChange}
                        className="w-full border border-[#EDE6DA] rounded-xl px-4 py-3 bg-[#FFF8EE]/30 text-sm focus:outline-none focus:ring-2 focus:ring-[#E8871E]"
                        placeholder="John Doe"
                      />
                    </div>
                    {/* Phone Number */}
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-[#1B1B1B]/80">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formState.phone}
                        onChange={handleInputChange}
                        className="w-full border border-[#EDE6DA] rounded-xl px-4 py-3 bg-[#FFF8EE]/30 text-sm focus:outline-none focus:ring-2 focus:ring-[#E8871E]"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    {/* Email */}
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-[#1B1B1B]/80">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleInputChange}
                        className="w-full border border-[#EDE6DA] rounded-xl px-4 py-3 bg-[#FFF8EE]/30 text-sm focus:outline-none focus:ring-2 focus:ring-[#E8871E]"
                        placeholder="john@example.com"
                      />
                    </div>
                    {/* Event Type */}
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-[#1B1B1B]/80">Event Type *</label>
                      <select
                        name="eventType"
                        required
                        value={formState.eventType}
                        onChange={handleInputChange}
                        className="w-full border border-[#EDE6DA] rounded-xl px-4 py-3 bg-[#FFF8EE]/30 text-sm focus:outline-none focus:ring-2 focus:ring-[#E8871E]"
                      >
                        <option value="">Select event type...</option>
                        <option value="Wedding">Wedding / Sangeet</option>
                        <option value="Corporate">Corporate Meeting / Event</option>
                        <option value="Private Party">Private Party (Birthday/Anniversary)</option>
                        <option value="Festival">Festival Stalls / Public Pop-up</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    {/* Event Date */}
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-[#1B1B1B]/80">Event Date *</label>
                      <input
                        type="date"
                        name="eventDate"
                        required
                        value={formState.eventDate}
                        onChange={handleInputChange}
                        className="w-full border border-[#EDE6DA] rounded-xl px-4 py-3 bg-[#FFF8EE]/30 text-sm focus:outline-none focus:ring-2 focus:ring-[#E8871E]"
                      />
                    </div>
                    {/* Guest Count */}
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-[#1B1B1B]/80">Guest Count *</label>
                      <input
                        type="number"
                        name="guestCount"
                        required
                        min="20"
                        value={formState.guestCount}
                        onChange={handleInputChange}
                        className="w-full border border-[#EDE6DA] rounded-xl px-4 py-3 bg-[#FFF8EE]/30 text-sm focus:outline-none focus:ring-2 focus:ring-[#E8871E]"
                        placeholder="e.g. 150"
                      />
                    </div>
                  </div>

                  {/* Venue Location */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#1B1B1B]/80">Venue / Location</label>
                    <input
                      type="text"
                      name="location"
                      value={formState.location}
                      onChange={handleInputChange}
                      className="w-full border border-[#EDE6DA] rounded-xl px-4 py-3 bg-[#FFF8EE]/30 text-sm focus:outline-none focus:ring-2 focus:ring-[#E8871E]"
                      placeholder="e.g. Sector 54, Gurugram"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#1B1B1B]/80">Specific Requirements or Message</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formState.message}
                      onChange={handleInputChange}
                      className="w-full border border-[#EDE6DA] rounded-xl px-4 py-3 bg-[#FFF8EE]/30 text-sm focus:outline-none focus:ring-2 focus:ring-[#E8871E]"
                      placeholder="Tell us if you want specific custom counters, mocktail options, or have allergy constraints."
                    />
                  </div>

                  <div className="pt-2 text-center">
                    <Button type="submit" disabled={isSubmitting} className="rounded-full bg-[#E8871E] hover:bg-[#A91D3A] text-white px-10 py-6 font-bold shadow-md transition-colors text-md disabled:opacity-60">
                      {isSubmitting ? (
                        <><Loader2 className="h-5 w-5 mr-2 animate-spin" /> Submitting...</>
                      ) : (
                        "Submit Catering Enquiry"
                      )}
                    </Button>
                    <p className="text-[11px] text-[#1B1B1B]/40 mt-3 flex items-center justify-center space-x-1">
                      <Sparkles className="h-3 w-3 text-[#1B998B]" />
                      <span>We typically respond with custom proposals within 4 hours.</span>
                    </p>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="form-success"
                  className="py-16 flex flex-col items-center justify-center text-center space-y-4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <CheckCircle2 className="h-20 w-20 text-green-500 animate-bounce" />
                  <h3 className="font-heading text-3xl font-bold text-[#1B1B1B]">Enquiry Submitted!</h3>
                  <p className="font-sans text-md text-[#1B1B1B]/70 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formState.name}</strong>. We have received your request for a {formState.eventType} on {formState.eventDate} with {formState.guestCount} guests.
                  </p>
                  <p className="font-sans text-sm text-[#1B1B1B]/60 max-w-sm">
                    A catering coordinator will contact you shortly on <strong>{formState.phone}</strong> or <strong>{formState.email}</strong>.
                  </p>
                  <div className="pt-4">
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="rounded-full border-[#A91D3A] text-[#A91D3A] hover:bg-[#A91D3A] hover:text-white px-6"
                    >
                      Submit Another Enquiry
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
