"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/919718525601?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20catering%20services%20for%20an%20event.";

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 hidden md:flex h-14 w-14 items-center justify-center rounded-full bg-[#1B998B] text-white shadow-xl hover:bg-[#15786d] focus:outline-none focus:ring-2 focus:ring-[#1B998B] focus:ring-offset-2 md:bottom-8 md:right-8"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Contact us on WhatsApp"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1B998B] opacity-40"></span>
      <MessageCircle className="h-7 w-7 relative z-10 fill-current" />
    </motion.a>
  );
}
