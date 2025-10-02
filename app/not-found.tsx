"use client";

import Link from "next/link";
import "@/app/[locale]/globals.css";

import Button1 from "@/components/ui/buttons/cta/Button1";
import Button2 from "@/components/ui/buttons/cta/Button2";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#fff] text-[var(--secondary)] px-6">
      <div className="text-center max-w-lg">
        <h1 className="text-8xl font-extrabold text-[var(--primary)] mb-4">
          404
        </h1>
        <h2 className="text-2xl font-bold mb-2">Page Not Found</h2>
        <p className="text-secondary mb-8 max-w-md mx-auto">
          Sorry, we couldn’t find the page you’re looking for. It may have been
          moved or deleted.
        </p>

        <div className="flex justify-center gap-4">
          {/* Primary action: go home */}
          <Link href="/" passHref>
            <Button1 >Back Home</Button1>
          </Link>

          {/* Secondary action: refresh */}
          <Button2 onClick={() => window.location.reload()}>
            Refresh Page
          </Button2>
        </div>
      </div>
    </div>
  );
}
