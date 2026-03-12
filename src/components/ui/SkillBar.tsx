"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface SkillBarProps {
  name: string;
  level: number;
  delay?: number;
}

export function SkillBar({ name, level, delay = 0 }: SkillBarProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="skill-item">
      <div className="skill-bar-row">
        <span className="text-sm font-medium text-text-primary">{name}</span>
        <span className="text-sm font-medium text-accent">{level}%</span>
      </div>
      <div className="skill-bar-track">
        <motion.div
          className="bg-gradient-to-r from-accent-gradient-from to-accent-gradient-to rounded-full"
          style={{ height: '100%' }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
