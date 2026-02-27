import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Om Enterprises Realty | Premium Plots & Farmhouses",
  description: "Invest in premium residential plots and luxury farmhouses with Om Enterprises Realty. Expert guidance for smart land investments near Yamuna Expressway.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden`}>
        <Navbar />
        <FloatingActions />
        <main className="animate-fade-in">
          {children}
        </main>
        <Footer />

        {/* Global Styles */}
        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 0.6s ease-out;
          }
        `}} />
      </body>
    </html>
  );
}
