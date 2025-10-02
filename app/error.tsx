"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Button1 from "@/components/ui/buttons/cta/Button1";
import Button2 from "@/components/ui/buttons/cta/Button2";
import "@/app/[locale]/globals.css";

export default function Error({ error, reset }) {
  const router = useRouter();

  const goBack = () => {
    router.push("/");
  };

  useEffect(() => {
    console.error("App error:", error);
  }, [error]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#fff] text-[var(--secondary)] px-6">
      <div className="text-center max-w-lg">
        <h1 className="text-7xl font-extrabold text-[var(--primary)] mb-4">
          Oops!
        </h1>
        <h2 className="text-2xl font-bold mb-3">Something went wrong</h2>
        <p className="text-secondary mb-8">
          An unexpected error has occurred. Don’t worry, we’re on it. You can
          try again or return to the dashboard.
        </p>

        <div className="flex justify-center gap-4">
          {/* Primary action: retry */}
          <Button1 onClick={reset}>Try Again</Button1>

          {/* Secondary action: back to home */}
          <Link href="/" passHref>
            <Button2 onClick={goBack}>Back Home</Button2>
          </Link>
        </div>
      </div>
    </div>
  );
}
