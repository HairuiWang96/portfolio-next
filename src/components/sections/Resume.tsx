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
              <div className="timeline-header">
                <div className="icon-circle bg-accent/10">
                  <Briefcase className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary">
                  Experience
                </h3>
              </div>
            </AnimatedSection>

            <div className="timeline">
              {experience.map((item, i) => (
                <AnimatedSection key={i} delay={0.3 + i * 0.15}>
                  <div className="timeline-item">
                    <div className="timeline-dot" />
                    <p className="text-sm text-accent font-medium" style={{ marginBottom: '0.25rem' }}>
                      {item.period}
                    </p>
                    <h4 className="text-lg font-semibold text-text-primary">
                      {item.title}
                    </h4>
                    <p className="text-text-secondary text-sm" style={{ marginBottom: '0.75rem' }}>
                      {item.company}
                    </p>
                    <ul>
                      {item.description.map((desc, j) => (
                        <li
                          key={j}
                          className="text-text-secondary text-sm leading-relaxed"
                          style={{ paddingLeft: '1rem', position: 'relative', marginBottom: '0.5rem' }}
                        >
                          <span style={{ position: 'absolute', left: 0, top: '0.5rem', width: '0.375rem', height: '0.375rem', borderRadius: '9999px', backgroundColor: 'rgba(99, 102, 241, 0.4)' }} />
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
              <div className="timeline-header">
                <div className="icon-circle bg-accent/10">
                  <GraduationCap className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary">
                  Education
                </h3>
              </div>
            </AnimatedSection>

            <div className="timeline">
              {education.map((item, i) => (
                <AnimatedSection key={i} delay={0.3 + i * 0.15}>
                  <div className="timeline-item">
                    <div className="timeline-dot" />
                    <p className="text-sm text-accent font-medium" style={{ marginBottom: '0.25rem' }}>
                      {item.period}
                    </p>
                    <h4 className="text-lg font-semibold text-text-primary">
                      {item.degree}
                    </h4>
                    <p className="text-text-secondary text-sm" style={{ marginBottom: '0.25rem' }}>
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
