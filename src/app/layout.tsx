import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import LayoutShell from "@/components/LayoutShell";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Desi Videshi Chaat — Premium Fusion Street Food Catering, Delhi NCR",
  description: "Live chaat counters and fusion street food catering for weddings, corporate events & parties across Delhi NCR (Delhi, Gurugram, Noida). Get a custom quote today.",
  keywords: "catering, wedding catering, corporate food catering, live counters, street food fusion, Delhi NCR, chaat, golgappa, aloo tikki, fusion food",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FFF8EE] text-[#1B1B1B]">
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}

