"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Menu", href: "/menu" },
  { name: "Events", href: "/events" },
  { name: "Gallery", href: "/gallery" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#FFF8EE]/90 backdrop-blur-md shadow-md py-3"
            : "bg-[#FFF8EE] py-5"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/unnamed-Photoroom.png"
                alt="Desi Videshi Chaat"
                width={160}
                height={60}
                className="h-10 sm:h-12 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative font-sans text-sm font-medium transition-colors hover:text-[#A91D3A] ${
                      isActive ? "text-[#A91D3A]" : "text-[#1B1B1B]/80"
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#A91D3A]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA & Contact Actions */}
            <div className="flex items-center space-x-4">
              {/* Phone (Desktop only) */}
              <a
                href="tel:+919718525601"
                className="hidden xl:flex items-center space-x-2 text-sm font-medium text-[#1B1B1B]/80 hover:text-[#A91D3A] transition-colors"
              >
                <Phone className="h-4 w-4 text-[#E8871E]" />
                <span>+91 9718525601</span>
              </a>

              {/* Get a Quote Button */}
              <Link href="/contact" className="hidden sm:inline-block">
                <Button className="rounded-full bg-[#E8871E] hover:bg-[#A91D3A] text-white px-6 font-semibold transition-colors duration-300">
                  Get a Quote
                </Button>
              </Link>

              {/* Mobile Menu Button */}
              <button
                type="button"
                className="lg:hidden p-2 rounded-md text-[#1B1B1B] hover:bg-[#EDE6DA] focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Slide-Over */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-30 lg:hidden bg-[#FFF8EE] border-b border-[#EDE6DA] shadow-xl py-6 px-4 max-h-[calc(100vh-60px)] overflow-y-auto"
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`font-sans text-lg font-semibold py-2 px-3 rounded-md transition-colors ${
                      isActive
                        ? "bg-[#EDE6DA] text-[#A91D3A]"
                        : "text-[#1B1B1B]/80 hover:bg-[#EDE6DA]/50"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-[#EDE6DA] flex flex-col space-y-3">
                <a
                  href="tel:+919718525601"
                  className="flex items-center space-x-2 text-md font-semibold text-[#1B1B1B] px-3"
                >
                  <Phone className="h-5 w-5 text-[#E8871E]" />
                  <span>Call: +91 9718525601</span>
                </a>
                <Link href="/contact" className="w-full">
                  <Button className="w-full rounded-full bg-[#E8871E] hover:bg-[#A91D3A] text-white py-6 font-bold text-md">
                    Get a Quote
                  </Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
