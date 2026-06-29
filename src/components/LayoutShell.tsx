"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyMobileFooter from "@/components/StickyMobileFooter";

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      <main className="flex-grow flex flex-col pb-24 md:pb-0">{children}</main>
      <Footer />
      <WhatsAppButton />
      <StickyMobileFooter />
    </>
  );
}

