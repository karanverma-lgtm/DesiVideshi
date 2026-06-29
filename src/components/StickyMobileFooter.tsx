"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Home, 
  BookOpen, 
  MessageCircle, 
  Phone, 
  Calendar, 
  Loader2, 
  CheckCircle2, 
  User, 
  Mail, 
  Users, 
  MapPin, 
  MessageSquare 
} from "lucide-react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { submitEnquiry } from "@/lib/enquiries";
import confetti from "canvas-confetti";

export default function StickyMobileFooter() {
  const pathname = usePathname();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const whatsappUrl = "https://wa.me/919718525601?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20catering%20services%20for%20an%20event.";

  const navItems = [
    {
      name: "Home",
      icon: Home,
      href: "/",
      isExternal: false,
      isDialog: false,
    },
    {
      name: "Menu",
      icon: BookOpen,
      href: "/menu",
      isExternal: false,
      isDialog: false,
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: whatsappUrl,
      isExternal: true,
      isDialog: false,
      color: "text-[#1B998B]",
      bg: "bg-[#1B998B]/10",
    },
    {
      name: "Call",
      icon: Phone,
      href: "tel:+919718525601",
      isExternal: true,
      isDialog: false,
      color: "text-[#E8871E]",
      bg: "bg-[#E8871E]/10",
    },
    {
      name: "Inquire",
      icon: Calendar,
      href: "",
      isExternal: false,
      isDialog: true,
    },
  ];

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
      !formState.guestCount ||
      !formState.location
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
      
      // Trigger success confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#E8871E", "#A91D3A", "#1B998B"],
      });

      // Clear form
      setFormState({
        name: "",
        phone: "",
        email: "",
        eventType: "",
        eventDate: "",
        guestCount: "",
        location: "",
        message: "",
      });

    } catch (err) {
      console.error("Failed to submit mobile enquiry:", err);
      alert("Something went wrong. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    // Reset submission screen after transition duration
    setTimeout(() => {
      setIsSubmitted(false);
    }, 300);
  };

  return (
    <>
      <div className="fixed bottom-4 left-4 right-4 z-40 md:hidden">
        <nav className="flex items-center justify-between bg-[#1B1B1B]/95 backdrop-blur-lg border border-white/10 rounded-2xl px-3 py-2 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
          {navItems.map((item) => {
            const isActive = pathname === item.href && !item.isDialog;
            const Icon = item.icon;

            const buttonContent = (
              <motion.div
                whileTap={{ scale: 0.95 }}
                className={`flex flex-col items-center justify-center py-1.5 px-3 rounded-xl transition-all relative ${
                  item.bg && item.isExternal
                    ? `${item.bg} ${item.color}`
                    : isActive
                    ? "text-[#E8871E]"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeMobileTab"
                    className="absolute inset-0 bg-white/5 rounded-xl -z-10 border border-white/5"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                
                <Icon className={`h-5 w-5 ${item.isExternal ? "animate-pulse" : ""}`} />
                <span className="text-[10px] font-sans font-semibold mt-1 tracking-wider uppercase">
                  {item.name}
                </span>
              </motion.div>
            );

            if (item.isDialog) {
              return (
                <button
                  key={item.name}
                  onClick={() => setIsDialogOpen(true)}
                  className="flex-1 flex justify-center focus:outline-none"
                >
                  {buttonContent}
                </button>
              );
            }

            if (item.isExternal) {
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex justify-center"
                >
                  {buttonContent}
                </a>
              );
            }

            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex-1 flex justify-center"
              >
                {buttonContent}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Enquiry Dialog Form */}
      <Dialog open={isDialogOpen} onOpenChange={(open) => {
        if (!open) closeDialog();
        else setIsDialogOpen(true);
      }}>
        <DialogContent className="bg-[#FFF8EE] border-[#EDE6DA] rounded-3xl max-w-md w-[92%] max-h-[85vh] overflow-y-auto p-6 text-left shadow-2xl">
          <DialogHeader className="mb-4">
            <DialogTitle className="font-heading text-2xl font-bold text-[#1B1B1B] flex items-center gap-2">
              Plan Your Event
            </DialogTitle>
            <DialogDescription className="font-sans text-xs text-[#1B1B1B]/70 mt-1">
              Provide event details to request live counters and a custom quote.
            </DialogDescription>
          </DialogHeader>

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="enquiry-form"
                onSubmit={handleFormSubmit}
                className="space-y-4 pt-1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {/* Full Name */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#1B1B1B]/70 flex items-center gap-1.5">
                    <User className="h-3 w-3 text-[#E8871E]" /> Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleInputChange}
                    className="w-full border border-[#EDE6DA] rounded-xl px-4 py-3 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#E8871E] text-[#1B1B1B]"
                    placeholder="Dinesh Kumar"
                  />
                </div>

                {/* Phone & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#1B1B1B]/70 flex items-center gap-1.5">
                      <Phone className="h-3 w-3 text-[#E8871E]" /> Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formState.phone}
                      onChange={handleInputChange}
                      className="w-full border border-[#EDE6DA] rounded-xl px-4 py-3 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#E8871E] text-[#1B1B1B]"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#1B1B1B]/70 flex items-center gap-1.5">
                      <Mail className="h-3 w-3 text-[#E8871E]" /> Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleInputChange}
                      className="w-full border border-[#EDE6DA] rounded-xl px-4 py-3 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#E8871E] text-[#1B1B1B]"
                      placeholder="dinesh@example.com"
                    />
                  </div>
                </div>

                {/* Event Type & Date Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#1B1B1B]/70 flex items-center gap-1.5">
                      <Calendar className="h-3 w-3 text-[#E8871E]" /> Event Type
                    </label>
                    <select
                      name="eventType"
                      required
                      value={formState.eventType}
                      onChange={handleInputChange}
                      className="w-full border border-[#EDE6DA] rounded-xl px-4 py-3 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#E8871E] text-[#1B1B1B] appearance-none"
                    >
                      <option value="">Select event</option>
                      <option value="Wedding">Wedding</option>
                      <option value="Corporate Event">Corporate Event</option>
                      <option value="Private Party">Private Party</option>
                      <option value="Other">Other Event</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#1B1B1B]/70 flex items-center gap-1.5">
                      <Calendar className="h-3 w-3 text-[#E8871E]" /> Event Date
                    </label>
                    <input
                      type="date"
                      name="eventDate"
                      required
                      value={formState.eventDate}
                      onChange={handleInputChange}
                      className="w-full border border-[#EDE6DA] rounded-xl px-4 py-3 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#E8871E] text-[#1B1B1B]"
                    />
                  </div>
                </div>

                {/* Guest Count & Location Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#1B1B1B]/70 flex items-center gap-1.5">
                      <Users className="h-3 w-3 text-[#E8871E]" /> Guest Count
                    </label>
                    <input
                      type="number"
                      name="guestCount"
                      required
                      min="1"
                      value={formState.guestCount}
                      onChange={handleInputChange}
                      className="w-full border border-[#EDE6DA] rounded-xl px-4 py-3 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#E8871E] text-[#1B1B1B]"
                      placeholder="E.g. 150"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#1B1B1B]/70 flex items-center gap-1.5">
                      <MapPin className="h-3 w-3 text-[#E8871E]" /> Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      required
                      value={formState.location}
                      onChange={handleInputChange}
                      className="w-full border border-[#EDE6DA] rounded-xl px-4 py-3 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#E8871E] text-[#1B1B1B]"
                      placeholder="E.g. Gurugram"
                    />
                  </div>
                </div>

                {/* Message / Special Instructions */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#1B1B1B]/70 flex items-center gap-1.5">
                    <MessageSquare className="h-3 w-3 text-[#E8871E]" /> Special Instructions
                  </label>
                  <textarea
                    name="message"
                    rows={2}
                    value={formState.message}
                    onChange={handleInputChange}
                    className="w-full border border-[#EDE6DA] rounded-xl px-4 py-3 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#E8871E] text-[#1B1B1B]"
                    placeholder="Mention custom counters or food preferences (optional)"
                  />
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full rounded-xl bg-[#E8871E] hover:bg-[#A91D3A] text-white py-4 font-bold mt-4 flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Submitting...
                    </>
                  ) : (
                    "Submit Catering Inquiry"
                  )}
                </Button>
              </motion.form>
            ) : (
              <motion.div
                key="success-message"
                className="py-10 flex flex-col items-center justify-center text-center space-y-4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="h-16 w-16 bg-green-50 rounded-full flex items-center justify-center border-2 border-green-500 shadow-sm animate-bounce">
                  <CheckCircle2 className="h-10 w-10 text-green-500" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-[#1B1B1B]">Inquiry Received!</h3>
                <p className="font-sans text-xs text-[#1B1B1B]/70 max-w-xs leading-relaxed">
                  Thank you for choosing Desi Videshi Chaat! Our team will review your requirements and send a custom catering proposal shortly.
                </p>
                <Button
                  onClick={closeDialog}
                  className="rounded-xl bg-[#1B1B1B] hover:bg-[#A91D3A] text-white px-8 font-semibold transition-colors mt-2"
                >
                  Close Window
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </>
  );
}
