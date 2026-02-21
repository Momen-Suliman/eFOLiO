"use client";
import Link from "next/link";
import { Geist } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


function Logo({className = "text-4xl"}:{ className?: string}){
    return (
        <Link href="/" className="group">
            <h1 className={`
                ${geistSans.variable} 
                ${className} 
                font-sans font-bold text-logo transition-colors hover:text-primary
            `}>
                eF O L iO
            </h1>
        </Link>
    );
}

export default Logo;
