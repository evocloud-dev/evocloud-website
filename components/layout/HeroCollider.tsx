"use client";

import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useUIStore } from "@/providers/ui-store-provider";

export default function HeroCollider() {
  const { ref: heroRef, inView } = useInView({
    threshold: 0,
    rootMargin: "-1px 0px 0px 0px",
  });
  const setHeroInView = useUIStore((state) => state.setHeroInView);

  useEffect(() => {
    setHeroInView(inView);

    return () => {
      setHeroInView(true);
    };
  }, [inView, setHeroInView]);

  return (
    <div
      ref={heroRef}
      className="absolute w-full h-full border border-transparent"
    />
  );
}
