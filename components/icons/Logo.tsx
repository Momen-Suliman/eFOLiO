"use client";
import Link from "next/link";

function Logo({className = "text-4xl"}:{ className?: string}){
    return (
        <Link href="/" className="group">
            <h1 className={`${className} font-bold text-logo transition-colors hover:text-primary`}>
                eF O L iO
            </h1>
        </Link>
    );
}

export default Logo;
