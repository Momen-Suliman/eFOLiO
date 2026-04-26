import Link from "next/link";
import { Geist } from "next/font/google";

// Change font here
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Change Logo design here
export function Logo({ className = "text-4xl" }: { className?: string }) {
  return (
    <Link href="/" className="group">
      <h1
        className={`
                ${geistSans.variable} 
                ${className} 
                font-sans font-extralight text-logo transition-colors hover:text-primary
            `}
      >
        {/*Visible Logo design*/}
        <span aria-hidden="true">eF O L iO</span>

        {/*Screen reader Pronunciation*/}
        <span className="sr-only">e-folio</span>
      </h1>
    </Link>
  );
}
