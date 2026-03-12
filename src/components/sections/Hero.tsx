"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section id="hero" className="hero-wrapper">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-subtle-bg to-background dark:from-background dark:via-surface dark:to-background" />

      {/* Decorative blobs */}
      <div className="blob blob-left" />
      <div className="blob blob-right" />

      <div className="hero-content">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-accent font-medium text-lg mb-4"
        >
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-accent-gradient-from to-accent-gradient-to bg-clip-text text-transparent">
            {profile.name}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl md:text-2xl text-text-secondary font-light"
          style={{ marginBottom: '2rem' }}
        >
          {profile.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-text-secondary leading-relaxed"
          style={{ maxWidth: '42rem', marginLeft: 'auto', marginRight: 'auto', marginBottom: '2.5rem' }}
        >
          {profile.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="cta-buttons"
          style={{ marginBottom: '2rem' }}
        >
          <a
            href="#contact"
            className="bg-gradient-to-r from-accent-gradient-from to-accent-gradient-to text-white rounded-full font-medium hover:shadow-lg hover:shadow-accent/25 transition-all"
            style={{ padding: '0.75rem 2rem' }}
          >
            Get In Touch
          </a>
          <a
            href="#portfolio"
            className="border border-border text-text-primary rounded-full font-medium hover:border-accent hover:text-accent transition-colors"
            style={{ padding: '0.75rem 2rem' }}
          >
            View Work
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="social-row"
        >
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </motion.div>
      </div>

      {/* Scroll arrow — positioned relative to the full section, not hero-content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="scroll-arrow"
      >
        <a
          href="#about"
          aria-label="Scroll down"
          className="icon-circle bg-accent text-white hover:bg-accent-hover transition-colors"
        >
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="h-5 w-5" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
