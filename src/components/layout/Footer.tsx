"use client";

import { Github, Linkedin, Facebook, ArrowUp } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-surface border-t border-border py-12">
      <div className="container-section">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-4">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-background border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors text-text-secondary"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-background border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors text-text-secondary"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={profile.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-background border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors text-text-secondary"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>

          <p className="text-text-secondary text-sm">
            &copy; {new Date().getFullYear()} Hairui Wang. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="h-10 w-10 rounded-full bg-accent text-white flex items-center justify-center hover:bg-accent-hover transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
