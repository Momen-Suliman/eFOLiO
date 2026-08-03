import Link from "next/link";
import { Geist } from "next/font/google";

// Change font here
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const brandLogo = "eF\u00A0O\u00A0L\u00A0iO";
export const brandName = "eFOLiO";
export const brandProduct = "eFOLiO";

// Change Logo design here
export function Logo({ className = "text-4xl" }: { className?: string }) {
  return (
    <Link href="/" className="group">
      <h1
        className={` 
          ${geistSans.variable} 
          ${className} 
          font-sans 
          font-extralight 
          hover:text-logo 
          transition-colors 
          bg-linear-to-r 
          from-foreground 
          to-primary 
          bg-clip-text 
          text-transparent
          whitespace-nowrap
          overflow-hidden
          text-ellipsis
        `}
      >
        {/*Visible Logo design*/}
        <span aria-hidden="true">{brandLogo}</span>

        {/*Screen reader Pronunciation*/}
        <span className="sr-only">e-folio</span>
      </h1>
    </Link>
  );
}
