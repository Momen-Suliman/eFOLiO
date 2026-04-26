import { Logo } from "@/components/icons/Logo";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold">Page Not Found</h2>
      <p className="mt-4">Could not find the requested resource</p>
      <Link
        href="/"
        className="flex items-center justify-center font-semibold text-logo gap-2"
      >
        Return to
      </Link>
      <Logo className="text-2xl" />
    </div>
  );
}
