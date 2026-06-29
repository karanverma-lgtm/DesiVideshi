"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MessageSquare, MapPin, CheckCircle2, Clock, Sparkles, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import confetti from "canvas-confetti";
import { submitEnquiry } from "@/lib/enquiries";

export default function Contact() {
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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formState.name ||
      !formState.phone ||
      !formState.email ||
      !formState.eventType ||
      !formState.eventDate ||
      !formState.guestCount
    ) {
      alert("Please fill out all required fields.");
      return;
    }

    setIsSubmitting(true);
    try {
      await submitEnquiry({
        ...formState,
        source: "contact",
      });

      setIsSubmitted(true);
      confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.6 },
        colors: ["#E8871E", "#A91D3A", "#1B998B"],
      });
    } catch (err) {
      console.error("Failed to submit enquiry:", err);
      alert("Something went wrong. Please try again or contact us via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FFF8EE] font-sans">
      {/* Hero Header */}
      <section className="relative bg-[#EDE6DA]/40 py-16 lg:py-24 border-b border-[#EDE6DA]/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-[#1B998B] font-bold text-xs uppercase tracking-widest bg-[#1B998B]/10 px-3 py-1 rounded-full inline-block">
            GET IN TOUCH
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-[#1B1B1B]">
            Let's Plan Your Event
          </h1>
          <p className="font-sans text-[#1B1B1B]/70 mt-2 text-md max-w-xl mx-auto leading-relaxed">
            Tell us about your celebration, and we will get back to you with a custom menu proposal and quote.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Contact details & Service area */}
            <div className="lg:col-span-5 space-y-8 text-left">
              
              {/* Info block */}
              <div className="bg-white border border-[#EDE6DA] rounded-3xl p-8 shadow-sm space-y-6">
                <h3 className="font-heading text-2xl font-bold text-[#1B1B1B]">Contact Information</h3>
                <p className="font-sans text-sm text-[#1B1B1B]/70">
                  Feel free to call us directly or drop a message on WhatsApp for instant discussions.
                </p>

                <div className="space-y-4">
                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-[#E8871E]/10 text-[#E8871E] rounded-xl shrink-0 mt-0.5">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-[#1B1B1B]/50 uppercase tracking-wider">Call Us</span>
                      <a href="tel:+919718525601" className="text-md font-bold text-[#1B1B1B] hover:text-[#A91D3A] transition-colors">
                        +91 9718525601
                      </a>
                      <span className="text-xs text-[#1B1B1B]/40 block my-0.5">or</span>
                      <a href="tel:+919971894444" className="text-md font-bold text-[#1B1B1B] hover:text-[#A91D3A] transition-colors">
                        +91 9971894444
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-green-500/10 text-green-600 rounded-xl shrink-0 mt-0.5">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-[#1B1B1B]/50 uppercase tracking-wider">WhatsApp</span>
                      <a
                        href="https://wa.me/919718525601"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-md font-bold text-[#1B1B1B] hover:text-green-500 transition-colors"
                      >
                        +91 9718525601
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-[#1B998B]/10 text-[#1B998B] rounded-xl shrink-0 mt-0.5">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-[#1B1B1B]/50 uppercase tracking-wider">Email</span>
                      <a href="mailto:desividesichaat12@gmail.com" className="text-md font-bold text-[#1B1B1B] hover:text-[#1B998B] transition-colors break-all">
                        desividesichaat12@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#EDE6DA] flex items-center space-x-2 text-xs text-[#1B1B1B]/60">
                  <Clock className="h-4 w-4 text-[#A91D3A]" />
                  <span>We typically respond within 4 hours.</span>
                </div>
              </div>

              {/* Service Area Card */}
              <div className="bg-white border border-[#EDE6DA] rounded-3xl p-8 shadow-sm space-y-4">
                <div className="flex items-center space-x-2.5">
                  <MapPin className="h-6 w-6 text-[#1B998B]" />
                  <h3 className="font-heading text-xl font-bold text-[#1B1B1B]">Catering Service Area</h3>
                </div>
                <p className="font-sans text-sm text-[#1B1B1B]/70 leading-relaxed">
                  We deploy live cooking counters, raw ingredients, and chef staff anywhere within the <strong>Delhi NCR</strong> region, including:
                </p>
                <div className="grid grid-cols-2 gap-3 text-xs font-semibold text-[#1B1B1B]/80 pt-2">
                  <div className="flex items-center space-x-1.5">
                    <span className="h-1.5 w-1.5 bg-[#E8871E] rounded-full" />
                    <span>Delhi (South, West, East, North)</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <span className="h-1.5 w-1.5 bg-[#E8871E] rounded-full" />
                    <span>Gurugram (DLF, Golf Course Rd, Sohna)</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <span className="h-1.5 w-1.5 bg-[#E8871E] rounded-full" />
                    <span>Noida & Greater Noida</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <span className="h-1.5 w-1.5 bg-[#E8871E] rounded-full" />
                    <span>Faridabad & Ghaziabad</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Quote Form */}
            <div className="lg:col-span-7 bg-white border border-[#EDE6DA] rounded-3xl p-8 md:p-10 shadow-sm">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleFormSubmit}
                    className="space-y-6 text-left"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-[#1B1B1B]/80">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formState.name}
                          onChange={handleInputChange}
                          className="w-full border border-[#EDE6DA] rounded-xl px-4 py-3 bg-[#FFF8EE]/30 text-sm focus:outline-none focus:ring-2 focus:ring-[#E8871E]"
                          placeholder="Chef Dinesh"
                        />
                      </div>
                      {/* Phone */}
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
                          placeholder="dinesh@gmail.com"
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
                          <option value="Corporate">Corporate Gathering</option>
                          <option value="Private Party">Private Party (Birthday/Anniversary)</option>
                          <option value="Festival">Festival Stalls / Public Pop-up</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      {/* Date */}
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
                          placeholder="e.g. 100"
                        />
                      </div>
                    </div>

                    {/* Location */}
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-[#1B1B1B]/80">Venue / Location</label>
                      <input
                        type="text"
                        name="location"
                        value={formState.location}
                        onChange={handleInputChange}
                        className="w-full border border-[#EDE6DA] rounded-xl px-4 py-3 bg-[#FFF8EE]/30 text-sm focus:outline-none focus:ring-2 focus:ring-[#E8871E]"
                        placeholder="e.g. DLF Phase 3, Gurugram"
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-[#1B1B1B]/80">Specific Requirements (Optional)</label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formState.message}
                        onChange={handleInputChange}
                        className="w-full border border-[#EDE6DA] rounded-xl px-4 py-3 bg-[#FFF8EE]/30 text-sm focus:outline-none focus:ring-2 focus:ring-[#E8871E]"
                        placeholder="Share any special dish requests, allergy requirements, or preferred layout specifications."
                      />
                    </div>

                    <div className="pt-2">
                      <Button type="submit" disabled={isSubmitting} className="w-full rounded-xl bg-[#E8871E] hover:bg-[#A91D3A] text-white py-3.5 font-bold text-md transition-colors shadow-md disabled:opacity-60">
                        {isSubmitting ? (
                          <><Loader2 className="h-5 w-5 mr-2 animate-spin" /> Submitting...</>
                        ) : (
                          "Submit Quote Inquiry"
                        )}
                      </Button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-card"
                    className="py-16 flex flex-col items-center justify-center text-center space-y-4"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <CheckCircle2 className="h-20 w-20 text-green-500 animate-bounce" />
                    <h3 className="font-heading text-3xl font-bold text-[#1B1B1B]">Enquiry Received!</h3>
                    <p className="font-sans text-md text-[#1B1B1B]/70 max-w-md mx-auto leading-relaxed">
                      Thank you for contacting us, <strong>{formState.name}</strong>. We will review your request for {formState.guestCount} guests on {formState.eventDate} and send a customized menu and proposal package shortly.
                    </p>
                    <p className="font-sans text-xs text-[#1B1B1B]/50">
                      We have logged your email at <strong>{formState.email}</strong> and will reach out to you via call/text at <strong>{formState.phone}</strong>.
                    </p>
                    <div className="pt-4">
                      <Button
                        onClick={() => setIsSubmitted(false)}
                        variant="outline"
                        className="rounded-full border-[#A91D3A] text-[#A91D3A] hover:bg-[#A91D3A] hover:text-white px-6 font-bold"
                      >
                        Submit Another Request
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
