"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

const phrases = [
  "credit sellers",
  "retail owners",
  "market teams",
  "busy vendors",
  "SME operators",
];

export function RotatingAudience() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % phrases.length);
    }, 2200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <span className={styles.rotatingPhrase} aria-live="polite">
      <AnimatePresence mode="wait">
        <motion.span
          key={phrases[index]}
          initial={{ y: 18, opacity: 0, filter: "blur(8px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: -16, opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
        >
          {phrases[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
