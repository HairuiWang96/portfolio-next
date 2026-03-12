"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, type Project } from "@/data/projects";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Portfolio() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="section-padding bg-subtle-bg">
      <div className="container-section">
        <AnimatedSection>
          <SectionHeading
            title="Portfolio"
            subtitle="A showcase of projects I've worked on"
          />
        </AnimatedSection>

        <div className="grid-three-col">
          {projects.map((project, i) => (
            <AnimatedSection key={project.title} delay={0.1 * i}>
              <button
                onClick={() => setSelected(project)}
                className="group relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-surface border border-border hover:border-accent/50 transition-all cursor-pointer"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-left">
                  <p className="text-white font-semibold text-lg">
                    {project.title}
                  </p>
                  <p className="text-white/70 text-sm">{project.category}</p>
                </div>
              </button>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-surface border border-border rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video">
                <Image
                  src={selected.modalImage}
                  alt={selected.title}
                  fill
                  className="object-cover rounded-t-2xl"
                />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 h-8 w-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="p-6">
                <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                  {selected.category}
                </span>
                <h3 className="text-2xl font-bold text-text-primary mt-3 mb-3">
                  {selected.title}
                </h3>
                <p className="text-text-secondary leading-relaxed mb-4">
                  {selected.details}
                </p>
                {selected.link && (
                  <a
                    href={selected.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-medium text-sm transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    View Project
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
