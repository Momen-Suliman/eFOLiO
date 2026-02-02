import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Electronic Portfolio",
  description: "This portfolio showcases academic projects & achievements.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* min-h-screen ensures the background always covers at least the full window */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        
        {/* Header - Fixed to 10% height */}
        <header className="h-[10vh] flex items-center">
          <Header />
        </header>

        {/* Main Content - Takes the middle 80% */}
        {/* Added overflow-y-auto so long content stays inside the 80% area */}
        <main className="h-[80vh] overflow-y-auto">
          {children}
        </main>

        {/* Footer - Fixed to 10% height */}
        <footer className="h-[10vh] flex items-center">
          <Footer />
        </footer>

      </body>
    </html>
  );
}
