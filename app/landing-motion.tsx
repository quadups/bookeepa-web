"use client";

import gsap from "gsap";
import { useEffect } from "react";

export function LandingMotion() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from("[data-rise]", {
        y: 18,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.08,
      });

      gsap.from("[data-float-phone]", {
        y: 26,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.18,
      });

    });

    return () => ctx.revert();
  }, []);

  return null;
}
