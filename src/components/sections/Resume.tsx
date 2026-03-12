"use client";

import { Briefcase, GraduationCap } from "lucide-react";
import { experience } from "@/data/experience";
import { education } from "@/data/education";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Resume() {
  return (
    <section id="resume" className="section-padding">
      <div className="container-section">
        <AnimatedSection>
          <SectionHeading
            title="Resume"
            subtitle="My professional journey and educational background"
          />
        </AnimatedSection>

        <div className="grid-two-col">
          {/* Experience */}
          <div>
            <AnimatedSection delay={0.2}>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Briefcase className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary">
                  Experience
                </h3>
              </div>
            </AnimatedSection>

            <div className="relative border-l-2 border-border pl-8 ml-2 space-y-12">
              {experience.map((item, i) => (
                <AnimatedSection key={i} delay={0.3 + i * 0.15}>
                  <div className="relative">
                    {/* Timeline dot */}
                    <div className="absolute -left-[2.55rem] top-1 w-4 h-4 rounded-full bg-accent border-4 border-background" />

                    <p className="text-sm text-accent font-medium mb-1">
                      {item.period}
                    </p>
                    <h4 className="text-lg font-semibold text-text-primary">
                      {item.title}
                    </h4>
                    <p className="text-text-secondary text-sm mb-3">
                      {item.company}
                    </p>
                    <ul className="space-y-2">
                      {item.description.map((desc, j) => (
                        <li
                          key={j}
                          className="text-text-secondary text-sm leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent/40"
                        >
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <AnimatedSection delay={0.2}>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <GraduationCap className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary">
                  Education
                </h3>
              </div>
            </AnimatedSection>

            <div className="relative border-l-2 border-border pl-8 ml-2 space-y-12">
              {education.map((item, i) => (
                <AnimatedSection key={i} delay={0.3 + i * 0.15}>
                  <div className="relative">
                    <div className="absolute -left-[2.55rem] top-1 w-4 h-4 rounded-full bg-accent border-4 border-background" />

                    <p className="text-sm text-accent font-medium mb-1">
                      {item.period}
                    </p>
                    <h4 className="text-lg font-semibold text-text-primary">
                      {item.degree}
                    </h4>
                    <p className="text-text-secondary text-sm mb-1">
                      {item.school}
                    </p>
                    <p className="text-text-secondary text-sm">
                      {item.field}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
