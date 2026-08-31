import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1B1B1B] text-[#FFF8EE] pt-16 pb-8 font-sans border-t border-[#EDE6DA]/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          
          {/* Column 1: Brand Blurb */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/assets/logo.png"
                alt="Desi Videshi Chaat"
                width={52}
                height={52}
                className="h-13 w-13 object-contain drop-shadow-lg"
              />
              <div>
                <span className="font-heading text-xl font-bold tracking-tight text-[#E8871E]">
                  DESI <span className="text-[#1B998B]">VIDESHI</span>
                </span>
                <p className="text-[10px] text-[#FFF8EE]/40 font-semibold uppercase tracking-widest">Premium Chaat Catering</p>
              </div>
            </div>
            <p className="text-[#FFF8EE]/70 text-sm leading-relaxed max-w-sm">
              Swad Desi • Andaz Videshi ✨ — Redefining the art of premium catering by blending authentic Indian street food with global culinary experiences for weddings, corporate galas, and luxury celebrations.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-[#FFF8EE]/10 flex items-center justify-center hover:bg-[#E8871E] hover:text-[#1B1B1B] transition-colors"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-[#FFF8EE]/10 flex items-center justify-center hover:bg-[#1B998B] hover:text-[#1B1B1B] transition-colors"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-heading text-lg font-bold text-[#E8871E] tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-[#FFF8EE]/70 hover:text-[#E8871E] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#FFF8EE]/70 hover:text-[#E8871E] transition-colors">
                  About Our Story
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-[#FFF8EE]/70 hover:text-[#E8871E] transition-colors">
                  Menu & Counters
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-[#FFF8EE]/70 hover:text-[#E8871E] transition-colors">
                  Events & Catering
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-[#FFF8EE]/70 hover:text-[#E8871E] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-[#FFF8EE]/70 hover:text-[#E8871E] transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#FFF8EE]/70 hover:text-[#E8871E] transition-colors">
                  Contact / Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Block */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-heading text-lg font-bold text-[#E8871E] tracking-wide">
              Contact Us
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-[#E8871E] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <a href="tel:+919718525601" className="text-[#FFF8EE]/80 hover:text-[#E8871E] transition-colors">
                    +91 9718525601
                  </a>
                  <a href="tel:+919971894444" className="text-[#FFF8EE]/80 hover:text-[#E8871E] transition-colors">
                    +91 9971894444
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#1B998B] shrink-0" />
                <a href="mailto:desividesichaat12@gmail.com" className="text-[#FFF8EE]/80 hover:text-[#1B998B] transition-colors truncate">
                  desividesichaat12@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <MessageCircle className="h-5 w-5 text-green-500 shrink-0" />
                <a
                  href="https://wa.me/919718525601"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FFF8EE]/80 hover:text-green-400 transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Service Area */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-heading text-lg font-bold text-[#E8871E] tracking-wide">
              Service Area
            </h3>
            <div className="flex items-start space-x-3 text-sm text-[#FFF8EE]/70">
              <MapPin className="h-5 w-5 text-[#E8871E] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#FFF8EE] mb-1">Delhi NCR, India</p>
                <p className="leading-relaxed">
                  Catering services available in Delhi, Gurugram, Noida, Faridabad, and Greater Noida.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#EDE6DA]/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FFF8EE]/50 text-center sm:text-left gap-4">
          <p>© 2026 Desi Videshi Chaat. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/contact" className="hover:text-[#FFF8EE] transition-colors">Catering Inquiry</Link>
            <Link href="/menu" className="hover:text-[#FFF8EE] transition-colors">Our Menu</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
