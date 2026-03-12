"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Resume", href: "#resume" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

const sectionIds = ["hero", "about", "resume", "portfolio", "contact"];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useScrollSpy(sectionIds);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-surface/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="container-nav header-nav">
        <a
          href="#hero"
          className="text-xl font-bold bg-gradient-to-r from-accent-gradient-from to-accent-gradient-to bg-clip-text text-transparent"
        >
          HW
        </a>

        {/* Desktop nav */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent",
                activeId === link.href.slice(1)
                  ? "text-accent"
                  : "text-text-secondary"
              )}
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile toggle */}
        <div className="mobile-toggle">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="h-10 w-10 flex-center text-text-primary"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="mobile-menu-wrapper bg-surface/95 backdrop-blur-md border-b border-border">
          <div className="mobile-menu">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "text-base font-medium transition-colors hover:text-accent",
                  activeId === link.href.slice(1)
                    ? "text-accent"
                    : "text-text-secondary"
                )}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
